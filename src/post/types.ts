export interface PostImage {
  imageUrl: string;
  altImageText: string;
}

export interface PostStructure extends PostImage {
  id: number;
  title: string;
  date: string;
  author: string;
  content: string;
}
