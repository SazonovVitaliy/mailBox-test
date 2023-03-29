import { FC, ReactNode } from "react";
import Sidebar from "./Sidebar/Sidebar";

import s from "./layout.module.scss";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className={s.wrapper}>
      <Sidebar />
      <main className={s.main}>{children}</main>
    </div>
  );
};

export default Layout;
