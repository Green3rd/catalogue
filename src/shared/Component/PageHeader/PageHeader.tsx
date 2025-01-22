import React, { MouseEventHandler } from "react";
import "./PageHeader.scss";
import arrow from "media/leftArrow.svg";

interface Props {
  text: string;
  showBackButton?: boolean;
  onBackButtonClick?: MouseEventHandler;
}

const PageHeaderComponent = (props: Props) => {
  const { text, showBackButton, onBackButtonClick } = props;
  const backButon = showBackButton && (
    <button className="PageHeader__BackButton" onClick={onBackButtonClick}>
      <img
        className="PageHeader__BackButtonImage"
        alt="back button"
        src={arrow}
      />
    </button>
  );
  return (
    <div className="PageHeader">
      {backButon}
      <h1 className="PageHeader__Text">{text}</h1>
    </div>
  );
};

const PageHeader = React.memo(PageHeaderComponent);
PageHeader.displayName = "PageHeader";
export { PageHeader };
