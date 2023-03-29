import { DragEvent, FC, useState } from "react";
import Link from "next/link";

import { Folder } from "@/types";

import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { addFolder, removeFolder, renameFolder } from "@/store/slices/folders";
import { addDropMail, removeDragMail } from "@/store/slices/mails";

import s from "./sidebarItem.module.scss";

interface SidebarItemProps {
  folder: Folder;
}

const SidebarItem: FC<SidebarItemProps> = ({ folder }) => {
  const dispatch = useAppDispatch();

  const [folderName, setFolderName] = useState<string>("");
  const [renameInput, setRenameInput] = useState<boolean>(false);

  let { dragMail } = useAppSelector((state) => state.dragMail);
  const currFolder = folder.route.slice(1);

  const handleRemoveFolder = (id: number) => {
    dispatch(removeFolder(id));
  };

  function dragStartHandler(
    e: DragEvent<HTMLLIElement>,
    folder: Folder
  ): void {}

  function dragLeaveHandler(e: DragEvent<HTMLLIElement>): void {}

  function dragEndHandler(e: DragEvent<HTMLLIElement>): void {}

  function dragOverhandler(e: DragEvent<HTMLLIElement>): void {
    e.preventDefault();
  }

  function dropHandler(e: DragEvent<HTMLLIElement>, folder: Folder): void {
    e.preventDefault();
    dragAndDrop();
  }

  const dragAndDropHandler = () => {
    dispatch(removeDragMail(dragMail));
    dragMail = { ...dragMail, folder: currFolder };
    dispatch(addDropMail(dragMail));
  };

  const handleRenameFolder = () => {
    const rFolder: Folder = {
      ...folder,
      name: folderName,
    };
    folderName.length && dispatch(renameFolder(rFolder));
  };

  const dragAndDrop = () => {
    switch (currFolder) {
      case "inbox":
        dragAndDropHandler();
        break;
      case "sent":
        dragAndDropHandler();

        break;
      case "drafts":
        dragAndDropHandler();

        break;
      case "spam":
        dragAndDropHandler();

        break;
      case "trash":
        dragAndDropHandler();

        break;

      default:
        dispatch(removeDragMail(dragMail));
        dragMail = { ...dragMail, folder: folder.route };
        dispatch(addDropMail(dragMail));

        break;
    }
  };
  return (
    <>
      <li
        className={s.sidebarMenuItem}
        draggable={true}
        onDragStart={(e) => dragStartHandler(e, folder)}
        onDragLeave={(e) => dragLeaveHandler(e)}
        onDragEnd={(e) => dragEndHandler(e)}
        onDragOver={(e) => dragOverhandler(e)}
        onDrop={(e) => dropHandler(e, folder)}
      >
        <Link href={folder.route}>{folder.name}</Link>
        {folder.button && (
          <>
            <div className={s.sidebarMenuItem}>
              <div
                onClick={() => setRenameInput((prev) => !prev)}
                className={s.button}
              >
                &nbsp;&#x270E;
              </div>
              <div
                className={s.button}
                onClick={() => handleRemoveFolder(folder.id)}
              >
                &#x1f5d1;
              </div>
            </div>
          </>
        )}
      </li>
      {renameInput && (
        <div className={s.input}>
          <input
            type="text"
            placeholder="Введите название"
            onChange={(e) => setFolderName(e.target.value)}
          />
          <div className={s.button} onClick={ handleRenameFolder}>
            {" "}
            &#43;
          </div>
        </div>
      )}
    </>
  );
};

export default SidebarItem;
