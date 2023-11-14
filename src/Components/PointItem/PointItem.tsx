import { FC } from "react";

import styles from "./PointItem.module.scss";
import star from "src/assets/star.svg";
import { Link } from "react-router-dom";

interface IPointItem {
  address: string;
}
const PointItem: FC<IPointItem> = ({ address }) => {
  return (
    <Link to={"123"} className={styles.container}>
      <div className="">
        <address className={styles.address}>{address}</address>
        <div className={styles.rating}>
          <span>3,87</span>
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
          <img src={star} alt="" />
        </div>
      </div>
      <div className={styles.circle}></div>
    </Link>
  );
};

export { PointItem };
