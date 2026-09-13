import Banner from "@/components/Banner";
import React from "react";

const Home = () => {

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute -left-32 -top-32 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl"></div>

        <div className="absolute -right-32 top-40 h-80 w-80 rounded-full bg-purple-600/20 blur-3xl"></div>

        <div className="relative mx-auto grid min-h-[calc(100vh-70px)] max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
          
          {/* Left Side */}
          <div>
            <p className="mb-5 inline-block rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-sm text-slate-300">
              Welcome to Developer Story
            </p>

            <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
              Learn.
              <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Build. Share.
              </span>
              Grow Together.
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-slate-400 sm:text-lg">
              A place where developers share their journey, discover useful
              tutorials, learn from real experiences, and build better
              projects together.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button className="rounded-xl bg-blue-600 px-6 py-3 font-semibold transition hover:bg-blue-500">
                Explore Stories
              </button>

              <button className="rounded-xl border border-slate-700 px-6 py-3 font-semibold text-slate-200 transition hover:bg-slate-900">
                Browse Tutorials
              </button>
            </div>

            {/* Simple Text Links */}
            <div className="mt-8 flex flex-wrap gap-5 text-sm text-slate-400">
              <a href="#" className="transition hover:text-white">
                GitHub
              </a>

              <a href="#" className="transition hover:text-white">
                LinkedIn
              </a>

              <a href="#" className="transition hover:text-white">
                Twitter
              </a>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-md">
              <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-2xl">
                
                {/* Browser Header */}
                <div className="flex items-center gap-2 border-b border-slate-800 px-4 py-3">
                  <span className="h-3 w-3 rounded-full bg-red-400"></span>
                  <span className="h-3 w-3 rounded-full bg-yellow-400"></span>
                  <span className="h-3 w-3 rounded-full bg-green-400"></span>

                  <div className="ml-3 flex-1 rounded-md bg-slate-800 px-3 py-1 text-xs text-slate-500">
                    developer-story.com
                  </div>
                </div>

                {/* Code */}
                <div className="p-6 font-mono text-sm leading-7">
                  <p className="text-purple-400">
                    const <span className="text-blue-400">developer</span> = {"{"}
                  </p>

                  <p className="pl-5 text-slate-400">
                    name: <span className="text-green-400">"Your Story"</span>,
                  </p>

                  <p className="pl-5 text-slate-400">
                    skills: [
                    <span className="text-green-400">"React"</span>,{" "}
                    <span className="text-green-400">"Next.js"</span>],
                  </p>

                  <p className="pl-5 text-slate-400">
                    learning: <span className="text-green-400">true</span>,
                  </p>

                  <p className="pl-5 text-slate-400">
                    building: <span className="text-green-400">true</span>,
                  </p>

                  <p className="pl-5 text-slate-400">
                    sharing: <span className="text-green-400">true</span>,
                  </p>

                  <p className="text-purple-400">{"}"};</p>

                  <div className="mt-6 rounded-lg bg-slate-950 p-4">
                    <p className="font-sans font-semibold text-white">
                      Keep Building
                    </p>

                    <p className="mt-1 font-sans text-xs text-slate-500">
                      Every line of code tells a story.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="border-t border-slate-800 bg-slate-900/50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-400">
              Developer Story
            </p>

            <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
              Everything developers need to keep growing
            </h2>

            <p className="mt-4 text-slate-400">
              Learn from tutorials, read real developer experiences, and share
              your own journey.
            </p>
          </div>

          {/* Cards */}
          <div className="mt-10 grid gap-5 md:grid-cols-3">

            {/* Learn */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:-translate-y-1 hover:border-blue-500/50">
              <p className="text-sm font-semibold uppercase text-blue-400">
                01
              </p>

              <h3 className="mt-4 text-xl font-bold">
                Learn
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-400">
                Explore practical tutorials and useful resources to improve
                your development skills.
              </p>

              <a
                href="#"
                className="mt-5 inline-block text-sm font-semibold text-blue-400 hover:text-blue-300"
              >
                Explore tutorials →
              </a>
            </div>

            {/* Build */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:-translate-y-1 hover:border-purple-500/50">
              <p className="text-sm font-semibold uppercase text-purple-400">
                02
              </p>

              <h3 className="mt-4 text-xl font-bold">
                Build
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-400">
                Turn what you learn into real projects and gain experience by
                building things that matter.
              </p>

              <a
                href="#"
                className="mt-5 inline-block text-sm font-semibold text-purple-400 hover:text-purple-300"
              >
                Start building →
              </a>
            </div>

            {/* Share */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:-translate-y-1 hover:border-cyan-500/50">
              <p className="text-sm font-semibold uppercase text-cyan-400">
                03
              </p>

              <h3 className="mt-4 text-xl font-bold">
                Share
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-400">
                Share your developer journey, lessons, challenges, and
                experiences with other developers.
              </p>

              <a
                href="#"
                className="mt-5 inline-block text-sm font-semibold text-cyan-400 hover:text-cyan-300"
              >
                Share your story →
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl rounded-3xl bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-12 text-center sm:px-10">

          <p className="text-sm font-semibold uppercase tracking-wider text-blue-100">
            Your Journey Matters
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Your developer journey is a story worth sharing.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm text-blue-100 sm:text-base">
            Start learning, start building, and share what you discover along
            the way.
          </p>

          <Banner></Banner>

        </div>
      </section>
    </main>
  );
};

export default Home;