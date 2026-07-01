"use client";
import { use, useEffect } from "react";

interface Props {
  params: Promise<{ id: string; lessonId: string }>;
}

export default function LessonPage({ params }: Props) {
  const { id, lessonId } = use(params);

  useEffect(() => {
    window.location.href = `https://musteydigitalacademy.online/lessons/${id}/${lessonId}`;
  }, [id, lessonId]);

  return <p className="p-10 text-gray-500">Loading lesson...</p>;
}