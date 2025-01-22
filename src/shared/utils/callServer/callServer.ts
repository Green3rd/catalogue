import axios, { Method } from "axios";
import { getToken } from "../localstorage";
import {
  BlankRequest,
  GetItemsResponse,
  LoginRequest,
  LoginResponse,
  MyServerReponse,
  SubmitOrderRequest,
  SubmitOrderResponse,
} from "./type";

const SERVER_NAME = process.env.REACT_APP_SERVER_URL;

type RequestType = BlankRequest;

const callServer = (
  method: Method,
  url: string,
  data: RequestType
): Promise<any> => {
  const config = {
    headers: { Authorization: `Bearer ${getToken()}` },
  };
  return axios({
    method,
    data,
    url: `${SERVER_NAME}${url}`,
    ...config,
  });
};

const GET = "get";
const POST = "post";

export const getItems = (): Promise<MyServerReponse<GetItemsResponse>> => {
  return callServer(GET, "/mooncake", {});
};

export const submitOrder = (
  data: SubmitOrderRequest
): Promise<MyServerReponse<SubmitOrderResponse>> => {
  return callServer(POST, "/mooncake/submitOrder", data);
};

export const login = (
  data: LoginRequest
): Promise<MyServerReponse<LoginResponse>> => {
  return callServer(POST, "/auth/login", data);
};
