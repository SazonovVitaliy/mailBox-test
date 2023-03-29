import MailsList from "@/components/MailsList/MailsList";
import { useAppSelector } from "@/store/hooks";
import { useRouter } from "next/router";
import { FC } from "react";
import s from "./customFolderPage.module.scss";

const CustomFolderPage: FC = () => {
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

export default CustomFolderPage;
