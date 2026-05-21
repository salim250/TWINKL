import React, { useState } from 'react';
import { supabase } from '../lib/supabase';
import { Eye, EyeOff, X } from 'lucide-react';
import { useTranslation } from '../context/TranslationContext';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function LoginModal({ isOpen, onClose }: LoginModalProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);

  const { t } = useTranslation?.() || { t: (k: string) => k };

  if (!isOpen) return null;

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      setLoading(false);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-[100] flex items-center justify-center p-4 backdrop-blur-sm">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-md overflow-hidden animate-fade-in">
        <div className="flex justify-between items-center p-4 border-b border-gray-100 bg-gray-50">
          <h3 className="font-heading font-bold text-lg text-primary">
            {t('login.title') || 'Login'}
          </h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-800 transition-colors">
            <X size={20} />
          </button>
        </div>

        <div className="p-6">
          {error && (
            <div className="bg-red-50 text-red-600 p-3 rounded-md mb-4 text-sm font-body">
              {error}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4 font-body">
            <div>
              <label className="block text-sm font-medium text-text-dark mb-1">
                {t('login.email') || 'Email'}
              </label>
              <input
                type="email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-text-dark mb-1">
                {t('login.password') || 'Password'}
              </label>

              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-md focus:ring-primary focus:border-primary outline-none"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(prev => !prev)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-800"
                >
                  {showPassword ? (
                    /* eye-off */
                    <EyeOff size={20} />
                  ) : (
                    /* eye */
                    <Eye size={20} />
                  )}
                </button>
              </div>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-primary text-white py-2 rounded-md font-medium hover:bg-primary-dark transition-colors disabled:opacity-50 mt-4"
            >
              {loading ? (t('login.loading') || 'Logging in...') : (t('login.submit') || 'Log In')}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
