import { ReactNode } from "react";

export interface Folder {
  id: number;
  name: string;
  route: string;
  button?: boolean;
}

export interface Folders {
  folders: Folder[];
}

export interface Mail {
  id: number;
  from: string;
  address: string;
  time: string;
  msg: string;
  title: string;
  folder: string;
  isRead: boolean;
}

export interface Mails {
  mails: Mail[];
}
