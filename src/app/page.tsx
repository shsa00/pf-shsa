'use client';

import { useState, useEffect } from 'react';

// Type definition for Project details
interface Project {
  id: string;
  projName: string;
  title: string;
  desc: string;
  longDesc: string;
  icon: string;
  projYear: string;
  image: string;
  btnBg: string;
  cardBg: string;
  tech: string[];
  features: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export default function Home() {
  const [activeTab, setActiveTab] = useState<'about' | 'projects' | 'certifications' | 'contact'>('about');
  const [darkMode, setDarkMode] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  // Disable DevTools shortcuts & right click (anti-inspection layer)
  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => e.preventDefault();
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.key === 'F12' ||
        (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C')) ||
        (e.ctrlKey && e.key === 'u')
      ) {
        e.preventDefault();
      }
    };

    window.addEventListener('contextmenu', handleContextMenu);
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('contextmenu', handleContextMenu);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Tech Stack Data
  const techStack = [
    {
      label: 'Laravel',
      logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/laravel.svg',
      color: 'filter invert-[27%] sepia-[91%] saturate-[5890%] hue-rotate-[353deg] brightness-[98%] contrast-[89%]',
    },
    {
      label: 'PHP',
      logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/php.svg',
      color: 'filter invert-[46%] sepia-[11%] saturate-[1931%] hue-rotate-[197deg] brightness-[95%] contrast-[89%]',
    },
    {
      label: 'MySQL',
      logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/mysql.svg',
      color: 'filter invert-[32%] sepia-[86%] saturate-[1011%] hue-rotate-[166deg] brightness-[93%] contrast-[89%]',
    },
    {
      label: 'Vite',
      logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/vite.svg',
      color: 'filter invert-[54%] sepia-[94%] saturate-[2808%] hue-rotate-[226deg] brightness-[98%] contrast-[97%]',
    },
    {
      label: 'JavaScript',
      logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/javascript.svg',
      color: 'filter invert-[83%] sepia-[68%] saturate-[1563%] hue-rotate-[359deg] brightness-[102%] contrast-[92%]',
    },
    {
      label: 'Bootstrap',
      logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/bootstrap.svg',
      color: 'filter invert-[23%] sepia-[88%] saturate-[3105%] hue-rotate-[261deg] brightness-[87%] contrast-[96%]',
    },
    {
      label: 'CSS',
      logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/css3.svg',
      color: 'filter invert-[30%] sepia-[95%] saturate-[2084%] hue-rotate-[193deg] brightness-[94%] contrast-[93%]',
    },
  ];

  // Project List with Modal Content & Preview Photos
  
  const projects: Project[] = [{
      id: 'laravel-app-1',
      projName: 'CKLMS',
      title: 'Learning Management System (LMS) Web App',
      desc: 'Full-stack application built with Laravel, PHP, and MySQL database management. (2021-2023)',
      longDesc:
        'A platform for educational institutions to manage classrooms, students, instructors and books. Features include multi-role authentication, book importing and creation, quiz/assignment creations and grading.',
      icon: '💻',
      projYear: '2021-2023',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      btnBg: darkMode ? 'bg-[#907AD6]' : 'bg-[#FFB7B2]',
      cardBg: darkMode ? 'bg-[#342F48]' : 'bg-[#E2F0CB]',
      tech: ['Laravel', 'PHP', 'MySQL', 'CSS', 'Eloquent ORM'],
      features: [
        'Book uploading and creation',
        'Assignments and quizzes with grading system',
        'Multi-role authentication for students, instructors, and admins',
      ],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 'laravel-app-2',
      projName: 'ESSENTIEL',
      title: 'School Management System (SMS) Web App',
      desc: 'Full-stack application built with Laravel, PHP, and MySQL database management. (2019-2023)',
      longDesc:
        'A platform for educational institutions to manage enrollment, class scheduling, payments, students, and instructors. Features include multi-role authentication, enrollment, grading system, and parent notification system.',
      icon: '💻',
      projYear: '2019-2023',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      btnBg: darkMode ? 'bg-[#7058B8]' : 'bg-[#FFDAC1]',
      cardBg: darkMode ? 'bg-[#342F48]' : 'bg-[#FFDAC1]',
      tech: ['Laravel', 'PHP', 'MySQL', 'CSS', 'Eloquent ORM'],
      features: [
        'Multi-role authentication for students, instructors, and admins',
        'Enrollment management and class scheduling',
        'Payment processing and parent notification system',
        'Grading system for student input and instructor feedback',
      ],
      liveUrl: '#',
      githubUrl: '#',
    },
  ];

