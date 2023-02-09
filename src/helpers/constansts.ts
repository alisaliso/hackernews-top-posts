import dayjs from 'dayjs';

import { IPostsData, IPost, IUser } from './types';

export const formatUnixDateFromNow = (date: number) => {
  return dayjs.unix(date).fromNow();
};

export const formatUnixDate = (date: number) => {
  return dayjs.unix(date).format();
};

export const getRandomColor = () => {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
};

export const constructPost = (posts: IPost[], users: IUser[]): IPostsData[] => {
  return posts.map((post: IPost, index: number): IPostsData => {
    return { ...post, karma: users[index].karma };
  });
};

export const sortPosts = (posts: IPostsData[]) => {
  return posts.sort(function (post1: IPostsData, post2: IPostsData) {
    if (post1.score < post2.score) {
      return -1;
    }

    if (post1.score < post2.score) {
      return 1;
    }

    return 0;
  });
};
