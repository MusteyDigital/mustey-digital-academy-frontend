import Image from "next/image";
import Link from "next/link";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { Clock, BookOpen, Star } from "lucide-react";

export interface Course {
  id: number;
  title: string;
  image: string;
  price: string;
  lessons: number;
  duration: string;
  rating: number;
  category: string;
}

interface Props {
  course: Course;
}

export default function CourseCard({ course }: Props) {
  return (
    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">

      <div className="relative h-56">

        <Image
          src={course.image}
          alt={course.title}
          fill
          className="object-cover"
        />

      </div>

      <CardContent className="space-y-4 pt-6">

        <Badge>{course.category}</Badge>

        <h3 className="text-xl font-bold">
          {course.title}
        </h3>

        <div className="flex justify-between text-sm text-gray-500">

          <span className="flex items-center gap-1">
            <BookOpen size={16}/>
            {course.lessons}
          </span>

          <span className="flex items-center gap-1">
            <Clock size={16}/>
            {course.duration}
          </span>

          <span className="flex items-center gap-1">
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
  );
}