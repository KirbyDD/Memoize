import React, { Component } from "react";
import "./Card.scss";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answerInput: "",
      resultMsg: null
    };
  }

  captureChange = e => {
    this.setState({ answerInput: e.target.value.toLowerCase() });
  };

  handleAnswer = e => {
    e.preventDefault();
    if (this.state.answerInput === this.props.answer.toLowerCase()) {
      this.setState({ answerInput:"", resultMsg: "Trueeeeeee!" }, () => setTimeout(() =>{
        this.setState({resultMsg: null})}, 2000))
      } else {
      this.setState({ answerInput:"", resultMsg: "Nahh try again!" }, () => setTimeout(() =>{
        this.setState({resultMsg: null})}, 2000));
    }
  };

  render() {
    let favbtn;
    if (this.props.studyList.includes(this.props.id)) {
      favbtn = "Remove from Study List ";
    } else {
      favbtn = "Add to Study List";
    }
    let problemImg;
    if (this.props.image) {
      problemImg = <img src={this.props.image} className="problem-img" />;
    }
    return (
      <article>
        <h2>Question: {this.props.id}</h2>
        {problemImg}
        <h3>{this.props.question}</h3>
        {this.state.resultMsg}
        <form>
          <input
            type="text"
            placeholder=" Type answer here..."
            onChange={this.captureChange}
            value={this.state.answerInput}
          />
          <div>
            <button className="answer-button" onClick={this.handleAnswer}>
              Check Answer
            </button>
            <button
              className="study-list-button"
              onClick={e => {
                e.preventDefault();
                this.props.addStudyCard(this.props.id);
              }}
            >
              {favbtn}
            </button>
            <button className="prev-button" onClick={this.props.handlePrev}>
              Previous Question
            </button>
            <button className="next-button" onClick={this.props.handleNext}>
              Next Question
            </button>
          </div>
        </form>
      </article>
    );
  }
}

export default Card;
