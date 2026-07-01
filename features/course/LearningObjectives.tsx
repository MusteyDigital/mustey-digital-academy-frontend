import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

interface Props {
  objectives: string[];
}

export default function LearningObjectives({
  objectives,
}: Props) {
  return (
    <section className="mt-16">
      <h2 className="text-3xl font-bold mb-6">
        What You'll Learn
      </h2>

      <Card className="p-8">
        <div className="grid md:grid-cols-2 gap-5">
          {objectives.map((objective, index) => (
            <div
              key={index}
              className="flex items-start gap-3"
            >
              <CheckCircle2
                className="text-green-600 mt-1"
                size={20}
              />

              <span>{objective}</span>
            </div>
          ))}
        </div>
      </Card>
    </section>
  );
}