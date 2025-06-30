
const Services = () => {
  const services = [
    {
      title: "DevOps Engineering",
      description: "CI/CD pipeline design, automation, and cloud-native deployment solutions for scalable applications.",
      features: ["Pipeline Automation", "Cloud-Native Deployment", "Process Optimization"]
    },
    {
      title: "Cloud Infrastructure Setup",
      description: "AWS provisioning, Terraform automation, and comprehensive monitoring for robust cloud environments.",
      features: ["AWS Provisioning", "Infrastructure as Code", "Monitoring & Alerting"]
    },
    {
      title: "Containerization & Orchestration",
      description: "Docker/Kubernetes-based microservices deployment with automated scaling and management.",
      features: ["Container Deployment", "Kubernetes Orchestration", "Microservices Architecture"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
            Services
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={service.title}
                className="bg-card p-8 rounded-lg border border-border hover:border-gray-600 transition-all duration-300 hover:scale-105 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl font-semibold text-white mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
