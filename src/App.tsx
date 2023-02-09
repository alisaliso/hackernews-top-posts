import { useEffect, useState } from 'react';

import Posts from './components/Posts';
import { IPost, IPostsData, IUser } from './helpers/types';
import { sortPosts, constructPost } from './helpers/constansts';
import { getTopStories, getUsersByPosts } from './api/stories';
import './App.scss';

function App() {
  const [posts, setPosts] = useState<IPostsData[]>([]);

  useEffect(() => {
    getTopStories().then((stories: IPost[]) => {
      getUsersByPosts(stories).then((users: IUser[]) => {
        const posts = constructPost(stories, users);
        const sortedPosts = sortPosts(posts);

        setPosts(sortedPosts);
      });
    });
  }, []);

  return (
    <div className="App">
      <Posts posts={posts} />
    </div>
  );
}

export default App;
