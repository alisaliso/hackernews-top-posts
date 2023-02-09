export interface IPost {
  id: number;
  url: string;
  title: string;
  by: string;
  time: number;
  score: number;
}

export interface IUser {
  id: number;
  karma: number;
}

export interface IPostsData extends IPost {
  karma: number;
}

export interface IPostsComponent {
  posts?: IPostsData[];
}

export interface IPostComponent {
  post: IPostsData;
}
