import React from "react";
import { getSelectedAddonsCost, getSelectedPlanCost } from "../../helpers/helpers";
import { useAppSelector } from "../../hooks/useAppSelector";
import SelectedAddons from "./SelectedAddons";
import SelectedPlan from "./SelectedPlan";
import styles from "./styles/Costs.module.css";
import Total from "./Total";

interface Props {
  setStep: (value: number) => void;
}

export default function Costs({ setStep }: Props) {
  const plan = useAppSelector((state) => state.form.plan);
  const costs = useAppSelector((state) => state.form.costs);
  const addons = useAppSelector((state) => state.form.addon);

  const planCost = getSelectedPlanCost(costs, plan);
  const addonsCost = getSelectedAddonsCost(costs, addons, plan.isMonthly);

  return (
    <>
      <div className={`${styles["container"]}`}>
        <SelectedPlan setStep={setStep} plan={plan} cost={planCost} />
        <SelectedAddons addons={addons} costs={costs} isMonthly={plan.isMonthly} />
      </div>
      <Total isMonthly={plan.isMonthly} cost={planCost + addonsCost} />
    </>
  );
}
