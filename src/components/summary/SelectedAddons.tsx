import React, { useState } from "react";
import { formatCost } from "../../helpers/helpers";
import { IAddon, ICosts } from "../../interface";
import { TAddon } from "../../types";
import styles from "./styles/SelectedAddons.module.css";

type Props = { addons: IAddon; costs: ICosts; isMonthly: boolean };

export default function SelectedAddons({ addons, costs, isMonthly }: Props) {
  const [isAnyActive, setIsAnyActive] = useState(false);

  function getAddonCost(property: TAddon) {
    let cost = 0;
    if (isMonthly) cost = costs.addon[property].month;
    else cost = costs.addon[property].year;

    return `+${isMonthly ? formatCost(cost, "monthly") : formatCost(cost, "yearly")}`;
  }

  function renderSelectedAddons() {
    let html = [];

    for (const iterator of Object.entries(addons)) {
      if (iterator[1].isActive) {
        if (!isAnyActive) setIsAnyActive(true);
        html.push(
          <div className={`${styles["item"]} flex-center-space-between `} key={iterator[0]}>
            <span className={`${styles["title"]}`}>{iterator[1].title}</span>
            <span className={`${styles["cost"]}`}>{getAddonCost(iterator[0] as TAddon)}</span>
          </div>
        );
      }
    }

    return html;
  }

  return (
    <div>
      {isAnyActive ? <div className={`${styles["header"]}`}></div> : null}
      {renderSelectedAddons()}
    </div>
  );
}
