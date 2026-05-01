import { useI18n } from "../hooks/useI18n.js";

const icons = {
  success: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m7.5 12.5 2.8 2.8 6.2-6.3" />
      <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" />
    </svg>
  ),
  error: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 8v5.2" />
      <path d="M12 16.7h.01" />
      <path d="M10.3 4.8 4.9 14a2 2 0 0 0 1.7 3h10.8a2 2 0 0 0 1.7-3l-5.4-9.2a2 2 0 0 0-3.4 0Z" />
    </svg>
  ),
  info: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 10.2v6" />
      <path d="M12 7.3h.01" />
      <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" />
    </svg>
  ),
  reward: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 4.2 14.2 8.8l5 .7-3.6 3.5.9 5-4.5-2.4-4.5 2.4.9-5-3.6-3.5 5-.7L12 4.2Z" />
    </svg>
  )
};

function StatusNotice({ variant = "info", title, message, onClose }) {
  const { t } = useI18n();

  return (
    <div className={`status-notice status-notice--${variant}`}>
      <span className="status-notice__icon" aria-hidden="true">
        {icons[variant] || icons.info}
      </span>
      <div className="status-notice__content">
        <strong>{title}</strong>
        <p>{message}</p>
      </div>
      {onClose ? (
        <button
          type="button"
          className="status-notice__close"
          aria-label={t("statusNotice.close")}
          onClick={onClose}
        >
          x
        </button>
      ) : null}
    </div>
  );
}

export default StatusNotice;
