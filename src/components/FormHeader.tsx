import React from "react";
import styles from "./styles/FormHeader.module.css";

type Props = {
  title: string;
  description: string;
};

export default function FormHeader({ title, description }: Props) {
  return (
    <div>
      <h1 className={`${styles["title"]}`}>{title}</h1>
      <p className={`${styles["description"]}`}>{description}</p>
    </div>
  );
}
