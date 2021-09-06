/* eslint-disable max-len */
import pixelArts from '../../media/pixelArts.webm';
import appReceitas from '../../media/appReceitas.mp4';
import wallet from '../../media/wallet.png';

const ProjectData = [
  {
    id: 1,
    title: 'Pixel Arts',
    about: 'Um dos meus primeiros projetos e um dos meus favoritos, basicamente você seleciona uma cor da paleta de cores, e pinta os pixels. ',
    tags: ['HTML', 'CSS', 'JavaScript Vanilla'],
    demo: 'https://lucasquearis.github.io/pixelarts/',
    github: 'https://github.com/tryber/sd-012-project-pixels-art/pull/105',
    type: 'video/webm',
    video: pixelArts,
  },
  {
    id: 2,
    title: 'App de Receitas',
    about: 'Um aplicativo com receitas de diversos lugares do mundo, diversas bebidas, ingredientes, temperos, tudo isso em um só lugar.',
    tags: ['ReactJS', 'ContextAPI', 'Hooks', 'CSS', 'localStorage', 'API'],
    demo: 'https://lucasquearis.github.io/app-receitas/',
    github: 'https://github.com/lucasquearis/app-receitas',
    type: 'video/mp4',
    video: appReceitas,
  },
  {
    id: 3,
    title: 'Wallet',
    about: 'Um site de conversão de moedas, utilizando uma API para conversão em tempo real da cotação da moeda',
    tags: ['ReactJS', 'Redux', 'CSS', 'API'],
    demo: 'https://lucasquearis.github.io/wallet/',
    github: 'https://github.com/lucasquearis/wallet',
    type: 'png',
    image: wallet,
  },
];

export default ProjectData;
