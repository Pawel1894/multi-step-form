import React from "react";
import { useAppSelector } from "../../hooks/useAppSelector";
import FormHeader from "../FormHeader";
import Costs from "./Costs";

interface Props {
  setStep: (value: number) => void;
}

export default function Summary({ setStep }: Props) {
  return (
    <div className="flow margin-top-2">
      <FormHeader title="Finishing up" description="Double-check everything looks OK before confirming." />
      <Costs setStep={setStep} />
    </div>
  );
}
