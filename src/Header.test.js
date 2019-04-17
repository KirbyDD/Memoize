import React from 'react';
import Header from './Header.js';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('CardContainer', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Header />
    )
  })
  it('should match snapshot when data is passed in ', () => {
    expect(wrapper).toMatchSnapshot();
  });
})