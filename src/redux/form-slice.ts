import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { TAddon, TPersonalInfoProperty, TPlan } from "../types";
import { IAddon, IInput } from "../interface";

interface IUpdatePersonalInfo {
  property: TPersonalInfoProperty;
  value: string;
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

interface ICosts {
  plan: {
    arcade: {
      month: number;
      year: number;
    };
    advanced: {
      month: number;
      year: number;
    };
    pro: {
      month: number;
      year: number;
    };
  };
  addon: {
    onlineService: {
      month: number;
      year: number;
    };
    largerStorage: {
      month: number;
      year: number;
    };
    customProfile: {
      month: number;
      year: number;
    };
  };
}

interface IForm {
  personalInfo: IPersonalInfo;
  plan: TPlan;
  addon: IAddon;
  costs: ICosts;
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
    online: false,
    profile: false,
    storage: false,
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
      onlineService: {
        month: 1,
        year: 10,
      },
      largerStorage: {
        month: 2,
        year: 20,
      },
      customProfile: {
        month: 2,
        year: 20,
      },
    },
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
    toggleAddon: (state, action: PayloadAction<IUpdateAddon>) => {
      state.addon[action.payload.property] = !state.addon[action.payload.property];
    },
  },
});

export default formSlice.reducer;
export const actionForm = formSlice.actions;
