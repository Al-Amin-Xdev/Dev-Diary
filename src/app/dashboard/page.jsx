import React from "react";
import Link from "next/link";
import {
  BookOpen,
  PlusCircle,
  User,
  Settings,
  ArrowRight,
  TrendingUp,
  Heart,
  Award,
} from "lucide-react";

const Page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 px-4 py-8 sm:px-6 lg:px-8">

      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            Dashboard
          </p>

          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            What would you like to do?
          </h1>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">
            Manage your stories, track your learning progress, and keep your
            developer journey organized.
          </p>
        </div>

        {/* Main Featured Card */}
        <div className="mb-6 overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 to-violet-600 p-6 text-white shadow-lg sm:p-8">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">

            <div className="max-w-xl">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15">
                <TrendingUp size={24} />
              </div>

              <h2 className="text-2xl font-bold sm:text-3xl">
                Keep building. Keep learning.
              </h2>

              <p className="mt-3 text-sm leading-6 text-blue-100 sm:text-base">
                Share what you learn, document your experiences, and build
                your developer portfolio one story at a time.
              </p>

              <Link
                href="/dashboard/add-story"
                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-blue-600 transition hover:bg-blue-50"
              >
                <PlusCircle size={18} />
                Write a Story
                <ArrowRight size={17} />
              </Link>
            </div>

            {/* Decorative Graphic */}
            <div className="hidden md:flex md:h-40 md:w-40 md:items-center md:justify-center">
              <div className="flex h-32 w-32 items-center justify-center rounded-full border-8 border-white/10">
                <div className="flex h-24 w-24 items-center justify-center rounded-full border-8 border-white/20">
                  <BookOpen size={38} />
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Navigation Cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {/* Stories */}
          <Link
            href="/dashboard/my-stories"
            className="group rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100 transition duration-200 hover:-translate-y-1 hover:shadow-md"
          >
            <div className="flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <BookOpen size={22} />
              </div>

              <ArrowRight
                size={18}
                className="text-slate-300 transition group-hover:translate-x-1 group-hover:text-blue-600"
              />
            </div>

            <h3 className="mt-5 text-lg font-bold text-slate-800">
              My Stories
            </h3>

            <p className="mt-2 text-sm leading-5 text-slate-500">
              View and manage the stories you've published.
            </p>
          </Link>

          {/* Add Story */}
          <Link
            href="/dashboard/add-story"
            className="group rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100 transition duration-200 hover:-translate-y-1 hover:shadow-md"
          >
            <div className="flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
                <PlusCircle size={22} />
              </div>

              <ArrowRight
                size={18}
                className="text-slate-300 transition group-hover:translate-x-1 group-hover:text-violet-600"
              />
            </div>

            <h3 className="mt-5 text-lg font-bold text-slate-800">
              Add Story
            </h3>

            <p className="mt-2 text-sm leading-5 text-slate-500">
              Share a new experience with the developer community.
            </p>
          </Link>

          {/* Profile */}
          <Link
            href="/dashboard/my-profile"
            className="group rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100 transition duration-200 hover:-translate-y-1 hover:shadow-md"
          >
            <div className="flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                <User size={22} />
              </div>

              <ArrowRight
                size={18}
                className="text-slate-300 transition group-hover:translate-x-1 group-hover:text-emerald-600"
              />
            </div>

            <h3 className="mt-5 text-lg font-bold text-slate-800">
              My Profile
            </h3>

            <p className="mt-2 text-sm leading-5 text-slate-500">
              Manage your profile information and account details.
            </p>
          </Link>

          {/* Settings */}
          <Link
            href="/dashboard/settings"
            className="group rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100 transition duration-200 hover:-translate-y-1 hover:shadow-md"
          >
            <div className="flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
                <Settings size={22} />
              </div>

              <ArrowRight
                size={18}
                className="text-slate-300 transition group-hover:translate-x-1 group-hover:text-orange-600"
              />
            </div>

            <h3 className="mt-5 text-lg font-bold text-slate-800">
              Settings
            </h3>

            <p className="mt-2 text-sm leading-5 text-slate-500">
              Customize your account and application preferences.
            </p>
          </Link>

        </div>

        {/* Bottom Statistics */}
        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-3">

          <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
            <div className="flex items-center gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <BookOpen size={20} />
              </div>

              <div>
                <p className="text-xs font-medium text-slate-400">
                  Stories
                </p>
                <p className="text-2xl font-bold text-slate-900">
                  12
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
            <div className="flex items-center gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-pink-50 text-pink-600">
                <Heart size={20} />
              </div>

              <div>
                <p className="text-xs font-medium text-slate-400">
                  Likes Received
                </p>
                <p className="text-2xl font-bold text-slate-900">
                  248
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
            <div className="flex items-center gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                <Award size={20} />
              </div>

              <div>
                <p className="text-xs font-medium text-slate-400">
                  Achievements
                </p>
                <p className="text-2xl font-bold text-slate-900">
                  7
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Page;