import { shallow } from 'enzyme';
import { FormCheckbox } from './FormCheckbox';
import enzymeToJson from 'enzyme-to-json';

const setup = () => {
  const ownProps = {
    label: 'text',
    name: 'errorText',
  };

  const props = {
    ...ownProps,
  };

  const Component = shallow(<FormCheckbox {...props} />);
  return { Component, props };
};

describe('<FormCheckbox />', () => {
  it('should render and function correctly', () => {
    const { Component } = setup();
    expect(enzymeToJson(Component)).toMatchSnapshot();
  });
});
