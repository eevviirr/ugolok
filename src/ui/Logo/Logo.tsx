import { FC } from "react";

import logo from "src/assets/logo.svg";
import style from "./style.module.scss";

const Logo: FC = ({}) => <img src={logo} alt='' className={style.logo} />;

export { Logo };
