import { FC, useEffect, useState } from "react";

import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { addFolder } from "@/store/slices/folders";

import SidebarItem from "./SidebarItem/SidebarItem";

import { Folder } from "@/types";

import s from "./sidebar.module.scss";

const Sidebar: FC = () => {
  const dispatch = useAppDispatch();

  const { folders } = useAppSelector((state) => state.folders);
  const [allFolders, setAllFolders] = useState<Folder[]>(folders);
  const [folderName, setFolderName] = useState<string>("");
  const [addInput, setAddInput] = useState<boolean>(false);

  useEffect(() => {
    setAllFolders(folders);
  }, [folders]);

  const handleAddFolder = () => {
    const newFolder: Folder = {
      id: folders.length + 1,
      name: folderName,
      route: (folders.length + 11).toString(),
      button: true,
    };
    folderName.length && dispatch(addFolder(newFolder));
    setFolderName("");
    setAddInput(false);
  };

  return (
    <div className={s.wrapper}>
      <ul className={s.sidebarMenu}>
        {allFolders.map((folder) => (
          <SidebarItem folder={folder} key={folder.id} />
        ))}
      </ul>
      <div className={s.button} onClick={() => setAddInput((prev) => !prev)}>
        Новая папка &#x1f4c1;
      </div>
      {addInput && (
        <div className={s.input}>
          <input
            className={s.inputField}
            type="text"
            placeholder="Введите название"
            onChange={(e) => setFolderName(e.target.value)}
          />
          <div className={s.button} onClick={handleAddFolder}>
            {" "}
            &#43;
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
