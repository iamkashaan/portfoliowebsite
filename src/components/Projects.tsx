
const Projects = () => {
  const projects = [
    {
      title: "Ultimate CI/CD Pipeline – End-to-End DevOps Project",
      year: "2023–2024",
      description: "Automated DevOps pipeline for Java Spring Boot app using Jenkins",
      tools: ["Jenkins", "Docker", "Kubernetes", "Java", "Spring Boot"],
      outcomes: [
        "🚀 Reduced deployment time by 70%",
        "🛠 Cut onboarding time from 2 hours to 15 minutes",
        "🐳 Deployed Docker containers to Kubernetes with CI/CD integration"
      ]
    },
    {
      title: "AWS End-to-End CI/CD Pipeline",
      year: "2024–2025",
      description: "CI/CD using AWS CodeCommit, CodeBuild, CodePipeline, and EC2",
      tools: ["AWS CodeCommit", "AWS CodeBuild", "AWS CodePipeline", "EC2"],
      outcomes: [
        "⚙️ Reduced manual deployment by 85%",
        "🚀 Increased deployment frequency 4×",
        "✅ Achieved zero-downtime deployments using blue/green strategy"
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
            Featured Projects
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div 
                key={project.title}
                className="bg-background p-8 rounded-lg border border-border hover:border-gray-600 transition-all duration-300 hover:scale-105 animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-white pr-4">
                    {project.title}
                  </h3>
                  <span className="text-gray-400 text-sm whitespace-nowrap">
                    {project.year}
                  </span>
                </div>
                
                <p className="text-gray-300 mb-6">
                  {project.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="text-white font-medium mb-3">Tools & Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool) => (
                      <span 
                        key={tool}
                        className="px-3 py-1 bg-muted text-gray-300 rounded-full text-sm"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-white font-medium mb-3">Outcomes:</h4>
                  <ul className="space-y-2">
                    {project.outcomes.map((outcome, i) => (
                      <li key={i} className="text-gray-300 text-sm">
                        {outcome}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
