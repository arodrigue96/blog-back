import Posts from "../Post/Post.js";

const post1: Posts = new Posts(
  "Exploring the Future of AI",
  "Ana Torres",
  "AI is transforming our lives, from automation to personalization. What changes will we see in the coming years? Discover how AI is redefining the world we know.",
  {
    imageUrl: "AI.webp",
    altImageText: "Human hand and robot hand",
  },
);

const post2: Posts = new Posts(
  "Innovation in Renewable Energy",
  "Carlos Méndez",
  "Renewable energies are revolutionizing the global energy landscape. From solar to wind, discover how we are moving towards a more sustainable and cleaner future.",
  {
    imageUrl: "solar-panels.webp",
    altImageText: "A field with solar panels",
  },
);

const posts: Posts[] = [post1, post2];

export default posts;
