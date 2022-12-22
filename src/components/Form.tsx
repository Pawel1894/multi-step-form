import { useState } from "react";
import Buttons from "./Buttons";
import PersonalInfo from "./personalInfo/PersonalInfo";
import PickAddons from "./addons/PickAddons";
import SelectPlan from "./plan/SelectPlan";
import Steps from "./Steps";
import styles from "./styles/Form.module.css";
import Summary from "./summary/Summary";
import ThankYou from "./ThankYou";
import { useAppSelector } from "../hooks/useAppSelector";

export default function Form() {
  const [step, setStep] = useState<number>(1);
  const isSubmited = useAppSelector((state) => state.form.isSubmited);

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
          {isSubmited ? (
            <ThankYou />
          ) : (
            <>
              {renderContent()}
              <Buttons step={step} setStep={setStep} />
            </>
          )}
        </form>
      </div>
    </div>
  );
}