  // Schema Markup
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Shane',
    jobTitle: 'Full-Stack Web Developer',
    knowsAbout: ['Laravel', 'PHP', 'MySQL', 'JavaScript', 'Bootstrap', 'Vite', 'CSS', 'Networking'],
    knowsLanguage: ['English', 'Korean'],
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'certification',
        name: 'Cisco Networking Certification',
        recognizedBy: {
          '@type': 'Organization',
          name: 'Cisco Systems',
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main
        className={`min-h-screen w-full font-mono p-4 sm:p-6 md:p-10 flex flex-col justify-between relative select-none transition-colors duration-200 ${
          darkMode ? 'bg-[#1A1821] text-[#E0D8F0]' : 'bg-[#FDF0ED] text-[#4A3E3D]'
        }`}
      >
        {/* Background Pixel Pattern Grid */}
        <div
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            backgroundImage: darkMode
              ? `radial-gradient(#907AD6 1.5px, transparent 1.5px)`
              : `radial-gradient(#D8A7B1 1.5px, transparent 1.5px)`,
            backgroundSize: '16px 16px',
          }}
        />

        {/* Header / Navbar */}
        <header
          className={`w-full border-4 relative z-10 p-4 mb-6 flex flex-col sm:flex-row justify-between items-center gap-4 transition-colors ${
            darkMode
              ? 'bg-[#262335] border-[#907AD6] shadow-[6px_6px_0px_0px_#4F4670]'
              : 'bg-[#FFF8F6] border-[#4A3E3D] shadow-[6px_6px_0px_0px_#D8A7B1]'
          }`}
        >
          <div className="flex items-center gap-3">
            <div
              className={`w-10 h-10 border-2 flex items-center justify-center text-xl shrink-0 ${
                darkMode
                  ? 'bg-[#4F4670] border-[#907AD6] shadow-[2px_2px_0px_0px_#907AD6]'
                  : 'bg-[#E2F0CB] border-[#4A3E3D] shadow-[2px_2px_0px_0px_#4A3E3D]'
              }`}
            >
              💻
            </div>
            <div>
              <h1 className="text-xl font-extrabold tracking-wide">Shane | Web Developer</h1>
              <p className={`text-xs ${darkMode ? 'text-[#AFA2C8]' : 'text-[#88706B]'}`}>
                Full-Stack Laravel, PHP & JavaScript Specialist ✦ 5+ Years Exp (and still coding)
              </p>
            </div>
          </div>

          {/* Navigation Links */}
          <nav aria-label="Main Navigation" className="flex flex-wrap justify-center items-center gap-2 w-full sm:w-auto">
            <button
              onClick={() => setActiveTab('about')}
              className={`px-3 py-1.5 text-xs font-bold border-2 transition-all ${
                activeTab === 'about'
                  ? darkMode
                    ? 'bg-[#907AD6] text-white border-[#DABfff] shadow-[3px_3px_0px_0px_#DABfff] -translate-y-0.5'
                    : 'bg-[#FFB7B2] text-[#4A3E3D] border-[#4A3E3D] shadow-[3px_3px_0px_0px_#4A3E3D] -translate-y-0.5'
                  : darkMode
                  ? 'bg-[#1A1821] border-[#907AD6] hover:bg-[#342F48]'
                  : 'bg-white border-[#4A3E3D] hover:bg-[#FFE5E2]'
              }`}
            >
              ✦ ABOUT
            </button>
            <button
              onClick={() => setActiveTab('projects')}
              className={`px-3 py-1.5 text-xs font-bold border-2 transition-all ${
                activeTab === 'projects'
                  ? darkMode
                    ? 'bg-[#7058B8] text-white border-[#DABfff] shadow-[3px_3px_0px_0px_#DABfff] -translate-y-0.5'
                    : 'bg-[#FFDAC1] text-[#4A3E3D] border-[#4A3E3D] shadow-[3px_3px_0px_0px_#4A3E3D] -translate-y-0.5'
                  : darkMode
                  ? 'bg-[#1A1821] border-[#907AD6] hover:bg-[#342F48]'
                  : 'bg-white border-[#4A3E3D] hover:bg-[#FFF0E5]'
              }`}
            >
              ✦ PROJECTS
            </button>
            <button
              onClick={() => setActiveTab('certifications')}
              className={`px-3 py-1.5 text-xs font-bold border-2 transition-all ${
                activeTab === 'certifications'
                  ? darkMode
                    ? 'bg-[#8062D6] text-white border-[#DABfff] shadow-[3px_3px_0px_0px_#DABfff] -translate-y-0.5'
                    : 'bg-[#B5EAD7] text-[#4A3E3D] border-[#4A3E3D] shadow-[3px_3px_0px_0px_#4A3E3D] -translate-y-0.5'
                  : darkMode
                  ? 'bg-[#1A1821] border-[#907AD6] hover:bg-[#342F48]'
                  : 'bg-white border-[#4A3E3D] hover:bg-[#EAFBF3]'
              }`}
            >
              ✦ CERTS & WORKSHOPS
            </button>
            <button
              onClick={() => setActiveTab('contact')}
              className={`px-3 py-1.5 text-xs font-bold border-2 transition-all ${
                activeTab === 'contact'
                  ? darkMode
                    ? 'bg-[#4F4670] text-white border-[#DABfff] shadow-[3px_3px_0px_0px_#DABfff] -translate-y-0.5'
                    : 'bg-[#E2F0CB] text-[#4A3E3D] border-[#4A3E3D] shadow-[3px_3px_0px_0px_#4A3E3D] -translate-y-0.5'
                  : darkMode
                  ? 'bg-[#1A1821] border-[#907AD6] hover:bg-[#342F48]'
                  : 'bg-white border-[#4A3E3D] hover:bg-[#F2F9E8]'
              }`}
            >
              ✦ CONTACT
            </button>

            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`ml-2 px-3 py-1.5 text-xs font-bold border-2 transition-all ${
                darkMode
                  ? 'bg-[#F2C94C] text-[#1A1821] border-[#F2C94C] shadow-[3px_3px_0px_0px_#907AD6]'
                  : 'bg-[#4A3E3D] text-[#FDF0ED] border-[#4A3E3D] shadow-[3px_3px_0px_0px_#D8A7B1]'
              }`}
            >
              {darkMode ? '☀️ LIGHT' : '🌙 DARK'}
            </button>
          </nav>
        </header>

        {/* Content Section */}
        <section
          className={`w-full flex-grow border-4 relative z-10 p-6 sm:p-8 flex flex-col justify-between transition-colors ${
            darkMode
              ? 'bg-[#262335] border-[#907AD6] shadow-[8px_8px_0px_0px_#4F4670]'
              : 'bg-[#FFF8F6] border-[#4A3E3D] shadow-[8px_8px_0px_0px_#D8A7B1]'
          }`}
        >
          {/* About Tab */}
          {activeTab === 'about' && (
            <article className="space-y-6">
              <div
                className={`flex flex-col lg:flex-row items-center justify-between gap-6 pb-6 border-b-4 border-dashed ${
                  darkMode ? 'border-[#4F4670]' : 'border-[#D8A7B1]'
                }`}
              >
                {/* Profile Photo & Status Stack */}
                <div className="flex flex-col sm:flex-row items-center gap-5 w-full lg:w-auto">
                  {/* Pixel-Border Frame */}
                  <div
                    className={`relative w-32 h-32 sm:w-36 sm:h-36 border-4 shrink-0 overflow-hidden ${
                      darkMode
                        ? 'bg-[#1A1821] border-[#907AD6] shadow-[6px_6px_0px_0px_#907AD6]'
                        : 'bg-white border-[#4A3E3D] shadow-[6px_6px_0px_0px_#4A3E3D]'
                    }`}
                  >
                    <img
                      src="/img/shane.jpg" // 👈 Replace with your photo path (e.g., public/profile.jpg)
                      alt="Shane Profile Photo"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        // Fallback placeholder if image is missing
                        (e.target as HTMLImageElement).src =
                          'https://api.dicebear.com/7.x/pixel-art/svg?seed=Shane';
                      }}
                    />
                    {/* Corner Pixel Tag */}
                    <span
                      className={`absolute bottom-0 right-0 text-[9px] font-black px-1.5 py-0.5 border-t-2 border-l-2 ${
                        darkMode
                          ? 'bg-[#262335] border-[#907AD6] text-[#DABfff]'
                          : 'bg-[#FFF8F6] border-[#4A3E3D] text-[#4A3E3D]'
                      }`}
                    >
                      SHANE.PNG
                    </span>
                  </div>

                  {/* Header Text Details */}
                  <div className="space-y-2 text-center sm:text-left">
                    <div className="flex flex-wrap justify-center sm:justify-start gap-2">
                      <span
                        className={`inline-block text-xs font-bold px-2 py-0.5 border-2 ${
                          darkMode
                            ? 'bg-[#4F4670] text-[#DABfff] border-[#907AD6]'
                            : 'bg-[#B5EAD7] text-[#4A3E3D] border-[#4A3E3D]'
                        }`}
                      >
                        FULL-STACK DEVELOPER
                      </span>
                      <span
                        className={`inline-block text-xs font-bold px-2 py-0.5 border-2 ${
                          darkMode
                            ? 'bg-[#342F48] text-[#DABfff] border-[#907AD6]'
                            : 'bg-[#FFDAC1] text-[#4A3E3D] border-[#4A3E3D]'
                        }`}
                      >
                        🇰🇷 LEARNING KOREAN
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-extrabold">
                      Full-Stack Web Development & Design
                    </h2>

                    <p
                      className={`text-xs sm:text-sm max-w-xl leading-relaxed ${
                        darkMode ? 'text-[#AFA2C8]' : 'text-[#88706B]'
                      }`}
                    >
                      I am a Web Developer building robust full-stack web applications. My core expertise centers around backend development with Laravel, PHP, and MySQL, alongside frontend development using JavaScript, CSS, Bootstrap, and Vite.
                    </p>
                  </div>
                </div>

                {/* Availability Status Card */}
                <div
                  className={`w-full lg:w-auto border-2 p-4 shrink-0 text-center lg:text-left ${
                    darkMode
                      ? 'bg-[#1A1821] border-[#907AD6] shadow-[4px_4px_0px_0px_#907AD6]'
                      : 'bg-[#E2F0CB] border-[#4A3E3D] shadow-[4px_4px_0px_0px_#4A3E3D]'
                  }`}
                >
                  <p className="text-xs font-bold">CURRENT STATUS:</p>
                  <p className={`text-xs mt-1 font-extrabold ${darkMode ? 'text-[#B5EAD7]' : 'text-[#526338]'}`}>
                    🟢 Building & Available for work
                  </p>
                </div>
              </div>

              {/* Tech Stack */}
              <div>
                <h3
                  className={`text-xs font-bold mb-3 uppercase tracking-wider ${
                    darkMode ? 'text-[#AFA2C8]' : 'text-[#88706B]'
                  }`}
                >
                  Core Tech Stack & Tools
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
                  {techStack.map((skill, index) => (
                    <div
                      key={index}
                      className={`border-2 p-3 text-center flex flex-col items-center justify-center ${
                        darkMode
                          ? 'bg-[#1A1821] border-[#907AD6] shadow-[2px_2px_0px_0px_#907AD6]'
                          : 'bg-white border-[#4A3E3D] shadow-[2px_2px_0px_0px_#4A3E3D]'
                      }`}
                    >
                      <img
                        src={skill.logo}
                        alt={`${skill.label} official logo`}
                        className={`w-7 h-7 mb-2 object-contain ${skill.color}`}
                        loading="lazy"
                      />
                      <span className="text-xs font-bold">{skill.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Language Quest */}
              <div>
                <h3
                  className={`text-xs font-bold mb-3 uppercase tracking-wider ${
                    darkMode ? 'text-[#AFA2C8]' : 'text-[#88706B]'
                  }`}
                >
                  Language Quest
                </h3>
                <div
                  className={`border-2 p-4 flex flex-col sm:flex-row items-center gap-4 ${
                    darkMode
                      ? 'bg-[#1A1821] border-[#907AD6] shadow-[2px_2px_0px_0px_#907AD6]'
                      : 'bg-white border-[#4A3E3D] shadow-[2px_2px_0px_0px_#4A3E3D]'
                  }`}
                >
                  <div className="text-3xl shrink-0">🗣️</div>
                  <div className="space-y-1 text-center sm:text-left text-xs">
                    <p className="font-bold">Avid Language Learner</p>
                    <p className={darkMode ? 'text-[#AFA2C8]' : 'text-[#88706B]'}>
                      When I'm not coding, I love exploring new languages! I'm currently studying{' '}
                      <span className="font-bold underline decoration-dashed">Korean (한국어)</span> 🇰🇷 and plan to learn{' '}
                      <span className="font-bold underline decoration-dashed">Russian (Русский)</span> 🇷🇺 next.
                    </p>
                  </div>
                </div>
              </div>
            </article>
          )}

          {/* Projects Tab */}
          {activeTab === 'projects' && (
           <article className="space-y-4">
              <h2 className="text-xl font-extrabold mb-4">Featured Full-Stack Web Projects</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((proj) => (
                  <div
                    key={proj.id}
                    className={`border-2 p-4 flex flex-col justify-between ${
                      darkMode
                        ? 'bg-[#1A1821] border-[#907AD6] shadow-[4px_4px_0px_0px_#907AD6]'
                        : 'bg-white border-[#4A3E3D] shadow-[4px_4px_0px_0px_#4A3E3D]'
                    }`}
                  >
                    <div>
                      <div
                        className={`h-36 border-2 flex items-center justify-center text-4xl mb-3 ${
                          darkMode ? 'border-[#907AD6]' : 'border-[#4A3E3D]'
                        } ${proj.cardBg}`}
                      >
                        {proj.projName}
                      </div>
                      <h3 className="font-bold text-sm">{proj.title}</h3>
                      <p
                        className={`text-xs mt-1 leading-normal ${
                          darkMode ? 'text-[#AFA2C8]' : 'text-[#88706B]'
                        }`}
                      >
                        {proj.desc}
                      </p>
                    </div>

                    {/* View Project Button Opens Modal */}
                    <button
                      onClick={() => setSelectedProject(proj)}
                      className={`mt-4 w-full border-2 py-1 text-xs font-bold transition-transform active:translate-y-0.5 ${
                        darkMode
                          ? 'border-[#DABfff] text-white shadow-[2px_2px_0px_0px_#DABfff] hover:bg-[#4F4670]'
                          : 'border-[#4A3E3D] text-[#4A3E3D] shadow-[2px_2px_0px_0px_#4A3E3D] hover:opacity-90'
                      } ${proj.btnBg}`}
                    >
                      VIEW PROJECT DETAILS
                    </button>
                  </div>
                ))}
              </div>
            </article>
            
            // <article className="space-y-4">
            //   <h2 className="text-xl font-extrabold mb-4">Featured Full-Stack Web Projects</h2>
            //   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            //     {[
            //       {
            //         title: 'Learning Management System (LMS) Web App',
            //         desc: 'Full-stack application built with Laravel, PHP, and MySQL database management.',
            //         icon: '🚀',
            //         btnBg: darkMode ? 'bg-[#907AD6]' : 'bg-[#FFB7B2]',
            //         cardBg: darkMode ? 'bg-[#342F48]' : 'bg-[#E2F0CB]',
            //       },
            //       {
            //         title: 'School Management System (SMS) Web App',
            //         desc: 'Full-stack application built with Laravel, PHP, and MySQL database management.',
            //         icon: '🚀',
            //         btnBg: darkMode ? 'bg-[#907AD6]' : 'bg-[#FFB7B2]',
            //         cardBg: darkMode ? 'bg-[#342F48]' : 'bg-[#E2F0CB]',
            //       },
            //       // {
            //       //   title: 'Vite & Bootstrap UI',
            //       //   desc: 'Modern, fast-loading frontend interfaces styled with Bootstrap and compiled via Vite.',
            //       //   icon: '⚡',
            //       //   btnBg: darkMode ? 'bg-[#7058B8]' : 'bg-[#FFDAC1]',
            //       //   cardBg: darkMode ? 'bg-[#342F48]' : 'bg-[#FFDAC1]',
            //       // },
            //       // {
            //       //   title: 'Database & REST APIs',
            //       //   desc: 'Custom RESTful API endpoints, relational database design, and query optimization.',
            //       //   icon: '🗄️',
            //       //   btnBg: darkMode ? 'bg-[#4F4670]' : 'bg-[#C7CEEA]',
            //       //   cardBg: darkMode ? 'bg-[#342F48]' : 'bg-[#C7CEEA]',
            //       // },
            //     ].map((proj, idx) => (
            //       <div
            //         key={idx}
            //         className={`border-2 p-4 flex flex-col justify-between ${
            //           darkMode
            //             ? 'bg-[#1A1821] border-[#907AD6] shadow-[4px_4px_0px_0px_#907AD6]'
            //             : 'bg-white border-[#4A3E3D] shadow-[4px_4px_0px_0px_#4A3E3D]'
            //         }`}
            //       >
            //         <div>
            //           <div
            //             className={`h-36 border-2 flex items-center justify-center text-4xl mb-3 ${
            //               darkMode ? 'border-[#907AD6]' : 'border-[#4A3E3D]'
            //             } ${proj.cardBg}`}
            //           >
            //             {proj.icon}
            //           </div>
            //           <h3 className="font-bold text-sm">{proj.title}</h3>
            //           <p
            //             className={`text-xs mt-1 leading-normal ${
            //               darkMode ? 'text-[#AFA2C8]' : 'text-[#88706B]'
            //             }`}
            //           >
            //             {proj.desc}
            //           </p>
            //         </div>
            //         <button
            //           className={`mt-4 w-full border-2 py-1 text-xs font-bold ${
            //             darkMode
            //               ? 'border-[#DABfff] text-white shadow-[2px_2px_0px_0px_#DABfff]'
            //               : 'border-[#4A3E3D] text-[#4A3E3D] shadow-[2px_2px_0px_0px_#4A3E3D]'
            //           } ${proj.btnBg}`}
            //         >
            //           VIEW PROJECT
            //         </button>
            //       </div>
            //     ))}
            //   </div>
            // </article>
          )}

          {/* Certifications Tab */}
          {activeTab === 'certifications' && (
            <article className="space-y-8">
              {/* Certifications Section */}
              <div className="space-y-4">
                <h2 className="text-xl font-extrabold flex items-center gap-2">
                  {/* <span>📜</span> */}
                   Certifications
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div
                    className={`border-2 p-5 flex items-start gap-4 ${
                      darkMode
                        ? 'bg-[#1A1821] border-[#907AD6] shadow-[4px_4px_0px_0px_#907AD6]'
                        : 'bg-white border-[#4A3E3D] shadow-[4px_4px_0px_0px_#4A3E3D]'
                    }`}
                  >
                    <div
                      className={`w-12 h-12 border-2 flex items-center justify-center shrink-0 ${
                        darkMode ? 'bg-[#4F4670] border-[#907AD6]' : 'bg-[#E2F0CB] border-[#4A3E3D]'
                      }`}
                    >
                      <img
                        src="https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/cisco.svg"
                        alt="Cisco Logo"
                        className="w-7 h-7 filter invert-[30%] sepia-[85%] saturate-[1500%] hue-rotate-[180deg]"
                      />
                    </div>
                    <div className="space-y-1">
                      <span
                        className={`inline-block text-[10px] font-bold px-1.5 py-0.5 border ${
                          darkMode ? 'bg-[#342F48] border-[#907AD6]' : 'bg-[#B5EAD7] border-[#4A3E3D]'
                        }`}
                      >
                        Cisco Networking Certification of Course Completion
                      </span>
                      <h3 className="font-extrabold text-sm sm:text-base">CCNA Routing and Switching: Introduction to Networks</h3>
                      <p className={`text-xs ${darkMode ? 'text-[#AFA2C8]' : 'text-[#88706B]'}`}>
                        Issued by Cisco Networking Academy & University of Science and Technology of Southern Philippines • Demonstrated proficiency in network fundamentals, media access control, IP addressing, and basic routing and switching configurations.
                      </p>
                    </div>
                  </div>
                  <div
                    className={`border-2 p-5 flex items-start gap-4 ${
                      darkMode
                        ? 'bg-[#1A1821] border-[#907AD6] shadow-[4px_4px_0px_0px_#907AD6]'
                        : 'bg-white border-[#4A3E3D] shadow-[4px_4px_0px_0px_#4A3E3D]'
                    }`}
                  >
                    <div
                      className={`w-12 h-12 border-2 flex items-center justify-center shrink-0 ${
                        darkMode ? 'bg-[#4F4670] border-[#907AD6]' : 'bg-[#E2F0CB] border-[#4A3E3D]'
                      }`}
                    >
                      <img
                        src="https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/cisco.svg"
                        alt="Cisco Logo"
                        className="w-7 h-7 filter invert-[30%] sepia-[85%] saturate-[1500%] hue-rotate-[180deg]"
                      />
                    </div>
                    <div className="space-y-1">
                      <span
                        className={`inline-block text-[10px] font-bold px-1.5 py-0.5 border ${
                          darkMode ? 'bg-[#342F48] border-[#907AD6]' : 'bg-[#B5EAD7] border-[#4A3E3D]'
                        }`}
                      >
                        Cisco Networking Certification of Course Completion
                      </span>
                      <h3 className="font-extrabold text-sm sm:text-base">CCNA Routing and Switching: Scaling Networks</h3>
                      <p className={`text-xs ${darkMode ? 'text-[#AFA2C8]' : 'text-[#88706B]'}`}>
                        Issued by Cisco Networking Academy & University of Science and Technology of Southern Philippines • Demonstrated proficiency in configuring and troubleshooting advanced routing protocols, implementing Link Aggregation, and managing network security and redundancy.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Workshops Attended Section */}
              <div className="space-y-4 pt-4 border-t-2 border-dashed border-gray-400">
                <h2 className="text-xl font-extrabold flex items-center gap-2">
                  {/* <span>🛠️</span> */}
                   Workshops & Seminars Attended
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    {
                      title: 'Software QA Manual Testing Workshop',
                      org: 'MSTCONNECT',
                      desc: 'Workshop covering manual testing techniques, test case design, and quality assurance best practices using JIRA, TestRail & Excel.',
                      tag: 'QA',
                    },
                    // {
                    //   title: 'Database Architecture & Query Tuning',
                    //   org: 'Database Summit',
                    //   desc: 'Interactive workshop focusing on relational schema design, indexing strategies, and MySQL performance tuning.',
                    //   tag: 'DATABASE',
                    // },
                    // {
                    //   title: 'UI/UX & Frontend Workflows with Vite',
                    //   org: 'Developer Community Bootcamp',
                    //   desc: 'Hands-on session on rapid frontend prototyping, asset optimization with Vite, and responsive styling frameworks.',
                    //   tag: 'FRONTEND',
                    // },
                    // {
                    //   title: 'Web Development Workshop',
                    //   org: 'ZUITT',
                    //   desc: 'Participated in a web development workshop covering Git, HTML and CSS.',
                    //   tag: 'WEB DEV',
                    // },
                  ].map((ws, i) => (
                    <div
                      key={i}
                      className={`border-2 p-4 flex flex-col justify-between ${
                        darkMode
                          ? 'bg-[#1A1821] border-[#907AD6] shadow-[3px_3px_0px_0px_#907AD6]'
                          : 'bg-white border-[#4A3E3D] shadow-[3px_3px_0px_0px_#4A3E3D]'
                      }`}
                    >
                      <div className="space-y-2">
                        <span
                          className={`inline-block text-[10px] font-bold px-1.5 py-0.5 border ${
                            darkMode ? 'bg-[#4F4670] border-[#907AD6]' : 'bg-[#FFDAC1] border-[#4A3E3D]'
                          }`}
                        >
                          {ws.tag}
                        </span>
                        <h3 className="font-bold text-xs sm:text-sm">{ws.title}</h3>
                        <p className={`text-[11px] font-semibold ${darkMode ? 'text-[#DABfff]' : 'text-[#6B5B59]'}`}>
                          {ws.org}
                        </p>
                        <p className={`text-xs ${darkMode ? 'text-[#AFA2C8]' : 'text-[#88706B]'}`}>
                          {ws.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          )}

          {/* Contact Tab */}
          {activeTab === 'contact' && (
            <article className="max-w-2xl mx-auto w-full space-y-8 py-4">
              <div className="text-center space-y-2">
                {/* <div
                  className={`w-14 h-14 border-2 flex items-center justify-center text-2xl mx-auto ${
                    darkMode
                      ? 'bg-[#907AD6] border-[#DABfff] shadow-[4px_4px_0px_0px_#DABfff]'
                      : 'bg-[#FFB7B2] border-[#4A3E3D] shadow-[4px_4px_0px_0px_#4A3E3D]'
                  }`}
                >
                  ✉️
                </div> */}
                <h2 className="text-2xl font-extrabold">Send a Message</h2>
                <p className={`text-xs sm:text-sm ${darkMode ? 'text-[#AFA2C8]' : 'text-[#88706B]'}`}>
                  Have a project in mind, a full-stack role, or just want to connect? Fill out the form below!
                </p>
              </div>

              {/* Contact Form */}{/* Contact Form */}
<form
  onSubmit={async (e) => {
    e.preventDefault();
    setFormStatus('submitting');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.get('name'),
          email: formData.get('email'),
          subject: formData.get('subject'),
          message: formData.get('message'),
        }),
      });

      if (res.ok) {
        setFormStatus('success');
        form.reset();
      } else {
        setFormStatus('error');
      }
    } catch {
      setFormStatus('error');
    }
  }}
  className={`border-4 p-5 sm:p-6 space-y-4 ${
    darkMode
      ? 'bg-[#1A1821] border-[#907AD6] shadow-[6px_6px_0px_0px_#907AD6]'
      : 'bg-white border-[#4A3E3D] shadow-[6px_6px_0px_0px_#4A3E3D]'
  }`}
