export interface PostImage {
  imageUrl: string;
  altImageText: string;
}

export interface PostStructure extends PostImage {
  id: number;
  title: string;
  date: Date;
  author: string;
  content: string;
}
