import { FC } from "react";

import styles from "./Title.module.scss";

interface ITitle {
  title: string;
}
const Title: FC<ITitle> = ({ title }) => {
  return (
    <>
      <span className={styles.subtitle}>Уголок потребителя</span>
      <h2 className="subTitle">{title}</h2>
    </>
  );
};

export { Title };
