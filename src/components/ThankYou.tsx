import React from "react";
import icon from "../assets/images/icon-thank-you.svg";
import styles from "./styles/ThankYou.module.css";

export default function Thankyou() {
  return (
    <div className={`${styles["container"]} form-content flex-center-center flex-dir-col text-center flow`}>
      <img src={icon} />
      <span className={`${styles["title"]}`}>Thank you!</span>
      <p className={`${styles["desc"]}`}>
        Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need
        support, please feel free to email us at support@loremgaming.com.
      </p>
    </div>
  );
}
