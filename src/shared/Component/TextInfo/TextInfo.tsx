import React from "react";
import "./TextInfo.scss";

interface Props {
  title: string;
  text: string;
  copyText?: string;
}

const TextInfo: React.FC<Props> = (props) => {
  const { title, text } = props;
  // Disable since navigation.clipboard not work on http. Need to buy a certificate first.
  // const copyButton = copyText && <CopyButton text={copyText} />;
  return (
    <div className="TextInfo">
      <span className="TextInfo__Title">{title} : </span>
      <span>{`${text}`}</span>
      {/* {copyButton} */}
    </div>
  );
};
TextInfo.displayName = "TextInfo";
export { TextInfo };
