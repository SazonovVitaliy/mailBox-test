import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Mail } from "@/types";

interface dragMail {
  dragMail: Mail;
}

const initialState: dragMail = {
  dragMail: {
    id: 0,
    from: "",
    address: "",
    time: "",
    msg: "",
    title: "",
    folder: "",
    isRead: false,
  },
};

export const dragMail = createSlice({
  name: "dropMail",
  initialState,
  reducers: {
    addDragMail(state: dragMail, action: PayloadAction<Mail>) {
      state.dragMail = action.payload;
    },
  },
});

export const { addDragMail } = dragMail.actions;
export default dragMail.reducer;
