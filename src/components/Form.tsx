import { useState } from "react";
import Buttons from "./Buttons";
import PersonalInfo from "./PersonalInfo";
import SelectPlan from "./SelectPlan";
import Steps from "./Steps";
import styles from "./styles/Form.module.css";

export default function Form() {
  const [step, setStep] = useState<number>(1);

  function renderContent() {
    switch (step) {
      case 1:
        return <PersonalInfo />;
      case 2:
        return <SelectPlan />;

      default:
        return null;
    }
  }

  return (
    <div className={`${styles["card"]}`}>
      <Steps step={step} setStep={setStep} />
      <div className={`${styles["content"]}`}>
        <div className={`${styles["content-container"]}`}>
          {renderContent()}
          <Buttons step={step} setStep={setStep} />
        </div>
      </div>
    </div>
  );
}
