import { shallow } from 'enzyme';
import { FormInput } from './FormInput';
import enzymeToJson from 'enzyme-to-json';

const setup = () => {
  const ownProps = {
    label: 'text',
    name: 'errorText',
    placeholder: 'placeholder',
    type: 'email',
  } as any;

  const props = {
    ...ownProps,
  };

  const Component = shallow(<FormInput {...props} />);
  return { Component, props };
};

describe('<FormInput />', () => {
  it('should render and function correctly', () => {
    const { Component } = setup();
    expect(enzymeToJson(Component)).toMatchSnapshot();
  });
});