>
  {/* Retro Success Banner Notification */}
  {formStatus === 'success' && (
    <div
      className={`border-2 p-3 text-xs font-bold flex items-center justify-between gap-2 animate-in fade-in slide-in-from-top-2 duration-200 ${
        darkMode
          ? 'bg-[#342F48] text-[#B5EAD7] border-[#B5EAD7] shadow-[3px_3px_0px_0px_#B5EAD7]'
          : 'bg-[#EAFBF3] text-[#2D5A43] border-[#2D5A43] shadow-[3px_3px_0px_0px_#2D5A43]'
      }`}
    >
      <div className="flex items-center gap-2">
        <span className="text-base">🎉</span>
        <span>Thank you! Your message has been sent successfully.</span>
      </div>
      <button
        type="button"
        onClick={() => setFormStatus('idle')}
        className="font-black px-1 hover:opacity-80"
      >
        ✕
      </button>
    </div>
  )}

  {/* Retro Error Banner Notification */}
  {formStatus === 'error' && (
    <div
      className={`border-2 p-3 text-xs font-bold flex items-center justify-between gap-2 animate-in fade-in slide-in-from-top-2 duration-200 ${
        darkMode
          ? 'bg-[#4A262C] text-[#FFB7B2] border-[#FFB7B2] shadow-[3px_3px_0px_0px_#FFB7B2]'
          : 'bg-[#FFE5E2] text-[#80241D] border-[#80241D] shadow-[3px_3px_0px_0px_#80241D]'
      }`}
    >
      <div className="flex items-center gap-2">
        <span className="text-base">⚠️</span>
        <span>Failed to send message. Please try again.</span>
      </div>
      <button
        type="button"
        onClick={() => setFormStatus('idle')}
        className="font-black px-1 hover:opacity-80"
      >
        ✕
      </button>
    </div>
  )}

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    <div className="space-y-1 text-left">
      <label className="text-xs font-extrabold uppercase tracking-wide">
        Your Name <span className="text-red-500">*</span>
      </label>
      <input
        type="text"
        name="name"
        required
        placeholder="e.g. Bityok Dee"
        className={`w-full border-2 p-2.5 text-xs font-mono outline-none transition-colors ${
          darkMode ? 'bg-[#262335] border-[#907AD6] text-white' : 'bg-[#FFF8F6] border-[#4A3E3D]'
        }`}
      />
    </div>

    <div className="space-y-1 text-left">
      <label className="text-xs font-extrabold uppercase tracking-wide">
        Your Email <span className="text-red-500">*</span>
      </label>
      <input
        type="email"
        name="email"
        required
        placeholder="e.g. bityok.dee@example.com"
        className={`w-full border-2 p-2.5 text-xs font-mono outline-none transition-colors ${
          darkMode ? 'bg-[#262335] border-[#907AD6] text-white' : 'bg-[#FFF8F6] border-[#4A3E3D]'
        }`}
      />
    </div>
  </div>

  <div className="space-y-1 text-left">
    <label className="text-xs font-extrabold uppercase tracking-wide">Subject</label>
    <input
      type="text"
      name="subject"
      placeholder="e.g. Project Inquiry"
      className={`w-full border-2 p-2.5 text-xs font-mono outline-none transition-colors ${
        darkMode ? 'bg-[#262335] border-[#907AD6] text-white' : 'bg-[#FFF8F6] border-[#4A3E3D]'
      }`}
    />
  </div>

  <div className="space-y-1 text-left">
    <label className="text-xs font-extrabold uppercase tracking-wide">
      Message <span className="text-red-500">*</span>
    </label>
    <textarea
      name="message"
      required
      rows={4}
      placeholder="Type your message here..."
      className={`w-full border-2 p-2.5 text-xs font-mono outline-none resize-none transition-colors ${
        darkMode ? 'bg-[#262335] border-[#907AD6] text-white' : 'bg-[#FFF8F6] border-[#4A3E3D]'
      }`}
    ></textarea>
  </div>

  <button
    type="submit"
    disabled={formStatus === 'submitting'}
    className={`w-full border-2 py-3 text-xs sm:text-sm font-extrabold transition-all active:translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed ${
      darkMode
        ? 'bg-[#907AD6] text-white border-[#DABfff] shadow-[3px_3px_0px_0px_#DABfff]'
        : 'bg-[#E2F0CB] text-[#4A3E3D] border-[#4A3E3D] shadow-[3px_3px_0px_0px_#4A3E3D]'
    }`}
  >
    {formStatus === 'submitting' ? 'SENDING MESSAGE...' : 'SEND MESSAGE 🚀'}
  </button>
