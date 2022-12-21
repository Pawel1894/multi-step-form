import React from "react";
import { useAppSelector } from "../../hooks/useAppSelector";
import FormHeader from "../FormHeader";
import Addon from "./Addon";

export default function PickAddons() {
  const isMonthly = useAppSelector((state) => state.form.plan.isMonthly);
  return (
    <form className="form-flow margin-top-2">
      <FormHeader title="Pick add-ons" description="Add-ons help enhance your gaming experience." />
      <Addon
        property="online"
        title="Online service"
        description="Access to multiplayer games"
        monthlyCost={1}
        yearlyCost={10}
        isMonthly={isMonthly}
      />
      <Addon
        property="storage"
        title="Larger storage"
        description="Extra 1TB of cloud save"
        monthlyCost={2}
        yearlyCost={20}
        isMonthly={isMonthly}
      />
      <Addon
        property="profile"
        title="Customizable profile"
        description="Custom theme on your profile"
        monthlyCost={2}
        yearlyCost={20}
        isMonthly={isMonthly}
      />
    </form>
  );
}
