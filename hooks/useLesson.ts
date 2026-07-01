import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getLesson, completeLesson } from "@/services/lesson.service";

export function useLesson(courseId: number, lessonId: number) {
  return useQuery({
    queryKey: ["lesson", courseId, lessonId],
    queryFn: () => getLesson(courseId, lessonId),
    enabled: !!courseId && !!lessonId,
  });
}

export function useCompleteLesson() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (lessonId: number) => completeLesson(lessonId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["lesson"] });
      queryClient.invalidateQueries({ queryKey: ["enrollments"] });
    },
  });
}
