export interface CommentType {
  id: number;
  content: string;
  createdAt: string;
  score: number;
  user: {
    username: string;
    image: {
      png: string;
      webp: string;
    };
  };
}
