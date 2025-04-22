import naruto from '../assets/anime3.png';
import sailor from '../assets/anime5.png';
import goku from '../assets/anime7.png';
import mikasa from '../assets/anime6.png';
import hashira from '../assets/anime4.png';
import safebooru from '../assets/anime2.png';
import yuki from '../assets/anime1.png';

export const heros = [
    { name: 'Naruto Uzumaki', img: naruto, id: 1, description: 'The Seventh Hokage of Konohagakure, known for his determination and never-give-up attitude.' },
    { name: 'Safebooru', img: safebooru, id: 6, description: 'A popular imageboard for anime and manga content.' },
    { name: 'Goku', img: goku, id: 3, description: 'The Saiyan warrior known for his strength and love for fighting.' },
    { name: 'Mikasa Ackerman', img: mikasa, id: 4, description: 'A skilled soldier and protector of Eren Yeager.' },
    { name: 'Hashira', img: hashira, id: 5, description: 'The elite demon slayers of the Demon Slayer Corps, each with unique abilities.' },
    { name: 'Yuki', img: yuki, id: 7, description: 'A character from the anime series, known for their unique abilities and personality.' },
    { name: 'Sailor Moon', img: sailor, id: 2, description: 'The leader of the Sailor Guardians, fighting for love and justice.' },
]


export const logs = [
    { text: 'PROJECT DEVELOPMENT UPDATE', date: new Date().toISOString() },
    { text: 'new project started', date: new Date().toISOString() },
    { text: 'release story', date: new Date().toISOString() },
    { text: 'visual updates', date: new Date().toISOString() },
    { text: 'going public', date: new Date().toISOString() },
    { text: 'beta program', date: new Date().toISOString() },
]