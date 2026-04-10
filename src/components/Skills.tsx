import { memo } from 'react';

const Skills = memo(function Skills() {
  const skills = [
    {
      category: 'Expertise principale',
      items: ['Vulgarisation scientifique', 'Astrophysique et physique', 'Storytelling et analyse de contenu']
    },
    {
      category: 'Expertise opérationnelle',
      items: ['Création de contenu vidéo', 'Animation de communauté', 'Prise de parole pédagogique']
    },
    {
      category: 'Domaines complémentaires',
      items: ['Barista et culture café', 'Design graphique', 'Psychologie et écoute']
    }
  ];

  return (
    <section id="skills">
      <h2>Mes Passions & Compétences</h2>
      <div className="section-content">
        <p>Pas de jauges arbitraires — mes compétences classées par priorité et par impact.</p>
        <div className="skills-grid">
          {skills.map((group, index) => (
            <div key={index} className="skill-card-priority">
              <h3>{group.category}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p>
          En ce moment : création de contenu et projets concrets, avec une base scientifique solide.
        </p>
      </div>
    </section>
  );
});

export default Skills;
