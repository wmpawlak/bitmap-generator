import React from 'react';
import { Pixel } from './Pixel';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureMockStore from 'redux-mock-store';
import { reducer } from '../../redux/reducers/reducer';
import { chooseColor } from '../../redux/actions';
import { assignColor } from '../../redux/actions';

configure({ adapter: new Adapter() });

const createMockStore = configureMockStore([]);
const createState = initialState => actions =>
  actions.reduce(reducer, initialState);

describe('<Pixel/>', () => {
  it('checks if the color assigned is a color in store', () => {
    const initialState = createState({
      color: [200, 200, 0],
      listOfFrames: [[[0, 0, 0]]],
      activeFrameIndex: 0
    });
    const store = createMockStore(initialState);
    console.log(store.getState());

    store.dispatch(assignColor(0));
    console.log(store.getState().listOfFrames);
    // expect(false).toBeTruthy();
  });
});

//calls assign color with payload of selected color,index
//sets selected color in initial state
//checks if color in specific pixel is a color in initial state

//używać it czy test, jak jest lepiej?



//1. zrobić 2 klatki
//2. w modyfikowanej 3 pixele 
//3. modyfikowana to activeFrameIndex
//4. modyfikacja 2 lub 3 pixela w 2 klatce
//5. expect - nieruszona klatka [0] zostaje ta sama, 
//1 lub 2 px w 2 klatce wygląda tak jak wcześniej
// pixel zmieniony zgadza się z tym co chciałem