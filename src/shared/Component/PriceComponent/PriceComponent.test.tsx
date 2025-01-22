import { shallow } from 'enzyme';
import { PriceComponent } from './PriceComponent';
import enzymeToJson from 'enzyme-to-json';
import * as PriceHelper from './priceHelper';

const setup = () => {
  const ownProps = {
    price: {
      amount: 55.5,
      currency: '$',
    }
  };

  const props = {
    ...ownProps,
  };

  const Component = shallow(<PriceComponent {...props} />);
  return { Component, props };
};

describe('<PriceComponent />', () => {
  it('should render and function correctly', () => {
    const spyNumberWithCommas = jest.spyOn(PriceHelper, 'numberWithCommas');
    spyNumberWithCommas.mockReturnValue('55.5$');
    const { Component, props } = setup();
    expect(spyNumberWithCommas).toHaveBeenCalledTimes(1);
    expect(spyNumberWithCommas).toHaveBeenCalledWith(props.price.amount);
    expect(enzymeToJson(Component)).toMatchSnapshot();
  });
});
