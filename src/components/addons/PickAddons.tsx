import React from "react";
import FormHeader from "../FormHeader";

type Props = {};

export default function PickAddons({}: Props) {
  return (
    <form className="form-flow margin-top-2">
      <FormHeader title="Pick add-ons" description="Add-ons help enhance your gaming experience." />
    </form>
  );
}
