import React from "react";
import Link from "next/link";

const Myprofile = () => {
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

            <span className="text-slate-700">My Profile</span>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h1 className="bg-gradient-to-r from-blue-600 via-violet-600 to-pink-500 bg-clip-text text-3xl font-extrabold tracking-tight text-transparent sm:text-4xl">
                My Profile
              </h1>

              <p className="mt-2 text-sm text-slate-500 sm:text-base">
                Manage your profile and see your learning activity.
              </p>
            </div>

            <Link
              href="/dashboard/settings"
              className="w-fit rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md transition hover:scale-[1.02] hover:shadow-lg"
            >
              Edit Profile
            </Link>
          </div>
        </div>

        {/* Profile Card */}
        <section className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-100">

          {/* Gradient Cover */}
          <div className="h-32 bg-gradient-to-r from-blue-600 via-violet-600 to-pink-500 sm:h-40" />

          <div className="px-5 pb-7 sm:px-8">

            {/* Avatar */}
            <div className="-mt-14 flex flex-col gap-5 sm:-mt-16 sm:flex-row sm:items-end sm:justify-between">

              <div className="flex flex-col gap-4 sm:flex-row sm:items-end">

                <img
                  src="https://i.pravatar.cc/200?img=12"
                  alt="Profile"
                  className="h-28 w-28 rounded-full border-4 border-white object-cover shadow-xl sm:h-32 sm:w-32"
                />

                <div className="pb-1">
                  <h2 className="text-2xl font-bold text-slate-900">
                    Your Name
                  </h2>

                  <p className="mt-1 bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-sm font-bold text-transparent">
                    Frontend Developer
                  </p>
                </div>

              </div>

              <span className="w-fit rounded-full bg-emerald-50 px-4 py-2 text-xs font-bold text-emerald-600">
                Active
              </span>

            </div>

            {/* Bio */}
            <p className="mt-6 max-w-3xl text-sm leading-6 text-slate-500">
              Passionate developer who enjoys learning new technologies,
              building projects, and sharing experiences with other developers.
            </p>

            {/* Details */}
            <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-500">
              <span>📍 Bangladesh</span>
              <span>✉ your@email.com</span>
              <span>🌐 Developer</span>
            </div>

          </div>
        </section>

        {/* Statistics */}
        <div className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">

          <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
            <p className="text-3xl font-extrabold bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
              12
            </p>

            <p className="mt-2 text-sm font-medium text-slate-500">
              Stories Published
            </p>

            <p className="mt-2 text-xs font-semibold text-emerald-500">
              +12% this month
            </p>
          </div>

          <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
            <p className="text-3xl font-extrabold bg-gradient-to-r from-violet-600 to-pink-500 bg-clip-text text-transparent">
              24
            </p>

            <p className="mt-2 text-sm font-medium text-slate-500">
              Tutorials Completed
            </p>

            <p className="mt-2 text-xs font-semibold text-emerald-500">
              +8% this month
            </p>
          </div>

          <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
            <p className="text-3xl font-extrabold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
              48h
            </p>

            <p className="mt-2 text-sm font-medium text-slate-500">
              Learning Time
            </p>

            <p className="mt-2 text-xs font-semibold text-emerald-500">
              +15% this month
            </p>
          </div>

          <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
            <p className="text-3xl font-extrabold bg-gradient-to-r from-emerald-500 to-blue-600 bg-clip-text text-transparent">
              2026
            </p>

            <p className="mt-2 text-sm font-medium text-slate-500">
              Member Since
            </p>

            <p className="mt-2 text-xs font-semibold text-slate-400">
              Welcome aboard
            </p>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">

          {/* Account Information */}
          <section className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100 lg:col-span-2">

            <div className="mb-6">
              <h2 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                Account Information
              </h2>

              <p className="mt-1 text-sm text-slate-400">
                Your personal account details
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

              <div className="rounded-xl bg-slate-50 p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Full Name
                </p>

                <p className="mt-2 text-sm font-bold text-slate-800">
                  Your Name
                </p>
              </div>

              <div className="rounded-xl bg-slate-50 p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Email Address
                </p>

                <p className="mt-2 break-all text-sm font-bold text-slate-800">
                  your@email.com
                </p>
              </div>

              <div className="rounded-xl bg-slate-50 p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Account Role
                </p>

                <p className="mt-2 text-sm font-bold bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                  Developer
                </p>
              </div>

              <div className="rounded-xl bg-slate-50 p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Joined
                </p>

                <p className="mt-2 text-sm font-bold text-slate-800">
                  September 2026
                </p>
              </div>

            </div>
          </section>

          {/* Quick Actions */}
          <section className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100">

            <h2 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
              Quick Actions
            </h2>

            <p className="mt-1 text-sm text-slate-400">
              Manage your dashboard
            </p>

            <div className="mt-5 space-y-3">

              <Link
                href="/dashboard/add-story"
                className="block rounded-xl bg-gradient-to-r from-blue-50 to-violet-50 p-4 transition hover:from-blue-100 hover:to-violet-100"
              >
                <p className="text-sm font-bold text-slate-800">
                  Add New Story
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  Share your development journey
                </p>
              </Link>

              <Link
                href="/dashboard/my-stories"
                className="block rounded-xl bg-gradient-to-r from-violet-50 to-pink-50 p-4 transition hover:from-violet-100 hover:to-pink-100"
              >
                <p className="text-sm font-bold text-slate-800">
                  My Stories
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  View and manage your stories
                </p>
              </Link>

              <Link
                href="/dashboard/settings"
                className="block rounded-xl bg-gradient-to-r from-emerald-50 to-blue-50 p-4 transition hover:from-emerald-100 hover:to-blue-100"
              >
                <p className="text-sm font-bold text-slate-800">
                  Profile Settings
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  Update your profile information
                </p>
              </Link>

            </div>
          </section>

        </div>

        {/* Profile Completion */}
        <section className="mt-6 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100 sm:p-7">

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

            <div>
              <h2 className="text-xl font-bold bg-gradient-to-r from-blue-600 via-violet-600 to-pink-500 bg-clip-text text-transparent">
                Profile Completion
              </h2>

              <p className="mt-1 text-sm text-slate-400">
                Complete your profile to get the most out of the platform.
              </p>
            </div>

            <span className="text-2xl font-extrabold bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
              80%
            </span>

          </div>

          <div className="mt-5 h-3 overflow-hidden rounded-full bg-slate-100">
            <div className="h-full w-[80%] rounded-full bg-gradient-to-r from-blue-500 via-violet-500 to-pink-500" />
          </div>

          <div className="mt-3 flex justify-between text-xs text-slate-400">
            <span>Profile completion</span>
            <span>80 / 100</span>
          </div>

        </section>

      </div>
    </div>
  );
};

export default Myprofile;