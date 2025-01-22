import React from "react";
import { generateClassName } from "shared/utils/reactClassName";
import "./InnerToast.scss";
interface Props {
  text: string;
  isShow: boolean;
  isRemove: boolean;
}

export const InnerToast: React.FC<Props> = (props) => {
  return (
    <div
      className={generateClassName("InnerToast", [
        props.isShow ? "show" : "",
        props.isRemove ? "remove" : "",
      ])}
    >
      {props.text}
    </div>
  );
};
InnerToast.displayName = "InnerToast";
