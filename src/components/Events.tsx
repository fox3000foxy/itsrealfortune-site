import React, { memo } from 'react';

interface Event {
  title: string;
  date: string;
  location: string;
  description: string;
}

const Events: React.FC = memo(() => {
  const events: Event[] = [
    {
      title: 'Conférence "Exploration des Mystères de l\'Univers"',
      date: '10 Janvier 2024',
      location: 'Palais des Congrès, Caen',
      description: 'Une conférence sur les dernières découvertes en astrophysique et leur impact sur notre compréhension de l\'univers.'
    },
    {
      title: 'Festival de la Science',
      date: '1-3 Mars 2024',
      location: 'Normandie',
      description: 'Participation à des ateliers interactifs et des démonstrations sur les sciences physiques et l\'astronomie.'
    }
  ];

  return (
    <section>
      <h2>Événements & Apparitions</h2>
      <div className="section-content">
        <p>Retrouvez-moi lors de ces prochains événements ou regardez mes apparitions récentes.</p>
        {events.map((event, index) => (
          <div 
            key={index} 
            className="event-item" 
            style={{ 
              border: '1px solid rgba(255, 255, 255, 0.3)', 
              borderRadius: '8px', 
              padding: '15px', 
              backgroundColor: 'rgba(255, 255, 255, 0.1)', 
              marginBottom: '20px', 
              transition: 'transform 0.3s' 
            }}
          >
            <h3 style={{ color: 'var(--accent-color)', fontSize: '1.5em', marginBottom: '5px' }}>
              {event.title}
            </h3>
            <p style={{ fontWeight: 'bold', marginBottom: '5px' }}>
              {event.date} - {event.location}
            </p>
            <p>{event.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
});

export default Events;

