import React, { memo } from 'react';

interface TimelineItem {
  year: string;
  description: string;
  status: 'Actif' | 'Termine' | 'En pause';
  position: 'left' | 'right';
}

const Timeline: React.FC = memo(() => {
  const timelineItems: TimelineItem[] = [
    {
      year: '2026 - aujourd\'hui',
      description: "Debut d'une licence en psychologie.",
      status: 'Actif',
      position: 'left'
    },
    {
      year: '2025 - 2026',
      description: "Transition de parcours, arrêt des études d'astrophysique et validation d'une licence de physique (NAC).",
      status: 'Termine',
      position: 'right'
    },
    {
      year: '2025 - Aujourd\'hui',
      description: 'Lancement de la chaîne YouTube orientée storytelling jeu vidéo.',
      status: 'Actif',
      position: 'left'
    },
    {
      year: '2024 - 2025',
      description: "Études en astrophysique à l'Université de Caen avec un side job barista à la Taverne de la Paix.",
      status: 'Termine',
      position: 'right'
    },
    {
      year: '2020 à 2023',
      description: 'Obtention de mon baccalauréat général avec mention assez bien',
      status: 'Termine',
      position: 'left'
    }
  ];

  return (
    <section id="timeline">
      <h2>Mon Parcours</h2>
      <div className="section-content">
        <p>Les étapes les plus récentes apparaissent en premier pour montrer ce que je fais aujourd'hui.</p>
        <div className="timeline">
          {timelineItems.map((item, index) => (
            <div key={index} className={`timeline-item timeline-${item.position} timeline-animate`}>
              <div className="timeline-content">
                <h3>{item.year}</h3>
                <span className={`timeline-status status-${item.status.toLowerCase().replace(' ', '-')}`}>
                  {item.status}
                </span>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default Timeline;

