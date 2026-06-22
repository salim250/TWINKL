import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { useTranslation } from '../context/TranslationContext';
import { notifyError, notifySuccess } from '../helpers/toast';
import { EnrollmentSchema } from '../shared/schema';
import { phoneLabels } from '../lib/phoneLabels';
import { supabase } from '../lib/supabase';

type EnrollmentFormData = z.infer<typeof EnrollmentSchema>;

const SUBJECTS = [
    'English',
    'Mathematics',
    'Sciences / Coordinated Combined Science',
    'ICT',
    'Business Studies',
    'French',
    'Global Perspectives',
    'Other',
] as const;

const PROGRAM_OPTIONS = [
    'cambridge',
    'french',
    'tunisian',
    'canadian',
    'ib',
] as const;

const toUTCPlus1 = (dateString: string) => {
    const date = new Date(dateString);
    const utc = date.getTime() + date.getTimezoneOffset() * 60000;
    const utcPlus1 = new Date(utc + 60 * 60000);

    const pad = (n: number) => String(n).padStart(2, '0');

    return (
        `${utcPlus1.getFullYear()}-${pad(utcPlus1.getMonth() + 1)}-${pad(utcPlus1.getDate())}` +
        ` ${pad(utcPlus1.getHours())}:${pad(utcPlus1.getMinutes())}:${pad(utcPlus1.getSeconds())}`
    );
};

