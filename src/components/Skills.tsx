import { memo } from 'react';

const Skills = memo(function Skills() {
  const skills = [
    {
      category: 'Expertise principale',
      items: ['Vulgarisation scientifique', 'Astrophysique et physique', 'Storytelling et analyse de contenu']
    },
    {
      category: 'Expertise operationnelle',
      items: ['Creation de contenu video', 'Animation de communaute', 'Prise de parole pedagogique']
    },
    {
      category: 'Domaines complementaires',
      items: ['Barista et culture cafe', 'Design graphique', 'Approche psychologie et ecoute']
    }
  ];

  return (
    <section id="skills">
      <h2>Mes Passions & Compétences</h2>
      <div className="section-content">
        <p>Pas de jauges arbitraires: voici mes competences classees par priorite et impact.</p>
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
          Focus actuel: creation de contenu et projets concrets, avec une base scientifique solide.
        </p>
      </div>
    </section>
  );
});

export default Skills;

