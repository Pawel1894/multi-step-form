import React from 'react'
import Step from './Step';
import styles from "./styles/Steps.module.css"
import {STEPS} from "../enums"
import bgDesktop from "../assets/images/bg-sidebar-desktop.svg"

type Props = {
  step: number;
  setStep: (state: number) => void
}

export default function Steps({step, setStep}: Props) {
  return (
    <div className={`${styles["container"]}`}>
      <img src={bgDesktop} />
      <div>
      <Step label='your info' stepNumber={STEPS.STEP_1} step={step} setStep={setStep} />
      <Step label='select plan' stepNumber={STEPS.STEP_2} step={step} setStep={setStep} />
      <Step label='add-ons' stepNumber={STEPS.STEP_3} step={step} setStep={setStep} />
      <Step label='summary' stepNumber={STEPS.STEP_4} step={step} setStep={setStep} />
      </div>
    </div>
  )
}