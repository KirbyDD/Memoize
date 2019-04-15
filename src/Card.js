import React, { Component } from "react";
import "./Card.scss"

class Card extends Component {
  constructor(props){
    super(props);
    this.state = {
      answerInput: ""
    }
  }

  captureChange = (e) => {
    this.props.handleChange(e.target.value.toLowerCase());
  }

  handleAnswerSubmit = (e) => {
    e.preventDefault();
    this.props.handleAnswer();
  }

  render(){
    let problemImg;
    if(this.props.image){
      problemImg = <img src={this.props.image} className="problem-img"/>;
    }
    return(
      <article>
        <h2>Question: {this.props.key}</h2>
        {problemImg}
        <h3>{this.props.question}</h3>
        {this.props.resultMsg}
        <form>
          <input type="text" placeholder=" Type answer here..." onChange={this.captureChange}/>
          <div>
            <button className="answer-button" onClick={this.handleAnswerSubmit}>Check Answer</button>
            <button className="prev-button" onClick={this.props.handlePrev}>Previous Question</button>
            <button className="next-button" onClick={this.props.handleNext}>Next Question</button>
          </div>
        </form>
      </article>
    )
  }
}

export default Card;