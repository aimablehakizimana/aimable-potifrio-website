
import React from 'react';
import { Link } from 'react-router-dom';
import { STATIC_PROFILE_PIC_URL } from '../constants';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-[calc(100vh-10rem)] flex items-center justify-center text-center px-4 py-16 relative z-10">
      <div className="max-w-3xl flex flex-col items-center">
        <img
          src={STATIC_PROFILE_PIC_URL}
          alt="H. Aimable Profile"
          className="w-36 h-36 md:w-48 md:h-48 rounded-full mb-8 border-4 border-cyan-500 shadow-xl object-cover"
        />
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
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
