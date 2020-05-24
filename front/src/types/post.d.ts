import { Tag } from "./tag";

export type Post = {
  id?: string;
  title: string;
  content: string;
  write: string;
  type?: string;
  imgUrl?: string;
  url?: string;
  authLevel?: string;
  useYn?: string;
  tags?: Tag[];
  createdAt: string;
  updatedAt?: string;
};
