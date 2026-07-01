import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { enrollInCourse, checkEnrollment, getMyEnrollments } from "@/services/enrollment.service";

export function useCheckEnrollment(courseId: number, enabled: boolean) {
  return useQuery({
    queryKey: ["enrollment", courseId],
    queryFn: () => checkEnrollment(courseId),
    enabled: enabled && !!courseId,
  });
}

export function useEnroll() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (courseId: number) => enrollInCourse(courseId),
    onSuccess: (_data, courseId) => {
      queryClient.invalidateQueries({ queryKey: ["enrollment", courseId] });
      queryClient.invalidateQueries({ queryKey: ["enrollments"] });
    },
  });
}

export function useMyEnrollments() {
  return useQuery({
    queryKey: ["enrollments"],
    queryFn: getMyEnrollments,
  });
}
