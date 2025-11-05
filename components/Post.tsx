
import React, { useState } from 'react';
import { Post as PostType } from '../types';
import { HeartIcon, CommentIcon, ShareIcon, SaveIcon, OptionsIcon } from '../constants';

interface PostProps {
  post: PostType;
}

const Post: React.FC<PostProps> = ({ post }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [likeCount, setLikeCount] = useState(post.likes);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikeCount(isLiked ? likeCount - 1 : likeCount + 1);
  };

  const handleSave = () => {
    setIsSaved(!isSaved);
  };

  return (
    <div className="bg-white dark:bg-pistaa-dark-2 border-b border-gray-200 dark:border-pistaa-dark-3">
      {/* Post Header */}
      <div className="flex items-center justify-between p-3">
        <div className="flex items-center space-x-3">
          <div className="p-0.5 rounded-full bg-pistaa-gradient">
            <img src={post.user.avatar} alt={post.user.username} className="w-9 h-9 rounded-full border-2 border-white dark:border-pistaa-dark-2" />
          </div>
          <p className="font-semibold text-sm">{post.user.username}</p>
        </div>
        <button>
          <OptionsIcon className="w-6 h-6 text-gray-500" />
        </button>
      </div>

      {/* Post Image */}
      <img src={post.image} alt="Post content" className="w-full h-auto" />

      {/* Post Actions */}
      <div className="flex justify-between items-center p-3">
        <div className="flex space-x-4 items-center">
          <button onClick={handleLike} className="transform transition-transform duration-200 hover:scale-110">
            <HeartIcon className={`w-7 h-7 ${isLiked ? 'text-red-500' : ''}`} filled={isLiked} />
          </button>
          <button className="transform transition-transform duration-200 hover:scale-110">
            <CommentIcon className="w-7 h-7" />
          </button>
          <button className="transform transition-transform duration-200 hover:scale-110">
            <ShareIcon className="w-7 h-7" />
          </button>
        </div>
        <button onClick={handleSave} className="transform transition-transform duration-200 hover:scale-110">
          <SaveIcon className="w-7 h-7" filled={isSaved} />
        </button>
      </div>

      {/* Post Info */}
      <div className="px-3 pb-4">
        <p className="font-semibold text-sm">{likeCount.toLocaleString()} likes</p>
        <p className="text-sm mt-1">
          <span className="font-semibold">{post.user.username}</span> {post.caption}
        </p>
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 cursor-pointer hover:underline">
          View all {post.comments.length} comments
        </p>
        <p className="text-xs text-gray-400 dark:text-gray-500 mt-2 uppercase">{post.timestamp}</p>
      </div>
    </div>
  );
};

export default Post;
