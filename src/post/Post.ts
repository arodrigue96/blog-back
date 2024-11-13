import { type PostImage, type PostStructure } from "./types";

let nextId = 0;

class Post implements PostStructure {
  public id: number;
  public imageUrl: string;
  public altImageText: string;
  public date: string;

  constructor(
    public title: string,
    public author: string,
    public content: string,
    { imageUrl, altImageText }: PostImage,
  ) {
    this.id = nextId++;
    this.date = Date();
    this.altImageText = altImageText;
    this.imageUrl = imageUrl;
  }
}

export default Post;
