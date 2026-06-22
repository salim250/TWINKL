
import { useRef, useState } from 'react';
import { supabase } from '../lib/supabase';
import { useTranslation } from '../context/TranslationContext';
import FileUpload from './FileUpload';
import { notifyError, notifySuccess } from '../helpers/toast';
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CareerSchema } from "../shared/schema";
import { z } from "zod";
import PhoneInput from 'react-phone-number-input';

type CareerFormInput = z.input<typeof CareerSchema>;

export const CareerApplicationForm = () => {
  const { t } = useTranslation();
  const formRef = useRef<HTMLFormElement>(null);
  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors, isSubmitting, isValid },
    reset,
  } = useForm<CareerFormInput>({
    resolver: zodResolver(CareerSchema),
    mode: 'onChange'
  });

  const onSubmit = async (data: CareerFormInput) => {
    try {
      const formData = new FormData();

      Object.entries(data).forEach(([key, value]) => {
        if (value) formData.append(key, value as any);
      });

      const { error } = await supabase.functions.invoke(
        "send-career-email",
        { body: formData }
      );

      if (error) throw error;

      notifySuccess(t("career.form.success"));
      reset();

    } catch (err) {
      console.error(err);
      notifyError(t("career.form.error"));
    }
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit(onSubmit)} className="space-y-6" encType="multipart/form-data">

      {/* Honeypot */}
      <input type="text" name="company" className="hidden" />
      <div className="mb-5">
        <label className="block text-sm font-medium mb-1">{t('career.form.fullName')} *</label>
        <input {...register("full_name")} placeholder={t('career.form.placeholders.fullName')} className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:border-secondary focus:outline-none" />
        {errors.full_name && (
          <p className="text-red-500 text-xs">{t(`career.form.${errors.full_name.message}`)}</p>
        )}
      </div>
      <div className="mb-5">
        <label className="block text-sm font-medium mb-1">{t('career.form.email')} *</label>
        <input {...register("email")} placeholder={t('career.form.placeholders.email')} className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:border-secondary focus:outline-none" />
        {errors.email && (
          <p className="text-red-500 text-xs">{t(`career.form.${errors.email.message}`)}</p>
        )}
      </div>
      <div className="mb-5">
        <label className="block text-sm font-medium mb-1">{t('career.form.phone')} *</label>
        <Controller
          name="phone"
          control={control}
          render={({ field: { onChange, value, onBlur } }) => (
            <PhoneInput
              international
              countryCallingCodeEditable={false}
              defaultCountry="TN"
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:border-secondary focus:outline-none [&_.PhoneInputInput]:border-none [&_.PhoneInputInput]:outline-none [&_.PhoneInputInput]:bg-transparent [&_.PhoneInputInput]:px-2 [&_.PhoneInputInput]:py-0"
            />
          )}
        />
        {errors.phone && (
          <p className="text-red-500 text-xs">{t(`career.form.${errors.phone.message}`)}</p>
        )}
      </div>
      <div className="mb-5">
        <label className="block text-sm font-medium mb-1">{t('career.form.position')} *</label>
        <input {...register("position")} placeholder={t('career.form.placeholders.position')} className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:border-secondary focus:outline-none" />
        {errors.position && (
          <p className="text-red-500 text-xs">{t(`career.form.${errors.position.message}`)}</p>
        )}
      </div>
      <div className="mb-5">
        <label className="block text-sm font-medium mb-1">{t('career.form.specialization')} *</label>
        <input {...register("specialization")} placeholder={t('career.form.placeholders.specialization')} className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:border-secondary focus:outline-none" />
        {errors.specialization && (
          <p className="text-red-500 text-xs">{t(`career.form.${errors.specialization.message}`)}</p>
        )}
      </div>
      <div className="mb-5">
        <label className="block text-sm font-medium mb-1">{t('career.form.experience')} *</label>
        <input type="number" min="0" {...register("experience")} placeholder={t('career.form.placeholders.experience')} className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:border-secondary focus:outline-none" rows={4} />
        {errors.experience && (
          <p className="text-red-500 text-xs">{t(`career.form.${errors.experience.message}`)}</p>
        )}
      </div>
      <div className="mb-5">
        <FileUpload
          name="certificates"
          accept=".pdf,.doc,.docx"
          label={t("career.form.cv")}
          selectText={t("career.form.selectFile")}
          noFileText={t("career.form.noFileChosen")}
          onChange={(files) => {
            setValue("cv", files?.[0], { shouldValidate: true });
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
            setValue("cover_letter", files?.[0], { shouldValidate: true });
          }}
        />
      </div>

      <button disabled={!isValid || isSubmitting}
        type="submit"
        className="w-full bg-secondary text-white py-3 rounded-lg font-semibold hover:bg-secondary/90 transition disabled:opacity-60 disabled:cursor-not-allowed">
        {isSubmitting ? 'Sending...' : 'Submit Application'}
      </button>
    </form>
  );
};