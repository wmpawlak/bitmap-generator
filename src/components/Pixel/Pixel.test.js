import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureMockStore from 'redux-mock-store';
import { reducer } from '../../redux/reducers/reducer';
import { assignColor, chooseFrame } from '../../redux/actions';

configure({ adapter: new Adapter() });

const createMockStore = configureMockStore([]);
const createState = initialState => actions =>
  actions.reduce(reducer, initialState);

describe('<Pixel/>', () => {
  it('checks if the color assigned is a color in store', () => {
    const initialState = createState({
      color: [200, 200, 0],
      listOfFrames: [
        [[0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0]],
        [[0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0]],
        [[0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0]]
      ],
      activeFrameIndex: 0
    });
    const store = createMockStore(initialState);
    console.table(store.getState().listOfFrames);

    store.dispatch(chooseFrame(2));
    store.dispatch(assignColor(4));
    console.table(store.getState().listOfFrames);
    console.table(store.getState().listOfFrames[2][4]);
    expect(store.getState().listOfFrames[2][4]).toEqual([200, 200, 0]);
    expect(store.getState().listOfFrames[0][0]).toEqual([0, 0, 0]);
  });
});
