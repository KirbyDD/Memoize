import React, { Component } from "react";
import Card from "./Card.js";
import "./CardContainer.scss";

class CardContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questionNum: 1,
      studyList: [],
      studyListSelected: false
    };
  }

  componentDidMount = () => {
    this.getLocalStorage();
  };

  addStudyCard = (id) => {
    let list = this.state.studyList;
    if (!list.includes(id)) {
      list.push(id);
    } else {
      list = list.filter(list => list !== id);
    }
    this.setState({ studyList: list }, () => {
      localStorage.setItem("card", JSON.stringify(this.state.studyList));
    });
  };

  getLocalStorage = () => {
    if (localStorage.getItem("card")) {
      this.setState({ studyList: JSON.parse(localStorage.getItem("card")) });
    }
  };

  handleNext = e => {
    e.preventDefault();
    this.setState({ questionNum: this.state.questionNum + 1 });
  };

  handlePrev = e => {
    e.preventDefault();
    this.setState({ questionNum: this.state.questionNum - 1 });
  };

  render() {
    if (this.state.studyListSelected) {
      return (
        <main>
          <button className="hide-list"
            onClick={e => {
              e.preventDefault();
              this.setState({ studyListSelected: false });
            }}
          >
            Hide Study List
          </button>
          {this.props.questions
            .filter(question => this.state.studyList.includes(question.id))
            .map(question => {
              return (
                <Card
                  handleNext={this.handleNext}
                  handlePrev={this.handlePrev}
                  addStudyCard={this.addStudyCard}
                  studyList={this.state.studyList}
                  question={question.question}
                  answer={question.answer}
                  id={question.id}
                  image={question.image}
                />
              );
            })}
        </main>
      );
    }
    return (
      <main>
        <button className="show-list"
          onClick={e => {
            e.preventDefault();
            this.setState({ studyListSelected: true });
          }}
        >
          Show Study List
        </button>
        {this.props.questions
          .filter(question => question.id === this.state.questionNum)
          .map(question => {
            return (
              <Card
                handleNext={this.handleNext}
                handlePrev={this.handlePrev}
                addStudyCard={this.addStudyCard}
                studyList={this.state.studyList}
                question={question.question}
                answer={question.answer}
                id={question.id}
                image={question.image}
              />
            );
          })}
      </main>
    );
  }
}

export default CardContainer;