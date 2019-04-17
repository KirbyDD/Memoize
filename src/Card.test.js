import React from 'react';
import Card from './Card.js';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

const mockQuestion = {
  id: 1,
  question: "Which of the following is an ES5 variable declaration: var, let, or const?",
  image: true,
  answer: "var"
  }

const handleNext = jest.fn();
const handlePrev = jest.fn();
const handleAnswer = jest.fn();


describe('CardContainer', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Card handleNext={handleNext}
            handlePrev={handlePrev}
            question={mockQuestion.question}
            answer={mockQuestion.answer}
            key={mockQuestion.id}
            image={mockQuestion.image}/>
    )
  })

  it('should match snapshot when data is passed in ', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have state with default value', () => {
    expect(wrapper.state()).toEqual({ answerInput: "", resultMsg: null });
  });
  it('should call handleAnswer on click of answer button', () => {
    wrapper.setState({  answerInput: 'var'});
    wrapper.find(".answer-button").simulate('click', { preventDefault:() =>{}});
    expect(wrapper.state('resultMsg')).toEqual("Trueeeeeee!")
  });
  it('should call handleAnswer on click of answer button', () => {
    wrapper.setState({  answerInput: 'let'});
    wrapper.find(".answer-button").simulate('click', { preventDefault:() =>{}});
    expect(wrapper.state('resultMsg')).toEqual("Nahh try again!")
  });
  it('should update the state of the answerInput on change', () =>{
    expect(wrapper.state('answerInput')).toEqual("")
    wrapper.instance().captureChange({ target: { value: "var"}} )
    expect(wrapper.state('answerInput')).toEqual("var")
  });
})