import { useState } from "react";
import Buttons from "./Buttons";
import PersonalInfo from "./personalInfo/PersonalInfo";
import PickAddons from "./addons/PickAddons";
import SelectPlan from "./plan/SelectPlan";
import Steps from "./Steps";
import styles from "./styles/Form.module.css";
import Summary from "./summary/Summary";

export default function Form() {
  const [step, setStep] = useState<number>(2);

  function renderContent() {
    switch (step) {
      case 1:
        return <PersonalInfo />;
      case 2:
        return <SelectPlan />;
      case 3:
        return <PickAddons />;
      case 4:
        return <Summary setStep={setStep} />;

      default:
        return null;
    }
  }

  return (
    <div className={`${styles["card"]}`}>
      <Steps step={step} setStep={setStep} />
      <div className={`${styles["content"]}`}>
        <form className={`${styles["content-container"]}`}>
          {renderContent()}
          <Buttons step={step} setStep={setStep} />
        </form>
      </div>
    </div>
  );
}

// TODO: ADD SPECIFIC ERRORS ONLY ON FOCUS OUT
