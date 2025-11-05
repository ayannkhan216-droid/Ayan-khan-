
import React from 'react';
import StoryReel from './StoryReel';
import Post from './Post';
import { posts } from '../constants';

const Feed: React.FC = () => {
  return (
    <div>
      <StoryReel />
      <div className="flex flex-col">
        {posts.map(post => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
