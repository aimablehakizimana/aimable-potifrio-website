import React from 'react';
import SkillItem from '../components/SkillItem';
import { INITIAL_SKILLS } from '../constants';
import { SkillType } from '../types';

const SkillsPage: React.FC = () => {
  const skills = INITIAL_SKILLS; // In a real app, this might come from state or props

  const categorizedSkills: Record<string, SkillType[]> = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, SkillType[]>);

  const categoryOrder: (keyof typeof categorizedSkills)[] = ['Frontend', 'Backend', 'Languages', 'Tools', 'Other'];


  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
      <h2 className="text-4xl font-bold text-center text-cyan-400 mb-6">My Skills</h2>
      <p className="text-lg text-slate-300 text-center max-w-2xl mx-auto mb-12">
        As a dedicated software developer, I am continuously honing my abilities across the full stack. My passion lies in leveraging technology to build innovative and practical solutions. Below is a snapshot of the key technologies and tools I work with.
      </p>
      <div className="max-w-4xl mx-auto space-y-10">
        {categoryOrder.map(category => categorizedSkills[category] && (
          <div key={category} className="bg-slate-800/70 backdrop-blur-sm p-6 rounded-xl shadow-xl">
            <h3 className="text-2xl font-semibold text-sky-400 mb-6 border-b-2 border-sky-500 pb-2">{category}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {categorizedSkills[category].map((skill) => (
                <SkillItem key={skill.id} skill={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsPage;