import React from "react";
import arcade from "../../assets/images/icon-arcade.svg";
import advanced from "../../assets/images/icon-advanced.svg";
import pro from "../../assets/images/icon-pro.svg";
import { useAppSelector } from "../../hooks/useAppSelector";
import { useDispatch } from "react-redux";
import { actionForm } from "../../redux/form-slice";
import PlanBtn from "./PlanBtn";

export default function PlanButtons() {
  const plan = useAppSelector((state) => state.form.plan);
  const costs = useAppSelector((state) => state.form.costs.plan);
  const dispatch = useDispatch();

  return (
    <>
      <PlanBtn
        isActive={plan.category === "arcade"}
        isMonthly={plan.isMonthly}
        img={arcade}
        title="Arcade"
        monthlyCost={costs.arcade.month}
        yearlyCost={costs.arcade.year}
        discount="2 months free"
        onClickHandler={() => {
          dispatch(actionForm.setPlanCategory("arcade"));
        }}
      />
      <PlanBtn
        isActive={plan.category === "advanced"}
        isMonthly={plan.isMonthly}
        img={advanced}
        title="Advanced"
        monthlyCost={costs.advanced.month}
        yearlyCost={costs.advanced.year}
        discount="2 months free"
        onClickHandler={() => {
          dispatch(actionForm.setPlanCategory("advanced"));
        }}
      />
      <PlanBtn
        isActive={plan.category === "pro"}
        isMonthly={plan.isMonthly}
        img={pro}
        title="Pro"
        monthlyCost={costs.pro.month}
        yearlyCost={costs.pro.year}
        discount="2 months free"
        onClickHandler={() => {
          dispatch(actionForm.setPlanCategory("pro"));
        }}
      />
    </>
  );
}
