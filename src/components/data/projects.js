/* eslint-disable max-len */
import pixelArts from '../../media/pixelArts.webm';
import appReceitas from '../../media/appReceitas.mp4';

const ProjectData = [
  {
    id: 1,
    title: 'Pixel Arts',
    about: 'Um dos meus primeiros projetos e um dos meus favoritos, basicamente você seleciona uma cor da paleta de cores, e pinta os pixels. ',
    tags: ['HTML', 'CSS', 'JavaScript Vanilla'],
    demo: 'https://www.demo.com',
    github: 'https://www.github.com',
    type: 'video/webm',
    video: pixelArts,
  },
  {
    id: 2,
    title: 'App de Receitas',
    about: 'Um aplicativo com receitas de diversos lugares do mundo, diversas bebidas, ingredientes, temperos, tudo isso em um só lugar.',
    tags: ['ReactJS', 'ContextAPI', 'Hooks', 'CSS', 'localStorage', 'API'],
    demo: 'https://www.demo2.com',
    github: 'https://www.github2.com',
    type: 'video/mp4',
    video: appReceitas,
  },
];

export default ProjectData;
