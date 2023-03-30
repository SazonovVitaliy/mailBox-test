import { FC, useEffect, useState } from "react";

import Button from "@/components/Button/Button";
import Input from "@/components/Input/Input";

import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { addFolder } from "@/store/slices/folders";
import { Folder } from "@/types/folders";

import SidebarItem from "./SidebarItem/SidebarItem";

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
      withButton: true,
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
      <Button className={s.button} onClick={() => setAddInput((prev) => !prev)}>
        Новая папка &#x1f4c1;
      </Button>
      {addInput && (
        <div className={s.input}>
          <Input
            value={folderName}
            className={s.inputField}
            onChange={(e) => setFolderName(e.target.value)}
          />
          <Button className={s.button} onClick={handleAddFolder}>
            {" "}
            &#43;
          </Button>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
