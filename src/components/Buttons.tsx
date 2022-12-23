import React from "react";
import { useDispatch } from "react-redux";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { useAppSelector } from "../hooks/useAppSelector";
import usePersonalInfo from "../hooks/usePersonalInfo";
import { submitForm } from "../redux/form-action";
import { actionForm } from "../redux/form-slice";
import { TPersonalInfoProperty } from "../types";
import Button from "./Button";
import styles from "./styles/Buttons.module.css";

interface Props {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

export default function Buttons({ step, setStep }: Props) {
  const personalInfo = useAppSelector((state) => state.form.personalInfo);
  const { updatePropertyValidation } = usePersonalInfo();
  const dispatch = useAppDispatch();

  function isStep1Valid() {
    if (personalInfo.email.isInvalid || personalInfo.name.isInvalid || personalInfo.phone.isInvalid)
      return false;

    return true;
  }

  function updateStep() {
    switch (step) {
      case 1:
        if (isStep1Valid()) setStep((prev) => prev + 1);
        else {
          updatePropertyValidation("email", personalInfo.email.value);
          updatePropertyValidation("name", personalInfo.name.value);
          updatePropertyValidation("phone", personalInfo.phone.value);
        }
        break;

      default:
        setStep((prev) => prev + 1);
    }
  }

  function goBack() {
    if (step > 1) setStep((prev) => prev - 1);
  }

  return (
    <div className={`${styles["container"]}`}>
      {step > 1 ? (
        <Button styleMode="text" text="Go Back" btnAttributes={{ type: "button", onClick: goBack }} />
      ) : null}
      <div className={`${styles["next-btn"]}`}>
        {step === 4 ? (
          <Button
            styleMode="primary"
            text="Confirm"
            btnAttributes={{ type: "button", onClick: () => dispatch(submitForm()) }}
          />
        ) : (
          <Button
            styleMode="default"
            text="Next Step"
            btnAttributes={{ type: "button", onClick: updateStep }}
          />
        )}
      </div>
    </div>
  );
}
