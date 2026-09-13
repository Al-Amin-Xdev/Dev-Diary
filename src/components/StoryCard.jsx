import React from "react";
import Link from "next/link";

const StoryCard = ({ story }) => {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-6">
      {/* Avatar + Developer Info */}
      <div className="flex items-center gap-4">
        <div className="h-14 w-14 shrink-0 overflow-hidden rounded-full">
          <img
            src={story.image}
            alt={story.name}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="min-w-0">
          <h2 className="truncate text-lg font-bold text-slate-800">
            {story.name}
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            {story.role}
          </p>
        </div>
      </div>

      {/* Story title */}
      <h3 className="mt-5 text-lg font-semibold leading-7 text-slate-800">
        {story.title}
      </h3>

      {/* Story preview */}
      <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-500">
        {story.story}
      </p>

      {/* Button */}
      <div className="mt-auto pt-5">
        <Link
          href={`/stories/${story.id}`}
          className="block w-full rounded-xl bg-slate-900 px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-blue-600"
        >
          Read Story
        </Link>
      </div>
    </div>
  );
};

export default StoryCard;