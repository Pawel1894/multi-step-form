import React from 'react'
import styles from "./styles/Step.module.css"

type Props = {
  step: number;
  setStep: (state: number) => void;
  stepNumber: number;
  label: string;  
}

export default function Step({step, setStep, stepNumber, label}: Props) {
  return (
    <div className={`${styles["step"]} flex-center`}>
      <div className={`${styles["step-indicator"]}  ${step === stepNumber && styles["active"]} flex-center-center`}>{stepNumber}</div>
      <div className={`${styles["infos"]} flex flex-dir-col`}>
        <span className={`${styles["step-number"]}`}>STEP {stepNumber}</span>
        <span className={`${styles["label"]}`}>{label}</span>
      </div>
    </div>
  )
}