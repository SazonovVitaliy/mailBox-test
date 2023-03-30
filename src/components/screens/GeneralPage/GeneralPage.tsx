import { FC, useEffect } from "react";
import { useRouter } from "next/router";

import MailsList from "@/components/MailsList/MailsList";
import { useAppSelector } from "@/store/hooks";

import s from "./generalPage.module.scss";

const GeneralPage: FC = () => {
  const { mails } = useAppSelector((state) => state.mails);
  const { asPath } = useRouter();

  const allMails = mails?.filter((mail) => mail.folder === asPath.slice(1));
  console.log(mails);
  console.log(allMails);

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
