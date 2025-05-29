import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import FileUpload from '../components/FileUpload';
import { DEFAULT_PROFILE_PIC } from '../constants';

const HomePage: React.FC = () => {
  const [homeProfilePic, setHomeProfilePic] = useState<string | null>(null);

  useEffect(() => {
    const storedPic = localStorage.getItem('profilePicture');
    if (storedPic) {
      setHomeProfilePic(storedPic);
    } else {
      setHomeProfilePic(DEFAULT_PROFILE_PIC);
    }
  }, []);

  const handleProfilePicSelect = (_file: File | null, base64: string | null) => {
    if (base64) {
      localStorage.setItem('profilePicture', base64);
      setHomeProfilePic(base64);
    } else { // If cleared or no file selected, reset to default
      localStorage.removeItem('profilePicture'); // Or set to default
      setHomeProfilePic(DEFAULT_PROFILE_PIC);
    }
    window.dispatchEvent(new CustomEvent('profilePictureChanged'));
  };

  return (
    <div className="min-h-[calc(100vh-10rem)] flex flex-col items-center justify-center text-center px-4 py-16 relative z-10">
      <div className="max-w-3xl w-full">
        <div className="mb-12 p-6 bg-slate-800/70 backdrop-blur-sm rounded-xl shadow-xl">
          <h3 className="text-2xl font-semibold text-sky-400 mb-4">Profile Picture</h3>
          <FileUpload
            onFileSelect={handleProfilePicSelect}
            currentImageUrl={homeProfilePic}
            label="Upload/Change Picture"
          />
           <p className="text-xs text-slate-400 mt-3">This picture will be shown in the header, footer, and about page.</p>
        </div>

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