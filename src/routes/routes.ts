import { FC } from "react";
import { AddPoint } from "src/Pages/AddPoint/AddPoint";
import { Login } from "src/Pages/Auth/Login";
import { Register } from "src/Pages/Auth/Register";
import { EditAddress } from "src/Pages/EditAddress/EditAddress";
import { Home } from "src/Pages/Home/Home";
import { Payments } from "src/Pages/Payments/Payments";
import { Point } from "src/Pages/Point/Point";
import { Points } from "src/Pages/Points/Points";
import { Profile } from "src/Pages/Profile/Profile";

interface IRoute {
    path: string;
    Component: FC;
}
export const publicRoute: IRoute[] = [
    {
        path: "/",
        Component: Home,
    },
    {
        path: "/register",
        Component: Register,
    },
    {
        path: "/login",
        Component: Login,
    },
    {
        path: "/point/:pointId",
        Component: Point,
    },
];

export const authRoute: IRoute[] = [
    {
        path: "/points",
        Component: Points,
    },
    {
        path: "/point/:pointId",
        Component: Point,
    },
    {
        path: "/points/add",
        Component: AddPoint,
    },
    {
        path: "/point/:pointId/editAddress",
        Component: EditAddress,
    },
    {
        path: "/profile",
        Component: Profile,
    },
    {
        path: "/profile/payments",
        Component: Payments,
    },
];
