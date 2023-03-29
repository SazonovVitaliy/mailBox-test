import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { mails as allMails } from "@/const";
import { Mail, Mails } from "@/types";

const initialState: Mails = {
  mails: allMails,
};

export const mails = createSlice({
  name: "mails",
  initialState,
  reducers: {
    addDropMail(state: Mails, action: PayloadAction<Mail>) {
      state.mails = [...state.mails, action.payload];
    },
    removeDragMail(state: Mails, action: PayloadAction<Mail>) {
      state.mails = [...state.mails].filter((m) => m.id !== action.payload.id);
    },
  },
});

export const { addDropMail, removeDragMail } = mails.actions;
export default mails.reducer;
