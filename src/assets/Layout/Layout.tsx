import React from "react";
import styles from "./Style/LayoutBigCard.module.scss";

const LayoutBigCard = (props: any) => {
  return (
    <div className={styles["big-card"]}>
      <div className={styles["card"]}>
        {props.children}
      </div>
    </div>
  );
};

export { LayoutBigCard };
