import React, { useRef } from "react";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";
import { actionForm } from "../../redux/form-slice";
import styles from "./styles/PlanToggle.module.css";

type Props = {};

export default function PlanToggle({}: Props) {
  const checkboxRef = useRef<HTMLInputElement>(null);
  const isMonthly = useAppSelector((state) => state.form.plan.isMonthly);
  const dispatch = useAppDispatch();

  function togglePlan() {
    if (checkboxRef.current) {
      dispatch(actionForm.setPlanIsMonthly(!checkboxRef.current.checked));
    }
  }

  return (
    <div className={`${styles["container"]}`}>
      <label className={`${styles["label"]} ${isMonthly ? styles["active"] : null}`}>Monthly</label>
      <label className={`${styles["switch"]}`}>
        <input ref={checkboxRef} type="checkbox" onChange={togglePlan} />
        <span className={`${styles["slider"]}`}></span>
      </label>
      <label className={`${styles["label"]} ${!isMonthly ? styles["active"] : null}`}>Yearly</label>
    </div>
  );
}
