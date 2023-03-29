import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Mail } from "@/types";

interface dragMail {
  //???
  dragMail: Object;
}

const initialState: dragMail = {
  dragMail: {},
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
