import { FC } from "react";
import { Title } from "src/ui/Title/Title";

import styles from "./Point.module.scss";
import { Link } from "react-router-dom";
import { Input } from "src/ui/Input/Input";
import { ButtonSubmit } from "src/ui/Buttons/ButtonSubmit/ButtonSubmit";
import { ButtonBack } from "src/ui/Buttons/ButtonBack/ButtonBack";
import { ButtonLink } from "src/ui/Buttons/ButtonLink/ButtonLink";
const Point: FC = ({}) => {
  return (
    <div>
      <Title title="МОЯ ТОЧКА" />
      <div className="">
        <address className={styles.address}>
          Калининград (Калининградская область), улица Ленина, ул. 34 Б
        </address>
        <Link to={"editAddress"} className={styles.link}>
          Изменить адрес
        </Link>
      </div>
      <form>
        <div className={styles.inputs}>
          <Input isActive={false} title="ИНН юридического лица" />
          <Input isActive={false} title="ОГРН юридического лица" />
        </div>

        <div className={styles.linkButton}>
          <ButtonLink title="Посмотреть отзывы" />
        </div>

        <div className={`${styles.buttons} container`}>
          <ButtonSubmit isActive type="submit" title="Изменить" />
          <ButtonBack />
        </div>
      </form>
    </div>
  );
};

export { Point };
