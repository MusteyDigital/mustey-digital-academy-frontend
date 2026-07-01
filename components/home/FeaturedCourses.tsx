"use client";

import Link from "next/link";
import Image from "next/image";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import {
  Clock,
  BookOpen,
  Star,
} from "lucide-react";

import { useCourses } from "@/hooks/useCourses";

export default function FeaturedCourses() {
  const { data: courses, isLoading, isError } = useCourses();

  if (isLoading) {
    return (
      <section className="py-24 bg-slate-50 text-center">
        <p className="text-gray-500">Loading courses...</p>
      </section>
    );
  }

  if (isError || !courses) {
    return (
      <section className="py-24 bg-slate-50 text-center">
        <p className="text-red-500">Failed to load courses.</p>
      </section>
    );
  }

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">
            Featured Courses
          </h2>

          <p className="text-gray-500 mt-4">
            Learn practical digital skills through project-based courses.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {courses.map((course) => (

            <Card
              key={course.id}
              className="overflow-hidden hover:shadow-xl transition"
            >

              <div className="relative h-56 bg-gray-200">

                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover"
                />

              </div>

              <CardHeader>

                <Badge>
                  {course.category}
                </Badge>

                <h3 className="text-xl font-bold mt-3">
                  {course.title}
                </h3>

              </CardHeader>

              <CardContent>

                <div className="flex justify-between text-sm text-gray-500">

                  <span className="flex gap-1 items-center">
                    <BookOpen size={16}/>
                    {course.lessons}
                  </span>

                  <span className="flex gap-1 items-center">
                    <Clock size={16}/>
                    {course.duration}
                  </span>

                  <span className="flex gap-1 items-center">
                    <Star
                      size={16}
                      className="text-yellow-500"
                    />
                    {course.rating}
                  </span>

                </div>

              </CardContent>

              <CardFooter className="flex justify-between">

                <span className="font-bold text-xl">
                  {course.price}
                </span>

                <Button asChild>

                  <Link href={`/courses/${course.id}`}>
                    View Course
                  </Link>

                </Button>

              </CardFooter>

            </Card>

          ))}

        </div>

      </div>
    </section>
  );
}