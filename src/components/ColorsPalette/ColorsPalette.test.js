import React from 'react';
import ColorsPalette from './ColorsPalette';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
//import toJson from 'enzyme-to-json';
import store from '../../store';

configure({ adapter: new Adapter() });

describe('<ColorsPalette /> props', () => {
  it('contains props with black rgb color', () => {
    const wrapper = shallow(<ColorsPalette store={store} />).dive();
    expect(wrapper.instance().props.color).toBe('{r: 0, g: 0, b: 0}');
  });
});
