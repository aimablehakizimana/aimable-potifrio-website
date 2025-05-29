import React from 'react';
import { Page, NavLinkItem, SocialLink, SkillType, ProjectType } from './types';

// SVG Icons (Heroicons & Custom)
export const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
  </svg>
);

export const XIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

export const EmailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
  </svg>
);

export const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.25 6.5 1.75 1.75 0 016.5 8.25zM19 19h-3v-4.75c0-1.4-.975-2.5-2.25-2.5S11.5 13.35 11.5 14.75V19h-3v-9h2.9v1.35C12.4 10.2 13.875 9 15.75 9 18.075 9 19 10.7 19 13.25z"></path>
  </svg>
);

export const GitHubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.419 2.865 8.166 6.839 9.49.5.092.682-.217.682-.483 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.455-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.004.07 1.532 1.03 1.532 1.03.891 1.53 2.341 1.088 2.91.832.091-.646.349-1.088.635-1.338-2.22-.253-4.555-1.11-4.555-4.951 0-1.093.39-1.988 1.03-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.748-1.026 2.748-1.026.546 1.378.201 2.397.099 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.338 4.695-4.566 4.942.359.309.678.922.678 1.856 0 1.338-.012 2.419-.012 2.746 0 .268.18.578.688.48A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z"></path>
  </svg>
);

export const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06c0 5.52 4.5 10.02 10 10.02s10-4.5 10-10.02c0-5.53-4.5-10.02-10-10.02zm0 18.02c-4.41 0-8-3.59-8-8.02s3.59-8.02 8-8.02 8 3.59 8 8.02-3.59 8.02-8 8.02z"/>
    <path d="M13.54 12.06h1.46l.22-1.75h-1.68v-1.11c0-.49.17-.83.85-.83h.91V6.61c-.16 0-.7-.06-1.33-.06-1.31 0-2.2.79-2.2 2.27v1.29h-1.48v1.75h1.48v4.19h1.78v-4.19z"/>
  </svg>
);

export const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M12 2c2.72 0 3.05.01 4.12.06 1.06.05 1.79.24 2.42.51.65.27 1.12.63 1.62 1.12.5.5.85.97 1.12 1.62.27.63.46 1.36.51 2.42.05 1.07.06 1.4.06 4.12s-.01 3.05-.06 4.12c-.05 1.06-.24 1.79-.51 2.42-.27.65-.63 1.12-1.12 1.62-.5.5-.97.85-1.62 1.12-.63.27-1.36.46-2.42.51-1.07.05-1.4.06-4.12.06s-3.05-.01-4.12-.06c-1.06-.05-1.79-.24-2.42-.51-.65-.27-1.12-.63-1.62-1.12-.5-.5-.85-.97-1.12-1.62-.27-.63-.46-1.36-.51-2.42-.05-1.07-.06-1.4-.06-4.12s.01-3.05.06-4.12c.05-1.06.24-1.79.51-2.42.27-.65.63-1.12 1.12-1.62.5-.5.97-.85 1.62-1.12.63-.27 1.36-.46 2.42-.51C8.95 2.01 9.28 2 12 2zm0 1.8c-2.67 0-2.98.01-4.04.06-1.03.05-1.6.22-2.06.4-.48.19-.82.42-1.16.76s-.57.68-.76 1.16c-.18.46-.35 1.03-.4 2.06-.05 1.06-.06 1.37-.06 4.04s.01 2.98.06 4.04c.05 1.03.22 1.6.4 2.06.19.48.42.82.76 1.16s.68.57 1.16.76c.46.18 1.03.35 2.06.4 1.06.05 1.37.06 4.04.06s2.98-.01 4.04-.06c1.03-.05 1.6-.22 2.06-.4.48-.19.82-.42 1.16-.76s.57-.68.76-1.16c.18-.46.35-1.03.4-2.06.05-1.06.06-1.37.06-4.04s-.01-2.98-.06-4.04c-.05-1.03-.22-1.6-.4-2.06-.19-.48-.42-.82-.76-1.16s-.68-.57-1.16-.76c-.46-.18-1.03-.35-2.06-.4C14.98 3.81 14.67 3.8 12 3.8zm0 8.91c-2.44 0-4.41-1.97-4.41-4.41S9.56 7.5 12 7.5s4.41 1.97 4.41 4.41-1.97 4.41-4.41 4.41zm0-7.02c-1.44 0-2.61 1.17-2.61 2.61s1.17 2.61 2.61 2.61 2.61-1.17 2.61-2.61-1.17-2.61-2.61-2.61zm6.36-3.28c-.63 0-1.14.51-1.14 1.14s.51 1.14 1.14 1.14 1.14-.51 1.14-1.14-.51-1.14-1.14-1.14z"/>
  </svg>
);

export const WhatsAppIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.77.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.77 3.06 1.18 4.79 1.18h.01c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm0 18.09c-1.51 0-2.96-.41-4.23-1.16l-.3-.18-3.12.82.83-3.04-.2-.32A8.08 8.08 0 014.05 11.9c0-4.47 3.64-8.11 8.11-8.11s8.11 3.64 8.11 8.11-3.64 8.12-8.11 8.12zm4.52-6.14c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72s-.02-.38.11-.5c.11-.11.25-.29.37-.43.13-.14.17-.25.25-.41.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.42h-.48c-.17 0-.43.06-.66.31-.22.25-.86.84-.86 2.05s.88 2.37 1 2.54c.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18s-.22-.18-.48-.3z"/>
  </svg>
);

export const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
  </svg>
);


export const LocationIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 inline-block mr-2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>
);

