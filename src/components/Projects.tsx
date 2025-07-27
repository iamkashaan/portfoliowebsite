  {
      title: "Three -Tier E-Commerce Deployment on AWS EKS",
      year: "",
      description: "",
      tools: ["AWS EKS", "Microservices", "Node.js", "Java", "Python", "Go", "PHP", "MongoDB", "MySQL", "Redis", "Helm", "AWS ALB Ingress Controller", "AWS EBS CSI driver"],
      outcomes: [
        "Designed and deployed a robust 3-tier e-commerce application on AWS EKS, orchestrating the deployment of over 12 microservices, resulting in 99.99% uptime and supporting peak loads of 10,000+ concurrent users, demonstrating advanced expertise in cloud-native architecture and container orchestration.",
        "Implemented a microservices architecture for a full-featured e-commerce platform, developing and managing services in 5 different languages (Node.js, Java, Python, Go, PHP), enabling faster release cycles by 40% and reducing mean time to recovery (MTTR) by 30%, showcasing adaptability and a broad technical skill set.",
        "Managed and integrated 3 distinct database technologies (MongoDB, MySQL, Redis) to support a distributed microservices architecture, achieving data consistency across 99% of transactions and ensuring sub-50ms latency for critical application functions.",
        "Streamlined the deployment pipeline of a 12-microservice application by creating and managing Helm charts, leading to a 60% reduction in deployment time and guaranteeing deployment consistency across all services.",
        "Configured and deployed an AWS ALB Ingress Controller to manage 100% of external traffic for the e-commerce platform, resulting in a 30% improvement in load balancing efficiency and ensuring a scalable and resilient web presence with zero downtime during peak sales events.",
        "Ensured data persistence and high availability for critical stateful applications like Redis by implementing the AWS EBS CSI driver for dynamic and persistent volume provisioning, achieving 99.95% Redis uptime and automated failover in under 2 minutes, ensuring seamless user experience and data integrity."
      ]
    },
    {
      title: "Serverless Deployment on AWS",
      year: "",
      description: "",
      tools: ["AWS Lambda", "API Gateway", "AWS CloudFormation"],
      outcomes: [
        "Implemented serverless application to reduce infrastructure costs",
        "Built a CI/CD pipeline to automate deployment of AWS CloudFormation templates, ensuring consistent and infrastructure-as-code provisioning across environments.",
        "Designed Lambda functions with secure API Gateway integration with backend to reduce cost by 900$ monthly"
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
