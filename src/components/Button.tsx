import React from "react";
import styles from "./styles/Button.module.css";

type Props = {
  styleMode: "text" | "default";
  text: string;
  btnAttributes?: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
};

export default function Button({ styleMode, text, btnAttributes }: Props) {
  return (
    <button className={`${styles[styleMode]}`} {...btnAttributes}>
      {text}
    </button>
  );
}
