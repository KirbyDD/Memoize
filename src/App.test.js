import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <App />
    )
  })

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should match snapshot when data is passed in ', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have state with default value', () => {
    expect(wrapper.state()).toEqual({ questionArray: [] });
  })
  // it('should fetch data', async () => {
  //   window.fetch = jest.fn().mockImplementation(() => ({
  //     status: 200,
  //     json: () => new Promise((resolve, reject) => {
  //       resolve({ questions: ['question1', 'question1']
  //     })
  //   })
  // }))
  //   await wrapper.update();
  //   console.log(wrapper.state())
  //   expect(wrapper.state('questionArray').length).toEqual(2);
  // })
})
