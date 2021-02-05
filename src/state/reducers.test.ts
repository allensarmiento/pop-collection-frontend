import reducer from './reducers';
import * as types from './types';

const initialStateSearch = {
  searchField: '',
  pops: [],
  isPending: false,
  error: '',
};

describe('searchField reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, { type: 'any' })).toEqual(initialStateSearch);
  });

  it(`should handle ${types.CHANGE_SEARCHFIELD} action`, () => {
    expect(reducer(initialStateSearch, {
      type: types.CHANGE_SEARCHFIELD,
      payload: 'abc',
    })).toEqual({
      searchField: 'abc',
      pops: [],
      isPending: false,
      error: '',
    });
  });
});

const initialStatePops = {
  searchField: '',
  pops: [],
  isPending: false,
  error: '',
};

describe('requestPops reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, { type: 'any' })).toEqual(initialStatePops);
  });

  it(`should handle ${types.REQUEST_POPS_PENDING} action`, () => {
    expect(reducer(initialStatePops, {
      type: types.REQUEST_POPS_PENDING,
    })).toEqual({
      searchField: '',
      pops: [],
      isPending: true,
      error: '',
    });
  });

  it(`should handle ${types.REQUEST_POPS_SUCCESS} action`, () => {
    expect(reducer(initialStatePops, {
      type: types.REQUEST_POPS_SUCCESS,
      payload: [{
        name: 'Name 1',
        color: 'blue',
        category: 'Category 1',
        image: '',
      }]
    })).toEqual({
      searchField: '',
      pops: [{
        name: 'Name 1',
        color: 'blue',
        category: 'Category 1',
        image: '',
      }],
      isPending: false,
      error: '',
    });
  });

  it(`should handle ${types.REQUEST_POPS_FAILED} action`, () => {
    expect(reducer(initialStatePops, {
      type: types.REQUEST_POPS_FAILED,
      payload: 'ERROR',
    })).toEqual({
      searchField: '',
      pops: [],
      isPending: false,
      error: 'ERROR',
    });
  });
});
