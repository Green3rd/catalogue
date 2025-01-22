import { shallow } from "enzyme";
import { FormButton } from "./FormButton";
import * as ReactClassName from "shared/utils/reactClassName";

const setup = (mockOnClick: boolean = true) => {
  const ownProps = {
    text: "text",
    disabled: false,
    errorText: "errorText",
    modifier: ["mod"],
    onClick: mockOnClick ? jest.fn() : undefined,
  };

  const props = {
    ...ownProps,
  };

  const Component = shallow(<FormButton {...props} />);
  return { Component, props };
};

describe("<FormButton />", () => {
  const spyReactClassName = jest.spyOn(ReactClassName, "generateClassName");
  const containerClass = "FormButton";
  beforeEach(() => {
    jest.clearAllMocks();
    spyReactClassName.mockReturnValue(containerClass);
  });

  it("should render and function correctly", () => {
    const { Component, props } = setup();

    expect(spyReactClassName).toHaveBeenCalledTimes(1);
    expect(spyReactClassName).toHaveBeenCalledWith(
      containerClass,
      props.modifier
    );

    const container = Component.find(`.${containerClass}`);
    expect(container.exists()).toBeTruthy();
    expect(container.text()).toBe(props.text);
    expect(container.prop("disabled")).toBe(props.disabled);
    expect(container.prop("type")).toBeUndefined();
    expect(props.onClick).toBeCalledTimes(0);
    container.simulate("click");
    expect(props.onClick).toBeCalledTimes(1);

    const errorText = Component.find(".FormButton__ErrorText");
    expect(errorText.exists()).toBeTruthy();
    expect(errorText.text()).toBe(props.errorText);
  });

  it("should render a button with type=submit when not pass onClick method", () => {
    const { Component } = setup(false);

    const container = Component.find(`.${containerClass}`);
    expect(container.exists()).toBeTruthy();
    expect(container.prop("type")).toBe("submit");
  });
});
