import { CakeType } from "constants/CakeType";
import { MooncakeModel } from "shared/utils/callServer/type";

export const mockData: MooncakeModel[] = [
  {
    id: 1,
    name: "Mooncake",
    imageUrl: "https://img2.pic.in.th/pic/mt1.jpeg",
    price: 120,
    itemAvailable: 50,
    info: "This is a mooncake",
    type: CakeType.Piece,
    isSellOnWeb: true,
  },
  {
    id: 2,
    name: "Mini Set",
    imageUrl: "https://img5.pic.in.th/file/secure-sv1/chawwang.jpeg",
    price: 150,
    itemAvailable: 50,
    info: "This is a mini set",
    type: CakeType.Piece,
    isSellOnWeb: true,
  },
  {
    id: 3,
    name: "Bag",
    imageUrl: "https://img2.pic.in.th/pic/New-Project-20.jpg",
    price: 50,
    itemAvailable: 50,
    info: "This is a bag",
    type: CakeType.Piece,
    isSellOnWeb: true,
  },
];
