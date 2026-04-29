function CheckCircleIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" />
      <path d="m8.5 12.4 2.3 2.3 4.7-4.8" />
    </svg>
  );
}

function AlertIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3.8 21 19.2a1 1 0 0 1-.9 1.5H3.9a1 1 0 0 1-.9-1.5L12 3.8Z" />
      <path d="M12 9v4.7" />
      <path d="M12 17.3h.01" />
    </svg>
  );
}

function SparkIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3.5 14.7 9l6 .9-4.3 4.2 1 6-5.4-2.9-5.4 2.9 1-6-4.3-4.2 6-.9L12 3.5Z" />
    </svg>
  );
}

function InfoIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" />
      <path d="M12 10.3v5.2" />
      <path d="M12 7.4h.01" />
    </svg>
  );
}

const variantConfig = {
  success: { icon: CheckCircleIcon, className: "status-notice--success" },
  error: { icon: AlertIcon, className: "status-notice--error" },
  reward: { icon: SparkIcon, className: "status-notice--reward" },
  info: { icon: InfoIcon, className: "status-notice--info" }
};

function StatusNotice({ variant = "info", title, message, onClose }) {
  const resolved = variantConfig[variant] || variantConfig.info;
  const Icon = resolved.icon;

  return (
    <article className={`status-notice ${resolved.className}`} role="status" aria-live="polite">
      <span className="status-notice__icon">
        <Icon />
      </span>
      <div className="status-notice__content">
        {title ? <strong>{title}</strong> : null}
        <p>{message}</p>
      </div>
      {onClose ? (
        <button type="button" className="status-notice__close" onClick={onClose} aria-label="Fermer la notification">
          ×
        </button>
      ) : null}
    </article>
  );
}

export default StatusNotice;
