import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import FeaturedCourses from "@/components/home/FeaturedCourses";
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedCourses />
    </>
  );
}