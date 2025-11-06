
import React from 'react';
import { stories, users } from '../constants';
import { Story } from '../types';

interface StoryCircleProps {
    story: Story;
}

const AddStoryCircle: React.FC = () => (
    <div className="flex flex-col items-center space-y-1 flex-shrink-0">
      <button className="relative w-[72px] h-[72px] flex items-center justify-center" aria-label="Add to your story">
        <img src={users[0].avatar} alt="" className="w-16 h-16 rounded-full" />
        <div className="absolute bottom-0 right-0 bg-pistaa-purple text-white rounded-full p-1 border-2 border-white dark:border-pistaa-dark-2 pointer-events-none">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
          </svg>
        </div>
      </button>
      <p className="text-xs truncate w-20 text-center">Your Story</p>
    </div>
  );

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
        <AddStoryCircle />
        {stories.map(story => (
          <StoryCircle key={story.id} story={story} />
        ))}
      </div>
    </div>
  );
};

export default StoryReel;