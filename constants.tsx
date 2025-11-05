
import React from 'react';
import { User, Story, Post } from './types';

// Mock Users
export const users: User[] = [
  { id: 1, username: 'aestheticsoul', avatar: 'https://picsum.photos/seed/user1/100/100' },
  { id: 2, username: 'codecraft', avatar: 'https://picsum.photos/seed/user2/100/100' },
  { id: 3, username: 'travelvibes', avatar: 'https://picsum.photos/seed/user3/100/100' },
  { id: 4, username: 'pixelperfect', avatar: 'https://picsum.photos/seed/user4/100/100' },
  { id: 5, username: 'naturelover', avatar: 'https://picsum.photos/seed/user5/100/100' },
  { id: 6, username: 'urbanexplorer', avatar: 'https://picsum.photos/seed/user6/100/100' },
];

// Mock Stories
export const stories: Story[] = users.map((user, index) => ({
  id: user.id,
  user: user,
  viewed: index > 2,
}));

// Mock Posts
export const posts: Post[] = [
  {
    id: 1,
    user: users[2],
    image: 'https://picsum.photos/seed/post1/600/750',
    caption: 'Chasing sunsets and dreams. ✨ What a view!',
    likes: 1245,
    comments: [
      { id: 1, user: users[0], text: 'Absolutely breathtaking! 😍' },
      { id: 2, user: users[1], text: 'I need to go there!' },
    ],
    timestamp: '2 hours ago',
  },
  {
    id: 2,
    user: users[4],
    image: 'https://picsum.photos/seed/post2/600/600',
    caption: 'Lost in the beauty of nature. Every leaf and flower tells a story.',
    likes: 832,
    comments: [
      { id: 3, user: users[3], text: 'So serene and beautiful.' },
    ],
    timestamp: '5 hours ago',
  },
  {
    id: 3,
    user: users[5],
    image: 'https://picsum.photos/seed/post3/600/800',
    caption: 'City lights and late night vibes. The concrete jungle never sleeps.',
    likes: 2019,
    comments: [
      { id: 4, user: users[0], text: 'Incredible shot!' },
      { id: 5, user: users[2], text: 'Love the energy!' },
      { id: 6, user: users[1], text: 'This is amazing.' },
    ],
    timestamp: '1 day ago',
  },
];

// SVG Icons
export const HomeIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h7.5" />
  </svg>
);

export const ExploreIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
  </svg>
);

export const AddIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

export const MessageIcon = ({ className }: { className?: string }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
);

export const HeartIcon = ({ className, filled = false }: { className?: string, filled?: boolean }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill={filled ? 'currentColor' : 'none'} viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
  </svg>
);

export const CommentIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l3.662-3.969c.26-.28.687-.634 1.153-.67 1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.344 48.344 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
  </svg>
);

export const ShareIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
  </svg>
);

export const SaveIcon = ({ className, filled = false }: { className?: string, filled?: boolean }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill={filled ? 'currentColor' : 'none'} viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.5 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
  </svg>
);

export const OptionsIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
  </svg>
);
