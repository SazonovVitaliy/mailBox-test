import { DragEvent, FC } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import { addDragMail } from "@/store/slices/dragAndDrop";
import { useAppDispatch } from "@/store/hooks";

import { Mail } from "@/types";

import cn from "classnames";
import s from "./mailsListItem.module.scss";

interface MailsListItemProps {
  mail: Mail;
  className?: string;
}

const MailsListItem: FC<MailsListItemProps> = ({ mail, className }) => {
  const { route } = useRouter();
  const dispatch = useAppDispatch();
  function dragStartHandler(e: DragEvent<HTMLDivElement>, mail: Mail): void {
    dispatch(addDragMail(mail));
  }

  function dragLeaveHandler(e: DragEvent<HTMLDivElement>): void {}

  function dragEndHandler(e: DragEvent<HTMLDivElement>): void {}

  function dragOverhandler(e: DragEvent<HTMLDivElement>): void {
    e.preventDefault();
  }

  function dropHandler(e: DragEvent<HTMLDivElement>, mail: Mail): void {
    e.preventDefault();
  }

  return (
    <li className={cn(className)}>
      <Link href={`${route}/${mail.id}`} className={s.wrapper}>
        <div
          className={s.listItem}
          draggable={true}
          onDragStart={(e) => dragStartHandler(e, mail)}
          onDragLeave={(e) => dragLeaveHandler(e)}
          onDragEnd={(e) => dragEndHandler(e)}
          onDragOver={(e) => dragOverhandler(e)}
          onDrop={(e) => dropHandler(e, mail)}
        >
          <div className={s.text}>{mail.from}</div>
          <div className={s.text}>{mail.msg}</div>
          <div className={s.text}>{mail.time}</div>
        </div>
      </Link>
    </li>
  );
};

export default MailsListItem;
