import React, { useEffect } from "react";
import { InnerToast } from "./InnerToast";

interface Props {
  text: string;
  clearTextFunction?: (text: string) => void;
}

const displayTime = 2500;
const animationTime = 1000; // Need to be sync with the one in the .scss file.

export const Toast: React.FC<Props> = (props) => {
  const [display, setDisplay] = React.useState<boolean>(false);
  const [isRemove, setIsRemove] = React.useState<boolean>(false);
  const { text, clearTextFunction } = props;
  useEffect(() => {
    const showMessageTimer = setTimeout(() => {
      setDisplay(true);
    }, 100);

    const hideMessageTimer = setTimeout(() => {
      setDisplay(false);
    }, displayTime);

    const removeComponent = setTimeout(() => {
      setIsRemove(true);
      clearTextFunction && clearTextFunction("");
    }, displayTime + animationTime);

    return () => {
      clearTimeout(showMessageTimer);
      clearTimeout(hideMessageTimer);
      clearTimeout(removeComponent);
    };
  }, [clearTextFunction]);
  return <InnerToast text={text} isShow={display} isRemove={isRemove} />;
};
Toast.displayName = "Toast";
