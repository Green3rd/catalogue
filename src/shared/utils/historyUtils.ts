import { routeName } from "config/routeConfig";
import * as H from "history";

export const goToHomePage = (history: H.History) => {
  history.push({
    pathname: routeName.CatalogPage,
  });
};

export const goToPreviousPage = (history: H.History) => {
  history.goBack();
};
