import { shallow } from 'enzyme';
import PopCard from './PopCard';

const props = {
  color: '#fff',
  image: '',
  title: '',
  subtitle: '',
};

it('renders without crashing', () => {
  expect(shallow(<PopCard {...props} />)).toMatchSnapshot();
});
