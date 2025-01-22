import React, { MouseEventHandler, useRef } from "react";
import { generateClassName, Modifier } from "shared/utils/reactClassName";
import "./FormButton.scss";
import { LoadingAnimation } from "./LoadingAnimation/LoadingAnimation";
import { Overlay } from "../Overlay/Overlay";

interface Props {
  text: string;
  disabled?: boolean;
  errorText?: string;
  modifier?: Modifier;
  onClick?: MouseEventHandler;
}

const FormButton: React.FC<Props> = (props) => {
  const { text, disabled, modifier, onClick, errorText } = props;
  const buttonRef = useRef<HTMLButtonElement>(null);
  const onButtonClick = (e: any) => {
    buttonRef.current?.blur();
    onClick && onClick(e);
  };
  return (
    <div className="FormButton__Container">
      <button
        ref={buttonRef}
        className={generateClassName("FormButton", modifier)}
        type={onClick ? undefined : "submit"} // Type: submit, will automaticcally call Fomik submit. (when not disable)
        disabled={disabled}
        onClick={onButtonClick}
      >
        {disabled ? <LoadingAnimation /> : text}
      </button>
      {disabled && <Overlay />}
      <span className="FormButton__ErrorText">{errorText}</span>
    </div>
  );
};
FormButton.displayName = "FormButton";
export { FormButton };
