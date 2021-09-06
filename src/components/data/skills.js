import react from '../../images/languages/react-original.svg';
import redux from '../../images/languages/redux.svg';
import html from '../../images/languages/html5-plain.svg';
import css from '../../images/languages/css3-plain.svg';
import javaScript from '../../images/languages/javascript-plain.svg';
import mysql from '../../images/languages/mysql-plain.svg';
import mongoDB from '../../images/languages/mongodb-plain.svg';
import nodeJS from '../../images/languages/nodejs-plain.svg';
import jest from '../../images/languages/jest-plain.svg';

const SkillsData = [
  {
    id: 1,
    type: 'Frontend',
    list: [
      {
        id: 1,
        name: 'ReactJS',
        icon: react,
      },
      {
        id: 2,
        name: 'Jest',
        icon: jest,
      },
      {
        id: 3,
        name: 'Redux',
        icon: redux,
      },
      {
        id: 4,
        name: 'HTML',
        icon: html,
      },
      {
        id: 5,
        name: 'CSS3',
        icon: css,
      },
      {
        id: 6,
        name: 'JavaScript',
        icon: javaScript,
      },
    ],
  },
  {
    type: 'Backend',
    id: 2,
    list: [
      {
        id: 1,
        name: 'MySQL',
        icon: mysql,
      },
      {
        id: 2,
        name: 'MongoDB',
        icon: mongoDB,
      },
      {
        id: 3,
        name: 'NodeJS',
        icon: nodeJS,
      },
    ],
  },
];

export default SkillsData;
