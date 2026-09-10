import React from "react";
import {
    BookOpen,
    Heart,
    Clock,
    Award,
    ArrowRight,
    User,
    Settings,
} from "lucide-react";
import Link from "next/link";
import Title from "@/components/Title";

const Dashboard = () => {
    return (
        <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 px-4 py-8 sm:px-6 lg:px-8">

            <div className="mx-auto max-w-7xl">

                {/* Header */}
                <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                    <div>
                        <p className="text-sm font-medium text-blue-600">
                            Welcome back 👋
                        </p>

                        <h1 className="mt-1 text-2xl font-extrabold text-gray-900 sm:text-3xl">
                            Your Dashboard
                        </h1>
                    </div>

                    <Link
                        href="/profile"
                        className="flex w-fit items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-gray-700 shadow-md transition hover:-translate-y-0.5 hover:text-blue-600"
                    >
                        <User size={18} />
                        My Profile
                    </Link>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">

                    <div className="rounded-2xl bg-white p-5 shadow-md">
                        <div className="flex items-center justify-between">
                            <div className="rounded-xl bg-blue-100 p-3 text-blue-600">
                                <BookOpen size={22} />
                            </div>

                            <span className="text-2xl font-extrabold text-gray-800">
                                12
                            </span>
                        </div>

                        <p className="mt-4 text-sm font-medium text-gray-500">
                            Tutorials Started
                        </p>
                    </div>

                    <div className="rounded-2xl bg-white p-5 shadow-md">
                        <div className="flex items-center justify-between">
                            <div className="rounded-xl bg-purple-100 p-3 text-purple-600">
                                <Award size={22} />
                            </div>

                            <span className="text-2xl font-extrabold text-gray-800">
                                8
                            </span>
                        </div>

                        <p className="mt-4 text-sm font-medium text-gray-500">
                            Completed
                        </p>
                    </div>

                    <div className="rounded-2xl bg-white p-5 shadow-md">
                        <div className="flex items-center justify-between">
                            <div className="rounded-xl bg-pink-100 p-3 text-pink-600">
                                <Heart size={22} />
                            </div>

                            <span className="text-2xl font-extrabold text-gray-800">
                                24
                            </span>
                        </div>

                        <p className="mt-4 text-sm font-medium text-gray-500">
                            Saved Stories
                        </p>
                    </div>

                    <div className="rounded-2xl bg-white p-5 shadow-md">
                        <div className="flex items-center justify-between">
                            <div className="rounded-xl bg-green-100 p-3 text-green-600">
                                <Clock size={22} />
                            </div>

                            <span className="text-2xl font-extrabold text-gray-800">
                                16h
                            </span>
                        </div>

                        <p className="mt-4 text-sm font-medium text-gray-500">
                            Learning Time
                        </p>
                    </div>

                </div>

                {/* Main Content */}
                <div className="mt-8 grid gap-6 lg:grid-cols-3">

                    {/* Continue Learning */}
                    <section className="rounded-2xl bg-white p-5 shadow-md sm:p-6 lg:col-span-2">

                        <div className="flex items-center justify-between">
                            <div>
                                <Title>Continue Learning</Title>
                            </div>

                            <Link
                                href="/tutorials"
                                className="text-sm font-semibold text-blue-600 hover:text-purple-600"
                            >
                                View All
                            </Link>
                        </div>

                        {/* Course */}
                        <div className="mt-4 rounded-2xl bg-gradient-to-r from-blue-50 to-purple-50 p-4 sm:p-5">

                            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">

                                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 text-white shadow-md">
                                    <BookOpen size={26} />
                                </div>

                                <div className="flex-1">
                                    <p className="text-xs font-semibold uppercase tracking-wide text-blue-600">
                                        Web Development
                                    </p>

                                    <h3 className="mt-1 text-lg font-bold text-gray-800">
                                        Learn JavaScript Basics
                                    </h3>

                                    <div className="mt-3 h-2 overflow-hidden rounded-full bg-white">
                                        <div className="h-full w-[65%] rounded-full bg-gradient-to-r from-blue-600 to-purple-600" />
                                    </div>

                                    <p className="mt-2 text-xs text-gray-500">
                                        65% completed
                                    </p>
                                </div>

                                <Link
                                    href="/tutorials"
                                    className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-purple-600"
                                >
                                    Continue
                                    <ArrowRight size={16} />
                                </Link>

                            </div>
                        </div>

                        {/* Course 2 */}
                        <div className="mt-4 rounded-2xl border border-gray-100 p-4 sm:p-5">

                            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">

                                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-purple-100 text-purple-600">
                                    <Award size={26} />
                                </div>

                                <div className="flex-1">
                                    <p className="text-xs font-semibold uppercase tracking-wide text-purple-600">
                                        Design
                                    </p>

                                    <h3 className="mt-1 text-lg font-bold text-gray-800">
                                        UI / UX Fundamentals
                                    </h3>

                                    <div className="mt-3 h-2 overflow-hidden rounded-full bg-gray-100">
                                        <div className="h-full w-[40%] rounded-full bg-gradient-to-r from-purple-500 to-pink-500" />
                                    </div>

                                    <p className="mt-2 text-xs text-gray-500">
                                        40% completed
                                    </p>
                                </div>

                                <Link
                                    href="/tutorials"
                                    className="flex items-center justify-center gap-2 rounded-xl border border-gray-200 px-4 py-2.5 text-sm font-semibold text-gray-700 transition hover:bg-purple-50 hover:text-purple-600"
                                >
                                    Continue
                                    <ArrowRight size={16} />
                                </Link>

                            </div>
                        </div>

                    </section>

                    {/* Profile / Quick Actions */}
                    <aside className="rounded-2xl bg-gradient-to-br from-blue-600 to-purple-700 p-6 text-white shadow-xl">

                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/15 backdrop-blur-sm">
                            <User size={30} />
                        </div>

                        <h2 className="mt-5 text-2xl font-bold">
                            Keep Going!
                        </h2>

                        <p className="mt-2 text-sm leading-6 text-blue-100">
                            You are making progress. Keep learning and
                            building your skills one step at a time.
                        </p>

                        <div className="mt-7 space-y-3">

                            <Link
                                href="/tutorials"
                                className="flex items-center justify-between rounded-xl bg-white/10 p-3.5 text-sm font-semibold backdrop-blur-sm transition hover:bg-white/20"
                            >
                                Explore Tutorials
                                <ArrowRight size={17} />
                            </Link>

                            <Link
                                href="/stories"
                                className="flex items-center justify-between rounded-xl bg-white/10 p-3.5 text-sm font-semibold backdrop-blur-sm transition hover:bg-white/20"
                            >
                                Read Stories
                                <ArrowRight size={17} />
                            </Link>

                            <Link
                                href="/settings"
                                className="flex items-center justify-between rounded-xl bg-white/10 p-3.5 text-sm font-semibold backdrop-blur-sm transition hover:bg-white/20"
                            >
                                <span className="flex items-center gap-2">
                                    <Settings size={17} />
                                    Settings
                                </span>
                                <ArrowRight size={17} />
                            </Link>

                        </div>

                    </aside>

                </div>

            </div>
        </main>
    );
};

export default Dashboard;