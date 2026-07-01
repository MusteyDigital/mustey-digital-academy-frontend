"use client";

import ProtectedRoute from "@/components/auth/ProtectedRoute";
import { useAuth } from "@/context/AuthContext";
import { useMyEnrollments } from "@/hooks/useEnrollment";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function DashboardPage() {
  const { user } = useAuth();
  const { data: enrollments, isLoading } = useMyEnrollments();

  return (
    <ProtectedRoute>
      <main className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-2">
          Welcome back, {user?.name}
        </h1>

        <p className="text-gray-500 mb-10">
          Here is an overview of your learning journey.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-xl shadow p-6 border">
            <p className="text-sm text-gray-500">Enrolled Courses</p>
            <p className="text-3xl font-bold mt-2">
              {isLoading ? "..." : enrollments?.length ?? 0}
            </p>
          </div>

          <div className="bg-white rounded-xl shadow p-6 border">
            <p className="text-sm text-gray-500">Completed Lessons</p>
            <p className="text-3xl font-bold mt-2">0</p>
          </div>

          <div className="bg-white rounded-xl shadow p-6 border">
            <p className="text-sm text-gray-500">Certificates Earned</p>
            <p className="text-3xl font-bold mt-2">0</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-6">My Courses</h2>

        {isLoading ? (
          <p className="text-gray-500">Loading your courses...</p>
        ) : enrollments?.length === 0 ? (
          <div className="text-center py-16 bg-slate-50 rounded-xl">
            <p className="text-gray-500 mb-4">
              You have not enrolled in any courses yet.
            </p>
            <Button asChild>
              <Link href="/courses">Browse Courses</Link>
            </Button>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {enrollments?.map((enrollment: any) => {
              const firstLesson = enrollment.course?.modules?.[0]?.lessons?.[0];
              const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;
              const lessonPath = firstLesson ? `/courses/${enrollment.course_id}/lessons/${firstLesson.id}` : `/courses/${enrollment.course_id}`;
              const continueUrl = token ? `https://musteydigitalacademy.online/auth/token-login?token=${token}&redirect=${lessonPath}` : `/courses/${enrollment.course_id}`;

              return (
                <div
                  key={enrollment.id}
                  className="bg-white rounded-xl shadow p-6 border"
                >
                  <h3 className="font-bold text-lg">
                    {enrollment.course?.title}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1 capitalize">
                    Status: {enrollment.status}
                  </p>
                  <Button
                    asChild
                    className="w-full mt-4"
                    variant="outline"
                  >
                    <Link href={continueUrl}>
                      Continue Learning
                    </Link>
                  </Button>
                </div>
              );
            })}
          </div>
        )}
      </main>
    </ProtectedRoute>
  );
}
