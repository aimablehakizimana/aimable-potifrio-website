import React from 'react';
import { Link } from 'react-router-dom';
// FileUpload and DEFAULT_PROFILE_PIC related imports for profile picture are removed
// as the profile picture is now constant.

const HomePage: React.FC = () => {
  // State and handlers for profile picture upload have been removed.

  return (
    <div className="min-h-[calc(100vh-10rem)] flex flex-col items-center justify-center text-center px-4 py-16 relative z-10">
      <div className="max-w-3xl w-full">
        {/* Profile picture upload section has been removed */}
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 mt-12 md:mt-0"> {/* Added margin top for spacing */}
          <span className="block text-slate-100">Hello, I'm</span>
          <span className="block text-cyan-400 mt-2">H. Aimable</span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-300 mb-10 leading-relaxed">
          A passionate Full-Stack Developer specializing in creating efficient, scalable, and user-friendly web applications that solve real-world problems.
        </p>
        <div className="space-x-4">
          <Link
            to="/projects"
            className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 text-lg"
          >
            View My Projects
          </Link>
          <Link
            to="/about"
            className="bg-slate-700 hover:bg-slate-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 text-lg"
          >
            About Me
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
