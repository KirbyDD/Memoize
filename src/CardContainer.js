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
          return <Card handleNext={this.handleNext}
                       handlePrev={this.handlePrev}
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