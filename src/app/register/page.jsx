import React from "react";
import Link from "next/link";
import {
    User,
    Mail,
    LockKeyhole,
    Eye,
    ArrowRight,
    BookOpen,
    Sparkles,
} from "lucide-react";
import Title from "@/components/Title";

const Register = () => {
    return (
        <div className="min-h-screen bg-gray-50 px-4 py-4 sm:px-6 lg:px-8">

            <div className="mx-auto flex min-h-[calc(100vh-32px)] max-w-6xl items-center">

                <div className="grid w-full overflow-hidden rounded-3xl bg-white shadow-2xl lg:grid-cols-2">

                    {/* LEFT - DESIGN */}
                    <div className="relative hidden min-h-[650px] overflow-hidden bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600 p-10 lg:flex lg:items-center">

                        {/* Decorative circles */}
                        <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-white/10" />
                        <div className="absolute -bottom-28 -right-24 h-80 w-80 rounded-full bg-white/10" />
                        <div className="absolute right-20 top-20 h-24 w-24 rounded-full bg-pink-400/20 blur-xl" />

                        <div className="relative z-10 text-white">

                            <div className="mb-6 inline-flex rounded-2xl bg-white/15 p-4 backdrop-blur-sm">
                                <Sparkles size={34} />
                            </div>

                            <h2 className="max-w-md text-4xl font-extrabold leading-tight xl:text-5xl">
                                Start your learning
                                <span className="block text-purple-100">
                                    journey today.
                                </span>
                            </h2>

                            <p className="mt-5 max-w-md text-base leading-7 text-purple-100">
                                Create your account and explore tutorials,
                                inspiring stories, and useful resources.
                            </p>

                            <div className="mt-8 flex items-center gap-4 rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
                                <div className="rounded-xl bg-white/15 p-3">
                                    <BookOpen size={24} />
                                </div>

                                <div>
                                    <p className="font-bold">
                                        Learn & Grow
                                    </p>
                                    <p className="text-sm text-purple-100">
                                        Your knowledge journey starts here.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>


                    {/* RIGHT - REGISTER FORM */}
                    <div className="flex items-center justify-center p-5 sm:p-8 lg:p-10">
                        <div className="w-full max-w-md">

                            {/* Icon */}
                            <div className="mb-4 flex justify-center lg:justify-start">
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 text-white shadow-lg">
                                    <User size={24} />
                                </div>
                            </div>

                            <div className="lg:text-left">
                                <Title>Create Account</Title>

                                <p className="mb-6 text-center text-sm text-gray-500 lg:text-left">
                                    Join us and start learning today.
                                </p>
                            </div>


                            {/* FORM */}
                            <form className="space-y-4">

                                {/* Name */}
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="mb-1.5 block text-sm font-semibold text-gray-700"
                                    >
                                        Full Name
                                    </label>

                                    <div className="relative">
                                        <User
                                            size={18}
                                            className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-500"
                                        />

                                        <input
                                            id="name"
                                            type="text"
                                            placeholder="Enter your full name"
                                            className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-11 pr-4 text-sm outline-none transition focus:border-purple-500 focus:bg-white focus:ring-4 focus:ring-purple-50"
                                        />
                                    </div>
                                </div>


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
                                    <label
                                        htmlFor="password"
                                        className="mb-1.5 block text-sm font-semibold text-gray-700"
                                    >
                                        Password
                                    </label>

                                    <div className="relative">
                                        <LockKeyhole
                                            size={18}
                                            className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-500"
                                        />

                                        <input
                                            id="password"
                                            type="password"
                                            placeholder="Create a password"
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


                                {/* Confirm Password */}
                                <div>
                                    <label
                                        htmlFor="confirmPassword"
                                        className="mb-1.5 block text-sm font-semibold text-gray-700"
                                    >
                                        Confirm Password
                                    </label>

                                    <div className="relative">
                                        <LockKeyhole
                                            size={18}
                                            className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-500"
                                        />

                                        <input
                                            id="confirmPassword"
                                            type="password"
                                            placeholder="Confirm your password"
                                            className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-11 pr-4 text-sm outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-50"
                                        />
                                    </div>
                                </div>


                                {/* Terms */}
                                <div className="flex items-start gap-2 pt-1">
                                    <input
                                        id="terms"
                                        type="checkbox"
                                        className="mt-0.5 h-4 w-4 accent-purple-600"
                                    />

                                    <label
                                        htmlFor="terms"
                                        className="text-xs leading-5 text-gray-500"
                                    >
                                        I agree to the{" "}
                                        <span className="font-semibold text-blue-600">
                                            Terms & Conditions
                                        </span>
                                    </label>
                                </div>


                                {/* Register Button */}
                                <button
                                    type="submit"
                                    className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 py-3 font-semibold text-white shadow-lg shadow-purple-100 transition duration-300 hover:-translate-y-0.5 hover:shadow-xl"
                                >
                                    Create Account
                                    <ArrowRight
                                        size={18}
                                        className="transition group-hover:translate-x-1"
                                    />
                                </button>

                            </form>


                            {/* Divider */}
                            <div className="my-5 flex items-center gap-3">
                                <div className="h-px flex-1 bg-gray-200" />

                                <span className="text-xs text-gray-400">
                                    OR
                                </span>

                                <div className="h-px flex-1 bg-gray-200" />
                            </div>


                            {/* Google */}
                            <button
                                type="button"
                                className="flex w-full items-center justify-center gap-3 rounded-xl border border-gray-200 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-50"
                            >
                               
                                Continue with Google
                            </button>


                            {/* Login */}
                            <p className="mt-5 text-center text-sm text-gray-500">
                                Already have an account?{" "}
                                <Link
                                    href="/login"
                                    className="font-bold text-blue-600 hover:text-purple-600"
                                >
                                    Login
                                </Link>
                            </p>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Register;