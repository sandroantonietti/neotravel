import styles from './Reassurance.module.css'

const items = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    tag: 'Confiance',
    title: 'Trusted Shops 5/5',
    text: 'Avis certifiés et vérifiés par Trusted Shops. Des centaines de clients satisfaits en témoignent.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    tag: 'Sécurité',
    title: 'Assurance 10M EUR',
    text: 'Tous nos prestataires transporteurs disposent d\'une couverture professionnelle de 10 millions d\'euros.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    tag: 'Réactivité',
    title: 'Réponse sous 2h',
    text: 'Un commercial dédié traite votre demande et vous rappelle dans les 2 heures ouvrables.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="20 6 9 17 4 12" />
      </svg>
    ),
    tag: 'Sans risque',
    title: 'Devis 100% gratuit',
    text: 'Aucun engagement, aucun frais. Votre devis est entièrement personnalisé et sans contrainte.',
  },
]

export default function Reassurance() {
  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        {items.map((item) => (
          <div key={item.title} className={styles.card}>
            <div className={styles.iconWrap}>{item.icon}</div>
            <div className={styles.tag}>{item.tag}</div>
            <div className={styles.title}>{item.title}</div>
            <p className={styles.text}>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
