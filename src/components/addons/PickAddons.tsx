import React from "react";
import { useAppSelector } from "../../hooks/useAppSelector";
import FormHeader from "../FormHeader";
import Addon from "./Addon";

export default function PickAddons() {
  const isMonthly = useAppSelector((state) => state.form.plan.isMonthly);
  const addons = useAppSelector((state) => state.form.addon);
  return (
    <div className="form-content flow margin-top-2">
      <FormHeader title="Pick add-ons" description="Add-ons help enhance your gaming experience." />
      <Addon
        property="online"
        title={addons.online.title}
        description="Access to multiplayer games"
        monthlyCost={1}
        yearlyCost={10}
        isMonthly={isMonthly}
        isActive={addons.online.isActive}
      />
      <Addon
        property="storage"
        title={addons.storage.title}
        description="Extra 1TB of cloud save"
        monthlyCost={2}
        yearlyCost={20}
        isMonthly={isMonthly}
        isActive={addons.storage.isActive}
      />
      <Addon
        property="profile"
        title={addons.profile.title}
        description="Custom theme on your profile"
        monthlyCost={2}
        yearlyCost={20}
        isMonthly={isMonthly}
        isActive={addons.profile.isActive}
      />
    </div>
  );
}
