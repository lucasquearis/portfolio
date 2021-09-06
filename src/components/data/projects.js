/* eslint-disable max-len */
import pixelArts from '../../media/pixelArts.webm';
import appReceitas from '../../media/appReceitas.mp4';
import wallet from '../../media/wallet.png';

const ProjectData = [
  {
    id: 1,
    title: 'Pixel Arts',
    about: 'One of my first projects and one of my favorites, you basically select a color from the color palette, and paint the pixels. ',
    tags: ['HTML', 'CSS', 'JavaScript Vanilla'],
    demo: 'https://lucasquearis.github.io/pixelarts/',
    github: 'https://github.com/tryber/sd-012-project-pixels-art/pull/105',
    type: 'video/webm',
    video: pixelArts,
  },
  {
    id: 2,
    title: 'Recipe App',
    about: 'An application with recipes from different places in the world, different drinks, ingredients, spices, all in one place.',
    tags: ['ReactJS', 'ContextAPI', 'Hooks', 'CSS', 'localStorage', 'API'],
    demo: 'https://lucasquearis.github.io/app-receitas/',
    github: 'https://github.com/lucasquearis/app-receitas',
    type: 'video/mp4',
    video: appReceitas,
  },
  {
    id: 3,
    title: 'Wallet',
    about: 'A currency conversion site using an API for real-time currency quote conversion.',
    tags: ['ReactJS', 'Redux', 'CSS', 'API'],
    demo: 'https://lucasquearis.github.io/wallet/',
    github: 'https://github.com/lucasquearis/wallet',
    type: 'png',
    image: wallet,
  },
];

export default ProjectData;
