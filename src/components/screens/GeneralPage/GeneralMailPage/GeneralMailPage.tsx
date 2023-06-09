import { FC, useEffect, useState } from "react";
import { useRouter } from "next/router";

import { Mail } from "@/types/mails";
import { mails } from "@/shared/mocks/mails";

import s from "./generalMailPage.module.scss";

const GeneralMailPage: FC = () => {
  const { query } = useRouter();
  const [mailData, setMailData] = useState<Mail[]>();

  useEffect(() => {
    const data = mails?.filter((mail) => mail.id === Number(query.id));
    setMailData(data);
  }, []);

  return (
    <>
      {mailData?.map((mail) => (
        <div className={s.wrapper} key={mail.id}>
          <div className={s.header}>
            <div>from: {mail.from}</div>
            <div>{mail.time}</div>
          </div>
          <div>{mail.msg}</div>
        </div>
      ))}
    </>
  );
};

export default GeneralMailPage;
