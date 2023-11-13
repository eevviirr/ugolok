import { FC } from "react";
import { Logo } from "src/ui/Logo/Logo";

import styles from "./Style.module.scss";
import { ButtonLink } from "src/ui/Buttons/ButtonLink/ButtonLink";
const Home: FC = ({}) => {
    return (
        <div>
            <Logo />
            <h1 className={"title"}>Добро пожаловать!</h1>
            <p className={`${styles.descr}  `}>
                Войдите или зарегистрируйтесь, чтобы получить полный доступ к
                приложению.
            </p>

            <div className={styles.buttons}>
                <ButtonLink isActive title='Регистрация' link='/signup' />
                <ButtonLink title='Вход' />
            </div>

            <div
                className={`${styles.descr}  ${styles.descrPosition} container`}>
                Удобные инструменты позволяющие вашему бизнесу быть в курсе и
                оперативно реагировать на пожелания клиента
            </div>
        </div>
    );
};

export { Home };
