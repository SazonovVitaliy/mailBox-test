import { DragEvent, FC, useState } from "react";
import Link from "next/link";

import Input from "@/components/Input/Input";
import Button from "@/components/Button/Button";

import { Folder } from "@/types/folders";

import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { removeFolder, renameFolder } from "@/store/slices/folders";
import { addDropMail, removeDragMail } from "@/store/slices/mails";

import s from "./sidebarItem.module.scss";

interface SidebarItemProps {
  folder: Folder;
}

const SidebarItem: FC<SidebarItemProps> = ({ folder }) => {
  const dispatch = useAppDispatch();

  const [folderName, setFolderName] = useState<string>("");
  const [renameInput, setRenameInput] = useState<boolean>(false);

  const { dragMail } = useAppSelector((state) => state.dragMail);
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
    const movedMail = { ...dragMail, folder: currFolder };
    dispatch(addDropMail(movedMail));
  };

  const handleRenameFolder = () => {
    const rFolder: Folder = {
      ...folder,
      name: folderName,
    };
    folderName.length && dispatch(renameFolder(rFolder));
    setRenameInput(false);
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
        const movedMail = { ...dragMail, folder: folder.route };
        dispatch(addDropMail(movedMail));

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
        {folder.withButton && (
          <>
            <div className={s.sidebarMenuItem}>
              <Button
                onClick={() => setRenameInput((prev) => !prev)}
                className={s.button}
              >
                &nbsp;&#x270E;
              </Button>
              <Button
                className={s.button}
                onClick={() => handleRemoveFolder(folder.id)}
              >
                &#x1f5d1;
              </Button>
            </div>
          </>
        )}
      </li>
      {renameInput && (
        <div className={s.input}>
          <Input
            value={folderName}
            className={s.inputField}
            type="text"
            placeholder="Введите название"
            onChange={(e) => setFolderName(e.target.value)}
          />
          <Button className={s.button} onClick={handleRenameFolder}>
            {" "}
            &#43;
          </Button>
        </div>
      )}
    </>
  );
};

export default SidebarItem;
