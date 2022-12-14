import { useState } from "react"
import Buttons from "./Buttons"
import PersonalInfo from "./PersonalInfo"
import Steps from "./Steps"
import styles from "./styles/Form.module.css"

export default function Form() {
  const [step, setStep] = useState<number>(1)

  return (
    <div className={`${styles["form"]}`}>
      <Steps step={step} setStep={setStep} />
      <div>
        <PersonalInfo />
        <Buttons />
      </div>
    </div>
  )
}