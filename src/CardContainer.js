import React, { Component } from "react";
import Card from "./Card.js"
import "./CardContainer.scss"

class CardContainer extends Component {
  constructor(props) {
    super(props);
    this.state= {
      answer: "",
      answerInput: "", 
      resultMsg: null
    }
  }
  
  handleChange = (currentAnswer) => {
    this.setState({ answerInput: currentAnswer})
  }

  handleAnswer = () => {
    if(this.state.answerInput === this.state.answer){
      this.setState({ resultMsg: "Trueeeeeee!"})
    } else {
      this.setState({ resultMsg: "You hella wrong!"})
    }
  }

  handleNext = () => {

  }

  handlePrev = () => {

  }

  render(){
    return (
      <main> 
        {this.props.questions.map(question => {
          return <Card handleChange={this.handleChange}
                       handleAnswer={this.handleAnswer}
                       resultMsg={this.state.resultMsg}
                       question={question.question}
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