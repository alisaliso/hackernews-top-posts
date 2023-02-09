import React, { useMemo } from 'react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

import DummyImage from '../../dummy.png';
import './index.scss';

import {
  formatUnixDateFromNow,
  formatUnixDate,
  getRandomColor,
} from '../../helpers/constansts';
import { IPostComponent } from '../../helpers/types';

const Post: React.FC<IPostComponent> = (params) => {
  const { post } = params;

  const avatarColor = useMemo(() => getRandomColor(), []);
  const postDate = useMemo(() => formatUnixDate(post.time), [post.time]);
  const dateFromNow = useMemo(
    () => formatUnixDateFromNow(post.time),
    [post.time],
  );

  return (
    <li>
      <div className="Posts-user">
        <div
          className="Posts-user_avatar"
          style={{ backgroundColor: avatarColor }}
        >
          <p className="karma">{post.karma}</p>
          <img src={DummyImage} alt="" />
        </div>
      </div>
      <div className="Posts-post">
        <div className="Posts-post_title">
          <p>{post.score} score</p>
          <p>|</p>
          <div className="Posts-post_title-name">
            <p>by</p>
            <p className="primary">{post.by}</p>
          </div>
          <p title={postDate}>{dateFromNow}</p>
        </div>

        <a href={post.url}>{post.title}</a>
      </div>
    </li>
  );
};

export default Post;
