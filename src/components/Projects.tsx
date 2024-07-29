import { useState } from 'react';
import { FaGithub } from 'react-icons/fa';

interface Project {
  id: number;
  title: string;
  technologies: string;
  imageUrl: string;
  githubUrl: string; 
  liveUrl: string;   
}

const projects: Project[] = [
  //{ id: 1, title: 'Nexo - Social Media', technologies: 'Social Media made using NextJS, Tailwind (frontend), NestJS, Postgresql (backend)', imageUrl: 'https://via.placeholder.com/300', githubUrl: 'https://github.com/example1', liveUrl: 'https://example.com/social-media' },
  { id: 2, title: 'News Page', technologies: "https://skillicons.dev/icons?i=react,tailwind", imageUrl: '/images/news-page.png', githubUrl: 'https://github.com/Gurottesque/News-App ', liveUrl: 'https://bootcamp-news.netlify.app' },
  { id: 3, title: 'IMDB Movies', technologies: "https://skillicons.dev/icons?i=react,tailwind", imageUrl: '/images/movie-page.png', githubUrl: 'https://github.com/Gurottesque/React-Movie-App', liveUrl: 'https://movies2-app.netlify.app' },
  { id: 4, title: 'Magic Economy', technologies: 'https://skillicons.dev/icons?i=python,discord,bots,sqlite', imageUrl: '/images/magic-bot.png', githubUrl: 'https://github.com/Gurottesque/Magic-Economy', liveUrl: 'https://github.com/Gurottesque/Magic-Economy' },
  { id: 5, title: 'Christmas Memory Game', technologies: 'https://skillicons.dev/icons?i=html,css', imageUrl: '/images/christmas.png', githubUrl: 'https://github.com/Gurottesque/Christmas-Memory-Game', liveUrl: 'https://github.com/Gurottesque/Christmas-Memory-Game' },
  { id: 6, title: 'Calculator', technologies: 'https://skillicons.dev/icons?i=react,css', imageUrl: '/images/calculator.png', githubUrl: 'https://github.com/Gurottesque/Calculator', liveUrl: 'https://main--peppy-sable-920168.netlify.app' },
  { id: 7, title: 'Rock Paper Scissors', technologies: 'https://skillicons.dev/icons?i=html,css,js', imageUrl: '/images/rockpaperscissors.png', githubUrl: 'https://github.com/Gurottesque/Rock-paper-scissors', liveUrl: 'https://cute-croissant-e0190c.netlify.app' },
  { id: 8, title: 'TaskList', technologies: 'https://skillicons.dev/icons?i=react,css', imageUrl: '/images/tasklist.png', githubUrl: 'https://github.com/Gurottesque/Tasklist', liveUrl: 'https://dulcet-souffle-f23328.netlify.app' },
];

const Projects: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const showPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? projects.length - 4 : prevIndex - 1));
  };

  const showNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === projects.length - 4 ? 0 : prevIndex + 1));
  };

  return (
    <section id="projects" className="text-white text-4xl font-semibold tracking-widest py-16">
      <p className="text-white text-6xl text-center font-semibold tracking-widest mb-12">Projects</p>
      <div className="relative">
        <div className="flex overflow-hidden px-16">
          {projects.slice(currentIndex, currentIndex + 4).map((project) => (
            <div key={project.id} className="w-full sm:w-1/2 md:w-1/3 p-4">
              <div className="bg-gray-800 rounded-lg p-6 shadow-lg hover:bg-gray-700 transition-colors">
                <img src={project.imageUrl} alt={project.title} className="w-full h-60 object-cover rounded-md mb-4" />
                <h3 className="text-2xl text-center font-semibold mb-2">{project.title}</h3>
                <div className='flex justify-center'>
                    <img src={project.technologies} alt="General skills" className=""/>
                </div>
                <div className="flex justify-between items-center">
                  <div className="relative">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-3xl">
                      <FaGithub />
                    </a>
                  </div>
                  <div className="relative">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-3xl">
                      <span role="img" aria-label="globe" className="text-3xl">🌐</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-700 text-white p-3 rounded-full shadow-lg hover:bg-gray-600 transition-colors"
          onClick={showPrevious}
        >
          &lt;
        </button>
        <button
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-700 text-white p-3 rounded-full shadow-lg hover:bg-gray-600 transition-colors"
          onClick={showNext}
        >
          &gt;
        </button>
      </div>
    </section>
  );
};

export default Projects;