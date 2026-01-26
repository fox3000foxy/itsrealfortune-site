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
      description: "Études en Astrophysique à l'Université de Caen, et sidejob de barista à la Taverne de la Paix",
      position: 'right'
    },
    {
      year: '2025',
      description: 'Lancement de ma chaîne YouTube de storytelling de jeux vidéo',
      position: 'left'
    },
    {
      year: '2025',
      description: 'Stage de recherche chez NVIDIA (IA et calcul scientifique)',
      position: 'right'
    },
    {
      year: '2025-2026',
      description: "Arrêt des études d'astrophysique, obtention d'une licence de physique (NAC)",
      position: 'left'
    },
    {
      year: '2026',
      description: "Début d'une licence en psychologie",
      position: 'right'
    }
  ];

  return (
    <section>
      <h2>Mon Parcours</h2>
      <div className="section-content">
        <p>Les étapes clés qui ont façonné mon parcours entre sciences, café et création de contenu.</p>
        <div className="timeline">
          {timelineItems.map((item, index) => (
            <div key={index} className={`timeline-item timeline-${item.position} timeline-animate`}>
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

