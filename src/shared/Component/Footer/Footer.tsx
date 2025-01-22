import React, { ReactElement } from "react";
import "./Footer.scss";
import { IconLink } from "../IconLink/IconLink";
import { generateClassName } from "shared/utils/reactClassName";

interface Props {
  spaceBetween?: boolean;
  fixed?: boolean;
  children?: ReactElement;
}

const Footer: React.FC<Props> = (props) => {
  const content = props.children || (
    <>
      <IconLink
        link="https://www.oyster.com/"
        icon="https://img2.pic.in.th/pic/line-logo3d5554c0eb57ef16.png"
        text=""
        dark={false}
      />
    </>
  );

  return (
    <div
      className={generateClassName("Footer", [
        props.spaceBetween ? "space" : "",
        props.fixed ? "fixed" : "",
      ])}
    >
      {content}
    </div>
  );
};
Footer.displayName = "Footer";

export { Footer };
