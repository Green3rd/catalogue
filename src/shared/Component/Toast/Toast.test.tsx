import { shallow } from 'enzyme';
import { Toast } from './Toast';
import * as React from 'react';

const setup = () => {
  const ownProps = {
    text: 'text',
    clearTextFunction: jest.fn(),
  };

  const props = {
    ...ownProps,
  };

  const Component = shallow(<Toast {...props} />);
  return { Component, props };
};

const runEffects = () => {
  (React.useEffect as any).mock.calls.forEach((args: (() => any)[]) => args[0]());
};

describe('<Toast />', () => {
  jest.spyOn(React, 'useEffect');
  beforeEach(() => {
    jest.clearAllMocks();
    jest.useFakeTimers();
  });

  it('should render and function correctly', () => {

    const { Component, props } = setup();
    runEffects();
    expect(Component.prop('text')).toBe(props.text);
    expect(Component.prop('isShow')).toBeFalsy();
    expect(Component.prop('isRemove')).toBeFalsy();

    jest.advanceTimersByTime(1000);
    expect(Component.prop('isShow')).toBeTruthy();
    expect(Component.prop('isRemove')).toBeFalsy();

    jest.runAllTimers();
    expect(Component.prop('isShow')).toBeFalsy();
    expect(Component.prop('isRemove')).toBeTruthy();
    expect(props.clearTextFunction).toBeCalledTimes(1);
    expect(props.clearTextFunction).toBeCalledWith('');
  });
});
