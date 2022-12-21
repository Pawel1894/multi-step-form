import React from "react";
import { formatCost } from "../../helpers/helpers";
import { TPlan } from "../../types";
import Button from "../Button";
import styles from "./styles/SelectedPlan.module.css";

interface Props {
  plan: TPlan;
  cost: number;
  setStep: (value: number) => void;
}

export default function SelectedPlan({ plan, cost, setStep }: Props) {
  function renderCost() {
    if (plan.isMonthly) return formatCost(cost, "monthly");
    else return formatCost(cost, "yearly");
  }

  return (
    <div className={`flex-center-space-between`}>
      <div className={`flex flex-dir-col`}>
        <span className={`${styles["category"]}`}>
          {plan.category} ({plan.isMonthly ? "Monthly" : "Yearly"})
        </span>
        <Button
          text="Change"
          styleMode="link"
          btnAttributes={{
            type: "button",
            onClick: () => {
              setStep(2);
            },
          }}
        />
      </div>
      <span className={`${styles["cost"]}`}>{renderCost()}</span>
    </div>
  );
}
