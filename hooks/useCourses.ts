import { useQuery } from "@tanstack/react-query";
import { getCourses, getCourse } from "@/services/course.service";

export function useCourses() {
  return useQuery({
    queryKey: ["courses"],
    queryFn: getCourses,
  });
}

export function useCourse(id: number) {
  return useQuery({
    queryKey: ["course", id],
    queryFn: () => getCourse(id),
    enabled: !!id,
  });
}