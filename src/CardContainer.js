import React, { Component } from "react";
import Card from "./Card.js"
import "./CardContainer.scss"

class CardContainer extends Component {
  constructor(props) {
    super(props);
    this.state= { 
      questionNum: 1
    }
  }

  handleNext = (e) => {
    this.setState({questionNum: this.state.questionNum+1})
    e.preventDefault();
  }

  handlePrev = (e) => {
    this.setState({questionNum: this.state.questionNum-1})
  }

  render(){
    return (
      <main> 
        {this.props.questions
        .filter(question => question.id === this.state.questionNum)
        .map(question => {
          return <Card handleChange={this.handleChange}
                       handleAnswer={this.handleAnswer}
                       handleNext={this.handleNext}
                       handlePrev={this.handlePrev}
                       resultMsg={this.state.resultMsg}
                       question={question.question}
                       answer={question.answer}
                       key={question.id}
                       image={question.image}
                       />
          })
        }
      </main>
    )
  }
}

export default CardContainer;