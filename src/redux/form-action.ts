import { Dispatch } from "redux";

export const fetchClient = (): any => {
  return async (dispatch: Dispatch, getState: any) => {
    var currentState = getState().clientDetails.tmpData;
  };
};
