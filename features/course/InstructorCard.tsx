import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

import {
  Star,
  GraduationCap,
  BookOpen,
  Award,
} from "lucide-react";

interface Props {
  instructor: {
    name: string;
    role: string;
    avatar: string;
    bio: string;
    students: number;
    courses: number;
    rating: number;
  };
}

export default function InstructorCard({
  instructor,
}: Props) {
  return (
    <section className="mt-16">

      <h2 className="text-3xl font-bold mb-6">
        Meet Your Instructor
      </h2>

      <Card className="p-8">

        <div className="flex flex-col md:flex-row gap-8">

          <Avatar className="h-28 w-28">

            <AvatarImage
              src={instructor.avatar}
              alt={instructor.name}
            />

            <AvatarFallback>
              {instructor.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>

          </Avatar>

          <div className="flex-1">

            <h3 className="text-2xl font-bold">
              {instructor.name}
            </h3>

            <p className="text-blue-600 font-medium mt-1">
              {instructor.role}
            </p>

            <p className="text-gray-600 mt-4 leading-7">
              {instructor.bio}
            </p>

            <Separator className="my-6" />

            <div className="grid md:grid-cols-3 gap-6">

              <div className="flex items-center gap-3">

                <Star
                  className="text-yellow-500"
                  size={22}
                />

                <div>

                  <p className="font-bold">
                    {instructor.rating}
                  </p>

                  <p className="text-sm text-gray-500">
                    Instructor Rating
                  </p>

                </div>

              </div>

              <div className="flex items-center gap-3">

                <GraduationCap
                  className="text-blue-600"
                  size={22}
                />

                <div>

                  <p className="font-bold">
                    {instructor.students.toLocaleString()}
                  </p>

                  <p className="text-sm text-gray-500">
                    Students
                  </p>

                </div>

              </div>

              <div className="flex items-center gap-3">

                <BookOpen
                  className="text-green-600"
                  size={22}
                />

                <div>

                  <p className="font-bold">
                    {instructor.courses}
                  </p>

                  <p className="text-sm text-gray-500">
                    Courses
                  </p>

                </div>

              </div>

            </div>

            <div className="mt-8 flex items-center gap-3 rounded-xl bg-blue-50 p-4">

              <Award className="text-blue-600" />

              <p className="text-sm text-gray-700">
                Top-rated instructor helping students
                master practical digital skills through
                project-based learning.
              </p>

            </div>

          </div>

        </div>

      </Card>

    </section>
  );
}