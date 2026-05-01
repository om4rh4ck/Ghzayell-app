import { useState } from "react";
import { useI18n } from "../hooks/useI18n.js";

const GlobeIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 4.5c4.4 0 8 3.4 8 7.5s-3.6 7.5-8 7.5-8-3.4-8-7.5 3.6-7.5 8-7.5Z" />
    <path d="M4.8 12h14.4M12 4.7c1.7 1.8 2.7 4.4 2.7 7.3s-1 5.5-2.7 7.3m0-14.6C10.3 6.5 9.3 9.1 9.3 12s1 5.5 2.7 7.3" />
  </svg>
);

function LanguageFab() {
  const { language, languages, setLanguage, t } = useI18n();
  const [isOpen, setIsOpen] = useState(false);
  const active = languages.find((entry) => entry.code === language) || languages[0];

  return (
    <div className={`language-fab ${isOpen ? "is-open" : ""}`}>
      {isOpen ? (
        <div className="language-fab__panel" role="listbox" aria-label={t("languageFab.title")}>
          {languages.map((entry) => (
            <button
              key={entry.code}
              type="button"
              className={`language-fab__option ${entry.code === language ? "is-active" : ""}`}
              onClick={() => {
                setLanguage(entry.code);
                setIsOpen(false);
              }}
            >
              <span className="language-fab__flag" aria-hidden="true">
                {entry.flag}
              </span>
              <span>{entry.label}</span>
            </button>
          ))}
        </div>
      ) : null}

      <button
        type="button"
        className="language-fab__trigger"
        aria-expanded={isOpen}
        aria-label={t("languageFab.label")}
        onClick={() => setIsOpen((current) => !current)}
      >
        <span className="language-fab__trigger-flag" aria-hidden="true">
          {active.flag}
        </span>
        <span className="language-fab__trigger-label">{t("languageFab.label")}</span>
        <span className="language-fab__trigger-icon" aria-hidden="true">
          <GlobeIcon />
        </span>
      </button>
    </div>
  );
}

export default LanguageFab;
