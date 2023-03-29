import { configureStore } from "@reduxjs/toolkit";

import dragMail from "./slices/dragAndDrop";
import folders from "./slices/folders";
import mails from "./slices/mails";

export const store = configureStore({
  reducer: {
    folders,
    mails,
    dragMail,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
