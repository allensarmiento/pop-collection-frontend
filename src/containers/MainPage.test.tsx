import { shallow, ShallowWrapper } from 'enzyme';
import MainPage from './MainPage';

let wrapper: ShallowWrapper | any;

beforeEach(() => {
  const mockProps = {
    onRequestPops: jest.fn(),
    onSearchChange: jest.fn(),
    pops: [],
    searchField: '',
    isPending: false,
  };

  wrapper = shallow(<MainPage {...mockProps} />);
});

it('renders without crashing', () => {
  expect(wrapper).toMatchSnapshot();
});

it('filters pops', () => {
  const mockProps = {
    onRequestPops: jest.fn(),
    onSearchChange: jest.fn(),
    pops: [],
    searchField: '',
    isPending: false,
  };

  wrapper = shallow(<MainPage {...mockProps} />);
  expect(wrapper.instance().filterPops()).toEqual([]);
});

it('filters pops correctly with matching searchField', () => {
  const filteredPops = [{
    name: 'Name 1',
    color: '#fff',
    category: 'Category 1',
    image: '',
  }];
  const mockProps = {
    onRequestPops: jest.fn(),
    onSearchChange: jest.fn(),
    pops: [{
      name: 'Name 1',
      color: '#fff',
      category: 'Category 1',
      image: '',
    }],
    searchField: 'Name 1',
    isPending: false,
  };

  wrapper = shallow(<MainPage {...mockProps} />);
  expect(wrapper.instance().filterPops()).toEqual(filteredPops);
});

it('filters pops correctly with no matching searchField', () => {
  const mockProps = {
    onRequestPops: jest.fn(),
    onSearchChange: jest.fn(),
    pops: [{
      name: 'Name 1',
      color: '#fff',
      category: 'Category 1',
      image: '',
    }],
    searchField: 'Name 99',
    isPending: false,
  };

  wrapper = shallow(<MainPage {...mockProps} />);
  expect(wrapper.instance().filterPops()).toEqual([]);
});
