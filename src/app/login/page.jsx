import React from "react";
import Link from "next/link";
import {
    Mail,
    LockKeyhole,
    Eye,
    ArrowRight,
  
    BookOpen,
    Sparkles,
} from "lucide-react";
import Title from "@/components/Title";

const Login = () => {
    return (
        <div className="min-h-screen bg-gray-50 px-4 py-4 sm:px-6 lg:px-8">

            <div className="mx-auto flex min-h-[calc(100vh-32px)] max-w-6xl items-center">

                <div className="grid w-full overflow-hidden rounded-3xl bg-white shadow-2xl lg:grid-cols-2">

                    {/* ================= LEFT : LOGIN ================= */}
                    <div className="flex items-center justify-center p-5 sm:p-8 lg:p-10">
                        <div className="w-full max-w-md">

                            {/* Icon */}
                            <div className="mb-4 flex justify-center lg:justify-start">
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 text-white shadow-lg">
                                    <BookOpen size={24} />
                                </div>
                            </div>

                            <div className="lg:text-left">
                                <Title>Login</Title>

                                <p className="mb-6 text-center text-sm text-gray-500 lg:text-left">
                                    Welcome back! Sign in to continue your journey.
                                </p>
                            </div>

                            {/* Form */}
                            <form className="space-y-4">

                                {/* Email */}
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="mb-1.5 block text-sm font-semibold text-gray-700"
                                    >
                                        Email Address
                                    </label>

                                    <div className="relative">
                                        <Mail
                                            size={18}
                                            className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-500"
                                        />

                                        <input
                                            id="email"
                                            type="email"
                                            placeholder="you@example.com"
                                            className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-11 pr-4 text-sm outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-50"
                                        />
                                    </div>
                                </div>

                                {/* Password */}
                                <div>
                                    <div className="mb-1.5 flex items-center justify-between">
                                        <label
                                            htmlFor="password"
                                            className="text-sm font-semibold text-gray-700"
                                        >
                                            Password
                                        </label>

                                        <Link
                                            href="/forgot-password"
                                            className="text-xs font-semibold text-blue-600 hover:text-purple-600 sm:text-sm"
                                        >
                                            Forgot password?
                                        </Link>
                                    </div>

                                    <div className="relative">
                                        <LockKeyhole
                                            size={18}
                                            className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-500"
                                        />

                                        <input
                                            id="password"
                                            type="password"
                                            placeholder="Enter your password"
                                            className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-11 pr-11 text-sm outline-none transition focus:border-purple-500 focus:bg-white focus:ring-4 focus:ring-purple-50"
                                        />

                                        <button
                                            type="button"
                                            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-purple-600"
                                        >
                                            <Eye size={18} />
                                        </button>
                                    </div>
                                </div>

                                {/* Remember */}
                                <div className="flex items-center gap-2">
                                    <input
                                        id="remember"
                                        type="checkbox"
                                        className="h-4 w-4 accent-blue-600"
                                    />

                                    <label
                                        htmlFor="remember"
                                        className="text-sm text-gray-600"
                                    >
                                        Remember me
                                    </label>
                                </div>

                                {/* Login */}
                                <button
                                    type="submit"
                                    className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 py-3 font-semibold text-white shadow-lg shadow-blue-100 transition hover:-translate-y-0.5 hover:shadow-xl"
                                >
                                    Login
                                    <ArrowRight
                                        size={18}
                                        className="transition group-hover:translate-x-1"
                                    />
                                </button>

                            </form>

                            {/* Divider */}
                            <div className="my-5 flex items-center gap-3">
                                <div className="h-px flex-1 bg-gray-200" />
                                <span className="text-xs text-gray-400">OR</span>
                                <div className="h-px flex-1 bg-gray-200" />
                            </div>

                            {/* Google */}
                            <button
                                type="button"
                                className="flex w-full items-center justify-center gap-3 rounded-xl border border-gray-200 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-50"
                            >
                                Continue with Google
                            </button>

                            {/* Register */}
                            <p className="mt-5 text-center text-sm text-gray-500">
                                Do not have an account?{" "}
                                <Link
                                    href="/register"
                                    className="font-bold text-blue-600 hover:text-purple-600"
                                >
                                    Create account
                                </Link>
                            </p>

                        </div>
                    </div>

                    {/* ================= RIGHT : DESIGN ================= */}
                    <div className="relative hidden min-h-[620px] overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 p-10 lg:flex lg:items-center">

                        {/* Decorative circles */}
                        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10" />
                        <div className="absolute -bottom-24 -left-20 h-80 w-80 rounded-full bg-white/10" />
                        <div className="absolute right-20 top-1/3 h-24 w-24 rounded-full bg-pink-400/20 blur-xl" />

                        {/* Content */}
                        <div className="relative z-10 text-white">

                            <div className="mb-6 inline-flex rounded-2xl bg-white/15 p-4 backdrop-blur-sm">
                                <Sparkles size={34} />
                            </div>

                            <h2 className="max-w-md text-4xl font-extrabold leading-tight xl:text-5xl">
                                Learn something new
                                <span className="block text-blue-100">
                                    every single day.
                                </span>
                            </h2>

                            <p className="mt-5 max-w-md text-base leading-7 text-blue-100">
                                Explore tutorials, read inspiring stories, and
                                build your knowledge with a community that helps
                                you grow.
                            </p>

                            {/* Feature cards */}
                            <div className="mt-8 space-y-3">

                                <div className="flex items-center gap-4 rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
                                    <div className="rounded-xl bg-white/15 p-2.5">
                                        <BookOpen size={22} />
                                    </div>

                                    <div>
                                        <p className="font-bold">
                                            Quality Tutorials
                                        </p>
                                        <p className="text-sm text-blue-100">
                                            Learn at your own pace
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
                                    <div className="rounded-xl bg-white/15 p-2.5">
                                        <Sparkles size={22} />
                                    </div>

                                    <div>
                                        <p className="font-bold">
                                            Inspiring Stories
                                        </p>
                                        <p className="text-sm text-blue-100">
                                            Get motivated to keep growing
                                        </p>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Login;