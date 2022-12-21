export interface IInput {
  value: string;
  isInvalid: boolean;
  isChanged: boolean;
  errorMsg: string;
}

export interface IAddon {
  online: {
    isActive: boolean;
    title: string;
  };
  storage: {
    isActive: boolean;
    title: string;
  };
  profile: {
    isActive: boolean;
    title: string;
  };
}

export interface ICosts {
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
    online: {
      month: number;
      year: number;
    };
    storage: {
      month: number;
      year: number;
    };
    profile: {
      month: number;
      year: number;
    };
  };
}
