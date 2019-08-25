import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

configure({ adapter: new Adapter() });

describe('<App/>', () => {
  it('should render App', () => {
    const wrapper = shallow(<div></div>);
    console.log(wrapper.debug());
  });
});
