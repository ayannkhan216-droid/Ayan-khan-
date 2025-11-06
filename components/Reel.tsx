
import React from 'react';
import { Reel as ReelType } from '../types';
import { HeartIcon, CommentIcon, ShareIcon, OptionsIcon } from '../constants';

interface ReelProps {
  reel: ReelType;
}

const Reel: React.FC<ReelProps> = ({ reel }) => {
  return (
    <div className="relative h-[calc(100vh-8rem)] bg-pistaa-dark-2 snap-start">
      <video
        className="w-full h-full object-cover"
        src={reel.videoUrl}
        autoPlay
        loop
        muted
        playsInline
      ></video>

      <div className="absolute bottom-0 left-0 right-0 p-4 text-white bg-gradient-to-t from-black/60 to-transparent">
        <div className="flex items-center space-x-2">
          <img src={reel.user.avatar} alt={reel.user.username} className="w-9 h-9 rounded-full border-2 border-white" />
          <p className="font-semibold text-sm">{reel.user.username}</p>
          <button className="ml-2 text-xs font-semibold border border-white/80 rounded px-2 py-0.5 hover:bg-white/20 transition-colors">Follow</button>
        </div>
        <p className="text-sm mt-2">{reel.caption}</p>
      </div>

      <div className="absolute bottom-4 right-2 flex flex-col items-center space-y-6 text-white">
         <button className="flex flex-col items-center space-y-1">
            <HeartIcon className="w-8 h-8 drop-shadow-lg" />
            <span className="text-xs font-bold">{reel.likes.toLocaleString()}</span>
         </button>
         <button className="flex flex-col items-center space-y-1">
            <CommentIcon className="w-8 h-8 drop-shadow-lg" />
            <span className="text-xs font-bold">{reel.comments.toLocaleString()}</span>
         </button>
         <button className="flex flex-col items-center space-y-1">
            <ShareIcon className="w-8 h-8 drop-shadow-lg" />
            <span className="text-xs font-bold">{reel.shares.toLocaleString()}</span>
         </button>
         <button>
            <OptionsIcon className="w-8 h-8 drop-shadow-lg mt-4" />
         </button>
      </div>
    </div>
  );
};

export default Reel;
