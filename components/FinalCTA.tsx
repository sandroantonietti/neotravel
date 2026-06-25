import styles from './FinalCTA.module.css'

export default function FinalCTA() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.badge}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="20 6 9 17 4 12" />
          </svg>
          Devis gratuit &amp; sans engagement
        </div>

        <h2 className={styles.title}>
          Prêt à organiser votre prochain déplacement de groupe ?
        </h2>
        <p className={styles.sub}>
          Décrivez votre besoin en 2 minutes. Notre assistant prépare votre dossier, un conseiller vous rappelle sous 2h ouvrables avec une proposition sur-mesure.
        </p>

        <div className={styles.ctas}>
          <a href="#chatbot" className={styles.ctaPrimary}>
            Obtenir mon devis gratuit
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
          <a href="tel:+33980400484" className={styles.ctaPhone}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.08 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16.92z" />
            </svg>
            09 80 40 04 84
          </a>
        </div>

        <div className={styles.trust}>
          <span className={styles.trustItem}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
            Trusted Shops 5/5
          </span>
          <span className={styles.trustSep}>·</span>
          <span className={styles.trustItem}>Assurance 10M EUR</span>
          <span className={styles.trustSep}>·</span>
          <span className={styles.trustItem}>Réponse sous 2h</span>
          <span className={styles.trustSep}>·</span>
          <span className={styles.trustItem}>15+ ans d&apos;expérience</span>
        </div>
      </div>
    </section>
  )
}
