import React from 'react';
import { SOCIAL_LINKS, LocationIcon } from '../constants';

const ContactMePage: React.FC = () => {
  const emailLink = SOCIAL_LINKS.find(link => link.name === 'Email');
  const linkedInLink = SOCIAL_LINKS.find(link => link.name === 'LinkedIn');
  const githubLink = SOCIAL_LINKS.find(link => link.name === 'GitHub');
  const facebookLink = SOCIAL_LINKS.find(link => link.name === 'Facebook');

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
      <h2 className="text-4xl font-bold text-center text-cyan-400 mb-12">Get In Touch</h2>
      <div className="max-w-3xl mx-auto bg-slate-800 p-8 md:p-12 rounded-xl shadow-2xl">
        <p className="text-lg text-slate-300 text-center mb-8">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out!
        </p>
        
        <div className="space-y-6">
          {emailLink && (
            <div className="flex items-center p-4 bg-slate-700/50 rounded-lg">
              <div className="text-cyan-400 mr-4 shrink-0">{emailLink.icon}</div>
              <div>
                <h4 className="font-semibold text-slate-200">Email</h4>
                <a href={emailLink.url} className="text-sky-400 hover:text-sky-300 break-all">
                  {emailLink.url.replace('mailto:', '')}
                </a>
              </div>
            </div>
          )}

          {linkedInLink && (
             <div className="flex items-center p-4 bg-slate-700/50 rounded-lg">
                <div className="text-cyan-400 mr-4 shrink-0">{linkedInLink.icon}</div>
                <div>
                    <h4 className="font-semibold text-slate-200">LinkedIn</h4>
                    <a href={linkedInLink.url} target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:text-sky-300">
                        View Profile
                    </a>
                </div>
            </div>
          )}

          {githubLink && (
             <div className="flex items-center p-4 bg-slate-700/50 rounded-lg">
                <div className="text-cyan-400 mr-4 shrink-0">{githubLink.icon}</div>
                <div>
                    <h4 className="font-semibold text-slate-200">GitHub</h4>
                    <a href={githubLink.url} target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:text-sky-300">
                        View Profile (aimablehakizimana)
                    </a>
                </div>
            </div>
          )}

          {facebookLink && (
             <div className="flex items-center p-4 bg-slate-700/50 rounded-lg">
                <div className="text-cyan-400 mr-4 shrink-0">{facebookLink.icon}</div>
                <div>
                    <h4 className="font-semibold text-slate-200">Facebook</h4>
                    <a href={facebookLink.url} target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:text-sky-300">
                        Find me (Trixy Aimable)
                    </a>
                </div>
            </div>
          )}

          <div className="flex items-start p-4 bg-slate-700/50 rounded-lg">
              <div className="text-cyan-400 mr-4 mt-1 shrink-0"><LocationIcon /></div>
              <div>
                  <h4 className="font-semibold text-slate-200">Location</h4>
                  <p className="text-slate-300">
                    Karizinge Village, Kabuye Cell, Gashora Sector, <br/>
                    Bugesera District, Eastern Province, Rwanda
                  </p>
              </div>
          </div>
        </div>

        <p className="text-center text-slate-400 mt-10">
          Looking forward to hearing from you!
        </p>
      </div>
    </div>
  );
};

export default ContactMePage;