import { useRef, useState } from 'react';
import { supabase } from '../lib/supabase';
import { useTranslation } from '../context/TranslationContext';
import { notifyError, notifySuccess } from '../helpers/toast';

export const EnrollmentApplicationForm = () => {
    const { t } = useTranslation();

    const formRef = useRef<HTMLFormElement>(null);
    const [loading, setLoading] = useState(false);
    const [subjects, setSubjects] = useState<string[]>([]);
    const [subjectError, setSubjectError] = useState(false);

    const toUTCPlus1 = (dateString: string) => {
        const date = new Date(dateString);
        const utc = date.getTime() + date.getTimezoneOffset() * 60000;
        const utcPlus1 = new Date(utc + 60 * 60000);

        const pad = (n: number) => String(n).padStart(2, "0");

        return (
            `${utcPlus1.getFullYear()}-${pad(utcPlus1.getMonth() + 1)}-${pad(utcPlus1.getDate())}` +
            ` ${pad(utcPlus1.getHours())}:${pad(utcPlus1.getMinutes())}:${pad(utcPlus1.getSeconds())}`
        );
    };

    const submitApplication = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formRef.current) return;

        setLoading(true);

        if (subjects.length === 0) {
            setSubjectError(true);
            setLoading(false);
            return;
        }

        const formData = new FormData(formRef.current);

        const payload = {
            student_name: formData.get("student_name"),
            date_of_birth: formData.get("dob"),
            gender: formData.get("gender"),
            nationality: formData.get("nationality"),
            parent_name_phone: formData.get("parent_info"),
            educational_system: formData.get("program"),
            subjects: formData.getAll("subjects[]"),
            preferred_schedule: toUTCPlus1(formData.get("schedule") as string),
            parent_signature: formData.get("parent_signature")
        };

        try {
            const { error } = await supabase.functions.invoke(
                "send-enrollment-email",
                { body: payload }
            );

            if (error) throw error;

            notifySuccess(t("enroll.success"));

            formRef.current.reset();
            setSubjects([]);

        } catch (err) {
            console.error(err);
            notifyError(t("enroll.error"));

        } finally {
            setLoading(false);
        }
    };

    return (
        <form
            ref={formRef}
            onSubmit={submitApplication}
            className="space-y-6"
            encType="multipart/form-data"
        >

            {/* Honeypot */}
            <input type="text" name="company" className="hidden" />

            {/* Student Name + DOB */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                <div>
                    <label className="block text-sm font-medium mb-1">
                        {t('enroll.studentName')} *
                    </label>
                    <input
                        name="student_name"
                        type="text"
                        required
                        placeholder={t('enroll.studentName')}
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:border-secondary focus:outline-none"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1">
                        {t('enroll.dob')} *
                    </label>
                    <input
                        name="dob"
                        type="date"
                        required
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:border-secondary focus:outline-none"
                    />
                </div>
            </div>

            {/* Gender */}
            <div className="mb-5">
                <label className="block text-sm font-medium mb-2">
                    {t('enroll.gender')} *
                </label>

                <div className="flex gap-6">
                    <label className="flex items-center gap-2">
                        <input type="radio" name="gender" value="Male" required />
                        {t('enroll.male')}
                    </label>

                    <label className="flex items-center gap-2">
                        <input type="radio" name="gender" value="Female" required />
                        {t('enroll.female')}
                    </label>
                </div>
            </div>

            {/* Nationality + Parent Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                <div>
                    <label className="block text-sm font-medium mb-1">
                        {t('enroll.nationality')} *
                    </label>
                    <input
                        name="nationality"
                        type="text"
                        required
                        placeholder={t('enroll.nationality')}
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:border-secondary focus:outline-none"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1">
                        {t('enroll.parentInfo')} *
                    </label>
                    <input
                        name="parent_info"
                        type="text"
                        required
                        placeholder={t('enroll.parentInfo')}
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:border-secondary focus:outline-none"
                    />
                </div>
            </div>

            {/* Program */}
            <div className="mb-5">
                <label className="block text-sm font-medium mb-1">
                    {t('enroll.program')} *
                </label>

                <select
                    name="program"
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-white focus:border-secondary focus:outline-none"
                >
                    <option value="">{t('enroll.selectProgram')}</option>
                    <option>{t('enroll.cambridge')}</option>
                    <option>{t('enroll.french')}</option>
                    <option>{t('enroll.tunisian')}</option>
                    <option>{t('enroll.canadian')}</option>
                    <option>{t('enroll.ib')}</option>
                </select>
            </div>

            {/* Subjects */}
            <div className="mb-6">
                <label className="block text-sm font-medium mb-3">
                    {t('enroll.subjects')} *
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                    {[
                        'English',
                        'Mathematics',
                        'Sciences / Coordinated Combined Science',
                        'ICT',
                        'Business Studies',
                        'French',
                        'Global Perspectives',
                        'Other',
                    ].map((subject) => (
                        <label
                            key={subject}
                            className={`flex items-center gap-3 p-3 border rounded-lg cursor-pointer transition
                            ${subjects.includes(subject)
                                    ? 'border-secondary bg-secondary/5'
                                    : 'border-gray-300 hover:border-secondary'}`}
                        >
                            <input
                                type="checkbox"
                                name="subjects[]"
                                value={subject}
                                checked={subjects.includes(subject)}
                                onChange={(e) => {
                                    const value = e.target.value;
                                    setSubjects((prev) =>
                                        prev.includes(value)
                                            ? prev.filter((s) => s !== value)
                                            : [...prev, value]
                                    );
                                    setSubjectError(false);
                                }}
                                className="h-4 w-4 text-secondary border-gray-300 rounded focus:ring-secondary"
                            />
                            <span className="text-sm">
                                {t(`enroll.subjects.${subject}`, subject)}
                            </span>
                        </label>
                    ))}
                </div>

                {subjectError && (
                    <p className="text-xs text-red-500 mt-2">
                        {t('enroll.subjectError')}
                    </p>
                )}

                <p className="text-xs text-gray-500 mt-2">
                    {t('enroll.subjectHint')}
                </p>
            </div>

            {/* Schedule + Signature */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                <div>
                    <label className="block text-sm font-medium mb-1">
                        {t('enroll.schedule')} *
                    </label>
                    <input
                        name="schedule"
                        type="datetime-local"
                        required
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:border-secondary focus:outline-none"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1">
                        {t('enroll.signature')} *
                    </label>
                    <input
                        name="parent_signature"
                        type="text"
                        required
                        placeholder={t('enroll.signaturePlaceholder')}
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:border-secondary focus:outline-none"
                    />
                </div>
            </div>

            {/* Declaration */}
            <div className="mb-6">
                <label className="flex items-start gap-2 text-sm">
                    <input type="checkbox" name="parent_declaration" required />
                    <span>
                        {t('enroll.declaration')}
                    </span>
                </label>
            </div>

            {/* Submit */}
            <button
                disabled={loading}
                type="submit"
                className="w-full bg-secondary text-white py-3 rounded-lg font-semibold hover:bg-secondary/90 transition"
            >
                {loading ? t('enroll.sending') : t('enroll.submit')}
            </button>
        </form>
    );
};