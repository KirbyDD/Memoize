import React, { Component } from "react";
import "./App.scss";
import Header from "./Header.js"
import CardContainer from "./CardContainer.js"

class App extends Component {
  constructor(){
    super();
    this.state = {
      questionArray: []
    }
  }

  componentDidMount = () => {
    fetch("https://fe-apps.herokuapp.com/api/v1/memoize/1901/kirbydataset/questions")
    .then(response => response.json())
    .then(questions => this.setState({ questionArray: questions.questions}))
    .catch(err => console.log(err, 'error'))
  }

  
  render() {
    return (
      <div className="App">
        <Header className="App-header" />
        <CardContainer questions={this.state.questionArray}/>
      </div>
    )
  }
}
export default App;
