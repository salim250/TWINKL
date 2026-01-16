
import { useRef, useState } from 'react';

export const EnrollmentApplicationForm = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const [loading, setLoading] = useState(false);
    const [subjects, setSubjects] = useState<string[]>([]);
    const [subjectError, setSubjectError] = useState(false);

    const submitApplication = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formRef.current) return;

        setLoading(true);
        const formData = new FormData(formRef.current);

        try {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/api/mail/enrollment`, {
                method: 'POST',
                body: formData,
            });

            if (!res.ok) throw new Error();

            alert('Application submitted successfully!');
            //formRef.current.reset();
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                <div>
                    <label className="block text-sm font-medium mb-1">Student Full Name *</label>
                    <input
                        name="student_name"
                        type="text"
                        required
                        placeholder="Student Full Name"
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:border-secondary focus:outline-none"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1">Date of Birth *</label>
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
                <label className="block text-sm font-medium mb-2">Gender *</label>
                <div className="flex gap-6">
                    <label className="flex items-center gap-2">
                        <input type="radio" name="gender" value="Male" required />
                        Male
                    </label>
                    <label className="flex items-center gap-2">
                        <input type="radio" name="gender" value="Female" required />
                        Female
                    </label>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                <div>
                    <label className="block text-sm font-medium mb-1">Nationality *</label>
                    <input
                        name="nationality"
                        type="text"
                        required
                        placeholder="Nationality"
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:border-secondary focus:outline-none"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1">
                        Parent Name & Phone Number *
                    </label>
                    <input
                        name="parent_info"
                        type="text"
                        required
                        placeholder="Parent Name & Phone"
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:border-secondary focus:outline-none"
                    />
                </div>
            </div>


            {/* Program Selection */}
            <div className="mb-5">
                <label className="block text-sm font-medium mb-1">Program Selection *</label>
                <select
                    name="program"
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-white focus:border-secondary focus:outline-none"
                >
                    <option value="">Select educational system</option>
                    <option>Cambridge International</option>
                    <option>French System</option>
                    <option>Tunisian System</option>
                    <option>Canadian System</option>
                    <option>International Baccalaureate (IB)</option>
                </select>
            </div>

            <div className="mb-6">
                <label className="block text-sm font-medium mb-3">
                    Subjects of Interest *
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                    {[
                        'English',
                        'Mathematics',
                        'Sciences',
                        'ICT',
                        'Business',
                        'French',
                        'Global Perspectives',
                        'Other',
                    ].map((subject) => (
                        <label
                            key={subject}
                            className={`flex items-center gap-3 p-3 border rounded-lg cursor-pointer transition
        ${subjects.includes(subject)
                                    ? 'border-secondary bg-secondary/5'
                                    : 'border-gray-300 hover:border-secondary'}
      `}
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
                            <span className="text-sm text-text-dark">{subject}</span>
                        </label>
                    ))}
                </div>


                <p className="text-xs text-text-muted mt-2">
                    You may select one or more subjects
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                <div>
                    <label className="block text-sm font-medium mb-1">Preferred Schedule *</label>
                    <input
                        name="schedule"
                        type="datetime-local"
                        required
                        placeholder="Preferred Schedule"
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:border-secondary focus:outline-none"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1">
                        Parent Signature & Date *
                    </label>
                    <input
                        name="parent_signature"
                        type="text"
                        required
                        placeholder="Name & Date"
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:border-secondary focus:outline-none"
                    />
                </div>
            </div>


            {/* Declaration */}
            <div className="mb-6">
                <label className="flex items-start gap-2 text-sm">
                    <input type="checkbox" name="parent_declaration" required />
                    <span>
                        I confirm that all information provided is accurate and I agree to the
                        policies of TWINKL Education *
                    </span>
                </label>
            </div>


            <button disabled={loading}
                type="submit"
                className="w-full bg-secondary text-white py-3 rounded-lg font-semibold hover:bg-secondary/90 transition">
                {loading ? 'Sending...' : 'Submit Enrollment'}
            </button>
        </form>
    );
};