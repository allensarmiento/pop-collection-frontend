import { Reducer } from 'redux';
import {
  initialState,
  REQUEST_POPS_SUCCESS,
  REQUEST_POPS_PENDING,
  REQUEST_POPS_FAILED,
  PopsState,
  CHANGE_SEARCHFIELD,
} from './types';

const reducer: Reducer<PopsState> = (state=initialState, action) => {
  switch (action.type) {
    case CHANGE_SEARCHFIELD:
      return {
        ...state,
        searchField: action.payload,
      };
    case REQUEST_POPS_PENDING:
      return {
        ...state,
        isPending: true,
      };
    case REQUEST_POPS_SUCCESS:
      return {
        ...state,
        pops: action.payload,
        isPending: false,
      };
    case REQUEST_POPS_FAILED:
      return {
        ...state,
        error: action.payload,
        isPending: false,
      };
    default:
      return state;
  }
};

export default reducer;