</form>

              {/* Social Media Links */}
              <div className="space-y-3 pt-2">
                <p className={`text-xs font-extrabold uppercase tracking-wider ${darkMode ? 'text-[#AFA2C8]' : 'text-[#88706B]'}`}>
                  Connect Via Socials
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {[
                    {
                      name: 'Laracasts',
                      url: 'https://laracasts.com/@shing_shing',
                      icon: 'laracasts-secondary-logo-symbol.svg',
                    },
                    {
                      name: 'LinkedIn',
                      url: 'https://www.linkedin.com/in/shane-hazil-abutan-78ba41271',
                      icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/linkedin.svg',
                    },
                  ].map((social, idx) => (
                    <a
                      key={idx}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`border-2 p-3 flex flex-col items-center justify-center gap-2 transition-transform active:translate-y-0.5 ${
                        darkMode
                          ? 'bg-[#1A1821] border-[#907AD6] shadow-[3px_3px_0px_0px_#907AD6] hover:bg-[#342F48]'
                          : 'bg-white border-[#4A3E3D] shadow-[3px_3px_0px_0px_#4A3E3D] hover:bg-[#FFE5E2]'
                      }`}
                    >
                      <img
                        src={social.icon}
                        alt={social.name}
                        className={`w-5 h-5 ${darkMode ? 'filter invert' : ''}`}
                      />
                      <span className="text-[11px] font-extrabold">{social.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </article>
          )}

          {/* Footer */}
          <footer
            className={`mt-8 pt-4 border-t-2 border-dashed flex flex-col sm:flex-row justify-between items-center text-[10px] sm:text-xs font-bold gap-2 ${
              darkMode ? 'border-[#4F4670] text-[#AFA2C8]' : 'border-[#D8A7B1] text-[#88706B]'
            }`}
          >
            <span>STACK: LARAVEL / PHP / VITE</span>
          </footer>
        </section>

        {/* Modal Window for Detailed Project Information */}
        {selectedProject && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs"
            onClick={() => setSelectedProject(null)}
          >
            <div
              onClick={(e) => e.stopPropagation()} // Prevent clicking inside modal from closing
              className={`w-full max-w-lg border-4 p-6 relative flex flex-col gap-4 animate-in fade-in zoom-in-95 duration-150 ${
                darkMode
                  ? 'bg-[#262335] text-[#E0D8F0] border-[#907AD6] shadow-[8px_8px_0px_0px_#1A1821]'
                  : 'bg-[#FFF8F6] text-[#4A3E3D] border-[#4A3E3D] shadow-[8px_8px_0px_0px_#D8A7B1]'
              }`}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className={`absolute top-3 right-3 w-8 h-8 border-2 font-black flex items-center justify-center text-sm ${
                  darkMode
                    ? 'bg-[#907AD6] text-white border-[#DABfff] shadow-[2px_2px_0px_0px_#DABfff]'
                    : 'bg-[#FFB7B2] text-[#4A3E3D] border-[#4A3E3D] shadow-[2px_2px_0px_0px_#4A3E3D]'
                }`}
              >
                ✕
              </button>

              {/* Header Icon + Title */}
              <div className="flex items-center gap-3 pr-8">
                <div
                  className={`w-12 h-12 border-2 text-2xl flex items-center justify-center shrink-0 ${
                    darkMode ? 'border-[#907AD6]' : 'border-[#4A3E3D]'
                  } ${selectedProject.cardBg}`}
                >
                  {selectedProject.icon}
                </div>
                <div>
                  <h3 className="font-extrabold text-lg leading-tight">{selectedProject.title}</h3>
                  <span className={`text-[10px] font-bold uppercase tracking-wider ${darkMode ? 'text-[#AFA2C8]' : 'text-[#88706B]'}`}>
                    {selectedProject.projYear}
                  </span>
                </div>
              </div>

              {/* Extended Description */}
              <p className={`text-xs sm:text-sm leading-relaxed ${darkMode ? 'text-[#AFA2C8]' : 'text-[#88706B]'}`}>
                {selectedProject.longDesc}
              </p>

              {/* Technologies Used Badges */}
              <div className="space-y-1">
                <p className="text-xs font-extrabold uppercase">Tech Stack:</p>
                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.tech.map((item, idx) => (
                    <span
                      key={idx}
                      className={`text-[10px] font-bold px-2 py-0.5 border ${
                        darkMode
                          ? 'bg-[#1A1821] border-[#907AD6] text-[#DABfff]'
                          : 'bg-white border-[#4A3E3D] text-[#4A3E3D]'
                      }`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Features List */}
              <div className="space-y-1">
                <p className="text-xs font-extrabold uppercase">Key Features:</p>
                <ul className="space-y-1 text-xs">
                  {selectedProject.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#907AD6] font-bold">✦</span>
                      <span className={darkMode ? 'text-[#AFA2C8]' : 'text-[#88706B]'}>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex gap-3">
                <button
                  onClick={() => setSelectedProject(null)}
                  className={`w-full border-2 py-2 text-xs font-bold transition-all ${
                    darkMode
                      ? 'bg-[#907AD6] text-white border-[#DABfff] shadow-[3px_3px_0px_0px_#DABfff]'
                      : 'bg-[#E2F0CB] text-[#4A3E3D] border-[#4A3E3D] shadow-[3px_3px_0px_0px_#4A3E3D]'
                  }`}
                >
                  CLOSE WINDOW
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </>
  );
}