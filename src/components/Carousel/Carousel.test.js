import React from 'react';
import Carousel from './Carousel';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import store from '../../store';

configure({ adapter: new Adapter() });

describe('<Carousel/>', () => {
  const wrapper = shallow(<Carousel store={store} />);
  it('renders one <PreviewFrame />', () => {
    expect(wrapper.find('<div>').exists()).toEqual(true);
  });
});
