export type FileItem = {
  id: string;
  title: string;
  body: string;
  createdAt: number;
}

export const defaultFiles: FileItem[] = [
  {
    id: '1',
    title: 'title 1',
    body: 'this is body 1',
    createdAt: 1695100695
  },
  {
    id: '2',
    title: 'title 2',
    body: '## this is body 2',
    createdAt: 1695102358
  },
  {
    id: '3',
    title: 'title 3',
    body: 'this is body 3',
    createdAt: 1695546358
  }
]
