import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Download, Mail, Linkedin } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';
const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };
  return <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/20 to-black/40"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.1)_1px,transparent_0)] bg-[size:50px_50px] opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <div className="inline-flex items-center bg-white/10 rounded-full text-sm text-gray-300 backdrop-blur-sm border border-white/20 py-[4px] my-0 mx-[117px] px-[11px]">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                  Available for new opportunities
                </div>
                
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                 <span className="text-white">
                   <TypeAnimation
                      sequence={[
                        'Mohd Kashaan',
                         2000, // Wait 2 seconds
                        '\u00A0', // Use a non-breaking space to prevent line jump
                          500,  // Wait 0.5 seconds before re-typing
                         'Mohd Kashaan',
                          2000, // Wait 2 seconds
                      ]}
                      wrapper="span"
                      speed={50}
                      repeat={Infinity}
                      cursor={true}
                    />
                  </span>
                </h1>
                
                <div className="space-y-2">
                  <p className="text-2xl md:text-3xl font-semibold text-white">
                    DevOps Engineer
                  </p>
                  <p className="text-lg text-gray-300 max-w-lg">
                    Automating Everything | Building Cloud-Native Solutions | Kubernetes & AWS Specialist
                  </p>
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4">
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white hover:text-black transition-all duration-300 hover:scale-105 backdrop-blur-sm" onClick={() => scrollToSection('contact')}>
                  <Mail className="mr-2 h-5 w-5" />
                  Get in Touch
                </Button>
                <Button size="lg" variant="ghost" className="text-white hover:bg-white/10 transition-all duration-300 hover:scale-105" onClick={() => window.open('https://github.com/iamkashaan', '_blank')}>
                  <Github className="mr-2 h-5 w-5" />
                  GitHub
                </Button>
                <Button size="lg" variant="ghost" className="text-white hover:bg-white/10 transition-all duration-300 hover:scale-105" onClick={() => window.open('https://www.linkedin.com/in/mohd-kashaan/', '_blank')}>
                  <Linkedin className="mr-2 h-5 w-5" />
                  LinkedIn
                </Button>
              </div>

              {/* Quick Stats */}
              <div className="flex gap-8 pt-8 border-t border-white/10">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">3+</div>
                  <div className="text-sm text-gray-400">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">85%</div>
                  <div className="text-sm text-gray-400">Deployment Efficiency</div>
                </div>
              </div>
            </div>
            
            {/* Right Content - Profile Image & Tech Stack */}
            <div className="space-y-8 animate-slide-up">
              {/* Profile Image */}
              <div className="relative">
                <div className="w-80 h-80 mx-auto relative">
                  {/* Decorative Elements */}
                  <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full opacity-80 animate-pulse"></div>
                  <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-full opacity-80 animate-pulse delay-300"></div>
                  
                  {/* Main Profile Circle */}
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-300 to-gray-500 flex items-center justify-center text-6xl font-bold text-black shadow-2xl border-4 border-white/20">
                    MK
                  </div>
                  
                  {/* Floating Tech Icons */}
                  <div className="absolute top-8 -right-8 bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20 animate-float">
                    <div className="text-white font-mono text-sm">AWS</div>
                  </div>
                  <div className="absolute bottom-8 -left-8 bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20 animate-float delay-150">
                    <div className="text-white font-mono text-sm">K8s</div>
                  </div>
                  <div className="absolute top-1/2 -right-12 bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20 animate-float delay-300">
                    <div className="text-white font-mono text-sm">CI/CD</div>
                  </div>
                </div>
              </div>
              
              {/* Tech Stack Highlight */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <h3 className="text-white font-semibold mb-4 text-center">Core Technologies</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-gray-300 text-sm">Kubernetes</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                    <span className="text-gray-300 text-sm">AWS Cloud</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-gray-300 text-sm">Docker</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span className="text-gray-300 text-sm">Terraform</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Scroll Down Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <button onClick={() => scrollToSection('about')} className="text-gray-400 hover:text-white transition-colors duration-200 flex flex-col items-center gap-2">
              <span className="text-sm">Scroll Down</span>
              <ArrowDown className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;
