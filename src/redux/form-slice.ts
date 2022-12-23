import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { TAddon, TPersonalInfoProperty, TPlan } from "../types";
import { IAddon, ICosts, IInput } from "../interface";

interface IEditPersonalInfo {
  property: TPersonalInfoProperty;
  value?: string;
  isInvalid: boolean;
  errorMsg: string;
}

interface IUpdateAddon {
  property: TAddon;
}

interface IPersonalInfo {
  name: IInput;
  email: IInput;
  phone: IInput;
}

interface IForm {
  personalInfo: IPersonalInfo;
  plan: TPlan;
  addon: IAddon;
  costs: ICosts;
  isSubmited: boolean;
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
  addon: {
    online: {
      isActive: false,
      title: "Online service",
    },
    profile: {
      isActive: false,
      title: "Larger storage",
    },
    storage: {
      isActive: false,
      title: "Customizable Profile",
    },
  },
  costs: {
    plan: {
      arcade: {
        month: 9,
        year: 90,
      },
      advanced: {
        month: 12,
        year: 120,
      },
      pro: {
        month: 15,
        year: 150,
      },
    },
    addon: {
      online: {
        month: 1,
        year: 10,
      },
      storage: {
        month: 2,
        year: 20,
      },
      profile: {
        month: 2,
        year: 20,
      },
    },
  },
  isSubmited: false,
};

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    updatePersonalInfo: (state, action: PayloadAction<IEditPersonalInfo>) => {
      if (action.payload.value) state.personalInfo[action.payload.property].value = action.payload.value;
      state.personalInfo[action.payload.property].isInvalid = action.payload.isInvalid;
      state.personalInfo[action.payload.property].errorMsg = action.payload.errorMsg;
      state.personalInfo[action.payload.property].isChanged = true;
    },
    validatePersonalInfo: (state, action: PayloadAction<IEditPersonalInfo>) => {
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
    toggleAddon: (state, action: PayloadAction<IUpdateAddon>) => {
      state.addon[action.payload.property].isActive = !state.addon[action.payload.property].isActive;
    },
    setSubmit: (state) => {
      state.isSubmited = true;
    },
  },
});

export default formSlice.reducer;
export const actionForm = formSlice.actions;
