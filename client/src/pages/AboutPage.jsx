function AboutPage() {
  return (
    <div className="stack about-page">
      <section className="card about-hero">
        <div className="about-hero__media">
          <img src="/assets/mghzayell.png" alt="Equipe Ghzaielle" />
        </div>
        <div className="about-hero__content">
          <span className="eyebrow">A propos</span>
          <h1>Mohamed Ghzaielle - Fondateur de Brik Ghzaielle Djerba</h1>
          <p>Ghzaielle fonde en 1987 a Houmt Souk Djerba.</p>
          <p>
            Originaires de l'ile de Djerba, nous portons en nous une passion profonde pour la gastronomie
            traditionnelle et la valorisation du patrimoine culinaire tunisien.
          </p>
        </div>
      </section>

      <section className="about-grid">
        <article className="card about-card">
          <h2>Notre histoire</h2>
          <p>
            Des notre plus jeune age, nous avons developpe un lien etroit avec l'art culinaire djerbien, notamment
            autour du celebre brik, veritable symbole de convivialite et d'identite. Inspires par des recettes
            familiales transmises de generation en generation, nous avons choisi de transformer cette passion en un
            projet concret, alliant tradition et modernite.
          </p>
        </article>
        <article className="card about-card">
          <h2>Notre vision</h2>
          <p>
            Notre parcours est guide par une vision claire : preserver l'authenticite du gout tout en innovant dans la
            maniere de le proposer. Grace a notre esprit entrepreneurial et a notre comprehension des nouvelles attentes
            du marche, nous avons cree Brik Ghzaielle Djerba, un concept qui valorise le savoir-faire artisanal local a
            travers une approche moderne et digitale.
          </p>
        </article>
        <article className="card about-card">
          <h2>Nos valeurs</h2>
          <p>A travers ce projet, nous ne proposons pas seulement un produit culinaire, mais une veritable identite de marque basee sur des valeurs fortes :</p>
          <p>- Transmission du patrimoine</p>
          <p>- Qualite et authenticite</p>
          <p>- Innovation et digitalisation</p>
        </article>
      </section>

      <section className="card about-card">
        <h2>Aujourd'hui</h2>
        <p>
          Aujourd'hui, notre initiative connait un succes croissant, attirant aussi bien une clientele locale
          qu'internationale, seduite par l'alliance entre tradition djerbienne et experience contemporaine.
        </p>
        <p>
          Brik Ghzaielle Djerba continue d'evoluer avec la meme mission : faire rayonner le gout authentique de Djerba
          a travers une experience moderne, accessible et memorable.
        </p>
      </section>
    </div>
  );
}

export default AboutPage;
