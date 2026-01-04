import { GraduationCap, Award, BookOpen } from "lucide-react";
import { useEducation } from "@/hooks/usePortfolioData";

const iconMap: Record<number, typeof GraduationCap> = {
  1: GraduationCap,
  2: BookOpen,
  3: Award,
};

const EducationSection = () => {
  const { data: education, isLoading } = useEducation();

  return (
    <section id="education" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-primary font-mono text-sm mb-2">&lt;education&gt;</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Education & <span className="text-gradient">Certifications</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
          </div>

          {/* Education Cards */}
          <div className="space-y-6">
            {education?.map((edu, index) => {
              const Icon = iconMap[(index % 3) + 1] || GraduationCap;
              return (
                <div
                  key={edu.id}
                  className="flex gap-4 p-6 rounded-xl bg-card card-glow border-glow hover:border-primary/40 transition-all duration-300 group"
                >
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                      <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                        {edu.degree}
                      </h3>
                      {edu.year && (
                        <span className="text-sm text-primary font-mono">{edu.year}</span>
                      )}
                    </div>
                    <p className="text-muted-foreground mb-2">{edu.institution}</p>
                    {edu.description && (
                      <p className="text-sm text-muted-foreground">{edu.description}</p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <p className="text-primary font-mono text-sm text-center mt-16">&lt;/education&gt;</p>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
