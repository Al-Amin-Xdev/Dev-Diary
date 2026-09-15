import React from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ImagePlus,
  FileText,
  User,
  Tag,
  Send,
  Save,
} from "lucide-react";

const AddStory = () => {
  return (
    <div className="min-h-screen bg-slate-50 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">

        {/* Header */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="mb-3 flex items-center gap-2 text-sm text-slate-500">
              <Link
                href="/dashboard"
                className="transition hover:text-blue-600"
              >
                Dashboard
              </Link>

              <span>/</span>

              <span className="text-slate-700">
                Add Story
              </span>
            </div>

            <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Share Your Story
            </h1>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">
              Share your development journey, lessons you've learned, or
              experiences that could help other developers.
            </p>
          </div>

          <Link
            href="/dashboard/my-stories"
            className="flex w-fit items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-600 shadow-sm transition hover:bg-slate-50"
          >
            <ArrowLeft size={17} />
            My Stories
          </Link>
        </div>

        {/* Main Form */}
        <form className="grid grid-cols-1 gap-6 lg:grid-cols-3">

          {/* Left Side */}
          <div className="space-y-6 lg:col-span-2">

            {/* Story Information */}
            <section className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100 sm:p-7">

              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <FileText size={20} />
                </div>

                <div>
                  <h2 className="font-bold text-slate-900">
                    Story Information
                  </h2>

                  <p className="text-xs text-slate-400">
                    Tell us about your experience
                  </p>
                </div>
              </div>

              {/* Title */}
              <div>
                <label
                  htmlFor="title"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Story Title
                </label>

                <input
                  id="title"
                  type="text"
                  placeholder="e.g. My Journey from HTML to React"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-50"
                />
              </div>

              {/* Category */}
              <div className="mt-5">
                <label
                  htmlFor="category"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Category
                </label>

                <div className="relative">
                  <Tag
                    size={17}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <select
                    id="category"
                    className="w-full appearance-none rounded-xl border border-slate-200 bg-slate-50 px-11 py-3 text-sm text-slate-700 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-50"
                  >
                    <option value="">Select a category</option>
                    <option value="frontend">Frontend Development</option>
                    <option value="backend">Backend Development</option>
                    <option value="fullstack">Full Stack Development</option>
                    <option value="career">Career Journey</option>
                    <option value="learning">Learning Experience</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              {/* Story */}
              <div className="mt-5">
                <label
                  htmlFor="story"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Your Story
                </label>

                <textarea
                  id="story"
                  rows={10}
                  placeholder="Write your story here..."
                  className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm leading-6 text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-50"
                />

                <p className="mt-2 text-xs text-slate-400">
                  Share your experience, challenges, lessons, and what you
                  learned along the way.
                </p>
              </div>

            </section>

            {/* Cover Image */}
            <section className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100 sm:p-7">

              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
                  <ImagePlus size={20} />
                </div>

                <div>
                  <h2 className="font-bold text-slate-900">
                    Cover Image
                  </h2>

                  <p className="text-xs text-slate-400">
                    Add an image to make your story stand out
                  </p>
                </div>
              </div>

              <label
                htmlFor="image"
                className="flex min-h-44 cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50 px-5 text-center transition hover:border-blue-300 hover:bg-blue-50"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-blue-600 shadow-sm">
                  <ImagePlus size={22} />
                </div>

                <p className="mt-4 text-sm font-semibold text-slate-700">
                  Click to upload an image
                </p>

                <p className="mt-1 text-xs text-slate-400">
                  PNG, JPG or WEBP
                </p>

                <input
                  id="image"
                  type="file"
                  accept="image/png,image/jpeg,image/webp"
                  className="hidden"
                />
              </label>

            </section>

          </div>

          {/* Right Side */}
          <div className="space-y-6">

            {/* Author */}
            <section className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100">

              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                  <User size={20} />
                </div>

                <div>
                  <h2 className="font-bold text-slate-900">
                    Author
                  </h2>

                  <p className="text-xs text-slate-400">
                    Your story will be published under
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-xl bg-slate-50 p-4">

                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-violet-600 text-white">
                  <User size={20} />
                </div>

                <div>
                  <p className="text-sm font-semibold text-slate-800">
                    Your Name
                  </p>

                  <p className="text-xs text-slate-400">
                    Developer
                  </p>
                </div>

              </div>

            </section>

            {/* Publishing Tips */}
            <section className="rounded-2xl bg-gradient-to-br from-blue-600 to-violet-700 p-6 text-white shadow-lg">

              <h2 className="text-lg font-bold">
                ✨ Make it valuable
              </h2>

              <p className="mt-2 text-sm leading-6 text-blue-100">
                Great stories are honest, useful, and easy to follow.
              </p>

              <ul className="mt-5 space-y-3 text-sm text-blue-50">
                <li>✓ Explain what you learned</li>
                <li>✓ Talk about challenges you faced</li>
                <li>✓ Share useful lessons</li>
                <li>✓ Keep the story easy to read</li>
              </ul>

            </section>

            {/* Actions */}
            <section className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100">

              <button
                type="button"
                className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-600 transition hover:bg-slate-50"
              >
                <Save size={17} />
                Save Draft
              </button>

              <button
                type="submit"
                className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
              >
                <Send size={17} />
                Publish Story
              </button>

            </section>

          </div>

        </form>

      </div>
    </div>
  );
};

export default AddStory;