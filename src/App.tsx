import { Component } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Pop } from './state/types';
import { AppState } from './index';
import { setSearchField, requestPops } from './state/actions';
import MainPage from './containers/MainPage';
import './App.css';

const mapStateToProps = (state: AppState) => {
  return {
    searchField: state.popCollection.searchField,
    pops: state.popCollection.pops,
    isPending: state.popCollection.isPending,
  };
};

const mapDispatchToProps = (dispatch: Dispatch | any) => {
  return {
    onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(setSearchField(event.target.value));
    },
    onRequestPops: () => {
      dispatch(requestPops());
    },
  };
};

type AppProps = {
  onSearchChange: Function;
  onRequestPops: Function;
  searchField: string;
  pops: Array<Pop>;
  isPending: boolean;
};

class App extends Component<AppProps> {
  render() {
    return (
      <div className="App">
        <MainPage { ...this.props } />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
