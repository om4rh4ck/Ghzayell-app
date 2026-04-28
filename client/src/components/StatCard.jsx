function StatCard({ label, value, accent }) {
  return (
    <article className={`stat-card ${accent || ""}`}>
      <span className="stat-card__label">{label}</span>
      <strong className="stat-card__value">{value}</strong>
    </article>
  );
}

export default StatCard;
