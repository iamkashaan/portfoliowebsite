
const Skills = () => {
  const skillCategories = [
    {
      category: "Scripting",
      skills: ["YAML", "Python", "Bash"]
    },
    {
      category: "Operating Systems",
      skills: ["Ubuntu", "Amazon Linux", "CentOS"]
    },
    {
      category: "CI/CD Tools",
      skills: ["Jenkins", "GitHub Actions","ArgoCD"]
    },
    {
      category: "Cloud",
      skills: ["AWS EC2", "AWS VPC", "AWS S3", "Route53","AWS EKS","Azure"]
    },
    {
      category: "Containers",
      skills: ["Docker", "Kubernetes"]
    },
    {
      category: "Automation",
      skills: ["Ansible", "Terraform"]
    },
    {
      category: "Monitoring",
      skills: ["Prometheus", "Grafana"]
    },
    {
      category: "Version Control",
      skills: ["Git", "GitHub"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
            Technical Skills
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <div 
                key={category.category}
                className="bg-card p-6 rounded-lg border border-border hover:border-gray-600 transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-white font-semibold mb-4 text-lg">
                  {category.category}
                </h3>
                <div className="space-y-2">
                  {category.skills.map((skill) => (
                    <div key={skill} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span className="text-gray-300">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
