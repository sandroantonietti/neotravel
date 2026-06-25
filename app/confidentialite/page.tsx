import Header from '@/components/Header'
import Footer from '@/components/Footer'
import styles from '../legal.module.css'

export const metadata = {
  title: 'Politique de confidentialité - NeoTravel',
  robots: 'noindex',
}

export default function Confidentialite() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <div className={styles.wrapper}>
          <h1 className={styles.title}>Politique de confidentialité</h1>
          <p className={styles.updated}>Dernière mise à jour : juin 2026</p>

          <div className={styles.section}>
            <h2>1. Responsable du traitement</h2>
            <p>
              Le responsable du traitement des données à caractère personnel est :
            </p>
            <div className={styles.highlight}>
              <p>
                <strong style={{ color: 'var(--white)' }}>NeoTravel SAS</strong><br />
                55 Rue Raspail, 92300 Levallois-Perret<br />
                E-mail : <a href="mailto:helloneotravel@gmail.com" style={{ color: 'var(--accent)' }}>helloneotravel@gmail.com</a><br />
                Téléphone : <a href="tel:+33980400484" style={{ color: 'var(--accent)' }}>09 80 40 04 84</a>
              </p>
            </div>
          </div>

          <hr className={styles.divider} />

          <div className={styles.section}>
            <h2>2. Données collectées et finalités</h2>
            <p>
              Dans le cadre de votre demande de devis via notre assistant en ligne, nous
              collectons les informations que vous nous communiquez librement :
            </p>
            <ul>
              <li>Nom, prénom, raison sociale</li>
              <li>Adresse e-mail et numéro de téléphone</li>
              <li>Détails du projet de transport (dates, destination, nombre de passagers)</li>
              <li>Adresse IP et identifiant de session (données techniques)</li>
            </ul>
            <p>Ces données sont traitées aux fins suivantes :</p>
            <ul>
              <li>Traitement et suivi de votre demande de devis</li>
              <li>Émission d&apos;une proposition commerciale personnalisée</li>
              <li>Gestion de la relation commerciale</li>
              <li>Amélioration de nos services</li>
            </ul>
          </div>

          <hr className={styles.divider} />

          <div className={styles.section}>
            <h2>3. Base légale des traitements</h2>
            <ul>
              <li>
                <strong style={{ color: 'var(--white)' }}>Exécution de mesures précontractuelles</strong> (art. 6.1.b RGPD) :
                traitement de votre demande de devis.
              </li>
              <li>
                <strong style={{ color: 'var(--white)' }}>Intérêt légitime</strong> (art. 6.1.f RGPD) :
                amélioration de nos services et prévention de la fraude.
              </li>
              <li>
                <strong style={{ color: 'var(--white)' }}>Consentement</strong> (art. 6.1.a RGPD) :
                envoi de communications commerciales, si vous y avez consenti.
              </li>
            </ul>
          </div>

          <hr className={styles.divider} />

          <div className={styles.section}>
            <h2>4. Durée de conservation</h2>
            <ul>
              <li>Données de prospection : 3 ans à compter du dernier contact.</li>
              <li>Données contractuelles : 5 ans à compter de la fin du contrat (obligation légale).</li>
              <li>Données de connexion : 12 mois.</li>
            </ul>
          </div>

          <hr className={styles.divider} />

          <div className={styles.section}>
            <h2>5. Destinataires des données</h2>
            <p>
              Vos données sont destinées aux équipes commerciales de NeoTravel. Elles peuvent
              être transmises aux prestataires transporteurs sélectionnés, dans la stricte
              mesure nécessaire à l&apos;organisation de votre transport.
            </p>
            <p>
              Vos données ne sont jamais revendues à des tiers à des fins publicitaires.
            </p>
          </div>

          <hr className={styles.divider} />

          <div className={styles.section}>
            <h2>6. Transferts hors UE</h2>
            <p>
              Certains de nos sous-traitants techniques (hébergement, outils de messagerie)
              peuvent être établis hors de l&apos;Union européenne. Ces transferts sont encadrés
              par des clauses contractuelles types approuvées par la Commission européenne
              ou par des mécanismes de protection équivalents.
            </p>
          </div>

          <hr className={styles.divider} />

          <div className={styles.section}>
            <h2>7. Vos droits</h2>
            <p>
              Conformément au RGPD et à la loi Informatique et Libertés, vous disposez des
              droits suivants sur vos données personnelles :
            </p>
            <ul>
              <li>Droit d&apos;accès et de rectification</li>
              <li>Droit à l&apos;effacement (« droit à l&apos;oubli »)</li>
              <li>Droit à la limitation du traitement</li>
              <li>Droit à la portabilité</li>
              <li>Droit d&apos;opposition</li>
              <li>Droit de retirer votre consentement à tout moment</li>
            </ul>
            <p>
              Pour exercer ces droits, adressez votre demande à :{' '}
              <a href="mailto:helloneotravel@gmail.com" style={{ color: 'var(--accent)' }}>
                helloneotravel@gmail.com
              </a>
            </p>
            <p>
              En cas de réponse insatisfaisante, vous pouvez introduire une réclamation
              auprès de la CNIL - <a href="https://www.cnil.fr" style={{ color: 'var(--accent)' }}>cnil.fr</a>.
            </p>
          </div>

          <hr className={styles.divider} />

          <div className={styles.section}>
            <h2>8. Sécurité</h2>
            <p>
              NeoTravel met en œuvre des mesures techniques et organisationnelles appropriées
              pour protéger vos données contre tout accès non autorisé, perte, altération ou
              divulgation : chiffrement des communications (HTTPS/TLS), contrôle des accès,
              revues de sécurité régulières.
            </p>
          </div>

          <hr className={styles.divider} />

          <div className={styles.section}>
            <h2>9. Modifications</h2>
            <p>
              NeoTravel se réserve le droit de modifier la présente politique à tout moment.
              La version en vigueur est toujours accessible à l&apos;adresse{' '}
              <a href="/confidentialite" style={{ color: 'var(--accent)' }}>
                neotravel.fr/confidentialite
              </a>
              .
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
