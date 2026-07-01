import Image from "next/image";
import { Badge } from "@/components/ui/badge";

interface Props {
  title: string;
  description: string;
  category: string;
  image: string;
  rating: number;
  lessons: number;
  duration: string;
}

export default function CourseHero({
  title,
  description,
  category,
  image,
  rating,
  lessons,
  duration,
}: Props) {
  return (
    <>
      <div className="relative w-full h-[420px] rounded-2xl overflow-hidden">

        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />

      </div>

      <div className="mt-8">

        <Badge>
          {category}
        </Badge>

        <h1 className="text-5xl font-bold mt-5">
          {title}
        </h1>

        <p className="text-gray-600 mt-5 text-lg leading-8">
          {description}
        </p>

        <div className="flex flex-wrap gap-8 mt-8 text-gray-600">

          <span>⭐ {rating}</span>

          <span>📚 {lessons} Lessons</span>

          <span>⏱ {duration}</span>

        </div>

      </div>
    </>
  );
}