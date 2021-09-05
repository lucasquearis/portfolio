import React from 'react';
import './skills.css';
import Separator from '../../common/separator';
import SkillsData from '../../data/skills';
import SkillCard from './skill-card';

const Skills = () => {
  const data = SkillsData;
  return (
    <div className="skills">
      <Separator />
      <h1 className="section-title">
        Skills
      </h1>
      <div className="skills-container">
        {data.map((language) => (
          <div key={ language.id } className="skills-section">
            <h3 className="skills-section-title">{language.type}</h3>
            <div className="skills-list">
              {language.list.map((skill) => (
                <SkillCard
                  key={ skill.id }
                  skill={ skill }
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
