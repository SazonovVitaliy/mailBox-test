export interface Mail {
  readonly id: number;
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
