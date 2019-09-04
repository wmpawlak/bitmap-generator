import React from 'react';
import Pixel from './Pixel';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

configure({ adapter: new Adapter() });

describe('<Pixel/>', () => {
  it('checks if the color assigned is a color in store', () => {

  });
});

//calls assign color with payload of selected color,index
//sets selected color in initial state
//checks if color in specific pixel is a color in initial state
