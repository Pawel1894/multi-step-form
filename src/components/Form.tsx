import { useState } from "react";
import Buttons from "./Buttons";
import PersonalInfo from "./personalInfo/PersonalInfo";
import PickAddons from "./addons/PickAddons";
import SelectPlan from "./plan/SelectPlan";
import Steps from "./Steps";
import styles from "./styles/Form.module.css";

export default function Form() {
  const [step, setStep] = useState<number>(3);

  function renderContent() {
    switch (step) {
      case 1:
        return <PersonalInfo />;
      case 2:
        return <SelectPlan />;
      case 3:
        return <PickAddons />;

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