export const PlusIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
  </svg>
);

export const TrashIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12.56 0c1.153 0 2.24.032 3.22.096M15 5.79V4.5A2.25 2.25 0 0012.75 2.25h-1.5A2.25 2.25 0 009 4.5v1.32a48.095 48.095 0 00-2.948 2.685M15 5.79c-.052.162-.1.324-.15.485m-.346 9m-4.788 0V6.235M18.82 5.79A48.095 48.095 0 0115 2.685m-9.42 0a48.095 48.095 0 013.478-.397M6.235 15.75c.092.232.19.456.292.67M6.235 15.75L4.772 5.79m-.346 9A48.095 48.095 0 006 2.685m0 0c.203.18.415.353.635.522m-.635-.522c-.203-.18-.415-.353-.635-.522m0 0L3.32 5.17A48.095 48.095 0 006 2.685" />
  </svg>
);

export const STATIC_PROFILE_PIC_URL = '/images/profile.png'; // Assuming image is in public/images/profile.png


export const NAV_LINKS: NavLinkItem[] = [
  { name: Page.Home, path: '/' },
  { name: Page.About, path: '/about' },
  { name: Page.Skills, path: '/skills' },
  { name: Page.Projects, path: '/projects' },
  { name: Page.Contact, path: '/contact' },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { name: 'Email', url: 'mailto:hakizimanaaimable02@gmail.com', icon: <EmailIcon /> },
  { name: 'Phone', url: 'tel:+250794148686', icon: <PhoneIcon /> }, // Rwanda country code +250
  { name: 'WhatsApp', url: 'https://wa.me/250794148686', icon: <WhatsAppIcon /> }, // Rwanda country code +250
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/hakizimana-aimable-a20072252/', icon: <LinkedInIcon /> },
  { name: 'GitHub', url: 'https://github.com/Aimable-HAKIZIMANA', icon: <GitHubIcon /> },
  { name: 'Instagram', url: 'https://www.instagram.com/trixy_aimable1', icon: <InstagramIcon /> },
  // IMPORTANT: Update the URL below with your actual Facebook profile link
  { name: 'Facebook', url: 'https://www.facebook.com/TRIXY.Aimable.Profile', icon: <FacebookIcon /> },
];

export const ABOUT_ME_TEXT_PARAGRAPHS: string[] = [
  "Hello, I'm Aimable!",
  "My name is HAKIZIMANA Aimable, and I hail from the beautiful country of Rwanda, specifically from the Eastern Province, Bugesera District, Gashora Sector, Kabuye Cell, in Karizinge Village. I am 20 years old.",
  "I am blessed with wonderful parents: my father, Sindikubwabo Donat, and my mother, Uwamariya Chantal.",
  "As a passionate full-stack developer, I specialize in both front-end and back-end technologies. I am currently a Level 5 Student, continuously expanding my knowledge and skills in the ever-evolving world of software development. I thrive on building efficient, scalable, and user-friendly applications that solve real-world problems.",
  "My journey in tech is driven by a curiosity to learn and a desire to innovate. I'm excited to contribute to impactful projects and collaborate with creative minds."
];

export const INITIAL_SKILLS: SkillType[] = [
  { id: '1', name: 'HTML', level: 90, category: 'Frontend' },
  { id: '2', name: 'CSS & Tailwind', level: 85, category: 'Frontend' },
  { id: '3', name: 'JavaScript', level: 80, category: 'Frontend' },
  { id: '4', name: 'TypeScript', level: 75, category: 'Frontend' },
  { id: '5', name: 'React', level: 80, category: 'Frontend' },
  { id: '6', name: 'Next.js', level: 70, category: 'Frontend' },
  { id: '7', name: 'Node.js', level: 70, category: 'Backend' },
  { id: '8', name: 'Express.js', level: 65, category: 'Backend' },
  { id: '9', name: 'Python', level: 75, category: 'Languages' },
  { id: '10', name: 'Django', level: 60, category: 'Backend' },
  { id: '11', name: 'Java', level: 65, category: 'Languages' },
  { id: '12', name: 'SQL (PostgreSQL, MySQL)', level: 70, category: 'Backend' },
  { id: '13', name: 'MongoDB', level: 60, category: 'Backend' },
  { id: '14', name: 'Git & GitHub', level: 85, category: 'Tools' },
  { id: '15', name: 'Docker', level: 50, category: 'Tools' },
  { id: '16', name: 'Figma', level: 60, category: 'Tools' },
];

export const INITIAL_PROJECTS: ProjectType[] = [
  {
    id: 'proj1',
    title: 'Portfolio Website',
    description: 'This very portfolio website, built with React, TypeScript, and Tailwind CSS. Showcases my skills and projects.',
    imageUrl: 'https://picsum.photos/seed/portfolio/400/300',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    projectUrl: '#',
    repoUrl: 'https://github.com/Aimable-HAKIZIMANA/My-Potifolio',
  },
  {
    id: 'proj2',
    title: 'E-commerce Platform',
    description: 'A concept e-commerce platform with features like product listing, cart, and user authentication.',
    imageUrl: 'https://picsum.photos/seed/ecommerce/400/300',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
    projectUrl: '#',
    repoUrl: '#',
  },
  {
    id: 'proj3',
    title: 'Task Management App',
    description: 'A simple and intuitive task management application to help users organize their daily tasks.',
    imageUrl: 'https://picsum.photos/seed/taskapp/400/300',
    technologies: ['Python', 'Django', 'HTML', 'CSS', 'JavaScript'],
    projectUrl: '#',
    repoUrl: '#',
  }
];
