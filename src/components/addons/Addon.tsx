import React, { useRef } from "react";
import { formatCost } from "../../helpers/helpers";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { actionForm } from "../../redux/form-slice";
import { TAddon } from "../../types";
import styles from "./styles/Addon.module.css";

type Props = {
  property: TAddon;
  title: string;
  description: string;
  monthlyCost: number;
  yearlyCost: number;
  isMonthly: boolean;
  isActive: boolean;
};

export default function Addon({
  title,
  description,
  monthlyCost,
  yearlyCost,
  property,
  isMonthly,
  isActive,
}: Props) {
  const checkboxRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();
  function toggleAddon() {
    if (checkboxRef.current) {
      dispatch(actionForm.toggleAddon({ property }));
    }
  }

  return (
    <label className={`${styles["container"]} flex-center`}>
      <div className={`${styles["checkmark-container"]}`}>
        <input checked={isActive} ref={checkboxRef} type="checkbox" onChange={toggleAddon} />
        <span className={`${styles["checkmark"]}`}></span>
      </div>
      <div className="flex flex-dir-col margin-left-1_5">
        <span className={`${styles["title"]}`}>{title}</span>
        <span className={`${styles["description"]}`}>{description}</span>
      </div>
      <div className={`${styles["cost"]} margin-left-auto`}>
        +{isMonthly ? formatCost(monthlyCost, "monthly") : formatCost(yearlyCost, "yearly")}
      </div>
    </label>
  );
}
