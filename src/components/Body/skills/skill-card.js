import React from 'react';
import PropTypes from 'prop-types';
import './skill-card.css';

const SkillCard = ({ skill }) => (
  <div className="skill-card">
    <div className="skill-icon">
      <img className="image-icon" src={ skill.icon } alt={ skill.name } />
    </div>
    <h4 className="skill-name">
      { skill.name }
    </h4>
  </div>
);

SkillCard.propTypes = {
  skill: PropTypes.object,
}.isRequired;

export default SkillCard;
