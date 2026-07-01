import FeaturedCourses from "@/components/home/FeaturedCourses";

export default function CoursesPage() {
  return (
    <main>
      <div className="py-16 text-center bg-blue-600 text-white">
        <h1 className="text-5xl font-bold">
          Our Courses
        </h1>

        <p className="mt-4 text-lg">
          Choose a course and start learning today.
        </p>
      </div>

      <FeaturedCourses />
    </main>
  );
}export const dynamic = "force-dynamic";
export const revalidate = 0;
