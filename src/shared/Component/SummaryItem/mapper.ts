import { CakeType } from "constants/CakeType";

export const getTypeForSummary = (type: CakeType) => {
  switch (type) {
    case CakeType.SmallPiece:
    case CakeType.Piece:
      return "ลูก";
    case CakeType.Set:
    default:
      return type;
  }
};
