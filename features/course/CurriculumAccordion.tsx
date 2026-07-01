"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { BookOpen, Clock } from "lucide-react";
import { CurriculumItem } from "@/types/course";
import Link from "next/link";

interface Props {
  curriculum: CurriculumItem[];
  courseId: number;
  isEnrolled?: boolean;
}

export default function CurriculumAccordion({
  curriculum,
  courseId,
  isEnrolled = false,
}: Props) {
  return (
    <section className="mt-16">
      <h2 className="text-3xl font-bold mb-6">
        Course Curriculum
      </h2>

      <Card className="p-6">
        <Accordion
          type="single"
          collapsible
          className="w-full"
        >
          {curriculum.map((module, index) => (
            <AccordionItem
              key={index}
              value={`module-${index}`}
            >
              <AccordionTrigger className="text-lg font-semibold">
                {module.title}
              </AccordionTrigger>

              <AccordionContent>
                <div className="space-y-3">
                  {module.lessons.map((lesson) => (
                    <div
                      key={lesson.id}
                      className="flex items-center justify-between py-2"
                    >
                      <div className="flex items-center gap-3">
                        <BookOpen
                          size={18}
                          className="text-blue-600"
                        />
                        {isEnrolled ? (
                          <Link
                            href={`/courses/${courseId}/lessons/${lesson.id}`}
                            className="hover:text-blue-600 hover:underline"
                          >
                            {lesson.title}
                          </Link>
                        ) : (
                          <span>{lesson.title}</span>
                        )}
                      </div>

                      {lesson.duration && (
                        <span className="flex items-center gap-1 text-sm text-gray-400">
                          <Clock size={14} />
                          {lesson.duration}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Card>
    </section>
  );
}
