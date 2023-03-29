import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { folders as allFolders } from "@/const";
import { Folder, Folders } from "@/types";

const initialState: Folders = {
  folders: allFolders,
};

export const folders = createSlice({
  name: "folders",
  initialState,
  reducers: {
    addFolder(state: Folders, action: PayloadAction<Folder>) {
      state.folders.push(action.payload);
    },
    removeFolder(state: Folders, action: PayloadAction<number>) {
      state.folders = [...state.folders].filter(
        (folder) => folder.id !== action.payload
      );
    },
    renameFolder(state: Folders, action: PayloadAction<Folder>) {},
  },
});

export const { addFolder, removeFolder, renameFolder } = folders.actions;
export default folders.reducer;