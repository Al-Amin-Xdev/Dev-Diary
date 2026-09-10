import React from "react";
import Link from "next/link";
import {
    ArrowRight,
    BookOpen,
    CalendarDays,
    Heart,
    User,
} from "lucide-react";
import Title from "@/components/Title";

const Stories = () => {
    const stories = [
        {
            title: "How I Started My Learning Journey",
            description:
                "A simple story about starting from the basics and building confidence through consistent learning.",
            author: "Alex Morgan",
            date: "May 12, 2026",
            category: "Learning",
            icon: <BookOpen size={24} />,
        },
        {
            title: "Small Steps, Big Progress",
            description:
                "Discover how small daily improvements can turn into meaningful results over time.",
            author: "Sarah Wilson",
            date: "May 08, 2026",
            category: "Growth",
            icon: <Heart size={24} />,
        },
        {
            title: "My First Project",
            description:
                "From an idea to a working project — a beginner's experience of building something from scratch.",
            author: "James Carter",
            date: "May 03, 2026",
            category: "Experience",
            icon: <BookOpen size={24} />,
        },
    ];

    return (
        <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 px-4 py-10 sm:px-6 lg:px-8">

            <div className="mx-auto max-w-7xl">

                {/* Header */}
                <div className="mx-auto mb-10 max-w-2xl text-center">
                    <Title>Stories</Title>

                    <p className="mt-3 text-sm leading-6 text-gray-500 sm:text-base">
                        Read inspiring experiences, lessons, and stories from
                        people on their learning journey.
                    </p>
                </div>

                {/* Stories */}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

                    {stories.map((story, index) => (
                        <article
                            key={index}
                            className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                        >

                            {/* Colorful Top */}
                            <div className="relative h-36 overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 p-5">

                                <div className="absolute -right-8 -top-12 h-32 w-32 rounded-full bg-white/10" />

                                <div className="absolute -bottom-12 -left-8 h-32 w-32 rounded-full bg-white/10" />

                                <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-white/15 text-white backdrop-blur-sm">
                                    {story.icon}
                                </div>

                                <span className="relative mt-4 inline-block rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                                    {story.category}
                                </span>
                            </div>

                            {/* Content */}
                            <div className="p-5 sm:p-6">

                                <h2 className="text-xl font-bold leading-7 text-gray-800 transition group-hover:text-blue-600">
                                    {story.title}
                                </h2>

                                <p className="mt-3 text-sm leading-6 text-gray-500">
                                    {story.description}
                                </p>

                                {/* Author */}
                                <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-4">

                                    <div className="flex items-center gap-2">
                                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                                            <User size={17} />
                                        </div>

                                        <div>
                                            <p className="text-sm font-semibold text-gray-700">
                                                {story.author}
                                            </p>

                                            <div className="flex items-center gap-1 text-xs text-gray-400">
                                                <CalendarDays size={13} />
                                                {story.date}
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                {/* Read More */}
                                <Link
                                    href="#"
                                    className="group/link mt-5 flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-purple-600"
                                >
                                    Read Story

                                    <ArrowRight
                                        size={17}
                                        className="transition-transform group-hover/link:translate-x-1"
                                    />
                                </Link>

                            </div>
                        </article>
                    ))}

                </div>

                {/* Bottom CTA */}
                <div className="mt-12 rounded-3xl bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-10 text-center text-white shadow-xl sm:px-10">

                    <h2 className="text-2xl font-bold sm:text-3xl">
                        Have a story to share?
                    </h2>

                    <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-blue-100">
                        Your experience might inspire someone else to start
                        their own learning journey.
                    </p>

                    <Link
                        href="#"
                        className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-blue-600 transition hover:-translate-y-1 hover:shadow-lg"
                    >
                        Share Your Story
                        <ArrowRight size={18} />
                    </Link>

                </div>

            </div>
        </main>
    );
};

export default Stories;