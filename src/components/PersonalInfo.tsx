import React from 'react'
import FormHeader from './FormHeader'
import Input from './Input'

enum ERRORS {
  REQUIRED = "This field is required"
}

type Props = {}

export default function PersonalInfo({}: Props) {
  return (
    <form>
      <FormHeader title='Personal info' description='Please provide your name, email address, and phone number.' />       
      <Input label='Name*' isRequired={true} errorMsg={ERRORS.REQUIRED} inputAttributes={{type: "text", placeholder: "e.g. Stephen King"}} />
      <Input label='Email Address*' isRequired={true} errorMsg={ERRORS.REQUIRED} inputAttributes={{type: "email", placeholder: "e.g. stephenking@lorem.com"}} />
      <Input label='Phone Number*' isRequired={true} errorMsg={ERRORS.REQUIRED} inputAttributes={{type: "tel", placeholder: "e.g. +1 234 567 890"}} />
    </form>
  )
}