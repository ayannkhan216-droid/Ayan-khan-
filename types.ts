
export interface User {
  id: number;
  username: string;
  avatar: string;
}

export interface Comment {
  id: number;
  user: User;
  text: string;
}

export interface Story {
  id: number;
  user: User;
  viewed: boolean;
}

export interface Post {
  id: number;
  user: User;
  image: string;
  caption: string;
  likes: number;
  comments: Comment[];
  timestamp: string;
}

export interface Reel {
  id: number;
  user: User;
  videoUrl: string;
  caption: string;
  likes: number;
  comments: number;
  shares: number;
}
