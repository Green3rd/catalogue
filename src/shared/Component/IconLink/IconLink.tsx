import React from "react";
import "./IconLink.scss";
import { generateClassName } from "shared/utils/reactClassName";

interface Props {
  icon: string;
  link: string;
  text: string;
  dark?: boolean;
}

const IconLink: React.FC<Props> = (props) => {
  const {icon, link, text, dark} = props
  return (
    <a
      className={generateClassName("IconLink", dark ? "dark" : "")}
      href={link}
      target="_blank"
      rel="noreferrer"
      >
      <img className="IconLink__Icon" src={icon} alt="an icon" />
      {text && <span className="IconLink__Text" >{text}</span>}
    </a>
  );
};
IconLink.displayName = "IconLink";

export { IconLink };
