import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { useAuth } from '../context/AuthContext';
import { ChevronLeft, ChevronRight, FileText, Download, Trash2, Calendar as CalendarIcon, Clock, X, Plus, SquarePen } from 'lucide-react';
import { useTranslation } from '../context/TranslationContext';

interface Schedule {
  id: string;
  title: string;
  class_name: string;
  lesson_date: string;
  start_time: string;
  end_time: string;
  resource_path: string | null;
  resource_name: string | null;
  created_by: string;
}

export function SchedulesPage() {
  const { user } = useAuth();
  const [schedules, setSchedules] = useState<Schedule[]>([]);
  const [loading, setLoading] = useState(true);

  const { t } = useTranslation?.() || { t: (key: string) => key };

  const [currentDate, setCurrentDate] = useState(new Date());

  const [isFormModalOpen, setIsFormModalOpen] = useState(false);
  const [selectedSchedule, setSelectedSchedule] = useState<Schedule | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);

  const [id, setId] = useState<string | null>(null);
  const [title, setTitle] = useState('');
  const [className, setClassName] = useState('');
  const [lessonDate, setLessonDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [isEditMode, setIsEditMode] = useState(false);
  const [existingFileName, setExistingFileName] = useState<string | null>(null);
  const [existingFilePath, setExistingFilePath] = useState<string | null>(null);
  const { language } = useTranslation();

  const isOwner = (schedule: Schedule) => {
    return user && (schedule as Schedule).created_by === user.id;
  };

  // fetch schedules from supabase and sort by date and time
  const fetchSchedules = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('schedules')
      .select('*')
      .order('start_time', { ascending: true });

    if (!error && data) {
      setSchedules(data);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchSchedules();
  }, []);

  const handleSubmitSchedule = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    if (!user) return;
    // Validation start/end time
    if (!startTime || !endTime) {
      setErrorMsg(t('schedules.form.errors.timeRequired'));
      setUploading(false);
      return;
    }

    // compare times safely
    const [sh, sm] = startTime.split(':').map(Number);
    const [eh, em] = endTime.split(':').map(Number);

    const start = new Date();
    start.setHours(sh, sm, 0, 0);

    const end = new Date();
    end.setHours(eh, em, 0, 0);

    if (end <= start) {
      setErrorMsg(t('schedules.form.errors.endTimeGreater'));
      setUploading(false);
      return;
    }
    setUploading(true);

    let resource_path = selectedSchedule?.resource_path || null;
    let resource_name = selectedSchedule?.resource_name || null;

    if (file) {
      if (existingFilePath) {
        await supabase.storage
          .from('resources')
          .remove([existingFilePath]);
      }
      const fileExt = file.name.split('.').pop();
      const fileName = `${Math.random().toString(36).substring(2)}.${fileExt}`;
      const filePath = `lessons/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('resources')
        .upload(filePath, file);

      if (uploadError) {
        setErrorMsg('Failed to upload document: ' + uploadError.message);
        setUploading(false);
        return;
      }

      resource_path = filePath;
      resource_name = file.name;
    }

    const { error: dbError } = isEditMode && id ? 
      await supabase
      .from('schedules')
      .update({
        title,
        class_name: className,
        lesson_date: lessonDate,
        start_time: startTime,
        end_time: endTime,
        resource_path,
        resource_name
      })
      .eq('id', id) : 
      await supabase.from('schedules').insert([
      {
        title,
        class_name: className,
        lesson_date: lessonDate,
        start_time: startTime,
        end_time: endTime,
        resource_path,
        resource_name,
        created_by: user.id
      }
    ]);

    if (!dbError) {
      setId(null);
      setTitle('');
      setClassName('');
      setLessonDate('');
      setStartTime('');
      setEndTime('');
      setFile(null);
      setIsFormModalOpen(false);
      setIsEditMode(false);
      setExistingFileName(null);
      setExistingFilePath(null);
      fetchSchedules();
    } else {
      setErrorMsg(dbError.message || ( isEditMode && id ? 'Error updating schedule.' : 'Error adding schedule.' ));
    }

    setUploading(false);
  };

  const handleDelete = async (id: string, resourcePath: string | null) => {
    if (resourcePath) {
      await supabase.storage.from('resources').remove([resourcePath]);
    }
    const { error } = await supabase.from('schedules').delete().eq('id', id);
    if (!error) {
      setSelectedSchedule(null);
      fetchSchedules();
    }
  };

  const getPublicFileUrl = (path: string) => {
    const { data } = supabase.storage.from('resources').getPublicUrl(path);
    return data.publicUrl;
  };

  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();

  const changeMonth = (offset: number) => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + offset, 1));
  };

  const monthNames = [
    t('calendar.months.january') || "January", t('calendar.months.february') || "February",
    t('calendar.months.march') || "March", t('calendar.months.april') || "April",
    t('calendar.months.may') || "May", t('calendar.months.june') || "June",
    t('calendar.months.july') || "July", t('calendar.months.august') || "August",
    t('calendar.months.september') || "September", t('calendar.months.october') || "October",
    t('calendar.months.november') || "November", t('calendar.months.december') || "December"
  ];

  const daysOfWeek = [
    t('calendar.days.sun') || "Sun", t('calendar.days.mon') || "Mon",
    t('calendar.days.tue') || "Tue", t('calendar.days.wed') || "Wed",
    t('calendar.days.thu') || "Thu", t('calendar.days.fri') || "Fri",
    t('calendar.days.sat') || "Sat"
  ];

  const openEditModal = (schedule: Schedule) => {
    setSelectedSchedule(null);
    setId(schedule.id);
    setTitle(schedule.title);
    setClassName(schedule.class_name);
    setLessonDate(schedule.lesson_date);
    setStartTime(schedule.start_time);
    setEndTime(schedule.end_time);
    setExistingFileName(schedule.resource_name);
    setExistingFilePath(schedule.resource_path);
    setFile(null);
    setIsFormModalOpen(true);
    setIsEditMode(true);
  };

  const formatTime = (time: string, locale: string) => {
    const [h, m] = time.split(':').map(Number);
    const date = new Date();
    date.setHours(h, m, 0, 0);

    return new Intl.DateTimeFormat(locale, {
      hour: '2-digit',
      minute: '2-digit',
    }).format(date);
  };

  return (
    <div className="max-w-content mx-auto px-2 sm:px-6 lg:px-8 py-24 font-body">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4 px-2 sm:px-0">
        <div>
          <h1 className="text-3xl sm:text-4xl font-heading font-bold text-primary mb-2">
            {t('schedules.title') || 'Class Calendar'}
          </h1>
          <p className="text-sm sm:text-base text-text-muted">
            {t('schedules.subtitle') || 'View upcoming lessons and download course materials.'}
          </p>
        </div>
        {user && (
          <button
            onClick={() => setIsFormModalOpen(true)}
            className="flex items-center gap-2 bg-secondary text-white px-5 py-2.5 rounded-lg hover:bg-secondary-light hover:text-secondary border border-transparent hover:border-secondary transition-all font-medium shadow-sm transform hover:scale-105 w-full sm:w-auto justify-center"
          >
            <Plus size={20} />
            {t('schedules.addLesson') || 'Add Lesson'}
          </button>
        )}
      </div>

      <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
        {/* Responsive Header */}
        <div className="flex justify-between items-center p-3 sm:p-5 bg-background-light border-b border-gray-100">
          <button onClick={() => changeMonth(-1)} className="p-2 text-primary hover:bg-white hover:shadow-sm rounded-full transition-all">
            <ChevronLeft size={24} className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          <h2 className="text-xl sm:text-2xl font-heading font-bold text-text-dark">
            {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
          </h2>
          <button onClick={() => changeMonth(1)} className="p-2 text-primary hover:bg-white hover:shadow-sm rounded-full transition-all">
            <ChevronRight size={24} className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

        {/* Responsive Days Header */}
        <div className="grid grid-cols-7 border-b border-gray-100 bg-white">
          {daysOfWeek.map(day => (
            <div key={day} className="py-2 sm:py-3 text-center text-[10px] sm:text-sm font-semibold uppercase tracking-tight sm:tracking-wider text-text-muted border-r border-gray-100 last:border-r-0 truncate px-0.5">
              {day}
            </div>
          ))}
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-7 bg-gray-100 gap-[1px]">
          {Array.from({ length: firstDayOfMonth }).map((_, i) => (
            <div key={`empty-${i}`} className="bg-background-light min-h-[90px] sm:min-h-[140px] p-1 sm:p-2 opacity-50"></div>
          ))}

          {Array.from({ length: daysInMonth }).map((_, i) => {
            const day = i + 1;
            const dateStr = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
            const daySchedules = schedules.filter(s => s.lesson_date === dateStr);
            const isToday = dateStr === new Date().toISOString().split('T')[0];

            return (
              <div key={day} className={`bg-white min-h-[90px] sm:min-h-[140px] p-1 sm:p-2 hover:bg-gray-50 transition-colors relative group ${isToday ? 'bg-primary/5' : ''}`}>
                <div className="flex justify-center sm:justify-start">
                  <div className={`text-xs sm:text-sm font-medium mb-1 sm:mb-2 w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center rounded-full ${isToday ? 'bg-primary text-white shadow-md' : 'text-text-dark'}`}>
                    {day}
                  </div>
                </div>
                {/* Scrollable Event Area */}
                <div className="space-y-1 sm:space-y-1.5 h-[calc(100%-1.75rem)] sm:h-[calc(100%-2.5rem)] overflow-y-auto pr-0.5 sm:pr-1 custom-scrollbar">
                  {daySchedules.map(schedule => (
                    <div
                      key={schedule.id}
                      onClick={() => setSelectedSchedule(schedule)}
                      className="text-[9px] sm:text-xs bg-white text-text-dark p-1 sm:p-2 rounded sm:rounded-md cursor-pointer hover:border-primary transition-all border border-gray-200 shadow-sm flex flex-col gap-0.5 sm:gap-1 group/item"
                    >
                      <span className="font-semibold text-primary truncate leading-tight group-hover/item:text-primary-dark text-center sm:text-left">
                        {schedule.title}
                      </span>
                      {/* Hide time on mobile to save vertical space and prevent overlapping */}
                      <div className="hidden sm:flex items-center gap-1 text-text-muted">
                        <Clock size={10} className="shrink-0" />
                        <span className="truncate">{formatTime(schedule.start_time, language)}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Forms and Modals Remain the Same ... */}
      {isFormModalOpen && user && (
        <div className="fixed inset-0 bg-black/50 z-[100] flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden animate-fade-in max-h-[90vh] flex flex-col">
            <div className="flex justify-between items-center p-4 sm:p-5 border-b border-gray-100 bg-background-light shrink-0">
              <h3 className="font-heading font-bold text-lg sm:text-xl text-primary">
                { isEditMode && id ? t('schedules.editScheduleLesson') || 'Edit Scheduled Lesson' : t('schedules.scheduleLesson') || 'Schedule a New Lesson'}
              </h3>
              <button onClick={() => setIsFormModalOpen(false)} className="text-text-muted hover:text-text-dark transition-colors p-1">
                <X size={24} />
              </button>
            </div>

            <div className="p-4 sm:p-6 overflow-y-auto">
              {errorMsg && (
                <div className="bg-red-50 text-red-600 p-3 rounded-lg mb-4 sm:mb-6 text-sm font-medium border border-red-100">
                  {errorMsg}
                </div>
              )}

              <form onSubmit={handleSubmitSchedule} className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
                <div>
                  <label className="block text-sm font-medium text-text-dark mb-1">{t('schedules.form.title') || 'Lesson Title'}</label>
                  <input type="text" placeholder={t('schedules.form.titlePlaceholder') || 'e.g. Algebra'} required className="w-full border border-gray-300 px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-sm sm:text-base" value={title} onChange={e => setTitle(e.target.value)} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-dark mb-1">{t('schedules.form.className') || 'Class Name'}</label>
                  <input type="text" placeholder={t('schedules.form.classPlaceholder') || 'e.g. Grade 10 A'} required className="w-full border border-gray-300 px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-sm sm:text-base" value={className} onChange={e => setClassName(e.target.value)} />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-text-dark mb-1">{t('schedules.form.date') || 'Date'}</label>
                  <input type="date" required className="w-full border border-gray-300 px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-sm sm:text-base" value={lessonDate} onChange={e => setLessonDate(e.target.value)} />
                </div>
                <div className="flex gap-3 md:col-span-2">
                  <div className="w-full">
                    <label className="block text-sm font-medium text-text-dark mb-1">{t('schedules.form.startTime') || 'Start Time'}</label>
                    <input type="time" required className="w-full border border-gray-300 px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-sm sm:text-base" value={startTime} onChange={e => setStartTime(e.target.value)} />
                  </div>
                  <div className="w-full">
                    <label className="block text-sm font-medium text-text-dark mb-1">{t('schedules.form.endTime') || 'End Time'}</label>
                    <input type="time" required className="w-full border border-gray-300 px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-sm sm:text-base" value={endTime} onChange={e => setEndTime(e.target.value)} />
                  </div>
                </div>

                <div className="col-span-1 md:col-span-2 bg-background-light p-3 sm:p-4 rounded-xl border border-gray-100">
                  <label className="block text-sm font-medium text-text-dark mb-2">{t('schedules.form.attachDocument') || 'Attach Document (Optional)'}</label>
                  <input
                    type="file"
                    className="block w-full text-xs sm:text-sm text-text-muted file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-xs sm:file:text-sm file:font-semibold file:bg-primary file:text-white hover:file:bg-primary/90 cursor-pointer"
                    onChange={e => setFile(e.target.files ? e.target.files[0] : null)}
                  />
                  {isEditMode && existingFileName && (
                    <div className="mt-2 text-sm text-text-muted flex items-center gap-2">
                      <FileText size={14} />
                      <span>Current file: {existingFileName}</span>
                    </div>
                  )}
                </div>

                <div className="col-span-1 md:col-span-2 flex flex-col-reverse sm:flex-row justify-end mt-2 gap-3 sm:gap-0">
                  <button onClick={() => setIsFormModalOpen(false)} type="button" className="sm:mr-3 px-6 py-2.5 rounded-lg font-medium text-text-muted hover:bg-gray-100 sm:hover:bg-transparent hover:text-text-dark transition-colors w-full sm:w-auto">
                    {t('schedules.form.cancel') || 'Cancel'}
                  </button>
                  <button type="submit" disabled={uploading} className="bg-primary text-white px-8 py-2.5 rounded-lg font-medium hover:bg-primary/90 transition-all disabled:opacity-50 shadow-md w-full sm:w-auto">
                    {uploading ? (t('schedules.form.saving') || 'Saving & Uploading...') : (t('schedules.form.save') || 'Save Lesson')}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {selectedSchedule && (
        <div className="fixed inset-0 bg-black/50 z-[100] flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-fade-in">
            <div className="flex justify-between items-center p-4 sm:p-5 border-b border-gray-100 bg-background-light">
              <h3 className="font-heading font-bold text-lg sm:text-xl text-primary">{t('schedules.details.title') || 'Lesson Details'}</h3>
              <button onClick={() => setSelectedSchedule(null)} className="text-text-muted hover:text-text-dark transition-colors p-1">
                <X size={24} className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>

            <div className="p-4 sm:p-6 space-y-4 sm:space-y-5">
              <div>
                <h4 className="text-xl sm:text-2xl font-heading font-bold text-text-dark mb-1">{selectedSchedule.title}</h4>
                <p className="text-secondary font-medium text-sm sm:text-base">{selectedSchedule.class_name}</p>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 text-text-dark bg-background-light p-3 sm:p-4 rounded-xl border border-gray-100 text-sm sm:text-base">
                <div className="flex items-center gap-2">
                  <CalendarIcon size={18} className="text-primary shrink-0" />
                  <span className="font-medium">{selectedSchedule.lesson_date}</span>
                </div>
                <div className="hidden sm:block w-px h-5 bg-gray-300"></div>
                <div className="flex items-center gap-2">
                  <Clock size={18} className="text-primary shrink-0" />
                  <span className="font-medium">{formatTime(selectedSchedule.start_time, language)} - {formatTime(selectedSchedule.end_time, language)}</span>
                </div>
              </div>

              {selectedSchedule.resource_path && (
                <div className="pt-2">
                  <p className="text-xs sm:text-sm font-semibold text-text-muted mb-2 uppercase tracking-wider">{t('schedules.details.attachedResource') || 'Attached Resource'}</p>
                  <a
                    href={getPublicFileUrl(selectedSchedule.resource_path)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 sm:p-4 bg-secondary-light/30 rounded-xl hover:bg-secondary-light/60 transition-all group border border-secondary-light"
                  >
                    <div className="flex items-center gap-3 overflow-hidden">
                      <div className="bg-white p-2 rounded-lg shadow-sm">
                        <FileText size={20} className="text-secondary shrink-0" />
                      </div>
                      <span className="text-text-dark font-medium text-sm sm:text-base truncate">
                        {selectedSchedule.resource_name}
                      </span>
                    </div>
                    <Download size={20} className="text-secondary opacity-50 group-hover:opacity-100 transition-opacity shrink-0" />
                  </a>
                </div>
              )}
            </div>

            {user && isOwner(selectedSchedule) && (
              <div className="p-4 sm:p-5 bg-background-light border-t border-gray-100 flex justify-end">
                <button
                  onClick={() => openEditModal(selectedSchedule)}
                  className="w-full sm:w-auto flex justify-center items-center gap-2 text-blue-600 hover:bg-blue-50 px-5 py-2.5 rounded-lg transition-colors text-sm font-medium border border-transparent hover:border-blue-100"
                >
                  <SquarePen size={18} /> {t('schedules.details.edit') || 'Edit Lesson'}
                </button>
                <button
                  onClick={() => handleDelete(selectedSchedule.id, selectedSchedule.resource_path)}
                  className="w-full sm:w-auto flex justify-center items-center gap-2 text-red-600 hover:bg-red-50 px-5 py-2.5 rounded-lg transition-colors text-sm font-medium border border-transparent hover:border-red-100"
                >
                  <Trash2 size={18} /> {t('schedules.details.delete') || 'Delete Lesson'}
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
