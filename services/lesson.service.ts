import api from "./api";

export async function getLesson(courseId: number, lessonId: number) {
  const { data } = await api.get(`/courses/${courseId}/lessons/${lessonId}`);
  return data;
}

export async function completeLesson(lessonId: number) {
  const { data } = await api.post(`/lessons/${lessonId}/complete`);
  return data;
}
