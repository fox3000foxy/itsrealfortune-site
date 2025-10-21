import React from 'react';

interface Project {
  image: string;
  title: string;
  description: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      image: './astro.jpg',
      title: 'Recherche Stellaire',
      description: 'Projet de recherche sur l\'évolution des étoiles naines blanches et leur impact sur la formation des systèmes planétaires.'
    },
    {
      image: './latte.jpg',
      title: 'L\'Art du Café',
      description: 'Techniques de latte art et exploration des méthodes d\'extraction pour différentes variétés de café de spécialité.'
    },
    {
      image: './youtube.jpg',
      title: 'Présentation de jeux vidéo et Storytelling',
      description: 'Série de vidéos où je présente des jeux vidéo en mettant l\'accent sur le storytelling, rendant chaque expérience captivante et immersive.'
    },
    {
      image: './ych.jpg',
      title: 'Art Graphique et Ych',
      description: 'Création de mon avatar Ych, un projet qui allie créativité et compétences graphiques.'
    }
  ];

  return (
    <section>
      <h2>Mes Projets</h2>
      <div className="section-content">
        <p>
          Découvrez mes différents projets qui illustrent mon parcours entre sciences, café et création de contenu. 
          Chaque projet reflète ma passion pour l'apprentissage et le partage de connaissances.
        </p>
        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <div key={index} className="portfolio-item">
              <img 
                src={project.image} 
                alt={project.title} 
                style={{ 
                  width: '100%', 
                  height: '150px', 
                  objectFit: 'cover',
                  ...(project.image.includes('latte') && { objectPosition: 'top' }),
                  ...(project.image.includes('ych') && { objectPosition: 'top' })
                }} 
              />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

