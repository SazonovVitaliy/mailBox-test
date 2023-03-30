export interface Folder {
  id: number;
  name: string;
  route: string;
  withButton?: boolean;
}

export interface Folders {
  folders: Folder[];
}
