import { Dispatch } from "redux";
import { actionForm } from "./form-slice";
import { RootState } from "./store";

type TGetState = () => RootState;

export const submitForm = () => {
  return (dispatch: Dispatch, getState: TGetState) => {
    dispatch(actionForm.setSubmit());
    const formData = getState();
    // REQUEST TO BACKEND
  };
};
