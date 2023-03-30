import { FC } from "react";
import { useRouter } from "next/router";

import { useAppSelector } from "@/store/hooks";

import MailsList from "@/components/MailsList/MailsList";

import s from "./generalPage.module.scss";

const GeneralPage: FC = () => {
  const { mails } = useAppSelector((state) => state.mails);
  const { asPath } = useRouter();

  const allMails = mails?.filter((mail) => mail.folder === asPath.slice(1));

  return (
    <>
      {allMails.length ? (
        <MailsList mails={allMails} />
      ) : (
        <div className={s.text}>Нет сообщений</div>
      )}
    </>
  );
};

export default GeneralPage;
