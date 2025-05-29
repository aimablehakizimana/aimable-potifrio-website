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
    <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.81C10.44 7.31 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10.01 10.01 0 0 0 12 2.04Z"/>
  </svg>
);

export const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.053 1.805.242 2.228.43.524.225.984.496 1.438.95.452.453.724.913.948 1.438.19.423.377 1.058.43 2.228.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.053 1.17-.242 1.805-.43 2.228-.225.524-.496.984-.95 1.438-.453.452-.913.724-1.438.948-.423.19-1.058.377-2.228.43-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.053-1.805-.242-2.228-.43-.524-.225-.984-.496-1.438-.95-.452-.453-.724-.913-.948-1.438-.19-.423-.377-1.058-.43-2.228-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.053-1.17.242-1.805.43-2.228.225-.524.496-.984.95-1.438.453-.452.913-.724 1.438-.948.423-.19 1.058-.377 2.228-.43C8.416 2.175 8.796 2.163 12 2.163zm0 1.444c-3.116 0-3.475.012-4.697.068-1.091.05-1.665.23-2.041.388-.403.17-.733.396-1.047.71-.314.313-.54.643-.71 1.047-.157.375-.338.95-.388 2.041-.056 1.222-.068 1.58-.068 4.697s.012 3.475.068 4.697c.05 1.091.23 1.665.388 2.041.17.403.396.733.71 1.047.313.314.643.54 1.047.71.375.157.95.338 2.041.388 1.222.056 1.58.068 4.697.068s3.475-.012 4.697-.068c1.091-.05 1.665-.23 2.041-.388.403-.17.733-.396 1.047-.71.314-.313.54-.643.71-1.047.157-.375.338-.95.388-2.041.056-1.222.068-1.58.068-4.697s-.012-3.475-.068-4.697c-.05-1.091-.23-1.665-.388-2.041-.17-.403-.396-.733-.71-1.047-.313-.314-.643-.54-1.047-.71-.375-.157-.95-.338-2.041-.388C15.475 3.619 15.116 3.607 12 3.607zm0 9.231c-2.178 0-3.937-1.759-3.937-3.937s1.759-3.937 3.937-3.937 3.937 1.759 3.937 3.937-1.759 3.937-3.937 3.937zm0-6.431c-1.375 0-2.494 1.119-2.494 2.494s1.119 2.494 2.494 2.494 2.494-1.119 2.494-2.494-1.119-2.494-2.494-2.494zm6.332-3.01c-.596 0-1.079.483-1.079 1.079s.483 1.079 1.079 1.079 1.079-.483 1.079-1.079-.483-1.079-1.079-1.079z"/>
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


export const NAV_LINKS: NavLinkItem[] = [
  { name: Page.Home, path: '/' },
  { name: Page.About, path: '/about' },
  { name: Page.Skills, path: '/skills' },
  { name: Page.Projects, path: '/projects' },
  { name: Page.Contact, path: '/contact' },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { name: 'Email', url: 'mailto:hakizimanaaimable02@gmail.com', icon: <EmailIcon /> },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/hakizimana-aimable-3867ab363', icon: <LinkedInIcon /> },
  { name: 'GitHub', url: 'https://github.com/aimablehakizimana', icon: <GitHubIcon /> },
  { name: 'Facebook', url: 'https://www.facebook.com/TrixyAimable', icon: <FacebookIcon /> },
  { name: 'Instagram', url: 'https://www.instagram.com/trixy_aimable1', icon: <InstagramIcon /> },
  // { name: 'WhatsApp', url: '#', icon: <WhatsAppIcon /> }, // Add actual WhatsAppIcon if needed
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
    repoUrl: 'https://github.com/Aimable-HAKIZIMANA/My-Potifolio', // Note: This specific repo link might differ from the general profile
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

export const DEFAULT_PROFILE_PIC = 'https://picsum.photos/seed/profile/200/200';