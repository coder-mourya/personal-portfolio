// import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, } from 'lucide-react';
// import Pdf from '../assets/Resume.pdf';
import profile from '../assets/profile.png';
import app from "../assets/app.jpg";
import sport from "../assets/sport.jpg";

function App() {
  // const [isScrolled, setIsScrolled] = useState(false);
  // const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setIsScrolled(window.scrollY > 50);
  //   };
  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);

  const projects = [
    {
      title: "Niotek E-Commerce",
      description: "A full-featured e-commerce platform for bulk orders of electronic devices, with real-time inventory management, seamless payment processing, and an intuitive admin dashboard.",
      tech: ["React", "Redux", "Node.js", "Express.js", "MongoDB", "Bootstrap"],
      image: "https://images.unsplash.com/photo-1524289286702-f07229da36f5?q=80&w=800&auto=format&fit=crop"

    },
    {
      title: "CBT Static Business Website",
      description: "A static business website showcasing services with a sleek design, fast performance, and essential company details.",
      tech: ["React js", "Tailwind CSS", "Animate.css", "GSAP", "Framer Motion"],
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Sports Management App",
      description: "A sports web application where players can create teams, book training sessions, and reserve stadium slots for various sports, ensuring seamless scheduling and team management.",
      tech: ["React js", "Redux", "Bootstrap", "Socket.io", "Swiper"],
      image: "https://plus.unsplash.com/premium_photo-1676634832558-6654a134e920?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Veggie express",
      description: "A web app where shopkeepers sell fresh vegetables, and users can browse, order online, and get doorstep delivery, ensuring convenience and freshness.",
      tech: ["React", "Tailwind CSS", "React Slider"],
      image: "https://images.unsplash.com/photo-1597362925123-77861d3fbac7?q=80&w=800&auto=format&fit=crop"

    }
  ];

  // const toggleMobileMenu = () => {
  //   setIsMobileMenuOpen(!isMobileMenuOpen);
  // };

  // const closeMobileMenu = () => {
  //   setIsMobileMenuOpen(false);
  // };

  // const handleDownload = () => {
  //   window.open(Pdf, "_blank");
  // };

  const handleProjectClick = (ele: string) => {
    // console.log("element" , ele);

    if (ele === 'Niotek E-Commerce') {
      window.open("https://niotek.in", "_blank");
    } else if (ele === 'CBT Static Business Website') {
      window.open("https://creativitybeyondthoughts.com", "_blank");
    } else if (ele === 'Sports Management App') {
      alert("This project is shut down by the client for more details contact Developer")
    } else if (ele === 'Veggie express') {
      alert("This project is shut down by the client for more details contact Developer")
    }
  }



  return (
    <div className="bg-gradient-to-br  from-gray-900 via-gray-800 to-black text-white min-h-screen">

      {/* <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900/95 backdrop-blur-sm py-2' : 'bg-transparent py-4'}`}>
        <div className="container mx-auto max-w-7xl px-4">
          <div className="flex justify-between items-center ">
            <h1 className="text-2xl font-bold">Ajay Shakya</h1>

            
            <div className="hidden md:flex gap-6">
              <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
              <a href="#experience" className="hover:text-blue-400 transition-colors">Experience</a>
              <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
              <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
            </div>

            
            <button
              className="md:hidden p-2 hover:text-blue-400 transition-colors"
              onClick={toggleMobileMenu}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          
          <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} pt-4`}>
            <div className="flex flex-col gap-4 bg-gray-900/95 p-4 rounded-lg">
              <a href="#about" className="hover:text-blue-400 transition-colors" onClick={closeMobileMenu}>About</a>
              <a href="#experience" className="hover:text-blue-400 transition-colors" onClick={closeMobileMenu}>Experience</a>
              <a href="#projects" className="hover:text-blue-400 transition-colors" onClick={closeMobileMenu}>Projects</a>
              <a href="#contact" className="hover:text-blue-400 transition-colors" onClick={closeMobileMenu}>Contact</a>
            </div>
          </div>
        </div>
      </nav>  */}

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 max-w-4xl mx-auto text-center">
        <div className="w-full space-y-6 animate-fadeIn">
          {/* Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight ">
            Hi, I’m <span className="text-blue-400">Ajay Kumar Shakya</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-gray-400">
            I help startups and businesses scale with powerful full-stack web solutions.
          </p>

          {/* Secondary Text */}
          <p className="text-base text-gray-500">
            From MVPs to fully functional platforms. I build apps that solve real problems and drive growth.
          </p>

          {/* Buttons */}
          <div className="flex  sm:flex-row gap-4 items-center justify-center pt-4">
            <button className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-gray-800 transition">
              Let’s Talk
            </button>
            <button className="border border-white px-6 py-3 rounded-md hover:bg-gray-100 hover:text-black transition">
              View Projects
            </button>
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-center gap-6 pt-6">
            <a
              href="https://github.com/coder-mourya"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-500 transition"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/ajay-kumar-shakya/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-500 transition"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:ajaykumarshakya560@gmail.com"
              className="text-gray-300 hover:text-blue-500 transition"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </section>


      {/* About Section */}
      <section id="about" className="py-20 bg-gray-800/50">
        <div className="max-w-7xl md:px-6  mx-auto px-4">
          <div className='flex flex-col md:flex-row items-center gap-16 justify-center'>
            <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72">
              <img
                src={profile}
                alt="Profile"
                className="w-full h-full rounded-full object-cover border-4 border-blue-400 shadow-lg animate-float"
              />
            </div>
            <div className="w-full md:w-1/2 text-lg text-gray-300 space-y-6">
              <h2 className="text-4xl font-bold mb-12 text-start">About Me</h2>

              <p>
                I'm a Full Stack Developer, with a passion of clean code, scalable architecture, and meaningful results.
              </p>
              <p>
                With 2 years of experience building real-world products for clients across multip's domains, I understand what It takes to tum an idea. into a functional, user-friendly app.
              </p>
              <p>
                I don't just write code- I solve business problems through technology
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12">Services</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="border border-gray-700 px-6 py-12 rounded-lg bg-gradient-to-br from-gray-800 via-gray-900 to-black shadow-md">
              <div className="text-4xl mb-4">{"</>"}</div>
              <h3 className="text-xl font-semibold mb-2">Custom Web App Development</h3>
              <p className="text-sm text-gray-300">
                From scratch-built platforms to dynamic dashboards — I handle both front-end & backend.
              </p>
            </div>

            {/* Service 2 */}
            {/* <div className="border border-gray-700 p-6 rounded-lg bg-gradient-to-br from-gray-800 via-gray-900 to-black shadow-md">
              <div className="text-4xl mb-4">Rx</div>
              <h3 className="text-xl font-semibold mb-2">Responsive UI/UX Design</h3>
              <p className="text-sm text-gray-300">
                Fast, mobile-first, and clean design built with Tailwind, Bootstrap, or custom CSS.
              </p>
            </div> */}

            {/* Service 3 */}
            <div className="border border-gray-700 p-6 rounded-lg bg-gradient-to-br from-gray-800 via-gray-900 to-black shadow-md">
              <div className="text-4xl mb-4">🧬</div>
              <h3 className="text-xl font-semibold mb-2">API & Backend Engineering</h3>
              <p className="text-sm text-gray-300">
                Scalable Node.js/Express APIs, MongoDB/PostgreSQL, authentication, admin panels.
              </p>
            </div>

            {/* Service 4 */}
            <div className="border border-gray-700 p-6 rounded-lg bg-gradient-to-br from-gray-800 via-gray-900 to-black shadow-md">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-semibold mb-2">SEO & Performance Optimization</h3>
              <p className="text-sm text-gray-300">
                Make your app faster, visible, and higher-ranking on Google.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-16 text-center">Experience</h2>
          <div className="relative border-l-4 border-blue-500 pl-8 space-y-12 max-w-4xl mx-auto">

            {/* Job 1 */}
            <div className="flex items-start gap-6">
              {/* Left Logo/Icon */}
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md shrink-0">
                <img src={sport} alt="SportsNerve Logo" className="w-10 h-10 object-contain" />
              </div>

              {/* Right Content */}
              <div>
                <h3 className="text-2xl font-semibold">Frontend Developer</h3>
                <p className="text-blue-400">
                  SportsNerve Solutions Pvt Ltd · HONG LIM COMPLEX, SINGAPORE (051531)
                  <br />
                  <span className="text-sm text-gray-400">Nov 2022 – Dec 2023</span>
                </p>
                <ul className="mt-4 list-disc list-inside text-gray-300 space-y-1">
                  <li>Developed and maintained frontend using React.js and Redux</li>
                  <li>Collaborated remotely as a full-time frontend engineer</li>
                  <li>Contributed to a scalable and responsive web architecture</li>
                </ul>
              </div>
            </div>

            {/* Job 2 */}
            <div className="flex items-start gap-6">
              {/* Left Logo/Icon */}
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md shrink-0">
                <img src={app} alt="Innovation Labs Logo" className="w-10 h-10 object-contain" />
              </div>

              {/* Right Content */}
              <div>
                <h3 className="text-2xl font-semibold">Full Stack Developer</h3>
                <p className="text-blue-400">
                  Appadvent Technologies
                  <br />
                  <span className="text-sm text-gray-400">Feb 2024 – Present</span>
                </p>
                <ul className="mt-4 list-disc list-inside text-gray-300 space-y-1">
                  <li>Developed core features like user dashboard, authentication system, and real-time chat</li>
                  <li>Optimized API performance, reducing response time by 40%</li>
                  <li>Collaborated with design and product team to deliver 3 full-stack modules</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto  px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>

          {/* cards */}
          <div className="space-y-8">
            {projects.map((project, index) => (
              <article
                key={index}
                className="flex flex-col sm:flex-row items-start gap-6 bg-gray-900/40 border border-gray-700 rounded-xl p-6 hover:shadow-xl transition-shadow"
              >
                {/* image */}
                <div className="w-full sm:w-40 aspect-square flex-shrink-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>

                {/* text */}
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>

                  <p className="text-gray-300 mb-4">{project.description}</p>

                  {/* tech badges */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => handleProjectClick(project.title)}
                    className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300"
                  >
                    View Project <ExternalLink size={16} />
                  </button>
                </div>
              </article>
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