export const EnrollmentApplicationForm = () => {
    const { t, language } = useTranslation();

    const {
        register,
        handleSubmit,
        control,
        watch,
        setValue,
        formState: { errors, isSubmitting, isValid },
        reset,
    } = useForm<EnrollmentFormData>({
        resolver: zodResolver(EnrollmentSchema),
        mode: 'onChange',
        reValidateMode: 'onChange',
        defaultValues: {
            subjects: [],
            declaration: undefined as unknown as true,
        },
    });

    const selectedSubjects = watch('subjects') || [];

    const onSubmit = async (data: EnrollmentFormData) => {
        try {
            const payload = {
                student_name: data.student_name,
                date_of_birth: data.dob,
                gender: data.gender,
                nationality: data.nationality,
                parent_name: data.parent_name,
                parent_phone: data.parent_phone,
                program: data.program,
                subjects: data.subjects,
                preferred_schedule: toUTCPlus1(data.schedule),
                parent_email: data.parent_email,
            };

            const { error } = await supabase.functions.invoke(
                'send-enrollment-email',
                { body: payload }
            );

            if (error) throw error;

            notifySuccess(t('enroll.success'));
            reset();
        } catch (err) {
            console.error(err);
            notifyError(t('enroll.error'));
        }
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6"
            noValidate
        >
            {/* Honeypot */}
            <input type="text" name="company" className="hidden" tabIndex={-1} autoComplete="off" />

            {/* Student Name + DOB */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                <div>
                    <label className="block text-sm font-medium mb-1">
                        {t('enroll.studentName')} *
                    </label>
                    <input
                        {...register('student_name')}
                        type="text"
                        placeholder={t('enroll.studentName')}
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:border-secondary focus:outline-none"
                    />
                    {errors.student_name && (
                        <p className="text-xs text-red-500 mt-1">{t(`enroll.form.${errors.student_name.message}`)}</p>
                    )}
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1">
                        {t('enroll.dob')} *
                    </label>
                    <input
                        {...register('dob')}
                        type="date"
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:border-secondary focus:outline-none"
                    />
                    {errors.dob && (
                        <p className="text-xs text-red-500 mt-1">{t(`enroll.form.${errors.dob.message}`)}</p>
                    )}
                </div>
            </div>

            {/* Gender */}
            <div className="mb-5">
                <label className="block text-sm font-medium mb-2">
                    {t('enroll.gender')} *
                </label>

                <div className="flex gap-6">
                    <label className="flex items-center gap-2">
                        <input
                            type="radio"
                            value="Male"
                            {...register('gender')}
                        />
                        {t('enroll.male')}
                    </label>

                    <label className="flex items-center gap-2">
                        <input
                            type="radio"
                            value="Female"
                            {...register('gender')}
                        />
                        {t('enroll.female')}
                    </label>
                </div>
                {errors.gender && (
                    <p className="text-xs text-red-500 mt-1">{t(`enroll.form.${errors.gender.message}`)}</p>
                )}
            </div>

            {/* Nationality + Parent Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                <div>
                    <label className="block text-sm font-medium mb-1">
                        {t('enroll.nationality')} *
                    </label>
                    <input
                        {...register('nationality')}
                        type="text"
                        placeholder={t('enroll.nationality')}
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:border-secondary focus:outline-none"
                    />
                    {errors.nationality && (
                        <p className="text-xs text-red-500 mt-1">{t(`enroll.form.${errors.nationality.message}`)}</p>
                    )}
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1">
                        {t('enroll.parentName')} *
                    </label>
                    <input
                        {...register('parent_name')}
                        type="text"
                        placeholder={t('enroll.parentName')}
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:border-secondary focus:outline-none"
                    />
                    {errors.parent_name && (
                        <p className="text-xs text-red-500 mt-1">{t(`enroll.form.${errors.parent_name.message}`)}</p>
                    )}
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                <div>
                    <label className="block text-sm font-medium mb-1">
                        {t('enroll.parentEmail')} *
                    </label>
                    <input
                        {...register('parent_email')}
                        type="email"
                        placeholder={t('enroll.parentEmailPlaceholder')}
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:border-secondary focus:outline-none"
                    />
                    {errors.parent_email && (
                        <p className="text-xs text-red-500 mt-1">{t(`enroll.form.${errors.parent_email.message}`)}</p>
                    )}
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1">
                        {t('enroll.parentPhone')} *
                    </label>
                    <Controller
                        name="parent_phone"
                        control={control}
                        render={({ field: { onChange, value, onBlur } }) => (
                            <PhoneInput
                                international
                                countryCallingCodeEditable={false}
                                defaultCountry="TN"
                                labels={phoneLabels[language] ?? phoneLabels.en}
                                value={value}
                                onChange={onChange}
                                onBlur={onBlur}
                                placeholder={t('enroll.parentInfo')}
                                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:border-secondary focus:outline-none [&_.PhoneInputInput]:border-none [&_.PhoneInputInput]:outline-none [&_.PhoneInputInput]:bg-transparent [&_.PhoneInputInput]:px-2 [&_.PhoneInputInput]:py-0"
                            />
                        )}
                    />
                    {errors.parent_phone && (
                        <p className="text-xs text-red-500 mt-1">{t(`enroll.form.${errors.parent_phone.message}`)}</p>
                    )}
                </div>
            </div>

            {/* Program */}
            <div className="mb-5">
                <label className="block text-sm font-medium mb-1">
                    {t('enroll.program')} *
                </label>

                <select
                    {...register('program')}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-white focus:border-secondary focus:outline-none"
                >
                    <option value="">{t('enroll.selectProgram')}</option>
                    {PROGRAM_OPTIONS.map((prog) => (
                        <option key={prog} value={prog}>
                            {t(`enroll.${prog}`)}
                        </option>
                    ))}
                </select>
                {errors.program && (
                    <p className="text-xs text-red-500 mt-1">{t(`enroll.form.${errors.program.message}`)}</p>
                )}
            </div>

            {/* Subjects */}
            <div className="mb-6">
                <label className="block text-sm font-medium mb-3">
                    {t('enroll.subjects')} *
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                    {SUBJECTS.map((subject) => {
                        const isSelected = selectedSubjects.includes(subject);
                        return (
                            <label
                                key={subject}
                                className={`flex items-center gap-3 p-3 border rounded-lg cursor-pointer transition
                  ${isSelected
                                        ? 'border-secondary bg-secondary/5'
                                        : 'border-gray-300 hover:border-secondary'}`}
                            >
                                <input
                                    type="checkbox"
                                    value={subject}
                                    checked={isSelected}
                                    onChange={() => {
                                        const updated = isSelected
                                            ? selectedSubjects.filter((s) => s !== subject)
                                            : [...selectedSubjects, subject];
                                        setValue('subjects', updated, { shouldValidate: true });
                                    }}
                                    className="h-4 w-4 text-secondary border-gray-300 rounded focus:ring-secondary"
                                />
                                <span className="text-sm">
                                    {t(`enroll.subjects.${subject}`, subject)}
                                </span>
                            </label>
                        );
                    })}
                </div>

                {errors.subjects && (
                    <p className="text-xs text-red-500 mt-2">{t(`enroll.form.${errors.subjects.message}`)}</p>
                )}

                <p className="text-xs text-gray-500 mt-2">
                    {t('enroll.subjectHint')}
                </p>
            </div>

            {/* Schedule + Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                <div>
                    <label className="block text-sm font-medium mb-1">
                        {t('enroll.schedule')} *
                    </label>
                    <input
                        {...register('schedule')}
                        type="datetime-local"
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:border-secondary focus:outline-none"
                    />
                    {errors.schedule && (
                        <p className="text-xs text-red-500 mt-1">{t(`enroll.form.${errors.schedule.message}`)}</p>
                    )}
                </div>
            </div>

            {/* Declaration */}
            <div className="mb-6">
                <label className="flex items-start gap-2 text-sm">
                    <input
                        type="checkbox"
                        {...register('declaration')}
                    />
                    <span>
                        {t('enroll.declaration')}
                    </span>
                </label>
                {errors.declaration && (
                    <p className="text-xs text-red-500 mt-1">{t(`enroll.form.${errors.declaration.message}`)}</p>
                )}
            </div>

            {/* Submit */}
            <button
                disabled={!isValid || isSubmitting}
                type="submit"
                className="w-full bg-secondary text-white py-3 rounded-lg font-semibold hover:bg-secondary/90 transition disabled:opacity-60 disabled:cursor-not-allowed"
            >
                {isSubmitting ? t('enroll.sending') : t('enroll.submit')}
            </button>
        </form>
    );
};
