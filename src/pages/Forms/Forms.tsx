import React from "react";
import { LayoutBigCard } from "../../assets/Layout/Layout";
import styles from "./Style/Forms.module.scss";

export default function Forms() {
  return (
    <LayoutBigCard>
      <div className={styles["form"]}>
        <div className={styles["input-box"]}>
          <input type="text" required />
          <span>Example 01</span>
          <i></i>
        </div>
        <div className={styles["field"]}>
          <input type="text" name="name" required />
          <label htmlFor="name" className={styles["label-wrapper"]}>
            <span className={styles["label-text"]}>Example 02</span>
          </label>
        </div>
        <div className={styles["btn-part"]}>
          <input type="submit" value="Submit" />
        </div>
      </div>
    </LayoutBigCard>
  );
}
