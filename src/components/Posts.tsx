import React from 'react';

import { IPostsData, IPostsComponent } from '../helpers/types';

import Post from './Post';

const Posts: React.FC<IPostsComponent> = ({ posts }) => {
  if (!posts || !posts?.length) {
    return (
      <div className="Loader">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="Posts">
      <h1 className="Posts-title">Hacker News Top 10 Posts</h1>
      <ul>
        {posts?.map((post: IPostsData) => (
          <Post key={post.id} post={post} />
        ))}
      </ul>
    </div>
  );
};

export default Posts;
