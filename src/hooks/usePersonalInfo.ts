import React from "react";
import { ERRORS } from "../enums";
import { containsNumbers, isValidEmail } from "../helpers/helpers";
import { actionForm } from "../redux/form-slice";
import { TPersonalInfoProperty } from "../types";
import { useAppDispatch } from "./useAppDispatch";

export default function usePersonalInfo() {
  const dispatch = useAppDispatch();

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

  function validate(property: TPersonalInfoProperty, value: string) {
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

  function updatePropertyValidation(property: TPersonalInfoProperty, value: string) {
    const { isInvalid, errorMsg } = validate(property, value);

    dispatch(
      actionForm.validatePersonalInfo({
        property,
        isInvalid,
        errorMsg,
      })
    );
  }

  return { validate, updatePropertyValidation };
}