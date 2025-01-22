import React from "react";
import "./InfoBox.scss";

export interface InfoBoxProps {
  text: string;
}

const InfoBox: React.FC<InfoBoxProps> = (props) => {
  return <div className="InfoBox">{props.text}</div>;
};
InfoBox.displayName = "InfoBox";
export { InfoBox };
