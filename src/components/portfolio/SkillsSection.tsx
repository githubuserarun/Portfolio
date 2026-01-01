import { useSkills } from "@/hooks/usePortfolioData";

const categoryIcons: Record<string, string> = {
  Frontend: "🎨",
  Backend: "⚙️",
  Database: "🗄️",
  Tools: "🔧",
};

const categoryColors: Record<string, string> = {
  Frontend: "from-cyan-500/20 to-blue-500/20 border-cyan-500/30",
  Backend: "from-purple-500/20 to-pink-500/20 border-purple-500/30",
  Database: "from-green-500/20 to-teal-500/20 border-green-500/30",
  Tools: "from-orange-500/20 to-yellow-500/20 border-orange-500/30",
};

const SkillsSection = () => {
  const { data: skills, isLoading } = useSkills();

  // Group skills by category
  const groupedSkills = skills?.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  return (
    <section id="skills" className="py-24 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-primary font-mono text-sm mb-2">&lt;skills&gt;</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Tech <span className="text-gradient">Stack</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {groupedSkills &&
              Object.entries(groupedSkills).map(([category, categorySkills]) => (
                <div
                  key={category}
                  className={`p-6 rounded-2xl bg-gradient-to-br ${categoryColors[category] || "from-muted to-muted/50 border-border"} border backdrop-blur-sm`}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-2xl">{categoryIcons[category] || "💻"}</span>
                    <h3 className="text-xl font-semibold">{category}</h3>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {categorySkills?.map((skill) => (
                      <span
                        key={skill.id}
                        className="px-4 py-2 rounded-lg bg-background/50 border border-border/50 text-sm font-medium hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 cursor-default"
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
          </div>

          <p className="text-primary font-mono text-sm text-center mt-16">&lt;/skills&gt;</p>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
