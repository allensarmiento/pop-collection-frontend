export interface Pop {
  name: string;
  color: string;
  category: string;
  image: string;
}

export interface PopsState {
  searchField: string;
  pops: Array<Pop>;
  isPending: boolean;
  error: string;
}

export const initialState: PopsState = {
  searchField: '',
  pops: [],
  isPending: false,
  error: '',
};

export const CHANGE_SEARCHFIELD: string = 'CHANGE_SEARCHFIELD';

interface ChangeSearchFieldAction {
  type: typeof CHANGE_SEARCHFIELD;
  payload: string;
}

export const REQUEST_POPS_SUCCESS: string = 'REQUEST_POPS_SUCCESS';
export const REQUEST_POPS_PENDING: string = 'REQUEST_POPS_PENDING';
export const REQUEST_POPS_FAILED: string = 'REQUEST_POPS_FAILED';

interface RequestPopsSuccessAction {
  type: typeof REQUEST_POPS_SUCCESS;
  payload: Array<object>;
}

interface RequestPopsPendingAction {
  type: typeof REQUEST_POPS_PENDING;
  payload: string,
}

interface RequestPopsFailedAction {
  type: typeof REQUEST_POPS_FAILED;
  payload: string,
}

export type PopsActionTypes = ChangeSearchFieldAction |
  RequestPopsSuccessAction |
  RequestPopsPendingAction |
  RequestPopsFailedAction;
