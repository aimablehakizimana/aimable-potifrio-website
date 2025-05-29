
import React, { useState, useEffect } from 'react';
import ProjectCard from '../components/ProjectCard';
import Modal from '../components/Modal';
import FileUpload from '../components/FileUpload';
import { ProjectType } from '../types';
import { INITIAL_PROJECTS, PlusIcon } from '../constants';

const ProjectsPage: React.FC = () => {
  const [projects, setProjects] = useState<ProjectType[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newProject, setNewProject] = useState<Omit<ProjectType, 'id'>>({
    title: '',
    description: '',
    imageUrl: '',
    projectUrl: '',
    repoUrl: '',
    technologies: [],
  });
  const [projectImageFile, setProjectImageFile] = useState<File | null>(null);
  const [projectImageBase64, setProjectImageBase64] = useState<string | null>(null);
  const [techInput, setTechInput] = useState('');


  useEffect(() => {
    const storedProjects = localStorage.getItem('portfolioProjects');
    if (storedProjects) {
      setProjects(JSON.parse(storedProjects));
    } else {
      setProjects(INITIAL_PROJECTS);
      localStorage.setItem('portfolioProjects', JSON.stringify(INITIAL_PROJECTS));
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewProject({ ...newProject, [name]: value });
  };

  const handleTechInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTechInput(e.target.value);
  };

  const addTechnology = () => {
    if (techInput.trim() && !newProject.technologies.includes(techInput.trim())) {
      setNewProject(prev => ({ ...prev, technologies: [...prev.technologies, techInput.trim()] }));
      setTechInput('');
    }
  };
  
  const removeTechnology = (techToRemove: string) => {
    setNewProject(prev => ({
      ...prev,
      technologies: prev.technologies.filter(tech => tech !== techToRemove)
    }));
  };

  const handleImageUpload = (_file: File | null, base64: string | null) => {
    setProjectImageFile(_file);
    setProjectImageBase64(base64);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const projectToAdd: ProjectType = {
      ...newProject,
      id: `proj-${Date.now()}`,
      imageUrl: projectImageBase64 || undefined,
    };
    const updatedProjects = [projectToAdd, ...projects];
    setProjects(updatedProjects);
    localStorage.setItem('portfolioProjects', JSON.stringify(updatedProjects));
    setIsModalOpen(false);
    // Reset form
    setNewProject({ title: '', description: '', imageUrl: '', projectUrl: '', repoUrl: '', technologies: [] });
    setProjectImageFile(null);
    setProjectImageBase64(null);
    setTechInput('');
  };

  const handleDeleteProject = (projectId: string) => {
    if (window.confirm('Are you sure you want to delete this project?')) {
      const updatedProjects = projects.filter(p => p.id !== projectId);
      setProjects(updatedProjects);
      localStorage.setItem('portfolioProjects', JSON.stringify(updatedProjects));
    }
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
      <div className="flex justify-between items-center mb-12">
        <h2 className="text-4xl font-bold text-cyan-400">My Projects</h2>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-colors flex items-center"
        >
          <PlusIcon /> <span className="ml-2">Add Project</span>
        </button>
      </div>

      {projects.length === 0 ? (
         <p className="text-center text-slate-400 text-xl">No projects added yet. Click "Add Project" to get started!</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} onDelete={handleDeleteProject} />
          ))}
        </div>
      )}

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Add New Project">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-slate-300 mb-1">Title</label>
            <input type="text" name="title" id="title" value={newProject.title} onChange={handleInputChange} required className="w-full bg-slate-700 border-slate-600 text-slate-200 rounded-md p-2 focus:ring-cyan-500 focus:border-cyan-500" />
          </div>
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-slate-300 mb-1">Description</label>
            <textarea name="description" id="description" value={newProject.description} onChange={handleInputChange} rows={3} required className="w-full bg-slate-700 border-slate-600 text-slate-200 rounded-md p-2 focus:ring-cyan-500 focus:border-cyan-500"></textarea>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1">Project Image</label>
            <FileUpload onFileSelect={handleImageUpload} currentImageUrl={projectImageBase64} label="Upload Project Image"/>
          </div>
          <div>
            <label htmlFor="projectUrl" className="block text-sm font-medium text-slate-300 mb-1">Project URL (Live Demo)</label>
            <input type="url" name="projectUrl" id="projectUrl" value={newProject.projectUrl} onChange={handleInputChange} className="w-full bg-slate-700 border-slate-600 text-slate-200 rounded-md p-2 focus:ring-cyan-500 focus:border-cyan-500" placeholder="https://example.com" />
          </div>
          <div>
            <label htmlFor="repoUrl" className="block text-sm font-medium text-slate-300 mb-1">Repository URL (GitHub)</label>
            <input type="url" name="repoUrl" id="repoUrl" value={newProject.repoUrl} onChange={handleInputChange} className="w-full bg-slate-700 border-slate-600 text-slate-200 rounded-md p-2 focus:ring-cyan-500 focus:border-cyan-500" placeholder="https://github.com/user/repo" />
          </div>
          <div>
            <label htmlFor="technologies" className="block text-sm font-medium text-slate-300 mb-1">Technologies</label>
            <div className="flex items-center gap-2">
              <input 
                type="text" 
                id="technologies"
                value={techInput} 
                onChange={handleTechInputChange} 
                onKeyDown={(e) => { if(e.key === 'Enter') { e.preventDefault(); addTechnology();}}}
                className="w-full bg-slate-700 border-slate-600 text-slate-200 rounded-md p-2 focus:ring-cyan-500 focus:border-cyan-500"
                placeholder="e.g., React, Node.js"
              />
              <button type="button" onClick={addTechnology} className="px-3 py-2 bg-sky-600 hover:bg-sky-700 text-white text-sm rounded-md">Add</button>
            </div>
            <div className="mt-2 flex flex-wrap gap-2">
              {newProject.technologies.map(tech => (
                <span key={tech} className="px-2 py-1 bg-slate-600 text-cyan-200 text-xs rounded-full flex items-center">
                  {tech}
                  <button type="button" onClick={() => removeTechnology(tech)} className="ml-2 text-red-400 hover:text-red-300">×</button>
                </span>
              ))}
            </div>
          </div>
          <div className="flex justify-end space-x-3">
            <button type="button" onClick={() => setIsModalOpen(false)} className="px-4 py-2 text-sm font-medium text-slate-300 bg-slate-600 hover:bg-slate-500 rounded-md transition-colors">Cancel</button>
            <button type="submit" className="px-4 py-2 text-sm font-medium text-white bg-cyan-600 hover:bg-cyan-700 rounded-md transition-colors">Add Project</button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default ProjectsPage;
