import { FC } from "react";

import { AddPoint } from "../pages/AuthPage/AddPoint/AddPoint";
import { EditAddress } from "../pages/AuthPage/EditAddress/EditAddress";
import { Points } from "../pages/AuthPage/Points/Points";
import { Profile } from "../pages/AuthPage/Profile/Profile";
import { Login } from "../pages/PublicPage/Auth/Login";
import { SignUp } from "src/pages/PublicPage/Auth/SignUp"; 
import { ConfirmLogin } from "../pages/PublicPage/Confirms/ConfirmLogin";
import { ConfirmSignup } from "../pages/PublicPage/Confirms/ConfirmSignup";
import { Docs } from "../pages/PublicPage/Docs/Docs";
import { Home } from "../pages/PublicPage/Home/Home";
import { Menu } from "../pages/PublicPage/Menu/Menu";
import { Offer } from "../pages/PublicPage/Offer/Offer";
import { Other } from "../pages/PublicPage/Other/Other";
import { Point } from "../pages/PublicPage/Point/Point";
import { PointBook } from "../pages/PublicPage/PointBook/PointBook";
import { Report } from "../pages/PublicPage/Report/Report";
import { Rights } from "../pages/PublicPage/Rights/Rights";
import { Socials } from "../pages/PublicPage/Socials/Socials";

interface IRoute {
    path: string;
    Component: FC;
}
export const PublicRoutes: IRoute[] = [
    {
        path: "/",
        Component: Home,
    },
    {
        path: "/signup",
        Component: SignUp,
    },
    {
        path: "/login",
        Component: Login,
    },
    {
        path: "/signup/confirm",
        Component: ConfirmSignup,
    },
    {
        path: "/login/confirm",
        Component: ConfirmLogin,
    },
    {
        path: "/point/:pointId",
        Component: Point,
    },
    {
        path: "/point/:pointId/menu",
        Component: Menu,
    },
    {
        path: "/point/:pointId/menu/book",
        Component: PointBook,
    },
    {
        path: "/point/:pointId/menu/book/report",
        Component: Report,
    },
    {
        path: "/point/:pointId/menu/book/offer",
        Component: Offer,
    },
    {
        path: "/point/:pointId/menu/book/other",
        Component: Other,
    },
    {
        path: "/point/:pointId/menu/rights",
        Component: Rights,
    },
    {
        path: "/point/:pointId/menu/socials",
        Component: Socials,
    },
    {
        path: "/point/:pointId/menu/docs",
        Component: Docs,
    },
];

export const AuthRoutes: IRoute[] = [
  {
    path: "/profile/:profileId",
    Component: Profile,
  },
  {
    path: "/points/:profileId",
    Component: Points,
  },
  {
    path: "/points/:profileId/:pointId",
    Component: Point,
  },
  {
    path: "/points/:profileId/points/addPoint",
    Component: AddPoint,
  },
  {
    path: "/points/:profileId/:pointId/editAddress",
    Component: EditAddress,
  },
];
