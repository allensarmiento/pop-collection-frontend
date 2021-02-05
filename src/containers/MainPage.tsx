import { Component } from 'react';
import Header from '../components/Header';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import PopCardList from '../components/PopCardList';
import { Pop } from '../state/types';

type MainPageProps = {
  className?: string;
  onSearchChange: Function;
  onRequestPops: Function;
  searchField: string;
  pops: Array<Pop>;
  isPending: boolean;
};

class MainPage extends Component<MainPageProps> {
  componentDidMount() {
    this.props.onRequestPops();
  }

  filterPops = (): Array<Pop> => {
    const { pops, searchField } = this.props;
    return pops.filter((pop) => {
      return pop.name.toLowerCase().includes(searchField.toLowerCase());
    });
  }

  render() {
    const { className, onSearchChange, isPending } = this.props;

    return (
      <div className={className}>
        <Header />
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          {isPending ? <h1>Loading</h1> : (
            <ErrorBoundary>
              <PopCardList pops={this.filterPops()} />
            </ErrorBoundary>
          )}
        </Scroll>
      </div>
    );
  }
}

export default MainPage;
