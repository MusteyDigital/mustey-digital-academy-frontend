"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { GraduationCap, LogOut, User } from "lucide-react";

import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const { user, isLoading, logout } = useAuth();
  const router = useRouter();

  async function handleLogout() {
    await logout();
    router.push("/");
  }

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-3 text-xl font-bold"
        >
          <GraduationCap className="text-blue-600" size={34} />
          <span>Mustey Digital Academy</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link href="/">Home</Link>
          <Link href="/courses">Courses</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        {isLoading ? (
          <div className="w-24 h-10" />
        ) : user ? (
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2 text-sm font-medium">
              <User size={18} />
              {user.name}
            </div>

            <Button
              onClick={handleLogout}
              variant="outline"
              className="flex items-center gap-2"
            >
              <LogOut size={16} />
              Logout
            </Button>
          </div>
        ) : (
          <div className="flex gap-3">
            <Link
              href="/login"
              className="px-5 py-2 rounded-lg border"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="px-5 py-2 rounded-lg bg-blue-600 text-white"
            >
              Register
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
