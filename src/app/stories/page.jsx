import StoryCard from '@/components/StoryCard';
import React from 'react';

const Stories = () => {

    const developerStories = [
  {
    id: 1,
    name: "Sarah Ahmed",
    role: "Frontend Developer",
    title: "My Journey from HTML to React",
    story:
      "I started my development journey with basic HTML and CSS. After building small projects, I learned JavaScript and eventually moved into React.",
    category: "Frontend",
    date: "September 10, 2026",
  },
  {
    id: 2,
    name: "Daniel Wilson",
    role: "Backend Developer",
    title: "How I Learned Node.js",
    story:
      "Learning backend development was challenging at first. Building APIs with Node.js and Express helped me understand how modern web applications work.",
    category: "Backend",
    date: "September 8, 2026",
  },
  {
    id: 3,
    name: "Ayesha Rahman",
    role: "Full Stack Developer",
    title: "My First Full Stack Project",
    story:
      "My first full stack project taught me how frontend and backend communicate. Connecting React with Node.js and MongoDB was a major milestone.",
    category: "Full Stack",
    date: "September 6, 2026",
  },
  {
    id: 4,
    name: "Michael Chen",
    role: "Software Developer",
    title: "What I Learned from My First Job",
    story:
      "Working on real projects taught me lessons that tutorials could not. Code reviews, teamwork, debugging, and communication became an important part of my growth.",
    category: "Career",
    date: "September 4, 2026",
  },
  {
    id: 5,
    name: "Nusrat Jahan",
    role: "Next.js Developer",
    title: "Why I Started Learning Next.js",
    story:
      "After working with React, I wanted to understand routing, server-side features, and modern application development. That led me to Next.js.",
    category: "Next.js",
    date: "September 2, 2026",
  },
  {
    id: 6,
    name: "James Miller",
    role: "Web Developer",
    title: "My Biggest Lesson as a Developer",
    story:
      "I learned that becoming a better developer is not about knowing everything. It is about consistently learning, building projects, and solving problems.",
    category: "Developer Journey",
    date: "August 30, 2026",
  },
];

    return (
        <div>
            {developerStories.map((story) =>(<StoryCard key={story.id} story={story} />))}
        </div>
    );
};

export default Stories;