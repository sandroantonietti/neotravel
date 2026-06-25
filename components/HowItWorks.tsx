import styles from './HowItWorks.module.css'

const steps = [
  {
    number: '01',
    title: 'Décrivez votre trajet',
    text: "Notre assistant IA collecte les informations essentielles : type de trajet, villes, dates, nombre de passagers. Rapide, simple, sans formulaire complexe.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Validation commerciale',
    text: "Un conseiller expert analyse votre demande, valide les contraintes techniques et sélectionne le véhicule le mieux adapté à votre groupe.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.08 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16.92z" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Votre devis sur-mesure',
    text: "Vous recevez une proposition personnalisée avec rappel commercial rapide. Tarif transparent, véhicule adapté, prestataire vérifié. Aucune mauvaise surprise.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
  },
]

export default function HowItWorks() {
  return (
    <section className={styles.section} id="comment-ca-marche">
      <div className={styles.inner}>
        <div className={styles.header}>
          <div className={styles.eyebrow}>Processus simple</div>
          <h2 className={styles.title}>Comment ça marche ?</h2>
          <p className={styles.sub}>
            De la demande au devis finalisé, notre processus est conçu pour être rapide, transparent et sans friction.
          </p>
        </div>

        <div className={styles.steps}>
          {steps.map((step, i) => (
            <div key={step.number} className={styles.step}>
              <div className={styles.stepLeft}>
                <div className={styles.stepNumber}>{step.number}</div>
                {i < steps.length - 1 && <div className={styles.connector} />}
              </div>
              <div className={styles.stepCard}>
                <div className={styles.stepIcon}>{step.icon}</div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepText}>{step.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.cta}>
          <a href="#chatbot" className={styles.ctaBtn}>
            Démarrer mon devis gratuit
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
