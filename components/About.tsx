import styles from './About.module.css'

const stats = [
  { number: '15+', label: "Ans d'expérience", sub: "Fondé en 2010" },
  { number: '500', label: 'Passagers max', sub: "Tous types de groupes" },
  { number: '5', label: 'Commerciaux dédiés', sub: "Réponse sous 2h" },
  { number: '100%', label: 'Devis personnalisés', sub: "Aucun tarif automatique" },
]

const commitments = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: 'Prestataires certifiés',
    text: 'Nous travaillons exclusivement avec des transporteurs agréés, assurés et régulièrement audités.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
    ),
    title: 'Transparence totale',
    text: 'Devis clair, sans frais cachés. Vous savez exactement ce que vous payez avant toute confirmation.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: 'Accompagnement humain',
    text: 'Un interlocuteur unique suit votre dossier de A à Z. Pas de bot, pas de formulaire, un vrai conseiller.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    title: 'Meilleur rapport qualité-prix',
    text: 'Notre réseau de partenaires nous permet de proposer des tarifs compétitifs sur toutes les destinations.',
  },
]

export default function About() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        {/* Stats band */}
        <div className={styles.statsGrid}>
          {stats.map((s) => (
            <div key={s.label} className={styles.statCard}>
              <div className={styles.statNumber}>{s.number}</div>
              <div className={styles.statLabel}>{s.label}</div>
              <div className={styles.statSub}>{s.sub}</div>
            </div>
          ))}
        </div>

        {/* Commitments */}
        <div className={styles.commitHeader}>
          <div className={styles.eyebrow}>Nos engagements</div>
          <h2 className={styles.title}>Pourquoi choisir autocar-location.com ?</h2>
          <p className={styles.sub}>
            Intermédiaire transport depuis 2010, basés à Levallois-Perret. Nous coordonnons les meilleurs prestataires transporteurs partout en France.
          </p>
        </div>

        <div className={styles.commitGrid}>
          {commitments.map((c) => (
            <div key={c.title} className={styles.commitCard}>
              <div className={styles.commitIcon}>{c.icon}</div>
              <h3 className={styles.commitTitle}>{c.title}</h3>
              <p className={styles.commitText}>{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
