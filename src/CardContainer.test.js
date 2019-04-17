import React from 'react';
import CardContainer from './CardContainer.js';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

const mockQuestions = [
  {
  id: 1,
  question: "Which of the following is an ES5 variable declaration: var, let, or const?",
  image: null,
  answer: "var"
  },
  {
  id: 2,
  question: "Which of the following is a non-mutable variable declaration: var, let, or const?",
  image: null,
  answer: "const"
  },
  {
  id: 3,
  question: "Which of the following is a mutable ES6 variable declaration: var, let, or const?",
  image: null,
  answer: "let"
  }
]




describe('CardContainer', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <CardContainer questions={mockQuestions}/>
    )
  })

  it('should match snapshot when data is passed in ', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have state with default value', () => {
    expect(wrapper.state()).toEqual({ questionNum: 1 });
  })

  it('should increment questionNum up one', () => {
    wrapper.instance().handleNext();
    expect(wrapper.state()).toEqual({ questionNum: 2 })
  })

  it('should decrement questionNum down one', () => {
    wrapper.instance().handlePrev();
    expect(wrapper.state()).toEqual({ questionNum: 0 })
  })
})