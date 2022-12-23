import React, { HTMLInputTypeAttribute } from "react";
import { TPersonalInfoProperty } from "../../types";
import styles from "./styles/Input.module.css";
import { useAppSelector } from "../../hooks/useAppSelector";

type Props = {
  label: string;
  isRequired: boolean;
  property: TPersonalInfoProperty;
  type: HTMLInputTypeAttribute;
  placeholder: string;
  onBlurHandler: (e: React.FocusEvent<HTMLInputElement>) => void;
  onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function Input({
  label,
  isRequired,
  property,
  onBlurHandler,
  placeholder,
  onChangeHandler,
}: Props) {
  const { isInvalid, errorMsg, isChanged, value } = useAppSelector(
    (state) => state.form.personalInfo[property]
  );

  return (
    <div className="relative">
      <label className={`${styles["label"]}`}>
        {label} {isRequired ? "*" : null}
      </label>
      <input
        placeholder={placeholder}
        property={property}
        className={`${styles["input"]} ${isInvalid && isChanged ? styles["error"] : null}`}
        onBlur={onBlurHandler}
        defaultValue={value}
        onChange={(e) => {
          if (isChanged && isInvalid) onChangeHandler(e);
        }}
      />
      {isInvalid && isChanged ? <span className={`${styles["error-msg"]}`}>{errorMsg}</span> : null}
    </div>
  );
}
