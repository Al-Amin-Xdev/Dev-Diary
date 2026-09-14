import StodyCard from "@/components/StodyCard";
import React from "react";

const Stories = () => {
  const stories = [
    {
      id: 1,
      name: "Sarah Ahmed",
      role: "Frontend Developer",
      title: "My Journey from HTML to React",
      story:
        "I started my development journey with basic HTML and CSS. After building small projects, I learned JavaScript and eventually moved into React. Each project helped me understand frontend development more deeply.",
      category: "Frontend",
      date: "September 10, 2026",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    },
    {
      id: 2,
      name: "Daniel Wilson",
      role: "Backend Developer",
      title: "How I Learned Node.js",
      story:
        "Learning backend development was challenging at first. Building APIs with Node.js and Express helped me understand how servers, databases, authentication, and frontend applications communicate with each other.",
      category: "Backend",
      date: "September 8, 2026",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    },
    {
      id: 3,
      name: "Ayesha Rahman",
      role: "Full Stack Developer",
      title: "My First Full Stack Project",
      story:
        "My first full stack project taught me how frontend and backend communicate. Connecting React with Node.js and MongoDB was a major milestone and gave me confidence to build larger applications.",
      category: "Full Stack",
      date: "September 6, 2026",
      image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce",
    },
    {
      id: 4,
      name: "Michael Chen",
      role: "Software Developer",
      title: "What I Learned from My First Job",
      story:
        "Working on real projects taught me lessons that tutorials could not. Code reviews, teamwork, debugging, Git, and communication became important parts of my growth as a developer.",
      category: "Career",
      date: "September 4, 2026",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    },
    {
      id: 5,
      name: "Nusrat Jahan",
      role: "Next.js Developer",
      title: "Why I Started Learning Next.js",
      story:
        "After working with React, I wanted to understand routing, server-side features, data fetching, and modern application development. That curiosity led me to Next.js and changed how I think about building web applications.",
      category: "Next.js",
      date: "September 2, 2026",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df",
    },
    {
      id: 6,
      name: "James Miller",
      role: "Web Developer",
      title: "My Biggest Lesson as a Developer",
      story:
        "I learned that becoming a better developer is not about knowing everything. It is about consistently learning, building projects, reading documentation, and solving problems one step at a time.",
      category: "Developer Journey",
      date: "August 30, 2026",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7",
    },
    {
      id: 7,
      name: "Fatima Noor",
      role: "UI Developer",
      title: "How I Improved My Web Design Skills",
      story:
        "At first, I focused only on making websites functional. Later, I learned about spacing, typography, responsive layouts, accessibility, and visual hierarchy. These concepts helped me create interfaces that were easier and more enjoyable to use.",
      category: "UI Design",
      date: "August 27, 2026",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956",
    },
    {
      id: 8,
      name: "Robert Johnson",
      role: "DevOps Engineer",
      title: "My First Experience Deploying a Web App",
      story:
        "Deploying my first application taught me that development does not end when the code works locally. I learned about environment variables, production builds, hosting, domains, and monitoring.",
      category: "DevOps",
      date: "August 24, 2026",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a",
    },
    {
      id: 9,
      name: "Imran Hossain",
      role: "JavaScript Developer",
      title: "The Day JavaScript Finally Made Sense",
      story:
        "JavaScript initially felt confusing because there were so many concepts to learn. After practicing functions, arrays, objects, promises, and asynchronous programming through real projects, everything gradually started connecting.",
      category: "JavaScript",
      date: "August 21, 2026",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    },
    {
      id: 10,
      name: "Emily Carter",
      role: "Software Engineer",
      title: "From Tutorial Projects to Real Applications",
      story:
        "Following tutorials helped me learn the basics, but building applications without a tutorial taught me how to think like a developer. Debugging errors, reading documentation, and making technical decisions became some of my most valuable learning experiences.",
      category: "Developer Journey",
      date: "August 18, 2026",
      image: "https://images.unsplash.com/photo-1551836022-4c4c79ecde51",
    },
  ];

  return (
    <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 p-4 sm:grid-cols-2 lg:grid-cols-3">
      {stories.map((story) => (
        <StodyCard key={story.id} story={story} />
      ))}
    </div>
  );
};

export default Stories;
