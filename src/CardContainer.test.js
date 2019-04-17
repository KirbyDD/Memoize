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
      <CardContainer questions={mockQuestions}               
      />
    )
  })

  it('should match snapshot when data is passed in ', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have state with default value', () => {
    expect(wrapper.state()).toEqual({ questionNum: 1, studyList: [], studyListSelected: false });
  })

  it('addStudyCard should add id to studyList', () => {
    wrapper.instance().addStudyCard(1);
    expect(wrapper.state('studyList')).toEqual([1]);
  })

  it('addStudyCard should remove id to studyList', () => {
    wrapper.setState({  studyList: [1] });
    wrapper.instance().addStudyCard(1);
    expect(wrapper.state('studyList')).toEqual([]);
  })

  it('should increment questionNum up one', () => {
    expect(wrapper.state("questionNum")).toEqual(1)
    const mockE = { preventDefault: () => {}}
    wrapper.instance().handleNext(mockE);
    expect(wrapper.state("questionNum")).toEqual(2)
  })

  it('should decrement questionNum down one', () => {
    expect(wrapper.state("questionNum")).toEqual(1)
    const mockE = { preventDefault: () => {}}
    wrapper.instance().handlePrev(mockE);
    expect(wrapper.state("questionNum")).toEqual(0)
  })
  it('should assign studyListSelected to false', () => {
    wrapper.setState({  studyListSelected: true });
    expect(wrapper.state("studyListSelected")).toEqual(true)
    wrapper.find(".hide-list").simulate('click', { preventDefault:() =>{}});
    expect(wrapper.state("studyListSelected")).toEqual(false)
  })
  it('should assign studyListSelected to true', () => {
    expect(wrapper.state("studyListSelected")).toEqual(false)
    wrapper.find(".show-list").simulate('click', { preventDefault:() =>{}});
    expect(wrapper.state("studyListSelected")).toEqual(true)
  })
})