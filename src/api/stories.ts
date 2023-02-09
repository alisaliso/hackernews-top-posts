import { IPost, IUser } from '../helpers/types';

const URL_API = 'https://hacker-news.firebaseio.com/v0';

export const getUsersByPosts = async (posts: IPost[]): Promise<IUser[]> => {
  try {
    const usersPromises = posts.map((post: IPost) =>
      fetch(`${URL_API}/user/${post.by}.json`).then((response) =>
        response.json(),
      ),
    );

    return await Promise.all(usersPromises);
  } catch (err) {
    console.error(err);
  }

  return [];
};

export const getTopStories = async (): Promise<IPost[]> => {
  try {
    const response = await fetch(`${URL_API}/topstories.json`);

    if (response.ok === false) {
      throw new Error('Response Error:' + response.text);
    }

    const json = await response.json();
    const postsPromises = json
      .slice(0, 10)
      .map((id: number) =>
        fetch(`${URL_API}/item/${id}.json`).then((response) => response.json()),
      );

    return await Promise.all(postsPromises);
  } catch (err) {
    console.error(err);
  }

  return [];
};
