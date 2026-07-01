import { getCourse } from "@/services/course.service";
import { getCourses } from "@/services/course.service";
import { notFound } from "next/navigation";

import CourseHero from "@/features/course/CourseHero";
import CourseSidebar from "@/features/course/CourseSidebar";
import LearningObjectives from "@/features/course/LearningObjectives";
import EnrolledCurriculumAccordion from "@/features/course/EnrolledCurriculumAccordion";
import InstructorCard from "@/features/course/InstructorCard";
import Reviews from "@/features/course/Reviews";
import RelatedCourses from "@/features/course/RelatedCourses";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function CourseDetailsPage({
  params,
}: Props) {
  const { id } = await params;
  const course = await getCourse(Number(id));

  if (!course) {
    notFound();
  }

  const allCourses = await getCourses();

  return (
    <main className="max-w-7xl mx-auto px-6 py-10">
      <div className="grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2">
          <CourseHero
            title={course.title}
            description={course.description}
            category={course.category}
            image={course.image}
            rating={course.rating}
            lessons={course.lessons}
            duration={course.duration}
          />
          <LearningObjectives
            objectives={course.objectives}
          />
          <EnrolledCurriculumAccordion
            curriculum={course.curriculum}
            courseId={course.id}
          />
          <InstructorCard
            instructor={course.instructor}
          />
          <Reviews />
          <RelatedCourses
            currentCourseId={course.id}
            courses={allCourses}
          />
        </div>
        <CourseSidebar
          image={course.image}
          title={course.title}
          price={course.price}
          courseId={course.id}
        />
      </div>
    </main>
  );
}
