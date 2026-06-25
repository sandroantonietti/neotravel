import styles from './UseCases.module.css'

const cases = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
    title: 'Entreprises',
    label: 'B2B',
    text: 'Séminaires d\'entreprise, conventions, team building hors site, navettes salariés, déplacements professionnels réguliers.',
    examples: ['Séminaires & conventions', 'Navettes inter-sites', 'Incentives & team building'],
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: 'Comités d\'entreprise',
    label: 'CE & CSE',
    text: 'Sorties culturelles, voyages de groupes, excursions saisonnières, week-ends en famille organisés par le CE.',
    examples: ['Sorties culturelles', 'Voyages de groupe', 'Week-ends festifs'],
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
    title: 'BDE & Associations',
    label: 'Étudiants',
    text: 'Soirées d\'intégration, week-ends BDE, voyages associatifs, tournois sportifs et déplacements culturels.',
    examples: ['Week-ends d\'intégration', 'Tournois sportifs', 'Voyages associatifs'],
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    title: 'Navettes événementielles',
    label: 'Événementiel',
    text: 'Mariages, galas, concerts, festivals, soirées privées. Transport retour sécurisé pour vos convives.',
    examples: ['Mariages & galas', 'Concerts & festivals', 'Navettes soirée/retour'],
  },
]

export default function UseCases() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <div className={styles.eyebrow}>Pour qui ?</div>
          <h2 className={styles.title}>Nous répondons à tous les besoins groupe</h2>
          <p className={styles.sub}>
            Entreprises, associations, collectivités ou particuliers - de 7 à 500 passagers, partout en France et en Europe.
          </p>
        </div>

        <div className={styles.grid}>
          {cases.map((c) => (
            <div key={c.title} className={styles.card}>
              <div className={styles.cardTop}>
                <div className={styles.iconWrap}>{c.icon}</div>
                <span className={styles.label}>{c.label}</span>
              </div>
              <h3 className={styles.cardTitle}>{c.title}</h3>
              <p className={styles.cardText}>{c.text}</p>
              <ul className={styles.examples}>
                {c.examples.map((e) => (
                  <li key={e} className={styles.example}>
                    <span className={styles.exampleDot} />
                    {e}
                  </li>
                ))}
              </ul>
              <a href="#chatbot" className={styles.cardLink}>
                Obtenir un devis
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
