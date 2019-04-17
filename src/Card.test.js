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
const addStudyCard = jest.fn();
let studyList = [1];


describe('Card', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Card handleNext={handleNext}
            handlePrev={handlePrev}
            addStudyCard={addStudyCard}
            studyList={studyList}
            question={mockQuestion.question}
            answer={mockQuestion.answer}
            id={mockQuestion.id}
            image={mockQuestion.image}/>
    )
  })

  it('should match snapshot when data is passed in ', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should match snapshot when data is passed in ', () => {
    studyList = [];
    expect(wrapper).toMatchSnapshot();
  });

  it('should have state with default value', () => {
    expect(wrapper.state()).toEqual({ answerInput: "", resultMsg: null });
  });
  it('shandleAnswer should return correct answer error message', () => {
    wrapper.setState({  answerInput: 'var'});
    wrapper.find(".answer-button").simulate('click', { preventDefault:() =>{}});
    expect(wrapper.state()).toEqual({ answerInput:"", resultMsg: "Trueeeeeee!" })
  });
  it('handleAnswer should return wrong answer error message', () => {
    wrapper.setState({  answerInput: 'let'});
    wrapper.find(".answer-button").simulate('click', { preventDefault:() =>{}});
    expect(wrapper.state()).toEqual({ answerInput:"", resultMsg: "Nahh try again!" })
  });
  it('should update the state of the answerInput on change', () => {
    expect(wrapper.state('answerInput')).toEqual("")
    wrapper.instance().captureChange({ target: { value: "var"}} )
    expect(wrapper.state('answerInput')).toEqual("var")
  });
  it('should call addStudyCard on click of answer button', () => {
    wrapper.find(".study-list-button").simulate('click', { preventDefault:() =>{}});
    expect(addStudyCard).toBeCalled();
  });
})