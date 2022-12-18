import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { PersonalInfoProperty, TPlan } from "../types";
import { IInput } from "../interface";

interface IUpdatePersonalInfo {
  property: PersonalInfoProperty;
  value: string;
  isInvalid: boolean;
  errorMsg: string;
}

interface IPersonalInfo {
  name: IInput;
  email: IInput;
  phone: IInput;
}

interface IForm {
  personalInfo: IPersonalInfo;
  plan: TPlan;
}

const initialState: IForm = {
  personalInfo: {
    email: {
      value: "",
      isChanged: false,
      isInvalid: true,
      errorMsg: "",
    },
    name: {
      value: "",
      isChanged: false,
      isInvalid: true,
      errorMsg: "",
    },
    phone: {
      value: "",
      isChanged: false,
      isInvalid: true,
      errorMsg: "",
    },
  },
  plan: {
    category: "arcade",
    isMonthly: true,
  },
};

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    updatePersonalInfo: (state, action: PayloadAction<IUpdatePersonalInfo>) => {
      state.personalInfo[action.payload.property].value = action.payload.value;
      state.personalInfo[action.payload.property].isInvalid = action.payload.isInvalid;
      state.personalInfo[action.payload.property].errorMsg = action.payload.errorMsg;
      state.personalInfo[action.payload.property].isChanged = true;
    },
    setPlanCategory: (state, action) => {
      state.plan.category = action.payload;
    },
    setPlanIsMonthly: (state, action) => {
      state.plan.isMonthly = action.payload;
    },
  },
});

export default formSlice.reducer;
export const actionForm = formSlice.actions;
