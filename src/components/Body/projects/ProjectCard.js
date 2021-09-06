import React from 'react';
import PropTypes from 'prop-types';
import './project-card.css';
import linkImg from '../../../images/globe.png';
import github from '../../../images/github.png';

const ProjectCard = ({ project }) => {
  const renderVideo = (
    <video muted className="project-media" controls>
      <source src={ project.video } type={ project.type } />
      <track default kind="captions" srcLang="en" />
      Your browser does not support the video tag.
    </video>
  );

  const renderImage = (
    <img className="project-media" src={ project.image } alt={ project.title } />
  );
  return (
    <div className="project-card">
      <div className="project-info">
        <h3 className="project-title">{project.title}</h3>
        <div className="project-links">
          {project.demo && (
            <a className="project-link" href={ project.demo }>
              <div className="link-button">
                <img className="demo-icon" src={ linkImg } alt={ project.title } />
                Demo
              </div>
            </a>
          )}
          {project.github && (
            <a className="project-link" href={ project.github }>
              <div className="link-button">
                <img className="github-icon" src={ github } alt={ project.title } />
                Github
              </div>
            </a>
          )}
        </div>
        <p>{project.about}</p>
        <div className="project-tags">
          {project.tags.map((tag, index) => (
            <h3 className="tag" key={ index }>{tag}</h3>
          ))}
        </div>
      </div>
      {project.video ? renderVideo : renderImage }
    </div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.object,
}.isRequired;

export default ProjectCard;
