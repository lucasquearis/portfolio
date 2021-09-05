import React from 'react';
import './project.css';
import ProjectData from '../../data/projects';
import ProjectCard from './ProjectCard';
import Separator from '../../common/separator';

const Projects = () => {
  const data = ProjectData;
  return (
    <div className="projects">
      <Separator />
      <h1 className="section-title">Projects</h1>
      <div>
        {data.map((project) => <ProjectCard key={ project.id } project={ project } />)}
      </div>
    </div>
  );
};

export default Projects;
