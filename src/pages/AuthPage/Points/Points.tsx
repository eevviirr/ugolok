import { FC } from "react";
import { PointItem } from "src/Components/PointItem/PointItem";
import { Title } from "src/ui/Title/Title";
import styles from "./Points.module.scss";
const Points: FC = ({}) => {
  return (
    <div>
      <Title title="МОИ ТОЧКИ" />
      <div className={styles.points}>
        <PointItem address="Калининград, Калининградская обл, ул. Ленина д. 16 В"/>
        <PointItem address="Калининград, Калининградская обл, ул. Ленина д. 16 В"/>
        <PointItem address="Калининград, Калининградская обл, ул. Ленина д. 16 В"/>
        <PointItem address="Калининград, Калининградская обл, ул. Ленина д. 16 В"/>
      </div>
    </div>
  );
};

export { Points };
