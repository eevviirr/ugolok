import { FC } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { AuthRoutes, PublicRoutes } from "./routes";

const AppRouter: FC = ({}) => {
  const token = localStorage.getItem("token");

  return (
    <Routes>
      {PublicRoutes.map(({ Component, path }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}
      {token ?
        AuthRoutes.map(({ Component, path }) => (
          <Route key={path} path={path} element={<Component />} />
        )) : ''}
      <Route path="*" element={<Navigate to={"/"} />} />
    </Routes>
  );
};

export { AppRouter };
