import React, { memo } from 'react';

const Skills = memo(function Skills() {
  const skills = [
    { name: 'Études en Astrophysique', progress: 85 },
    { name: 'Maîtrise Barista', progress: 90 },
    { name: 'Création de contenu vidéo', progress: 15 },
    { name: 'Art graphique', progress: 75 },
  ];

  return (
    <section>
      <h2>Mes Passions & Compétences</h2>
      <div className="section-content">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <p>{skill.name}</p>
            <div className="skill-bar">
              <div className="skill-progress" style={{ width: `${skill.progress}%` }}></div>
            </div>
          </div>
        ))}
        <p>Actuellement en Master d'Astrophysique à l'Université de Caen.</p>
      </div>
    </section>
  );
});

export default Skills;

