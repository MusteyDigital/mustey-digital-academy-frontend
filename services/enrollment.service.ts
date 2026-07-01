import api from "./api";

export async function enrollInCourse(courseId: number) {
  const { data } = await api.post("/enrollments", { course_id: courseId });
  return data;
}

export async function getMyEnrollments() {
  const { data } = await api.get("/enrollments");
  return data;
}

export async function checkEnrollment(courseId: number) {
  const { data } = await api.get(`/enrollments/check/${courseId}`);
  return data;
}
