
import React from 'react';
import StoryReel from './StoryReel';
import Post from './Post';
import Reel from './Reel';
import { posts, reels } from '../constants';

const Feed: React.FC = () => {
  return (
    <div>
      <StoryReel />
      <div className="flex flex-col">
        <Post key={posts[0].id} post={posts[0]} />
        <Reel key={reels[0].id} reel={reels[0]} />
        {posts.slice(1).map(post => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Feed;