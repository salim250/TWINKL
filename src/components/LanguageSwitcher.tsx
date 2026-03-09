import { useState } from "react";
import { useTranslation } from "../context/TranslationContext";

export const LanguageSwitcher = () => {
    const { language, setLanguage, t } = useTranslation();
    const [open, setOpen] = useState(false);

    const changeLanguage = (lang: "fr" | "en") => {
        setLanguage(lang);
        setOpen(false);
    };

    const currentFlag = language === "fr" ? "fi-fr" : "fi-gb";

    return (
        <div className="relative">

            {/* Current language button */}
            <button
                onClick={() => setOpen(!open)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition"
            >
                <span className={`fi ${currentFlag}`}></span>
                <span className="text-sm font-medium">
                    {language === "fr" ? t("nav.language.fr") : t("nav.language.en")}
                </span>
            </button>

            {/* Dropdown */}
            {open && (
                <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden z-50">

                    <button
                        onClick={() => changeLanguage("fr")}
                        className="flex items-center gap-3 w-full px-4 py-2 hover:bg-gray-100 text-sm"
                    >
                        <span className="fi fi-fr"></span>
                        {t("nav.language.fr")}
                    </button>

                    <button
                        onClick={() => changeLanguage("en")}
                        className="flex items-center gap-3 w-full px-4 py-2 hover:bg-gray-100 text-sm"
                    >
                        <span className="fi fi-gb"></span>
                        {t("nav.language.en")}
                    </button>

                </div>
            )}
        </div>
    );
};