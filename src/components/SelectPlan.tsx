import FormHeader from "./FormHeader";
import PlanButtons from "./PlanButtons";
import PlanToggle from "./PlanToggle";
import styles from "./styles/SelectedPlan.module.css";

export default function SelectPlan() {
  return (
    <form className="form-flow margin-top-2">
      <FormHeader title="Select your plan" description="You have option of monthly or yearly billing." />
      <div className={`${styles["content"]}`}>
        <PlanButtons />
      </div>
      <PlanToggle />
    </form>
  );
}
