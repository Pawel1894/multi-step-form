import React from "react";
import { formatCost } from "../../helpers/helpers";
import { TPlan } from "../../types";
import styles from "./styles/PlanBtn.module.css";

type Props = {
  img: string;
  title: string;
  monthlyCost: number;
  yearlyCost: number;
  discount: string;
  isActive: boolean;
  isMonthly: boolean;
  onClickHandler: () => void;
};

export default function PlanBtn({
  img,
  title,
  monthlyCost,
  yearlyCost,
  discount,
  isActive,
  isMonthly,
  onClickHandler,
}: Props) {
  return (
    <button
      type="button"
      className={`${styles["container"]} ${isActive ? styles["active"] : null}`}
      onClick={onClickHandler}
    >
      <img width={40} src={img} />
      <div className={`${styles["content"]}`}>
        <span className={`${styles["title"]}`}>{title}</span>
        <span className={`${styles["cost"]}`}>
          {isMonthly ? formatCost(monthlyCost, "monthly") : formatCost(yearlyCost, "yearly")}
        </span>
        <span className={`${styles["discount"]}`}>{!isMonthly ? discount : null}</span>
      </div>
    </button>
  );
}
