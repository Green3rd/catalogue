import React from "react";
import "./Overlay.scss";
import { generateClassName } from "shared/utils/reactClassName";

interface OverlayProps {
  text?: string;
}

const Overlay: React.FC<OverlayProps> = ({ text }) => {
  return (
    <>
      <div className={generateClassName("Overlay", text ? 'darker' : '')} />
      {text && <div className="Overlay__Text" >{text}</div>}
    </>
  );
};
Overlay.displayName = "Overlay";

export { Overlay };
