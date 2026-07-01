"use client";

import { useAuth } from "@/context/AuthContext";
import { useCheckEnrollment } from "@/hooks/useEnrollment";
import CurriculumAccordion from "@/features/course/CurriculumAccordion";
import { CurriculumItem } from "@/types/course";

interface Props {
  curriculum: CurriculumItem[];
  courseId: number;
}

export default function EnrolledCurriculumAccordion({
  curriculum,
  courseId,
}: Props) {
  const { user } = useAuth();
  const { data: enrollmentStatus } = useCheckEnrollment(courseId, !!user);

  return (
    <CurriculumAccordion
      curriculum={curriculum}
      courseId={courseId}
      isEnrolled={enrollmentStatus?.enrolled === true}
    />
  );
}
