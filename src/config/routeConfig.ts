import { AddressPage } from "AddressPage/AddressPage";
import { OrderSummaryPage } from "OrderSummaryPage/OrderSummaryPage";
import { ComponentClass } from "react";
import { CatalogPage } from "CatalogPage/CatalogPage";
import { LoginPage } from "LoginPage/LoginPage";
import { InfoPage } from "InfoPage/InfoPage";
import { ContactUsPage } from "ContactUsPage/ContactUsPage";

export interface RouteObject {
  url: string;
  component: ComponentClass | React.FC;
}

export const routeName: { [id: string]: string } = {
  CatalogPage: "/",
  OrderSummaryPage: "/order-summary",
  AddressPage: "/address",
  ThankYouPage: "/thankyou",
  LoginPage: "/subscribe",
  InfoPage: "/info",
  ContactUsPage: "/contact",
};

export const routeConstants: RouteObject[] = [
  { url: routeName.CatalogPage, component: CatalogPage },
  { url: routeName.InfoPage, component: InfoPage },
  { url: routeName.ContactUsPage, component: ContactUsPage },
  { url: routeName.OrderSummaryPage, component: OrderSummaryPage },
  { url: routeName.AddressPage, component: AddressPage },
  { url: routeName.LoginPage, component: LoginPage },
];
