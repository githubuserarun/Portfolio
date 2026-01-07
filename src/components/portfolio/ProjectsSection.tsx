import { ExternalLink, Github, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useProjects } from "@/hooks/usePortfolioData";

const ProjectsSection = () => {
  const { data: projects, isLoading } = useProjects();

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-primary font-mono text-sm mb-2">&lt;projects&gt;</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects?.map((project, index) => (
              <div
                key={project.id}
                className="group relative rounded-2xl bg-card card-glow border-glow overflow-hidden hover:border-primary/40 transition-all duration-500"
              >
                {/* Project Image/Gradient Header */}
                <div className="h-48 bg-gradient-glow relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-primary opacity-20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-6xl font-bold text-primary/20 group-hover:scale-110 transition-transform duration-500">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  {project.tech_stack && project.tech_stack.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech_stack.slice(0, 5).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs font-mono rounded bg-muted text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech_stack.length > 5 && (
                        <span className="px-2 py-1 text-xs font-mono rounded bg-muted text-muted-foreground">
                          +{project.tech_stack.length - 5} more
                        </span>
                      )}
                    </div>
                  )}

                  {/* Features */}
                  {project.features && project.features.length > 0 && (
                    <ul className="space-y-1 mb-6">
                      {project.features.slice(0, 4).map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <ChevronRight className="w-4 h-4 text-primary flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Links */}
                  <div className="flex gap-3">
                    {project.github_url && (
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="border-primary/50 hover:bg-primary/10"
                      >
                        <a href={project.github_url} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </a>
                      </Button>
                    )}
                    {project.live_url && (
                      <Button
                        asChild
                        size="sm"
                        className="bg-gradient-primary hover:opacity-90"
                      >
                        <a href={project.live_url} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-primary font-mono text-sm text-center mt-16">&lt;/projects&gt;</p>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
