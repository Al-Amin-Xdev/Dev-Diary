import React from "react";
import Link from "next/link";

const Navigation = () => {
  return (
    <div className="min-h-screen bg-slate-50 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">

        {/* Header */}
        <div className="mb-8">
          <div className="mb-3 flex items-center gap-2 text-sm text-slate-500">
            <Link
              href="/dashboard"
              className="transition hover:text-blue-600"
            >
              Dashboard
            </Link>

            <span>/</span>

            <span className="text-slate-700">Navigation</span>
          </div>

          <h1 className="bg-gradient-to-r from-blue-600 via-violet-600 to-pink-500 bg-clip-text text-3xl font-extrabold text-transparent sm:text-4xl">
            Navigation
          </h1>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">
            Quickly access different sections of your dashboard and manage
            your developer journey.
          </p>
        </div>

        {/* Welcome Card */}
        <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 via-violet-600 to-pink-500 p-6 text-white shadow-lg sm:p-8">

          <div className="relative z-10 max-w-2xl">
            <p className="text-sm font-semibold text-blue-100">
              YOUR DASHBOARD
            </p>

            <h2 className="mt-2 text-2xl font-extrabold sm:text-3xl">
              Where would you like to go?
            </h2>

            <p className="mt-3 text-sm leading-6 text-blue-50 sm:text-base">
              Explore your stories, tutorials, profile, settings and other
              important sections from one place.
            </p>
          </div>

          {/* Decorative circles */}
          <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-white/10" />
          <div className="absolute -bottom-20 right-20 h-48 w-48 rounded-full bg-white/10" />

        </section>

        {/* Navigation Cards */}
        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">

          {/* My Profile */}
          <Link
            href="/dashboard/my-profile"
            className="group rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <p className="text-xs font-bold uppercase tracking-wider text-blue-500">
              Profile
            </p>

            <h3 className="mt-3 text-xl font-bold text-slate-900">
              My Profile
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              View your personal information, activity and profile progress.
            </p>

            <div className="mt-5 text-sm font-bold text-blue-600 transition group-hover:translate-x-1">
              View Profile →
            </div>
          </Link>

          {/* Add Story */}
          <Link
            href="/dashboard/add-story"
            className="group rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <p className="text-xs font-bold uppercase tracking-wider text-violet-500">
              Create
            </p>

            <h3 className="mt-3 text-xl font-bold text-slate-900">
              Add Story
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Share your development journey, experience and lessons.
            </p>

            <div className="mt-5 text-sm font-bold text-violet-600 transition group-hover:translate-x-1">
              Create Story →
            </div>
          </Link>

          {/* My Stories */}
          <Link
            href="/dashboard/my-stories"
            className="group rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <p className="text-xs font-bold uppercase tracking-wider text-pink-500">
              Content
            </p>

            <h3 className="mt-3 text-xl font-bold text-slate-900">
              My Stories
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Browse, edit and manage all the stories you have published.
            </p>

            <div className="mt-5 text-sm font-bold text-pink-600 transition group-hover:translate-x-1">
              View Stories →
            </div>
          </Link>

          {/* Tutorials */}
          <Link
            href="/tutorials"
            className="group rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <p className="text-xs font-bold uppercase tracking-wider text-emerald-500">
              Learn
            </p>

            <h3 className="mt-3 text-xl font-bold text-slate-900">
              Tutorials
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Continue learning and explore useful developer tutorials.
            </p>

            <div className="mt-5 text-sm font-bold text-emerald-600 transition group-hover:translate-x-1">
              Explore Tutorials →
            </div>
          </Link>

          {/* Settings */}
          <Link
            href="/dashboard/settings"
            className="group rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <p className="text-xs font-bold uppercase tracking-wider text-orange-500">
              Account
            </p>

            <h3 className="mt-3 text-xl font-bold text-slate-900">
              Settings
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Manage your account preferences and profile settings.
            </p>

            <div className="mt-5 text-sm font-bold text-orange-600 transition group-hover:translate-x-1">
              Open Settings →
            </div>
          </Link>

          {/* Home */}
          <Link
            href="/"
            className="group rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <p className="text-xs font-bold uppercase tracking-wider text-indigo-500">
              Website
            </p>

            <h3 className="mt-3 text-xl font-bold text-slate-900">
              Home
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Return to the main website and explore the public pages.
            </p>

            <div className="mt-5 text-sm font-bold text-indigo-600 transition group-hover:translate-x-1">
              Go Home →
            </div>
          </Link>

        </div>

        {/* Bottom CTA */}
        <section className="mt-6 rounded-2xl bg-white p-6 text-center shadow-sm ring-1 ring-slate-100 sm:p-8">

          <h2 className="bg-gradient-to-r from-blue-600 via-violet-600 to-pink-500 bg-clip-text text-2xl font-extrabold text-transparent">
            Keep Learning. Keep Building.
          </h2>

          <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-slate-500">
            Every project, tutorial and story is another step forward in
            your development journey.
          </p>

          <Link
            href="/tutorials"
            className="mt-5 inline-block rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 px-6 py-3 text-sm font-bold text-white shadow-md transition hover:scale-[1.02] hover:shadow-lg"
          >
            Start Learning
          </Link>

        </section>

      </div>
    </div>
  );
};

export default Navigation;