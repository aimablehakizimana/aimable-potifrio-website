import React from 'react';
import { SOCIAL_LINKS, LocationIcon } from '../constants';

const ContactMePage: React.FC = () => {
  const contactMethods = [
    { name: 'Email', label: 'Email', transformUrl: (url: string) => url.replace('mailto:', '') },
    { name: 'Phone', label: 'Phone', transformUrl: (url: string) => url.replace('tel:', '') },
    { name: 'WhatsApp', label: 'WhatsApp', transformUrl: (url: string) => url.replace('https://wa.me/', '+') },
    { name: 'LinkedIn', label: 'LinkedIn Profile', transformUrl: () => 'View Profile' },
    { name: 'GitHub', label: 'GitHub Profile', transformUrl: () => 'View Profile' },
    { name: 'Instagram', label: 'Instagram Profile', transformUrl: () => 'View Profile' },
    { name: 'Facebook', label: 'Facebook Profile', transformUrl: () => 'View Profile' },
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
      <h2 className="text-4xl font-bold text-center text-cyan-400 mb-12">Get In Touch</h2>
      <div className="max-w-3xl mx-auto bg-slate-800 p-8 md:p-12 rounded-xl shadow-2xl">
        <p className="text-lg text-slate-300 text-center mb-8">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out!
        </p>

        <div className="space-y-6">
          {contactMethods.map(method => {
            const linkInfo = SOCIAL_LINKS.find(link => link.name === method.name);
            if (!linkInfo) return null;

            return (
              <div key={method.name} className="flex items-center p-4 bg-slate-700/50 rounded-lg">
                <div className="text-cyan-400 mr-4 shrink-0">{linkInfo.icon}</div>
                <div>
                  <h4 className="font-semibold text-slate-200">{method.name}</h4>
                  <a
                    href={linkInfo.url}
                    className="text-sky-400 hover:text-sky-300 break-all"
                    target={linkInfo.url.startsWith('http') ? '_blank' : undefined}
                    rel={linkInfo.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    {method.transformUrl(linkInfo.url)}
                  </a>
                  {method.name === 'Facebook' && <span className="text-xs text-slate-500 block">(TRIXY Aimable)</span>}
                </div>
              </div>
            );
          })}

          <div className="flex items-start p-4 bg-slate-700/50 rounded-lg">
            <div className="text-cyan-400 mr-4 mt-1 shrink-0"><LocationIcon /></div>
            <div>
              <h4 className="font-semibold text-slate-200">Location</h4>
              <p className="text-slate-300">
                Karizinge Village, Kabuye Cell, Gashora Sector, <br />
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
