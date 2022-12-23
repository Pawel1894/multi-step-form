import React from "react";
import FormHeader from "../FormHeader";
import Input from "./Input";
import usePersonalInfo from "../../hooks/usePersonalInfo";
import { isPersonalInfoProperty } from "../../helpers/helpers";

export default function PersonalInfo() {
  const { updatePropertyValidation } = usePersonalInfo();

  function updateValue(e: React.ChangeEvent<HTMLInputElement>) {
    const property = e.target.getAttribute("property");
    if (property && isPersonalInfoProperty(property)) updatePropertyValidation(property, e.target.value);
  }

  return (
    <div className="form-content flow margin-top-2">
      <FormHeader
        title="Personal info"
        description="Please provide your name, email address, and phone number."
      />
      <Input
        property={"name"}
        label="Name"
        isRequired={true}
        type="text"
        placeholder="e.g. Stephen King"
        onChangeHandler={updateValue}
        onBlurHandler={updateValue}
      />
      <Input
        property={"email"}
        label="Email Address"
        isRequired={true}
        type="email"
        placeholder="e.g. stephenking@lorem.com"
        onChangeHandler={updateValue}
        onBlurHandler={updateValue}
      />
      <Input
        property={"phone"}
        label="Phone Number"
        isRequired={true}
        type="tel"
        placeholder="e.g. +1 234 567 890"
        onChangeHandler={updateValue}
        onBlurHandler={updateValue}
      />
    </div>
  );
}
