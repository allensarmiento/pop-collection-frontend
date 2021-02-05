import * as actions from './actions';
import * as types from './types';
import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';

export const mockStore = configureMockStore([thunkMiddleware]);

describe('search action', () => {
  it('should create an action to search', () => {
    const input = 'user input';
    const expectedAction = {
      type: types.CHANGE_SEARCHFIELD,
      payload: input,
    };

    expect(actions.setSearchField(input)).toEqual(expectedAction);
  });
});

describe('request pops action', () => {
  it('should create a pending action on request pops', () => {
    const store = mockStore();
    store.dispatch(actions.requestPops());

    const action = store.getActions();
    expect(action[0]).toEqual({ type: types.REQUEST_POPS_PENDING });
  });
});
