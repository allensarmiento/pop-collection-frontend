import { shallow } from 'enzyme';
import PopCardList from './PopCardList';

const filteredPops = [{
  name: 'Name 1',
  color: '#fff',
  category: 'Category 1',
  image: '',
}];

it('renders without crashing', () => {
  expect(shallow(<PopCardList pops={filteredPops} />)).toMatchSnapshot();
});
