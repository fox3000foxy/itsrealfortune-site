import React from 'react';

interface TimelineItem {
  year: string;
  description: string;
  position: 'left' | 'right';
}

const Timeline: React.FC = () => {
  const timelineItems: TimelineItem[] = [
    {
      year: '2020 à 2023',
      description: 'Obtention de mon baccalauréat général avec mention assez bien',
      position: 'left'
    },
    {
      year: '2024 à 2025',
      description: 'Etudes en Astrophysique à l\'Université de Caen, et sidejob de barista à la Taverne de la Paix',
      position: 'right'
    },
    {
      year: '2025',
      description: 'Lancement de ma chaîne YouTube de storytelling de jeux vidéo',
      position: 'left'
    }
  ];

  return (
    <section>
      <h2>Mon Parcours</h2>
      <div className="section-content">
        <p>Les étapes clés qui ont façonné mon parcours entre sciences, café et création de contenu.</p>
        <div className="timeline">
          {timelineItems.map((item, index) => (
            <div key={index} className={`timeline-item timeline-${item.position}`}>
              <div className="timeline-content">
                <h3>{item.year}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;

