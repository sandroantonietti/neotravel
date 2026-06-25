import styles from './Testimonials.module.css'

const reviews = [
  {
    name: 'Marie L.',
    role: 'Responsable RH - Groupe industriel, 280 salariés',
    avatar: 'ML',
    rating: 5,
    text: "Service impeccable pour notre séminaire annuel à Deauville. Nous avions besoin de 2 autocars de 55 places avec des départs échelonnés depuis 3 sites différents. Tout a été géré avec une précision remarquable. Je recommande vivement, et nous renouvelons l'expérience l'année prochaine.",
    date: 'Mars 2025',
    badge: 'Avis Trusted Shops',
  },
  {
    name: 'Thomas R.',
    role: 'Président - Comité d\'Entreprise, secteur bancaire',
    avatar: 'TR',
    rating: 5,
    text: "Réponse ultra rapide : j'ai eu un conseiller au téléphone en moins d'une heure après ma demande en ligne. Le devis était clair, sans surprise, et le prix vraiment compétitif par rapport aux autres prestataires que j'avais contactés. Le minibus était propre, ponctuel, chauffeur au top.",
    date: 'Janvier 2025',
    badge: 'Avis Trusted Shops',
  },
  {
    name: 'Jean-Pierre M.',
    role: 'Directeur associatif - Association sportive régionale',
    avatar: 'JP',
    rating: 5,
    text: "Cela fait 4 ans que nous faisons appel à autocar-location.com pour nos déplacements en championnat. Fiabilité sans faille, itinéraires personnalisés selon nos matchs, et un interlocuteur qui connaît nos habitudes. C'est le genre de partenaire sur qui on peut vraiment compter.",
    date: 'Novembre 2024',
    badge: 'Avis Trusted Shops',
  },
]

function Stars({ count }: { count: number }) {
  return (
    <div className={styles.stars} aria-label={`Note ${count} sur 5`}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className={styles.section} id="temoignages">
      <div className={styles.inner}>
        <div className={styles.header}>
          <div className={styles.eyebrow}>Ils nous font confiance</div>
          <h2 className={styles.title}>Ce que disent nos clients</h2>
          <p className={styles.sub}>
            Des centaines d&apos;entreprises, comités d&apos;entreprise et associations nous font confiance chaque année.
          </p>
          <div className={styles.globalRating}>
            <Stars count={5} />
            <span className={styles.ratingText}>5/5 · Trusted Shops certifié</span>
          </div>
        </div>

        <div className={styles.grid}>
          {reviews.map((r) => (
            <div key={r.name} className={styles.card}>
              <div className={styles.cardTop}>
                <div className={styles.avatar}>{r.avatar}</div>
                <div>
                  <div className={styles.name}>{r.name}</div>
                  <div className={styles.role}>{r.role}</div>
                </div>
              </div>
              <Stars count={r.rating} />
              <p className={styles.text}>&ldquo;{r.text}&rdquo;</p>
              <div className={styles.cardBottom}>
                <span className={styles.badge}>
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {r.badge}
                </span>
                <span className={styles.date}>{r.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
