import styles from './FAQ.module.css'

const items = [
  {
    q: 'Comment fonctionne le processus de devis ?',
    a: "Décrivez votre besoin via notre assistant en ligne. Un conseiller analyse votre demande, sélectionne le prestataire adapté et vous rappelle dans les 2 heures ouvrables avec une proposition personnalisée. Aucun automatisme : chaque devis est traité par un humain.",
  },
  {
    q: 'Pourquoi n\'y a-t-il pas de tarif en ligne ?',
    a: "Le prix d'un transport de groupe dépend de nombreux paramètres : distances, type de véhicule, date, disponibilités des prestataires locaux. Une tarification automatique serait inexacte ou trompeuse. Nous préférons vous proposer un prix juste, validé par un expert.",
  },
  {
    q: 'Quels types de groupes acceptez-vous ?',
    a: "Nous traitons toutes les demandes de groupe : entreprises, comités d'entreprise, associations, collectivités, groupes scolaires, événements privés. De 7 à 500 passagers, en France et en Europe.",
  },
  {
    q: 'Quel est le délai de réponse garanti ?',
    a: "Nous nous engageons à vous rappeler dans les 2 heures ouvrables suivant votre demande. En dehors des horaires de bureau, votre demande est traitée dès l'ouverture le lendemain matin.",
  },
  {
    q: 'Peut-on personnaliser l\'itinéraire et les arrêts ?',
    a: "Oui, pleinement. Chaque devis est construit sur mesure selon votre itinéraire exact, vos points de ramassage, vos horaires et vos contraintes particulières. Aucun trajet type.",
  },
  {
    q: 'Vos prestataires sont-ils assurés et certifiés ?',
    a: "Tous nos partenaires transporteurs disposent d'une assurance responsabilité civile professionnelle de 10 millions d'euros minimum. Ils sont sélectionnés selon des critères stricts de fiabilité, de sécurité et de qualité de service.",
  },
]

export default function FAQ() {
  return (
    <section className={styles.section} id="faq">
      <div className={styles.inner}>
        <div className={styles.header}>
          <div className={styles.eyebrow}>Questions fréquentes</div>
          <h2 className={styles.title}>Tout ce que vous devez savoir</h2>
          <p className={styles.sub}>
            Une question ? Consultez notre FAQ ou contactez directement un conseiller.
          </p>
        </div>

        <div className={styles.list}>
          {items.map((item) => (
            <details key={item.q} className={styles.item}>
              <summary className={styles.question}>
                <span>{item.q}</span>
                <span className={styles.icon} aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </span>
              </summary>
              <p className={styles.answer}>{item.a}</p>
            </details>
          ))}
        </div>

        <div className={styles.contact}>
          <p>Vous ne trouvez pas la réponse à votre question ?</p>
          <a href="tel:+33980400484" className={styles.contactLink}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.08 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16.92z" />
            </svg>
            Appelez-nous : 09 80 40 04 84
          </a>
        </div>
      </div>
    </section>
  )
}
