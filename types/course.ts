export interface LessonItem {
  id: number;
  title: string;
  duration?: string;
}

export interface CurriculumItem {
  title: string;
  lessons: LessonItem[];
}

export interface Instructor {
  name: string;
  role: string;
  avatar: string;
  bio: string;
  students: number;
  courses: number;
  rating: number;
}

export interface Course {
  id: number;
  title: string;
  description: string;
  image: string;
  price: string;
  lessons: number;
  duration: string;
  rating: number;
  category: string;
  objectives: string[];
  curriculum: CurriculumItem[];
  instructor: Instructor;
}
