
import React from 'react';

export enum Page {
  Home = 'Home',
  About = 'About Me',
  Skills = 'Skills',
  Projects = 'My Projects',
  Contact = 'Contact Me',
}

export interface NavLinkItem {
  name: Page;
  path: string;
}

export interface SkillType {
  id: string;
  name: string;
  level: number; // 0-100 for percentage
  category: 'Frontend' | 'Backend' | 'Tools' | 'Languages' | 'Other';
}

export interface ProjectType {
  id: string;
  title: string;
  description: string;
  imageUrl?: string; // base64 string
  projectUrl?: string;
  repoUrl?: string;
  technologies: string[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
}

export interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  animationDuration: number;
  animationDelay: number;
}
