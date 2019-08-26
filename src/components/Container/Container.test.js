import React from 'react';
import Container from './Container';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import store from '../../store';

configure({ adapter: new Adapter() });

describe('<Container/>', () => {
  it('matches the snapshot', () => {
    const tree = shallow(<Container store={store} />).dive();
    expect(toJson(tree)).toMatchSnapshot();
  });
});
