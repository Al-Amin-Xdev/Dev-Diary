import React from "react";
import Link from "next/link";

const StodyCard = ({ story }) => {
  return (
    <article className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={story.image}
          alt={story.title}
          className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
        />

        {/* Category */}
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-blue-600 shadow backdrop-blur">
          {story.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        <p className="mb-2 text-sm font-medium text-gray-500">
          {story.name}
        </p>

        <h2 className="line-clamp-2 text-xl font-bold leading-tight text-gray-900">
          {story.title}
        </h2>

        {/* Read More */}
        <div className="mt-5">
          <Link
            href={`/stories/${story.id}`}
            className="inline-flex items-center rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            Read More
            <span className="ml-2 transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default StodyCard;