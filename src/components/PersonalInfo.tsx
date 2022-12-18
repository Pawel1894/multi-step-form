import React from "react";
import { useDispatch } from "react-redux";
import { ERRORS } from "../enums";
import { PersonalInfoProperty } from "../types";
import { actionForm } from "../redux/form-slice";
import FormHeader from "./FormHeader";
import Input from "./Input";
import { containsNumbers, isValidEmail, isValidTel } from "../helpers/helpers";

function isPersonalInfoProperty(value: string): value is PersonalInfoProperty {
  return ["name", "phone", "email"].includes(value);
}

export default function PersonalInfo() {
  const dispatch = useDispatch();

  function isNameInvalid(name: string) {
    if (!name) {
      return {
        isInvalid: true,
        errorMsg: ERRORS.REQUIRED,
      };
    }

    if (containsNumbers(name)) {
      return {
        isInvalid: true,
        errorMsg: ERRORS.NUMBERS,
      };
    }

    return {
      isInvalid: false,
      errorMsg: "",
    };
  }

  function isEmailInvalid(email: string) {
    if (!email) {
      return {
        isInvalid: true,
        errorMsg: ERRORS.REQUIRED,
      };
    }

    if (!isValidEmail(email)) {
      return {
        isInvalid: true,
        errorMsg: ERRORS.EMAIL,
      };
    }

    return {
      isInvalid: false,
      errorMsg: "",
    };
  }

  function isTelInvalid(tel: string) {
    if (!tel) {
      return {
        isInvalid: true,
        errorMsg: ERRORS.REQUIRED,
      };
    }

    if (!tel.startsWith("+")) {
      return {
        isInvalid: true,
        errorMsg: ERRORS.START_TEL,
      };
    }

    if (!isValidTel(tel.replaceAll(" ", ""))) {
      return {
        isInvalid: true,
        errorMsg: ERRORS.INVALID_TEL,
      };
    }

    return {
      isInvalid: false,
      errorMsg: "",
    };
  }

  function Validate(property: PersonalInfoProperty, value: string) {
    switch (property) {
      case "name":
        return isNameInvalid(value);
      case "email":
        return isEmailInvalid(value);
      case "phone":
        return isTelInvalid(value);
      default:
        return {
          isInvalid: true,
          errorMsg: "",
        };
    }
  }

  function updateValue(e: React.ChangeEvent<HTMLInputElement>) {
    const property = e.target.getAttribute("property");
    if (property && isPersonalInfoProperty(property)) {
      const { isInvalid, errorMsg } = Validate(property, e.target.value);

      dispatch(
        actionForm.updatePersonalInfo({
          property,
          value: e.target.value,
          isInvalid,
          errorMsg,
        })
      );
    }
  }

  return (
    <form className="form-flow margin-top-2">
      <FormHeader title="Personal info" description="Please provide your name, email address, and phone number." />
      <Input
        property={"name"}
        label="Name"
        isRequired={true}
        type="text"
        placeholder="e.g. Stephen King"
        onChangeHandler={updateValue}
      />
      <Input
        property={"email"}
        label="Email Address"
        isRequired={true}
        type="email"
        placeholder="e.g. stephenking@lorem.com"
        onChangeHandler={updateValue}
      />
      <Input
        property={"phone"}
        label="Phone Number"
        isRequired={true}
        type="tel"
        placeholder="e.g. +1 234 567 890"
        onChangeHandler={updateValue}
      />
    </form>
  );
}
