import { Mail } from "@/types";
import { FC } from "react";

import cn from "classnames";

import MailsListItem from "./MailsListItem/MailsListItem";

import s from "./mailsList.module.scss";

interface MailsListProps {
  mails: Mail[];
  className?: string;
}

const MailsList: FC<MailsListProps> = ({ mails, className }) => {
  return (
    <ul>
      {mails.map((mail) => (
        <MailsListItem
          mail={mail}
          key={mail.id}
          className={cn(s.listItem, className)}
        />
      ))}
    </ul>
  );
};

export default MailsList;
