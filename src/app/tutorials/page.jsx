import React from "react";
import Link from "next/link";
import {
    BookOpen,
    Code2,
    Palette,
    Database,
    Globe,
    Smartphone,
    ArrowRight,
    Clock,
} from "lucide-react";
import Title from "@/components/Title";

const Tutorials = () => {
    const tutorials = [
        {
            title: "HTML & CSS",
            description: "Learn the fundamentals of building beautiful websites.",
            icon: <Globe size={28} />,
            color: "from-blue-500 to-cyan-500",
            level: "Beginner",
            time: "2 Hours",
        },
        {
            title: "JavaScript",
            description: "Understand JavaScript and make your websites interactive.",
            icon: <Code2 size={28} />,
            color: "from-yellow-500 to-orange-500",
            level: "Beginner",
            time: "4 Hours",
        },
        {
            title: "React",
            description: "Build modern and interactive web applications with React.",
            icon: <BookOpen size={28} />,
            color: "from-cyan-500 to-blue-600",
            level: "Intermediate",
            time: "5 Hours",
        },
        {
            title: "UI / UX Design",
            description: "Learn how to create clean and user-friendly interfaces.",
            icon: <Palette size={28} />,
            color: "from-purple-500 to-pink-500",
            level: "Beginner",
            time: "3 Hours",
        },
        {
            title: "Database",
            description: "Learn how to store, organize and manage application data.",
            icon: <Database size={28} />,
            color: "from-green-500 to-emerald-600",
            level: "Intermediate",
            time: "4 Hours",
        },
        {
            title: "Responsive Design",
            description: "Create websites that look great on every device.",
            icon: <Smartphone size={28} />,
            color: "from-indigo-500 to-purple-600",
            level: "Intermediate",
            time: "3 Hours",
        },
    ];

    return (
        <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 px-4 py-10 sm:px-6 lg:px-8">

            <div className="mx-auto max-w-7xl">

                {/* Header */}
                <div className="mx-auto mb-10 max-w-2xl text-center">
                    <Title>Tutorials</Title>

                    <p className="mt-3 text-sm leading-6 text-gray-500 sm:text-base">
                        Explore practical tutorials and improve your skills
                        with simple, easy-to-follow lessons.
                    </p>
                </div>

                {/* Tutorial Cards */}
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

                    {tutorials.map((tutorial, index) => (
                        <div
                            key={index}
                            className="group rounded-2xl border border-gray-100 bg-white p-5 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-6"
                        >

                            {/* Icon */}
                            <div
                                className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${tutorial.color} text-white shadow-lg`}
                            >
                                {tutorial.icon}
                            </div>

                            {/* Content */}
                            <h2 className="text-xl font-bold text-gray-800">
                                {tutorial.title}
                            </h2>

                            <p className="mt-2 min-h-[48px] text-sm leading-6 text-gray-500">
                                {tutorial.description}
                            </p>

                            {/* Info */}
                            <div className="mt-5 flex flex-wrap items-center gap-2">
                                <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600">
                                    {tutorial.level}
                                </span>

                                <span className="flex items-center gap-1 rounded-full bg-gray-50 px-3 py-1 text-xs font-medium text-gray-500">
                                    <Clock size={13} />
                                    {tutorial.time}
                                </span>
                            </div>

                            {/* Button */}
                            <Link
                                href="/tutorials"
                                className="mt-5 flex items-center gap-2 text-sm font-bold text-blue-600 transition group-hover:text-purple-600"
                            >
                                Start Learning
                                <ArrowRight
                                    size={17}
                                    className="transition group-hover:translate-x-1"
                                />
                            </Link>
                        </div>
                    ))}

                </div>

            </div>
        </main>
    );
};

export default Tutorials;