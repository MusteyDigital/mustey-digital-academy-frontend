import Link from "next/link";
import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import { Star, BookOpen } from "lucide-react";

import { Course } from "@/types/course";

interface Props {
  currentCourseId: number;
  courses: Course[];
}

export default function RelatedCourses({
  currentCourseId,
  courses,
}: Props) {
  const related = courses
    .filter((course) => course.id !== currentCourseId)
    .slice(0, 2);

  return (
    <section className="mt-20">

      <div className="mb-8">

        <h2 className="text-3xl font-bold">
          Related Courses
        </h2>

        <p className="text-muted-foreground mt-2">
          Continue learning with these recommended courses.
        </p>

      </div>

      <div className="grid md:grid-cols-2 gap-8">

        {related.map((course) => (

          <Card
            key={course.id}
            className="overflow-hidden hover:shadow-xl transition-all"
          >

            <div className="relative h-56">

              <Image
                src={course.image}
                alt={course.title}
                fill
                className="object-cover"
              />

            </div>

            <CardContent className="p-6">

              <span className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">

                {course.category}

              </span>

              <h3 className="text-xl font-bold mt-4">
                {course.title}
              </h3>

              <p className="text-muted-foreground mt-3">
                {course.description}
              </p>

              <div className="flex justify-between mt-5 text-sm">

                <div className="flex items-center gap-2">

                  <BookOpen size={18} />

                  {course.lessons} Lessons

                </div>

                <div className="flex items-center gap-2">

                  <Star
                    className="fill-yellow-400 text-yellow-400"
                    size={18}
                  />

                  {course.rating}

                </div>

              </div>

              <div className="flex justify-between items-center mt-6">

                <span className="text-2xl font-bold text-blue-600">
                  {course.price}
                </span>

                <Link href={`/courses/${course.id}`}>

                  <Button>
                    View Course
                  </Button>

                </Link>

              </div>

            </CardContent>

          </Card>

        ))}

      </div>

    </section>
  );
}