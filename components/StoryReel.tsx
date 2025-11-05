
import React from 'react';
import { stories } from '../constants';
import { Story } from '../types';

interface StoryCircleProps {
    story: Story;
}

const StoryCircle: React.FC<StoryCircleProps> = ({ story }) => {
    const ringClass = story.viewed 
        ? 'bg-gray-200 dark:bg-pistaa-dark-3' 
        : 'bg-pistaa-gradient';
    return (
        <div className="flex flex-col items-center space-y-1 flex-shrink-0">
            <div className={`p-0.5 rounded-full ${ringClass}`}>
                 <div className="bg-white dark:bg-pistaa-dark-2 p-0.5 rounded-full">
                    <img src={story.user.avatar} alt={story.user.username} className="w-16 h-16 rounded-full" />
                 </div>
            </div>
            <p className="text-xs truncate w-20 text-center">{story.user.username}</p>
        </div>
    );
};

const StoryReel: React.FC = () => {
  return (
    <div className="px-4 py-3 border-b border-gray-200 dark:border-pistaa-dark-3">
      <div className="flex space-x-4 overflow-x-auto pb-2 -mb-2">
        {stories.map(story => (
          <StoryCircle key={story.id} story={story} />
        ))}
      </div>
    </div>
  );
};

export default StoryReel;
