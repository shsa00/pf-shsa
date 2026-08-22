'use client';

import { useState } from 'react';

export default function Home() {
  const [activeTab, setActiveTab] = useState<'about' | 'projects' | 'contact'>('about');
  const [darkMode, setDarkMode] = useState(false);

  return (
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

      {/* Top Banner / Navbar */}
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
            <h1 className="text-xl font-extrabold tracking-wide">Shane</h1>
            <p className={`text-xs ${darkMode ? 'text-[#AFA2C8]' : 'text-[#88706B]'}`}>
              Web Developer ✦ 4+ Years Exp
            </p>
          </div>
        </div>

        {/* Navigation & Theme Toggle */}
        <div className="flex flex-wrap justify-center items-center gap-2 w-full sm:w-auto">
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

          {/* Theme Switcher Button */}
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
        </div>
      </header>

      {/* Main Content Area */}
      <section
        className={`w-full flex-grow border-4 relative z-10 p-6 sm:p-8 flex flex-col justify-between transition-colors ${
          darkMode
            ? 'bg-[#262335] border-[#907AD6] shadow-[8px_8px_0px_0px_#4F4670]'
            : 'bg-[#FFF8F6] border-[#4A3E3D] shadow-[8px_8px_0px_0px_#D8A7B1]'
        }`}
      >
        {/* Tab 1: About */}
        {activeTab === 'about' && (
          <div className="space-y-6">
            <div
              className={`flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6 border-b-4 border-dashed ${
                darkMode ? 'border-[#4F4670]' : 'border-[#D8A7B1]'
              }`}
            >
              <div className="space-y-2">
                <span
                  className={`inline-block text-xs font-bold px-2 py-0.5 border-2 ${
                    darkMode
                      ? 'bg-[#4F4670] text-[#DABfff] border-[#907AD6]'
                      : 'bg-[#B5EAD7] text-[#4A3E3D] border-[#4A3E3D]'
                  }`}
                >
                  FULL-STACK DEVELOPER
                </span>
                <br/>
                <span className="bg-[#FFDAC1] text-[#4A3E3D] text-[10px] font-bold px-2 py-0.5 border-2 border-[#4A3E3D]">
                  🇰🇷 LEARNING KOREAN
                </span> 
                <span className="bg-[#C7CEEA] text-[#4A3E3D] text-[10px] font-bold px-2 py-0.5 border-2 border-[#4A3E3D]">
                  🇷🇺 RUSSIAN NEXT
                </span>
                <h2 className="text-2xl sm:text-4xl font-extrabold">
                  Hey, I'm Shane! 👋
                </h2>
                <p
                  className={`text-sm sm:text-base max-w-3xl leading-relaxed ${
                    darkMode ? 'text-[#AFA2C8]' : 'text-[#88706B]'
                  }`}
                >
                  I am a Web Developer with 4 years of experience building robust full-stack web applications. My core expertise centers around backend development with Laravel, PHP, and MySQL, alongside crisp frontend development using JavaScript, CSS, Bootstrap, and Vite.
                </p>
              </div>

              {/* Status Box */}
              <div
                className={`w-full lg:w-auto border-2 p-4 shrink-0 ${
                  darkMode
                    ? 'bg-[#1A1821] border-[#907AD6] shadow-[4px_4px_0px_0px_#907AD6]'
                    : 'bg-[#E2F0CB] border-[#4A3E3D] shadow-[4px_4px_0px_0px_#4A3E3D]'
                }`}
              >
                <p className="text-xs font-bold">CURRENT STATUS:</p>
                <p className={`text-xs mt-1 ${darkMode ? 'text-[#B5EAD7]' : 'text-[#526338]'}`}>
                  🟢 Building & Available for work
                </p>
              </div>
            </div>

            {/* Tech Stack Grid */}
            <div className="pt-2">
              <h3
                className={`text-xs font-bold mb-3 uppercase tracking-wider ${
                  darkMode ? 'text-[#AFA2C8]' : 'text-[#88706B]'
                }`}
              >
                Core Tech Stack & Tools
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
                {[
                  { icon: '🔴', label: 'Laravel' },
                  { icon: '🐘', label: 'PHP' },
                  { icon: '🐬', label: 'MySQL' },
                  // { icon: '⚡', label: 'Vite' },
                  { icon: '🟨', label: 'JavaScript' },
                  { icon: '🎨', label: 'Bootstrap' },
                  { icon: '🌐', label: 'CSS3' },
                ].map((skill, index) => (
                  <div
                    key={index}
                    className={`border-2 p-3 text-center ${
                      darkMode
                        ? 'bg-[#1A1821] border-[#907AD6] shadow-[2px_2px_0px_0px_#907AD6]'
                        : 'bg-white border-[#4A3E3D] shadow-[2px_2px_0px_0px_#4A3E3D]'
                    }`}
                  >
                    <span className="text-xl block mb-1">{skill.icon}</span>
                    <span className="text-xs font-bold">{skill.label}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* Currently studying */}
            <div className="pt-2">
               <h3
                className={`text-xs font-bold mb-3 uppercase tracking-wider ${
                  darkMode ? 'text-[#AFA2C8]' : 'text-[#88706B]'
                }`}
              >
                Currently Studying
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
                {[
                  { icon: '⚡', label: 'Next.js' },
                  { icon: '⚡', label: 'Vite' }
                ].map((skill, index) => (
                  <div
                    key={index}
                    className={`border-2 p-3 text-center ${
                      darkMode
                        ? 'bg-[#1A1821] border-[#907AD6] shadow-[2px_2px_0px_0px_#907AD6]'
                        : 'bg-white border-[#4A3E3D] shadow-[2px_2px_0px_0px_#4A3E3D]'
                    }`}
                  >
                    <span className="text-xl block mb-1">{skill.icon}</span>
                    <span className="text-xs font-bold">{skill.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Projects */}
        {activeTab === 'projects' && (
          <div className="space-y-4">
            <h2 className="text-xl font-extrabold mb-4">Featured Web Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: 'Laravel Web Application',
                  desc: 'Full-stack application built with Laravel, PHP, and MySQL database management.',
                  icon: '🚀',
                  btnBg: darkMode ? 'bg-[#907AD6]' : 'bg-[#FFB7B2]',
                  cardBg: darkMode ? 'bg-[#342F48]' : 'bg-[#E2F0CB]',
                },
                {
                  title: 'Vite & Bootstrap UI',
                  desc: 'Modern, fast-loading frontend interfaces styled with Bootstrap and compiled via Vite.',
                  icon: '⚡',
                  btnBg: darkMode ? 'bg-[#7058B8]' : 'bg-[#FFDAC1]',
                  cardBg: darkMode ? 'bg-[#342F48]' : 'bg-[#FFDAC1]',
                },
                {
                  title: 'Database & REST APIs',
                  desc: 'Custom RESTful API endpoints, relational database design, and query optimization.',
                  icon: '🗄️',
                  btnBg: darkMode ? 'bg-[#4F4670]' : 'bg-[#C7CEEA]',
                  cardBg: darkMode ? 'bg-[#342F48]' : 'bg-[#C7CEEA]',
                },
              ].map((proj, idx) => (
                <div
                  key={idx}
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
                      {proj.icon}
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
                  <button
                    className={`mt-4 w-full border-2 py-1 text-xs font-bold ${
                      darkMode
                        ? 'border-[#DABfff] text-white shadow-[2px_2px_0px_0px_#DABfff]'
                        : 'border-[#4A3E3D] text-[#4A3E3D] shadow-[2px_2px_0px_0px_#4A3E3D]'
                    } ${proj.btnBg}`}
                  >
                    VIEW PROJECT
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: Contact */}
        {activeTab === 'contact' && (
          <div className="max-w-xl mx-auto w-full space-y-6 text-center py-8">
            <div
              className={`w-16 h-16 border-2 flex items-center justify-center text-3xl mx-auto ${
                darkMode
                  ? 'bg-[#907AD6] border-[#DABfff] shadow-[4px_4px_0px_0px_#DABfff]'
                  : 'bg-[#FFB7B2] border-[#4A3E3D] shadow-[4px_4px_0px_0px_#4A3E3D]'
              }`}
            >
              ✉️
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl font-extrabold">Let's Connect</h2>
              <p className={`text-xs sm:text-sm ${darkMode ? 'text-[#AFA2C8]' : 'text-[#88706B]'}`}>
                Looking for a full-stack developer or need help with Laravel/Vite projects? Send me a message!
              </p>
            </div>

            <div
              className={`border-2 p-6 space-y-4 ${
                darkMode
                  ? 'bg-[#1A1821] border-[#907AD6] shadow-[4px_4px_0px_0px_#907AD6]'
                  : 'bg-white border-[#4A3E3D] shadow-[4px_4px_0px_0px_#4A3E3D]'
              }`}
            >
              <a
                href="mailto:hello@example.com"
                className={`block w-full border-2 px-6 py-3 text-xs sm:text-sm font-extrabold transition-all ${
                  darkMode
                    ? 'bg-[#907AD6] text-white border-[#DABfff] shadow-[4px_4px_0px_0px_#DABfff]'
                    : 'bg-[#E2F0CB] text-[#4A3E3D] border-[#4A3E3D] shadow-[4px_4px_0px_0px_#4A3E3D]'
                }`}
              >
                💌 SEND AN EMAIL
              </a>
            </div>
          </div>
        )}

        {/* Retro Status Footer */}
        <div
          className={`mt-8 pt-4 border-t-2 border-dashed flex flex-col sm:flex-row justify-between items-center text-[10px] sm:text-xs font-bold gap-2 ${
            darkMode ? 'border-[#4F4670] text-[#AFA2C8]' : 'border-[#D8A7B1] text-[#88706B]'
          }`}
        >
          <span>STACK: LARAVEL / PHP / VITE / NEXT.JS</span>
          {/* <span>BUILT WITH NEXT.JS & TAILWIND</span> */}
        </div>
      </section>
    </main>
  );
}