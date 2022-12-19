export interface IInput {
  value: string;
  isInvalid: boolean;
  isChanged: boolean;
  errorMsg: string;
}

export interface IAddon {
  online: boolean;
  storage: boolean;
  profile: boolean;
}
