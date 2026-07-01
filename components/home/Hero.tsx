import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white">

      <div className="max-w-7xl mx-auto px-6 py-28">

        <h1 className="text-6xl font-bold max-w-3xl leading-tight">
          Learn Digital Skills That Build Your Future
        </h1>

        <p className="mt-8 text-xl max-w-2xl text-blue-100">
          Master Data Analysis, Web Development, AI,
          Cybersecurity and more through practical,
          project-based courses.
        </p>

        <div className="mt-10 flex gap-4">

          <Link
            href="/courses"
            className="bg-white text-blue-700 px-8 py-4 rounded-xl font-semibold"
          >
            Browse Courses
          </Link>

          <Link
            href="/register"
            className="border border-white px-8 py-4 rounded-xl"
          >
            Get Started
          </Link>

        </div>

      </div>

    </section>
  );
}