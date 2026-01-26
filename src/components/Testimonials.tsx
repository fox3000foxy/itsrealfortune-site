import React from 'react';

interface Testimonial {
  content: string;
  author: string;
  role: string;
}

import '../App.css';

import { useState } from 'react';

const Testimonials: React.FC = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([
    {
      content: "J'ai vu Chloé évoluer au fil des années, passant de la physique à la psychologie avec une curiosité et une ouverture d'esprit admirables. Elle sait toujours rebondir et s'adapter.",
      author: 'Lucie Bernard',
      role: 'Amie de longue date',
    },
    {
      content: 'jsuis trop fan de ses videos c trop bien explique jcomprends tt',
      author: 'camille',
      role: 'abonne yt',
    },
    {
      content: 'Chloé a apporté une vraie énergie positive à notre équipe au café. Sa capacité à écouter les clients et à créer une ambiance chaleureuse est précieuse.',
      author: 'Stéphane Aubert',
      role: 'Gérant, Taverne de la Paix',
    },
    {
      content: "J'ai découvert sa chaîne YouTube par hasard et j'ai été bluffée par la qualité des analyses sur les jeux vidéo. On sent qu'il y a du cœur dans chaque vidéo.",
      author: 'Marie Leclerc',
      role: 'Abonnée YouTube',
    },
    {
      content: 'elle a tjs le smile meme qd ca va pas trop forte',
      author: 'manon',
      role: 'eleve en 5eme C',
    },
    {
      content: "En tant qu'ancienne prof, j'ai vu peu d'étudiants aussi passionnés. Même après avoir changé de voie, elle garde une vraie rigueur intellectuelle.",
      author: 'Dr. Sophie Martin',
      role: "Ex-enseignante d'astrophysique, Université de Caen",
    },
    {
      content: 'mdr elle gere de ouf genre tjs la pr depanner trop sympa',
      author: 'leo',
      role: 'ami fac',
    },
    {
      content: "Chloé a su m'aider à relativiser pendant mes études. Son écoute et ses conseils m'ont beaucoup apporté, surtout depuis qu'elle s'intéresse à la psychologie.",
      author: 'Alice Martin',
      role: 'Étudiante en licence',
    },
    
    {
      content: 'merci pr les tips pr reviser t es la best',
      author: 'Elise',
      role: 'ta coupine :3',
    },
    // Témoignages style jeune
    {
      content: "J'ai binge-watché toutes ses vidéos en une nuit, c'est grave quali. Continue comme ça !",
      author: 'Maxime Dupuis',
      role: 'Fan de jeux vidéo',
    },
    {
      content: "C'est la pote qui t'écoute sans juger, même à 2h du mat. Trop hâte de voir ce qu'elle va faire en psycho !",
      author: 'Sarah Lemoine',
      role: 'Amie et confidente',
    },
    {
      content: "Toujours partante pour un café ou un débat sur la vie, c'est la bonne humeur incarnée.",
      author: 'Yanis Morel',
      role: 'Étudiant en faculté',
    },
    {
      content: 'Ses conseils pour gérer le stress avant les exams ? Golden.',
      author: 'Emma Rousseau',
      role: 'Étudiante en première année de psychologie',
    },
    // Témoignages style messagerie instantanée (pseudos courts OK)

    {
      content: 'grave cool genre elle motive qd t as la flemme de bosser',
      author: 'enzo',
      role: 'binome td',
    },
    {
      content: "Toujours dispo pour aider, même quand elle a mille trucs à faire. Chloé la goat finalement.",
      author: 'Nina',
      role: 'collègue de promo',
    },
  ]);

  const [form, setForm] = useState({ content: '', author: '', role: '' });
  const [error, setError] = useState('');
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus('idle');
    if (!form.content.trim() || !form.author.trim() || !form.role.trim()) {
      setError('Merci de remplir tous les champs.');
      return;
    }
    setError('');
    setTestimonials([{ ...form }, ...testimonials]);

    // Envoi du témoignage au webhook Discord
    try {
      const webhookUrl = "https://discord.com/api/webhooks/1344605915768426547/MMkn_sTOhNC4Te4CgShEKIXaxFoJ_m6y51BsG8a2E23g-S1gqyC_MxYtI8XYnpun30dz"; // À remplacer par le vrai webhook
      const embed = {
        title: 'Nouveau témoignage sur le site',
        color: 0xffb347,
        fields: [
          { name: 'Témoignage', value: form.content },
          { name: 'Auteur', value: form.author, inline: true },
          { name: 'Rôle', value: form.role, inline: true }
        ],
        timestamp: new Date().toISOString(),
        footer: { text: 'fortune-site-v2' }
      };
      await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ embeds: [embed] })
      });
      setSubmitStatus('success');
    } catch (err: unknown) {
      console.error('Erreur lors de l\'envoi au webhook Discord :', err);
      setSubmitStatus('error');
    }

    setForm({ content: '', author: '', role: '' });
  };

  return (
    <section>
      <h2>Témoignages</h2>
      <div className='section-content'>
        <p>Ce que disent mes professeurs, collègues et abonnés à propos de mon travail.</p>
        <div className='testimonials' style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className='testimonial-card' style={{ flex: '1 1 calc(33.33% - 20px)', margin: '10px' }}>
              <div className='testimonial-quote'>«</div>
              <div className='testimonial-content'>
                <p>{testimonial.content}</p>
              </div>
              <div className='testimonial-author'>
                <div className='testimonial-author-info'>
                  <span className='testimonial-author-name'>{testimonial.author}</span>
                  <br />
                  <span className='testimonial-author-role'>{testimonial.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='testimonial-form-container'>
        <h3>Laisser un témoignage</h3>
        <form onSubmit={handleSubmit} className='testimonial-form'>
          <textarea name='content' placeholder='Votre témoignage...' value={form.content} onChange={handleChange} rows={3} />
          <input name='author' placeholder='Votre prénom ou pseudo' value={form.author} onChange={handleChange} />
          <input name='role' placeholder='Votre rôle (ami, abonné, etc.)' value={form.role} onChange={handleChange} />
          <button type='submit'>Envoyer</button>
          {error && <div className='testimonial-form-error'>{error}</div>}
          {submitStatus === 'success' && (
            <div style={{ color: '#ffb347', marginTop: 10 }}>Témoignage envoyé avec succès !</div>
          )}
          {submitStatus === 'error' && (
            <div style={{ color: '#ff4d4d', marginTop: 10 }}>Erreur lors de l'envoi du témoignage. Veuillez réessayer.</div>
          )}
        </form>
      </div>
    </section>
  );
};

export default Testimonials;
