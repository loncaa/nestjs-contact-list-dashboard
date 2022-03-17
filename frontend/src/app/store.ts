import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

import contactReducer from "./contact/contactSlice";
import contactUiReducer from "./contact/contactUiSlice";

export const store = configureStore({
  reducer: {
    contact: contactReducer,
    contactUi: contactUiReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
