import React from 'react'

type Props = {
  title: string;
  description: string;
}

export default function FormHeader({title, description}: Props) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  )
}