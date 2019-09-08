import React from 'react';
import { Carousel } from './Carousel';
import { shallow } from 'enzyme';

describe('<Carousel/>', () => {
  const wrapper = shallow(<Carousel listOfFrames={[]} />);
  it('should contain element', () => {
    console.log(wrapper.debug());
    expect(wrapper.find('Slider').exists()).toBe(true);
  });
});
