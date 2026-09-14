const StoryDetails = async ({ params }) => {
  const { id } = await params;

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


 // Find the story that matches the URL id
  const story = stories.find((story) => story.id === Number(id));

  // If no story exists
  if (!story) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
        <div className="rounded-2xl bg-white p-8 text-center shadow-lg">
          <h1 className="text-3xl font-bold text-gray-900">
            Story Not Found
          </h1>

          <p className="mt-2 text-gray-500">
            We could not find a story with ID {id}.
          </p>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl bg-white shadow-xl">

        {/* Image */}
        <div className="relative h-64 sm:h-80 md:h-96">
          <img
            src={story.image}
            alt={story.title}
            className="h-full w-full object-cover"
          />

          {/* Category */}
          <div className="absolute left-5 top-5">
            <span className="rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-blue-600 shadow-md backdrop-blur">
              {story.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 md:p-10">

          {/* Name + Role */}
          <div className="mb-6">
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
              {story.role}
            </p>

            <h1 className="mt-2 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl md:text-5xl">
              {story.title}
            </h1>

            <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-gray-500">
              <span className="font-semibold text-gray-700">
                {story.name}
              </span>

              <span>•</span>

              <span>{story.date}</span>
            </div>
          </div>

          {/* Story */}
          <div className="border-t border-gray-200 pt-6">
            <h2 className="mb-3 text-xl font-bold text-gray-900">
              My Story
            </h2>

            <p className="text-base leading-8 text-gray-600 sm:text-lg">
              {story.story}
            </p>
          </div>

        </div>
      </div>
    </main>
  );
};

export default StoryDetails;
