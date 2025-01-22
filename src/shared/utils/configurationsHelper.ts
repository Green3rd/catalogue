export const isMockMode = () => {
  return process.env.REACT_APP_USE_MOCK === "true";
};


export const isWebOpen = () => {
  return process.env.REACT_APP_OPEN_WEB === "true";
};
