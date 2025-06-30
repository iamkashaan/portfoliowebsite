
const About = () => {
  return (
    <section id="about" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-gray-300 text-lg leading-relaxed">
                Skilled DevOps with driving innovation through hands-on Kubernetes, AWS, Docker and implementing scalable CI/CD pipelines. Proficient in applying security practices for robust application delivery.
              </p>
              
              <div className="space-y-2">
                <p className="text-white font-semibold">Location:</p>
                <p className="text-gray-300">Lucknow, Uttar Pradesh, India</p>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="bg-background p-6 rounded-lg border border-border">
                <h3 className="text-xl font-semibold text-white mb-4">Education</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-white font-medium">Master in Computer Application</h4>
                    <p className="text-gray-400">Integral University (2023–2025)</p>
                    <ul className="text-gray-300 text-sm mt-2 space-y-1">
                      <li>• Represented university in Technical Fest</li>
                      <li>• Top 10% in Academics</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-white font-medium">Bachelor in Computer Application</h4>
                    <p className="text-gray-400">Integral University (2019–2022)</p>
                    <ul className="text-gray-300 text-sm mt-2">
                      <li>• Top 5% in Academics</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
