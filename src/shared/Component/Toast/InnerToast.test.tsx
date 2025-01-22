import { shallow } from "enzyme";
import { InnerToast } from "./InnerToast";
import * as ReactClassName from "shared/utils/reactClassName";

const setup = (isShow: boolean = false, isRemove: boolean = false) => {
  const ownProps = {
    isShow,
    isRemove,
    text: "text",
  };

  const props = {
    ...ownProps,
  };

  const Component = shallow(<InnerToast {...props} />);
  return { Component, props };
};

describe("<InnerToast />", () => {
  const spyReactClassName = jest.spyOn(ReactClassName, "generateClassName");
  const containerClass = "InnerToast";
  beforeEach(() => {
    jest.clearAllMocks();
    spyReactClassName.mockReturnValue(containerClass);
  });

  it("should render and function correctly", () => {
    const { Component, props } = setup(true);

    expect(spyReactClassName).toHaveBeenCalledTimes(1);
    expect(spyReactClassName).toHaveBeenCalledWith(containerClass, [
      "show",
      "",
    ]);

    const container = Component.find(`.${containerClass}`);
    expect(container.exists()).toBeTruthy();
    expect(container.text()).toBe(props.text);
  });

  it("should render the correct modifier", () => {
    setup(false, true);
    expect(spyReactClassName).toHaveBeenCalledTimes(1);
    expect(spyReactClassName).toHaveBeenCalledWith(containerClass, [
      "",
      "remove",
    ]);
  });
});
