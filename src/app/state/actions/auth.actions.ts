import { createAction, props } from "@ngrx/store";

export const LOGIN_START = "[auth page] login start";
export const LOGIN_SUCCESS = "[auth page] login success";
export const LOGIN_FAIL = "[auth page] login fail";
export const REGISTER_START = "[auth page] register start";
export const REGISTER_SUCCESS = "[auth page] register success";
export const REGISTER_FAIL = "[auth page] register fail";
export const LOGOUT = "[auth page] logout ";
export const LOGIN_GOOGLE_START = "[auth page] login google start";
export const LOGIN_GOOGLE_SUCCESS = "[auth page] login google success";
export const loginStart = createAction(
  LOGIN_START,
  props<{ email: string; password: string }>()
);
export const loginSuccess = createAction(
  LOGIN_SUCCESS,
  props<{ token: string; email: string }>()
);

export const loginFail = createAction(LOGIN_FAIL);

export const registerStart = createAction(
  REGISTER_START,
  props<{ email: string; password: string; name: string }>()
);

export const registerSuccess = createAction(
  REGISTER_SUCCESS,
  props<{ token: string; email: string }>()
);

export const registerFail = createAction(REGISTER_FAIL);

export const logOut = createAction(LOGOUT);

export const loginGoogle = createAction(LOGIN_GOOGLE_START);

export const loginGoogleSuccess = createAction(
  LOGIN_GOOGLE_SUCCESS,
  props<{ token: string; email: string }>()
);
