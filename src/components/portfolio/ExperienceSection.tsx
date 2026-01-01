import { Briefcase, MapPin, Calendar } from "lucide-react";
import { useExperiences } from "@/hooks/usePortfolioData";

const ExperienceSection = () => {
  const { data: experiences, isLoading } = useExperiences();

  return (
    <section id="experience" className="py-24 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-primary font-mono text-sm mb-2">&lt;experience&gt;</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Work <span className="text-gradient">Experience</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

            {experiences?.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative mb-12 md:mb-0 md:py-8 ${
                  index % 2 === 0 ? "md:pr-12 md:text-right md:ml-0 md:mr-auto md:w-1/2" : "md:pl-12 md:ml-auto md:w-1/2"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-auto md:right-0 top-0 md:top-8 w-4 h-4 rounded-full bg-primary glow-cyan -translate-x-1/2 md:translate-x-1/2 z-10" 
                  style={{ [index % 2 === 0 ? "right" : "left"]: "-7px", left: index % 2 === 0 ? "auto" : undefined }}
                />

                {/* Card */}
                <div className="ml-6 md:ml-0 p-6 rounded-xl bg-card card-glow border-glow hover:border-primary/40 transition-all duration-300 group">
                  <div className={`flex items-center gap-2 mb-2 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                    <Briefcase className="w-4 h-4 text-primary" />
                    <span className="text-primary font-medium">{exp.role}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-2">{exp.company}</h3>
                  
                  <div className={`flex flex-wrap gap-4 text-sm text-muted-foreground mb-4 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {exp.start_date} - {exp.end_date}
                    </span>
                    {exp.location && (
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </span>
                    )}
                  </div>

                  {exp.description && (
                    <p className="text-muted-foreground text-sm mb-4">{exp.description}</p>
                  )}

                  {/* Achievements */}
                  {exp.achievements && exp.achievements.length > 0 && (
                    <ul className={`space-y-2 text-sm text-left ${index % 2 === 0 ? "md:text-right" : ""}`}>
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-primary mt-1.5 flex-shrink-0">▹</span>
                          <span className="text-muted-foreground">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>

          <p className="text-primary font-mono text-sm text-center mt-16">&lt;/experience&gt;</p>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
