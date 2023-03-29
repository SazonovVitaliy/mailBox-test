import { mails } from "@/const";
import { Mail } from "@/types";
import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";

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
        <div key={mail.id}>{mail.from}</div>
      ))}
    </>
  );
};

export default GeneralMailPage;
