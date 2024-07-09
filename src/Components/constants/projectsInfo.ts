import project1 from '../../Assets/projects/project1.png'


export interface InterProject {
    id: string;
    name: string;
    description: string[];
    tech: string[];
    img: string;
    alt: string;
    link: {
        github: string;
        live: string;
        target: string;
        rel: string;
    }
}

const Projects: InterProject[] = [
    {
        id: '1',
        name: 'My First Portfolio',
        description: ['First Portfolio is a personal web project that is still under development. This site is designed to showcase my skills, experience, and projects as a Front-End Developer and Web Designer. Although still in the learning stage, this project reflects my efforts in expanding my technical knowledge and skills.',
        'I realize that the code in this project may still have many flaws and is sometimes messy. However, this project is also a means for me to continue learning and improve the quality of the code gradually.'],
        tech: ['React', 'Typescript', 'Tailwindcss', 'React-Router Dom'],
        img: project1,
        alt: 'My First Portfolio',
        link: {
            github: 'https://github.com/fjrfathurrahman/MyPortfolio-v1',
            live: 'https://myportfoliooo-v1.netlify.app/',
            target: '_blank',
            rel: 'noopener noreferrer'
        }
    }
]

export default Projects;