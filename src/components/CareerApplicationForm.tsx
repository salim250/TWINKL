
import { useRef, useState } from 'react';

export const CareerApplicationForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);

  const submitApplication = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setLoading(true);
    const formData = new FormData(formRef.current);

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/mail/career`, {
        method: 'POST',
        body: formData,
      });

      if (!res.ok) throw new Error();

      alert('Application submitted successfully!');
      formRef.current.reset();
    } catch {
      alert('Failed to submit application.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form ref={formRef} onSubmit={submitApplication} className="space-y-6" encType="multipart/form-data">

      {/* Honeypot */}
      <input type="text" name="company" className="hidden" />
      <div className="mb-5">
        <label className="block text-sm font-medium mb-1">Full Name *</label>
        <input
          name="full_name" required placeholder="Full Name"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:border-secondary focus:outline-none"
        />
      </div>
      <div className="mb-5">
        <label className="block text-sm font-medium mb-1">Email *</label>
        <input
          name="email" type="email" required placeholder="Email"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:border-secondary focus:outline-none"
        />
      </div>
      <div className="mb-5">
        <label className="block text-sm font-medium mb-1">Phone Number *</label>
        <input
          name="phone" required placeholder="Phone Number"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:border-secondary focus:outline-none"
        />
      </div>
      <div className="mb-5">
        <label className="block text-sm font-medium mb-1">Position Applied For *</label>
        <input
          name="position" required placeholder="Position Applied For"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:border-secondary focus:outline-none"
        />
      </div>
      <div className="mb-5">
        <label className="block text-sm font-medium mb-1">Specialization *</label>
        <input
          name="specialization" required placeholder="Specialization"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:border-secondary focus:outline-none"
        />
      </div>
      <div className="mb-5">
        <label className="block text-sm font-medium mb-1">Experience *</label>
        <input
          name="experience" required placeholder="Experience" type="number" min="0"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:border-secondary focus:outline-none"
        />
      </div>
      <div className="mb-5">
        <label className="block text-sm font-medium mb-1">CV *</label>
        <input
          type="file" name="cv" required accept=".pdf,.doc,.docx"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:border-secondary focus:outline-none"
        />
      </div>
      <div className="mb-5">
        <label className="block text-sm font-medium mb-1">Cover Letter</label>
        <input
          type="file" name="certificates" accept=".pdf,.doc,.docx"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:border-secondary focus:outline-none"
        />
      </div>

      <button disabled={loading}
              type="submit"
              className="w-full bg-secondary text-white py-3 rounded-lg font-semibold hover:bg-secondary/90 transition">
        {loading ? 'Sending...' : 'Submit Application'}
      </button>
    </form>
  );
};