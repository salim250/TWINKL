
import { useRef, useState } from 'react';
import { supabase } from '../lib/supabase';
import { useTranslation } from '../context/TranslationContext';
import FileUpload from './FileUpload';
import { notifyError, notifySuccess } from '../helpers/toast';

export const CareerApplicationForm = () => {
  const { t } = useTranslation();
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);

  const submitApplication = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    setLoading(true);

    const formData = new FormData(formRef.current);

    try {
      const { data, error } = await supabase.functions.invoke(
        "send-career-email",
        {
          body: formData,
        }
      );

      if (error) {
        throw error;
      }

      notifySuccess(t("career.form.success"));

      //formRef.current.reset();

    } catch (err) {
      console.error(err);
      notifyError(t("career.form.error"));

    } finally {
      setLoading(false);
    }
  };

  return (
    <form ref={formRef} onSubmit={submitApplication} className="space-y-6" encType="multipart/form-data">

      {/* Honeypot */}
      <input type="text" name="company" className="hidden" />
      <div className="mb-5">
        <label className="block text-sm font-medium mb-1">{t('career.form.fullName')} *</label>
        <input
          name="full_name" required placeholder={t('career.form.fullName')}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:border-secondary focus:outline-none"
        />
      </div>
      <div className="mb-5">
        <label className="block text-sm font-medium mb-1">{t('career.form.email')} *</label>
        <input
          name="email" type="email" required placeholder={t('career.form.email')}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:border-secondary focus:outline-none"
        />
      </div>
      <div className="mb-5">
        <label className="block text-sm font-medium mb-1">{t('career.form.phone')} *</label>
        <input
          name="phone" required placeholder={t('career.form.phone')}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:border-secondary focus:outline-none"
        />
      </div>
      <div className="mb-5">
        <label className="block text-sm font-medium mb-1">{t('career.form.position')} *</label>
        <input
          name="position" required placeholder={t('career.form.position')}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:border-secondary focus:outline-none"
        />
      </div>
      <div className="mb-5">
        <label className="block text-sm font-medium mb-1">{t('career.form.specialization')} *</label>
        <input
          name="specialization" required placeholder={t('career.form.specialization')}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:border-secondary focus:outline-none"
        />
      </div>
      <div className="mb-5">
        <label className="block text-sm font-medium mb-1">{t('career.form.experience')} *</label>
        <input
          name="experience" required placeholder={t('career.form.experience')} type="number" min="0"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:border-secondary focus:outline-none"
        />
      </div>
      <div className="mb-5">
        <FileUpload
          name="certificates"
          accept=".pdf,.doc,.docx"
          label={t("career.form.cv")}
          selectText={t("career.form.selectFile")}
          noFileText={t("career.form.noFileChosen")}
          onChange={(files) => {
            console.log(files);
          }}
        />
      </div>
      <div className="mb-5">
        <FileUpload
          name="certificates"
          accept=".pdf,.doc,.docx"
          label={t("career.form.coverLetter")}
          selectText={t("career.form.selectFile")}
          noFileText={t("career.form.noFileChosen")}
          onChange={(files) => {
            console.log(files);
          }}
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