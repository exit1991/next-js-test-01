export type FileNode = {
  name: string;
  type: 'file';
};

export type FolderNode = {
  name: string;
  type: 'folder';
  children: Array<FolderNode | FileNode>;
};

export type FileStructure = Array<FolderNode | FileNode>;

export const fileStructure: FileStructure = [
  {
    name: 'src',
    type: 'folder',
    children: [
      {
        name: 'components',
        type: 'folder',
        children: [
          { name: 'Header.tsx', type: 'file' },
          { name: 'Sidebar.tsx', type: 'file' },
        ],
      },
      { name: 'index.tsx', type: 'file' },
    ],
  },
  {
    name: 'public',
    type: 'folder',
    children: [
      { name: 'favicon.ico', type: 'file' },
      { name: 'index.html', type: 'file' },
    ],
  },
];
