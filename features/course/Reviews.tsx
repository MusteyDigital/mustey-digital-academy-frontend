import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

import { Star } from "lucide-react";

const reviews = [
  {
    name: "Amina Yusuf",
    rating: 5,
    comment:
      "Excellent course. The explanations are clear and practical. I landed my first internship after completing it.",
  },
  {
    name: "John Peter",
    rating: 5,
    comment:
      "Very beginner-friendly. I loved the practical projects and the instructor explained every concept clearly.",
  },
  {
    name: "Grace Michael",
    rating: 4,
    comment:
      "Fantastic content. I only wish there were even more real-world exercises.",
  },
];

const ratings = [
  { stars: 5, value: 90 },
  { stars: 4, value: 75 },
  { stars: 3, value: 20 },
  { stars: 2, value: 8 },
  { stars: 1, value: 2 },
];

export default function Reviews() {
  return (
    <section className="mt-16">

      <h2 className="text-3xl font-bold mb-8">
        Student Reviews
      </h2>

      <div className="grid lg:grid-cols-3 gap-8">

        <Card className="p-8 text-center">

          <h3 className="text-6xl font-bold text-blue-600">
            4.9
          </h3>

          <div className="flex justify-center my-4">

            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className="fill-yellow-400 text-yellow-400"
                size={22}
              />
            ))}

          </div>

          <p className="text-gray-500">
            Course Rating
          </p>

          <div className="mt-8 space-y-4">

            {ratings.map((item) => (

              <div
                key={item.stars}
                className="flex items-center gap-3"
              >

                <span className="w-4">
                  {item.stars}
                </span>

                <Progress
                  value={item.value}
                  className="flex-1"
                />

              </div>

            ))}

          </div>

        </Card>

        <div className="lg:col-span-2 space-y-6">

          {reviews.map((review, index) => (

            <Card
              key={index}
              className="p-6"
            >

              <div className="flex gap-4">

                <Avatar>

                  <AvatarFallback>

                    {review.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}

                  </AvatarFallback>

                </Avatar>

                <div>

                  <h4 className="font-semibold">
                    {review.name}
                  </h4>

                  <div className="flex mt-2 mb-3">

                    {Array.from({
                      length: review.rating,
                    }).map((_, i) => (

                      <Star
                        key={i}
                        className="fill-yellow-400 text-yellow-400"
                        size={16}
                      />

                    ))}

                  </div>

                  <p className="text-gray-600 leading-7">
                    {review.comment}
                  </p>

                </div>

              </div>

            </Card>

          ))}

        </div>

      </div>

    </section>
  );
}