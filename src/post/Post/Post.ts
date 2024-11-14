import { type PostStructure, type PostImage } from "./types";

class Post implements PostStructure {
  static nextId = 1;
  public id: number;
  public imageUrl: string;
  public altImageText: string;
  public date: Date;

  constructor(
    public title: string,
    public author: string,
    public content: string,
    { imageUrl, altImageText }: PostImage,
  ) {
    this.id = Post.nextId++;
    this.date = new Date();
    this.altImageText = altImageText;
    this.imageUrl = imageUrl;
  }
}

export default Post;
