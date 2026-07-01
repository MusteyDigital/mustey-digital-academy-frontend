import api from "./api";
import { courses as mockCourses } from "@/data/courseData";
import { Course } from "@/types/course";

const USE_MOCK_DATA = false;

const STORAGE_URL = process.env.NEXT_PUBLIC_STORAGE_URL || "";

function adaptCourse(raw: any): Course {
  return {
    id: raw.id,
    title: raw.title,
    description: raw.description,
    image: raw.thumbnail
      ? `${STORAGE_URL}/${raw.thumbnail}`
      : "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
    price:
      raw.price === 0 || raw.price === "0"
        ? "Free"
        : `₦${Number(raw.price).toLocaleString()}`,
    lessons: raw.lessons_count ?? 0,
    duration: raw.duration || "Self-paced",
    rating: raw.rating ?? 4.8,
    category: raw.category || "General",
    objectives: raw.objectives || [],
    curriculum: raw.modules
      ? raw.modules.map((m: any) => ({
          title: m.title,
          lessons: (m.lessons || []).map((l: any) => ({ id: l.id, title: l.title, duration: l.duration })),
        }))
      : [],
    instructor: {
      name: raw.instructor?.name || "Mustey Digital Academy",
      role: "Instructor",
      avatar: "https://i.pravatar.cc/300?img=12",
      bio: raw.instructor?.bio || "Experienced instructor at Mustey Digital Academy.",
      students: raw.instructor?.students ?? 0,
      courses: raw.instructor?.courses ?? 0,
      rating: raw.instructor?.rating ?? 4.8,
    },
  };
}

export async function getCourses(): Promise<Course[]> {
  if (USE_MOCK_DATA) {
    return mockCourses;
  }
  const { data } = await api.get("/courses");
  return data.map(adaptCourse);
}

export async function getCourse(id: number): Promise<Course | undefined> {
  if (USE_MOCK_DATA) {
    return mockCourses.find((course) => course.id === id);
  }
  const { data } = await api.get(`/courses/${id}`);
  return adaptCourse(data);
}


