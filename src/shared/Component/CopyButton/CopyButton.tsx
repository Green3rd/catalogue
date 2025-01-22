import React from "react";
import IconButton from "@mui/material/IconButton";
import FileCopyOutlinedIcon from "@mui/icons-material/FileCopyOutlined";
import { copyText } from "shared/utils/copyUtils";
import { Toast } from "shared/Component/Toast/Toast";
import "./CopyButton.scss";

interface Props {
  text: string;
}

const CopyButton: React.FC<Props> = (props) => {
  const { text } = props;
  const [toastMessage, setToastMessage] = React.useState<string>();
  const copy = () => {
    if (copyText(text)) {
      setToastMessage("ข้อความถูกคัดลอกแล้ว");
    }
  };
  return (
    <>
      <IconButton className="CopyButton__Icon" aria-label="copy" onClick={copy} sx={{ top: "-4px" }}>
        <FileCopyOutlinedIcon />
      </IconButton>
      {toastMessage && (
        <Toast text={toastMessage} clearTextFunction={setToastMessage} />
      )}
    </>
  );
};
CopyButton.displayName = "CopyButton";
export { CopyButton };
