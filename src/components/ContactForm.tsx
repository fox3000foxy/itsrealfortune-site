import React from 'react';
import { useContactForm } from '../hooks/useContactForm';

const ContactForm: React.FC = () => {
  const { formData, isSubmitting, submitStatus, handleChange, handleSubmit } = useContactForm();

  return (
    <div className="collaboration-form" style={{ marginTop: '20px' }}>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nom</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="project-type">Sujet</label>
          <select
            id="project-type"
            name="projectType"
            value={formData.projectType}
            onChange={handleChange}
          >
            <option value="science">Question scientifique</option>
            <option value="coffee">À propos du café</option>
            <option value="collab">Proposition de collaboration</option>
            <option value="media">Demande média</option>
            <option value="other">Autre</option>
          </select>
        </div>
        
        <div className="form-group">
          <label htmlFor="message">Votre message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        
        <button type="submit" className="submit-btn" disabled={isSubmitting}>
          {isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
        </button>
        
        {submitStatus === 'success' && (
          <p style={{ color: 'var(--accent-color)', marginTop: '10px' }}>
            Message envoyé avec succès !
          </p>
        )}
        
        {submitStatus === 'error' && (
          <p style={{ color: 'var(--primary-color)', marginTop: '10px' }}>
            Erreur lors de l'envoi du message. Veuillez réessayer.
          </p>
        )}
      </form>
    </div>
  );
};

export default ContactForm;

