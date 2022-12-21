import React from "react";
import { formatCost } from "../../helpers/helpers";
import styles from "./styles/Total.module.css";

type Props = {
  isMonthly: boolean;
  cost: number;
};

export default function Total({ isMonthly, cost }: Props) {
  return (
    <div className={`${styles["container"]} flex-center-space-between`}>
      <span className={`${styles["label"]}`}>Total (per {isMonthly ? "month" : "year"})</span>
      <span className={`${styles["cost"]}`}>
        {isMonthly ? formatCost(cost, "monthly") : formatCost(cost, "yearly")}
      </span>
    </div>
  );
}
