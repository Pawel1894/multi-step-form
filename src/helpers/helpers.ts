import { IAddon, ICosts } from "../interface";
import { TAddon, TCost, TPersonalInfoProperty, TPlan } from "../types";

export function containsNumbers(str: string) {
  return /\d/.test(str);
}

export function isValidEmail(email: string) {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}

export function formatCost(cost: number, type: TCost) {
  return `$${cost}/${type === "yearly" ? "yr" : "mo"}`;
}

export function isNumbersOnly(str: string) {
  if (str.match(/^[0-9]+$/) != null) return true;
  else return false;
}

export function getSelectedPlanCost(costs: ICosts, plan: TPlan) {
  if (plan.isMonthly) return costs.plan[plan.category].month;

  return costs.plan[plan.category].year;
}

export function getSelectedAddonsCost(costs: ICosts, addons: IAddon, isMonthly: boolean) {
  let totalCost = 0;

  for (const iterator of Object.entries(addons)) {
    if (iterator[1].isActive) {
      totalCost += isMonthly
        ? costs.addon[iterator[0] as TAddon].month
        : costs.addon[iterator[0] as TAddon].year;
    }
  }

  return totalCost;
}

export function isPersonalInfoProperty(value: string): value is TPersonalInfoProperty {
  return ["name", "phone", "email"].includes(value);
}
