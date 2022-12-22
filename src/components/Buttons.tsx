import React from "react";
import { useDispatch } from "react-redux";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { useAppSelector } from "../hooks/useAppSelector";
import { submitForm } from "../redux/form-action";
import Button from "./Button";
import styles from "./styles/Buttons.module.css";

interface Props {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

export default function Buttons({ step, setStep }: Props) {
  const personalInfo = useAppSelector((state) => state.form.personalInfo);
  const dispatch = useAppDispatch();

  function isStep1Valid() {
    if (personalInfo.email.isInvalid || personalInfo.name.isInvalid || personalInfo.phone.isInvalid)
      return false;

    return true;
  }

  function isDisabled(): boolean {
    switch (step) {
      case 1:
        return !isStep1Valid();

      default:
        false;
    }

    return false;
  }

  function updateStep() {
    switch (step) {
      case 1:
        if (isStep1Valid()) setStep((prev) => prev + 1);
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
            btnAttributes={{ type: "button", disabled: isDisabled(), onClick: () => dispatch(submitForm()) }}
          />
        ) : (
          <Button
            styleMode="default"
            text="Next Step"
            btnAttributes={{ type: "button", disabled: isDisabled(), onClick: updateStep }}
          />
        )}
      </div>
    </div>
  );
}
