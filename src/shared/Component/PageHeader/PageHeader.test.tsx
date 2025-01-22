import { shallow } from "enzyme";
import { PageHeader } from "./PageHeader";
import * as ReactClassName from "shared/utils/reactClassName";
import enzymeToJson from "enzyme-to-json";

const setup = (showBackButton: boolean = true) => {
  const ownProps = {
    showBackButton,
    text: "text",
    onBackButtonClick: jest.fn(),
  };

  const props = {
    ...ownProps,
  };

  const Component = shallow(<PageHeader {...props} />);
  return { Component, props };
};

describe("<PageHeader />", () => {
  const spyReactClassName = jest.spyOn(ReactClassName, "generateClassName");
  const containerClass = "FormButton";
  beforeEach(() => {
    jest.clearAllMocks();
    spyReactClassName.mockReturnValue(containerClass);
  });

  it("should render and function correctly", () => {
    const { Component, props } = setup();

    expect(enzymeToJson(Component)).toMatchSnapshot();
    expect(props.onBackButtonClick).toBeCalledTimes(0);
    const backButton = Component.find(".PageHeader__BackButton");
    expect(backButton.exists()).toBeTruthy();
    backButton.simulate("click");
    expect(props.onBackButtonClick).toBeCalledTimes(1);
  });

  it("should not render the back button when showBackButton = false", () => {
    const { Component } = setup(false);

    const backButton = Component.find(".PageHeader__BackButton");
    expect(backButton.exists()).toBeFalsy();
  });
});
