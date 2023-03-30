import { Folder } from "@/types/folders";

export const inbox: Folder = { id: 1, name: "Входящие", route: "/inbox" };
export const sent: Folder = { id: 2, name: "Отправленные", route: "/sent" };
export const drafts: Folder = { id: 3, name: "Черновики", route: "/drafts" };
export const spam: Folder = { id: 4, name: "Спам", route: "/spam" };
export const trash: Folder = { id: 5, name: "Удаленные", route: "/trash" };

export const folders: Folder[] = [inbox, sent, drafts, spam, trash];
