/* eslint-disable max-len */
import pixelArts from '../../media/pixelArts.webm';
import appReceitas from '../../media/appReceitas.mp4';
import wallet from '../../media/wallet.png';
import starWars from '../../media/star-wars-logo.png';
import freeToPlayGames from '../../media/free-to-play-games.png';

const ProjectData = [
  {
    id: 1,
    title: 'Pixel Arts',
    about: 'One of my first projects and one of my favorites, you basically select a color from the color palette, and paint the pixels. ',
    tags: ['HTML', 'CSS', 'JavaScript Vanilla'],
    demo: 'https://lucasquearis.github.io/pixelarts/',
    github: 'https://github.com/lucasquearis/project-pixel-art',
    type: 'video/webm',
    video: pixelArts,
  },
  {
    id: 2,
    title: 'Recipe App',
    about: 'An application with recipes from different places in the world, different drinks, ingredients, spices, all in one place. NOTE: use fictitious email and password',
    tags: ['ReactJS', 'ContextAPI', 'Hooks', 'CSS', 'localStorage', 'API'],
    demo: 'https://lucasquearis.github.io/app-receitas/',
    github: 'https://github.com/lucasquearis/project-recipe-app',
    type: 'video/mp4',
    video: appReceitas,
  },
  {
    id: 3,
    title: 'Wallet',
    about: 'A currency conversion site using an API for real-time currency quote conversion. NOTE: use fictitious email and password',
    tags: ['ReactJS', 'Redux', 'CSS', 'API'],
    demo: 'https://lucasquearis.github.io/wallet/',
    github: 'https://github.com/lucasquearis/project-trybe-wallet',
    type: 'png',
    image: wallet,
  },
  {
    id: 4,
    title: 'Star Wars',
    about: 'This project was quite challenging, we used a library of Star Wars planets, I used cascading filters to filter the planets, I challenged myself and managed to make it responsive.',
    tags: ['ReactJS', 'ContextAPI', 'CSS', 'API'],
    demo: 'https://lucasquearis.github.io/star-wars-project/',
    github: 'https://github.com/lucasquearis/project-starwars',
    type: 'png',
    image: starWars,
  },
  {
    id: 5,
    title: 'Free to play Games',
    about: 'An application that offers you a variety of free games. Personal project made to reinforce and remember the front-end contents.',
    tags: ['ReactJS', 'ContextAPI', 'CSS', 'API'],
    demo: 'https://free-to-play-project.vercel.app/',
    github: 'https://github.com/lucasquearis/free-to-play-project',
    type: 'png',
    image: freeToPlayGames,
  },
];

export default ProjectData;
