import React from "react";
import Link from "next/link";
import {
    BookOpen,
    Target,
    Users,
    Sparkles,
    ArrowRight,
    Heart,
} from "lucide-react";
import Title from "@/components/Title";

const About = () => {
    return (
        <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 px-4 py-10 sm:px-6 lg:px-8">

            {/* Hero */}
            <section className="mx-auto max-w-6xl">
                <div className="grid items-center gap-8 overflow-hidden rounded-3xl bg-white p-6 shadow-xl sm:p-10 lg:grid-cols-2 lg:p-14">

                    {/* Left */}
                    <div>
                        <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-600">
                            <Sparkles size={16} />
                            About LearnHub
                        </div>

                        <h1 className="text-4xl font-extrabold leading-tight text-gray-900 sm:text-5xl">
                            Learn.
                            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                {" "}Grow.
                            </span>
                            <span className="block">
                                Achieve.
                            </span>
                        </h1>

                        <p className="mt-5 max-w-xl text-sm leading-7 text-gray-600 sm:text-base">
                            LearnHub is a place where curious people can
                            discover useful tutorials, read inspiring stories,
                            and continuously improve their skills.
                        </p>

                        <Link
                            href="/tutorials"
                            className="group mt-7 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3.5 font-semibold text-white shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
                        >
                            Explore Tutorials
                            <ArrowRight
                                size={18}
                                className="transition group-hover:translate-x-1"
                            />
                        </Link>
                    </div>

                    {/* Right Illustration */}
                    <div className="relative flex min-h-[280px] items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 p-8 sm:min-h-[340px]">

                        <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/10" />
                        <div className="absolute -bottom-20 -left-16 h-56 w-56 rounded-full bg-white/10" />

                        <div className="relative text-center text-white">
                            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-white/15 shadow-xl backdrop-blur-sm">
                                <BookOpen size={40} />
                            </div>

                            <h2 className="mt-6 text-2xl font-bold sm:text-3xl">
                                Knowledge is Power
                            </h2>

                            <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-blue-100">
                                Keep learning, keep exploring, and keep moving
                                forward.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission */}
            <section className="mx-auto mt-12 max-w-6xl">
                <div className="mb-8 text-center">
                    <Title>What We Believe</Title>

                    <p className="mx-auto max-w-2xl text-sm leading-6 text-gray-500 sm:text-base">
                        We believe learning should be simple, accessible,
                        practical, and enjoyable.
                    </p>
                </div>

                <div className="grid gap-5 md:grid-cols-3">

                    {/* Card 1 */}
                    <div className="rounded-2xl bg-white p-6 shadow-md transition hover:-translate-y-1 hover:shadow-xl">
                        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
                            <Target size={28} />
                        </div>

                        <h3 className="text-xl font-bold text-gray-800">
                            Our Mission
                        </h3>

                        <p className="mt-3 text-sm leading-6 text-gray-500">
                            Help learners find practical knowledge and
                            resources that can make a real difference.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="rounded-2xl bg-white p-6 shadow-md transition hover:-translate-y-1 hover:shadow-xl">
                        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-100 text-purple-600">
                            <Users size={28} />
                        </div>

                        <h3 className="text-xl font-bold text-gray-800">
                            Our Community
                        </h3>

                        <p className="mt-3 text-sm leading-6 text-gray-500">
                            Create a welcoming space where learners can
                            discover ideas and share experiences.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="rounded-2xl bg-white p-6 shadow-md transition hover:-translate-y-1 hover:shadow-xl">
                        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-pink-100 text-pink-600">
                            <Heart size={28} />
                        </div>

                        <h3 className="text-xl font-bold text-gray-800">
                            Our Values
                        </h3>

                        <p className="mt-3 text-sm leading-6 text-gray-500">
                            Curiosity, consistency, creativity, and a passion
                            for helping each other grow.
                        </p>
                    </div>

                </div>
            </section>

            {/* Bottom CTA */}
            <section className="mx-auto mt-12 max-w-6xl pb-6">
                <div className="rounded-3xl bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-center text-white shadow-xl sm:p-10">

                    <BookOpen className="mx-auto mb-4" size={32} />

                    <h2 className="text-2xl font-bold sm:text-3xl">
                        Ready to start learning?
                    </h2>

                    <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-blue-100">
                        Explore our tutorials and take the next step in your
                        learning journey.
                    </p>

                    <Link
                        href="/tutorials"
                        className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-blue-600 transition hover:-translate-y-1 hover:shadow-lg"
                    >
                        Get Started
                        <ArrowRight size={18} />
                    </Link>
                </div>
            </section>

        </main>
    );
};

export default About;