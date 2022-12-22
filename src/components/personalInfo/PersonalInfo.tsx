import React from "react";
import { useDispatch } from "react-redux";
import { ERRORS } from "../../enums";
import { actionForm } from "../../redux/form-slice";
import FormHeader from "../FormHeader";
import Input from "./Input";
import { containsNumbers, isValidEmail } from "../../helpers/helpers";
import { TPersonalInfoProperty } from "../../types";

function isPersonalInfoProperty(value: string): value is TPersonalInfoProperty {
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

    return {
      isInvalid: false,
      errorMsg: "",
    };
  }

  function Validate(property: TPersonalInfoProperty, value: string) {
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
    <div className="flow margin-top-2">
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
