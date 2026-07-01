"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

import { useAuth } from "@/context/AuthContext";
import { useCheckEnrollment, useEnroll } from "@/hooks/useEnrollment";

interface Props {
  image: string;
  title: string;
  price: string;
  courseId: number;
}

export default function CourseSidebar({
  image,
  title,
  price,
  courseId,
}: Props) {
  const { user } = useAuth();
  const router = useRouter();

  const { data: enrollmentStatus, isLoading: checkingEnrollment } =
    useCheckEnrollment(courseId, !!user);

  const { mutate: enroll, isPending: enrolling } = useEnroll();

  const isEnrolled = enrollmentStatus?.enrolled === true;

  function handleEnroll() {
    if (!user) {
      router.push("/login");
      return;
    }

    enroll(courseId);
  }

  return (
    <Card className="sticky top-24 overflow-hidden">
      <div className="relative h-56">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-6">
        <h2 className="text-4xl font-bold text-blue-600">
          {price}
        </h2>

        <p className="text-gray-500 mt-2">
          Lifetime Access
        </p>

        {isEnrolled ? (
          <Button
            className="w-full mt-6 bg-green-600 hover:bg-green-700"
            onClick={() => router.push("/dashboard")}
          >
            Go to Course
          </Button>
        ) : (
          <Button
            className="w-full mt-6"
            onClick={handleEnroll}
            disabled={enrolling || checkingEnrollment}
          >
            {enrolling
              ? "Enrolling..."
              : checkingEnrollment
              ? "Loading..."
              : "Enroll Now"}
          </Button>
        )}

        <Button
          variant="outline"
          className="w-full mt-3"
        >
          Add to Wishlist
        </Button>
      </div>
    </Card>
  );
}
