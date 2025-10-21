import { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  projectType: string;
  message: string;
}

const initialFormData: FormData = {
  name: '',
  email: '',
  projectType: 'science',
  message: ''
};

export const useContactForm = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const webhookUrl = 'https://discord.com/api/webhooks/1344605915768426547/MMkn_sTOhNC4Te4CgShEKIXaxFoJ_m6y51BsG8a2E23g-S1gqyC_MxYtI8XYnpun30dz';
      
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          content: `
**Nouveau message de contact**
**Nom:** ${formData.name}
**Email:** ${formData.email}
**Sujet:** ${formData.projectType}
**Message:** ${formData.message}
          `
        })
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData(initialFormData);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formData,
    isSubmitting,
    submitStatus,
    handleChange,
    handleSubmit
  };
};

