import React, { ReactElement } from "react";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import IconButton from "@mui/material/IconButton";
import "./CollapseBox.scss";

interface Props {
  title: string;
  children: ReactElement;
}

const CollapseBox: React.FC<Props> = (props) => {
  const { title } = props;
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const iconButton = (
    <IconButton aria-label="toggle details" sx={{ top: "-4px" }}>
      {open ? <ExpandLess /> : <ExpandMore />}
    </IconButton>
  );
  return (
    <div className="CollapseBox">
      <div className="CollapseBox__Header" onClick={handleClick}>
        <span>{title}</span>
        {iconButton}
      </div>
      <Collapse in={open} timeout="auto" unmountOnExit>
        {props.children}
      </Collapse>
    </div>
  );
};
CollapseBox.displayName = "CollapseBox";
export { CollapseBox };
