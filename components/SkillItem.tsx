
import React from 'react';
import { SkillType } from '../types';

interface SkillItemProps {
  skill: SkillType;
}

const SkillItem: React.FC<SkillItemProps> = ({ skill }) => {
  return (
    <div className="mb-4 p-4 bg-slate-800 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-1">
        <h4 className="text-md font-medium text-slate-200">{skill.name}</h4>
        <span className="text-sm text-cyan-400">{skill.level}%</span>
      </div>
      <div className="w-full bg-slate-700 rounded-full h-2.5">
        <div
          className="bg-gradient-to-r from-sky-500 to-cyan-500 h-2.5 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${skill.level}%` }}
        ></div>
      </div>
    </div>
  );
};

export default SkillItem;
