import { useEffect, useState } from "react";
import { useTranslation } from "../context/TranslationContext";
import { trackEvent } from "../helpers/analytics";

interface LanguageSwitcherProps {
    isMobile?: boolean;
}

export const LanguageSwitcher = ({ isMobile = false }: LanguageSwitcherProps) => {
    const { language, setLanguage, t } = useTranslation();

    const languages = [
        { code: "fr", label: t("nav.language.fr"), flag: "fi-fr" },
        { code: "en", label: t("nav.language.en"), flag: "fi-gb" },
        { code: "ar", label: t("nav.language.ar"), flag: "fi-sa" },
    ];

    useEffect(() => {
        document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    }, [language]);

    const changeLanguage = (lang) => {
        trackEvent('lang_change', 'engagement', lang);

        setLanguage(lang);
    };

    if (isMobile) {
        // Mobile: show all flags horizontally
        return (
            <div className="flex items-center gap-3 justify-start">
                {languages.map((lang) => (
                    <button
                        key={lang.code}
                        onClick={() => changeLanguage(lang.code)}
                        className={`p-1 rounded-full transition-transform hover:scale-110 ${language === lang.code ? "ring-2 ring-secondary" : ""
                            }`}
                    >
                        <span className={`fi ${lang.flag} w-8 h-8`} />
                        <span className="sr-only">{lang.label}</span>
                    </button>
                ))}
            </div>
        );
    }

    // Desktop: keep dropdown
    const [open, setOpen] = useState(false);

    const currentFlag = language === "fr" ? "fi-fr" : language === "en" ? "fi-gb" : "fi-sa";

    const getCurrentLabel = () => {
        switch (language) {
            case "fr":
                return t("nav.language.fr");
            case "en":
                return t("nav.language.en");
            case "ar":
                return t("nav.language.ar");
            default:
                return "Lang";
        }
    };

    return (
        <div className="relative">
            <button
                onClick={() => setOpen(!open)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition"
            >
                <span className={`fi ${currentFlag}`}></span>
                <span className="text-sm font-medium">{getCurrentLabel()}</span>
            </button>

            {open && (
                <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden z-50">
                    {languages.map((lang) => (
                        <button
                            key={lang.code}
                            onClick={() => {
                                changeLanguage(lang.code);
                                setOpen(false);
                            }}
                            className="flex items-center gap-3 w-full px-4 py-2 hover:bg-gray-100 text-sm"
                        >
                            <span className={`fi ${lang.flag}`}></span>
                            {lang.label}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};