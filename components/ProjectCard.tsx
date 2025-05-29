
import React from 'react';
import { ProjectType } from '../types';
import { GitHubIcon, TrashIcon } from '../constants'; // Assuming ExternalLinkIcon would be similar

interface ExternalLinkIconProps {
  className?: string;
}

const ExternalLinkIcon: React.FC<ExternalLinkIconProps> = ({ className = "w-5 h-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
  </svg>
);


interface ProjectCardProps {
  project: ProjectType;
  onDelete?: (projectId: string) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onDelete }) => {
  return (
    <div className="bg-slate-800 rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300 flex flex-col">
      <img 
        src={project.imageUrl || 'https://picsum.photos/400/300?grayscale'} 
        alt={project.title} 
        className="w-full h-48 object-cover" 
      />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-cyan-400 mb-2">{project.title}</h3>
        <p className="text-slate-400 text-sm mb-4 flex-grow">{project.description}</p>
        
        <div className="mb-4">
          <h4 className="text-xs font-semibold text-slate-500 uppercase mb-1">Technologies:</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span key={tech} className="px-2 py-1 bg-slate-700 text-cyan-300 text-xs rounded-full">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-auto flex items-center justify-between pt-4 border-t border-slate-700">
          <div className="flex space-x-3">
            {project.projectUrl && project.projectUrl !== '#' && (
              <a
                href={project.projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-cyan-400 transition-colors flex items-center text-sm"
                aria-label={`View live project: ${project.title}`}
              >
                <ExternalLinkIcon className="w-4 h-4 mr-1" /> Live
              </a>
            )}
            {project.repoUrl && project.repoUrl !== '#' && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-cyan-400 transition-colors flex items-center text-sm"
                aria-label={`View source code for ${project.title} on GitHub`}
              >
                <GitHubIcon /> <span className="ml-1">Source</span>
              </a>
            )}
          </div>
          {onDelete && (
            <button 
              onClick={() => onDelete(project.id)}
              className="text-red-500 hover:text-red-400 transition-colors p-1 rounded-full hover:bg-red-500/10"
              aria-label={`Delete project: ${project.title}`}
            >
              <TrashIcon />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
