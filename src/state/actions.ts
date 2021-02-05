import { Dispatch } from 'redux';
import { apiGet } from '../utilities/apiCall';
import {
  CHANGE_SEARCHFIELD,
  REQUEST_POPS_SUCCESS,
  REQUEST_POPS_PENDING,
  REQUEST_POPS_FAILED,
  PopsActionTypes,
} from './types';

export const setSearchField = (text: string): PopsActionTypes => ({
  type: CHANGE_SEARCHFIELD,
  payload: text,
});

export const requestPops = (): any => (dispatch: Dispatch) => {
  dispatch({ type: REQUEST_POPS_PENDING });

  apiGet('/pops')
    .then((data) => dispatch({ type: REQUEST_POPS_SUCCESS, payload: data }))
    .catch((error) => dispatch({ type: REQUEST_POPS_FAILED, payload: error }));
};
