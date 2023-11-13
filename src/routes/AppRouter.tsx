import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import { AuthRoutes, PublicRoutes } from "./routes";

const AppRouter: FC = ({}) => {
    const isAuth = false;
    return (
        <Routes>
            {PublicRoutes.map(({ Component, path }) => (
                <Route key={path} path={path} element={<Component />} />
            ))}
            {isAuth &&
                AuthRoutes.map(({ Component, path }) => (
                    <Route key={path} path={path} element={<Component />} />
                ))}
        </Routes>
    );
};

export { AppRouter };
