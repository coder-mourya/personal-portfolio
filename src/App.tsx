import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Download, ExternalLink, Menu, X } from 'lucide-react';
import Pdf from '../assets/Resume.pdf';
import profile from '../assets/profile.png';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      title: "Niotek E-Commerce",
      description: "A full-featured e-commerce platform for bulk orders of electronic devices, with real-time inventory management, seamless payment processing, and an intuitive admin dashboard.",
      tech: ["React","Redux", "Node.js", "Express.js", "MongoDB",  "Bootstrap"],
      image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Task Management System",
      description: "Enterprise task management solution with real-time updates, team collaboration, and analytics dashboard.",
      tech: ["TypeScript", "Next.js", "PostgreSQL", "WebSocket", "Docker"],
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Social Media Analytics",
      description: "Analytics platform processing millions of social media posts using big data technologies.",
      tech: ["Python", "React", "AWS", "Kafka", "ElasticSearch"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "AI-Powered Learning Platform",
      description: "Adaptive learning platform using AI to personalize education paths and track student progress in real-time.",
      tech: ["React", "TensorFlow.js", "Node.js", "GraphQL", "Firebase"],
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800"
    }
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleDownload = () => {
    window.open(Pdf, "_blank");
  };
  
  

  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white min-h-screen">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900/95 backdrop-blur-sm py-2' : 'bg-transparent py-4'}`}>
        <div className="container mx-auto max-w-7xl px-4">
          <div className="flex justify-between items-center ">
            <h1 className="text-2xl font-bold">Ajay Shakya</h1>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex gap-6">
              <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
              <a href="#experience" className="hover:text-blue-400 transition-colors">Experience</a>
              <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
              <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 hover:text-blue-400 transition-colors"
              onClick={toggleMobileMenu}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} pt-4`}>
            <div className="flex flex-col gap-4 bg-gray-900/95 p-4 rounded-lg">
              <a href="#about" className="hover:text-blue-400 transition-colors" onClick={closeMobileMenu}>About</a>
              <a href="#experience" className="hover:text-blue-400 transition-colors" onClick={closeMobileMenu}>Experience</a>
              <a href="#projects" className="hover:text-blue-400 transition-colors" onClick={closeMobileMenu}>Projects</a>
              <a href="#contact" className="hover:text-blue-400 transition-colors" onClick={closeMobileMenu}>Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-20 px-4 max-w-7xl mx-auto">
        <div className="container mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
          <div className="w-full md:w-2/3 space-y-6 animate-fadeIn text-center md:text-left">
            <div className="overflow-hidden">
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight inline-block whitespace-nowrap border-r-4 border-blue-400 pr-2 animate-typing overflow-hidden">
                Full Stack
                <span className="text-blue-400"> Developer</span>
              </h1>
            </div>
            <p className="text-lg sm:text-xl text-gray-300">Turning ideas into elegant, scalable solutions</p>
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center md:justify-start">
              <button 
                onClick={handleDownload} 
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg transition-colors"
              >
                <Download size={20} />
                Download Resume
              </button>
              <div className="flex gap-4">
                <a href="https://github.com/coder-mourya" target="_blank" rel="noopener noreferrer" className="p-2 hover:text-blue-400 transition-colors">
                  <Github size={24} />
                </a>
                <a href="https://www.linkedin.com/in/ajay-kumar-shakya/" target="_blank" rel="noopener noreferrer" className="p-2 hover:text-blue-400 transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href="mailto:ajaykumarshakya560@gmail.com" className="p-2 hover:text-blue-400 transition-colors">
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </div>
          <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72">
            <img 
              src={profile} 
              alt="Profile" 
              className="w-full h-full rounded-full object-cover border-4 border-blue-400 shadow-lg animate-float"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>
          <div className="max-w-3xl mx-auto text-lg text-gray-300 space-y-6">
            <p>
            With over 1.3 years of experience as a frontend developer working remotely for a Singapore-based company, I have successfully delivered 3 full-stack projects as a freelancer. I specialize in building scalable web applications using modern technologies, focusing on efficient, maintainable code and exceptional user experiences.
            </p>
            <p>
            I'm proficient in both frontend and backend development, with expertise in React.js, Node.js, and cloud technologies. I thrive on tackling complex problems and continuously learning new technologies to stay ahead in the field.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Experience</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-gray-800/50 p-6 rounded-lg hover:transform hover:scale-105 transition-transform">
              <h3 className="text-2xl font-bold">Frontend Developer</h3>
              <p className="text-blue-400">SportsNerve Solutions Pvt Ltd. HONG LIM COMPLEX SINGAPORE (051531) • Nov 2023 - Dec 2024</p>
              <ul className="mt-4 space-y-2 text-gray-300">
                <li>• Developing and maintaining the front-end aspects of SportsNerve Solutions’ website</li>
                <li>• Developed Frontend web Sportsnerve using React js, React Redux.</li>
                <li>• Remote job worked as a full-time frontend developer</li>
              </ul>
            </div>
            {/* <div className="bg-gray-800/50 p-6 rounded-lg hover:transform hover:scale-105 transition-transform">
              <h3 className="text-2xl font-bold">Full Stack Developer</h3>
              <p className="text-blue-400">Innovation Labs • 2018 - 2020</p>
              <ul className="mt-4 space-y-2 text-gray-300">
                <li>• Developed and maintained multiple client projects</li>
                <li>• Optimized database queries improving performance by 40%</li>
                <li>• Integrated third-party APIs and payment gateways</li>
              </ul>
            </div> */}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform h-full">
                <div className="aspect-w-16 aspect-h-9">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col h-[calc(100%-12rem)]">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4 flex-grow">{project.description}</p>
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <span 
                          key={i} 
                          className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a 
                      href="#" 
                      className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 mt-2"
                    >
                      View Project <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Get In Touch</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
          <a 
            href="mailto:ajaykumarshakya560@gmail.com"
            className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 px-8 py-4 rounded-lg text-lg transition-colors"
          >
            <Mail size={20} />
            Say Hello
          </a>
        </div>
      </section>
    </div>
  );
}

export default App;