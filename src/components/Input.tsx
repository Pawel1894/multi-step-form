import React from 'react'

type Props = {
  label: string;
  isRequired: boolean;
  errorMsg?: string;    
  inputAttributes?: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
}

export default function Input({label, isRequired, errorMsg, inputAttributes}: Props) {
  return (
    <div>
      <label>{label}</label>     
      <input {...inputAttributes} />
    </div>
  )
}