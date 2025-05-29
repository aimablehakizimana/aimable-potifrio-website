
import React from 'react';
import { ABOUT_ME_TEXT_PARAGRAPHS, STATIC_PROFILE_PIC_URL } from '../constants';

const AboutMePage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
      <h2 className="text-4xl font-bold text-center text-cyan-400 mb-12">About Me</h2>
      <div className="max-w-4xl mx-auto bg-slate-800 p-8 md:p-12 rounded-xl shadow-2xl flex flex-col items-center">
        <img
          src={STATIC_PROFILE_PIC_URL}
          alt="H. Aimable"
          className="w-32 h-32 rounded-full mb-8 border-4 border-cyan-600 shadow-lg object-cover"
        />
        <div className="text-slate-300 space-y-4 leading-relaxed text-center md:text-left">
          {ABOUT_ME_TEXT_PARAGRAPHS.map((paragraph, index) => (
            <p key={index} className={index === 0 ? "text-2xl font-semibold text-cyan-300" : "text-md"}>
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutMePage;
