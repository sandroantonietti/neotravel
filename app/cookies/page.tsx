import Header from '@/components/Header'
import Footer from '@/components/Footer'
import styles from '../legal.module.css'

export const metadata = {
  title: 'Politique de cookies - NeoTravel',
  robots: 'noindex',
}

export default function Cookies() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <div className={styles.wrapper}>
          <h1 className={styles.title}>Politique de cookies</h1>
          <p className={styles.updated}>Dernière mise à jour : juin 2026</p>

          <div className={styles.section}>
            <h2>1. Qu&apos;est-ce qu&apos;un cookie ?</h2>
            <p>
              Un cookie est un petit fichier texte déposé sur votre terminal (ordinateur,
              tablette, smartphone) lors de votre visite sur un site web. Il permet au site
              de mémoriser certaines informations relatives à votre navigation afin d&apos;améliorer
              votre expérience.
            </p>
            <p>
              Les cookies ne contiennent pas de virus et ne peuvent pas endommager votre
              terminal. Vous pouvez les gérer ou les supprimer à tout moment.
            </p>
          </div>

          <hr className={styles.divider} />

          <div className={styles.section}>
            <h2>2. Cookies utilisés sur ce site</h2>

            <h3>Cookies strictement nécessaires</h3>
            <p>
              Ces cookies sont indispensables au fonctionnement du site. Ils ne peuvent pas
              être désactivés. Ils incluent notamment :
            </p>
            <ul>
              <li>
                <strong style={{ color: 'var(--white)' }}>nt_sid</strong> - identifiant de
                session du chatbot, stocké dans sessionStorage (durée : session navigateur).
                Permet de maintenir la continuité de votre conversation avec l&apos;assistant.
              </li>
            </ul>

            <h3>Cookies de performance et d&apos;analyse</h3>
            <p>
              Ces cookies nous permettent de mesurer l&apos;audience du site et d&apos;améliorer ses
              performances. Ils sont déposés uniquement avec votre consentement.
            </p>
            <ul>
              <li>
                Outils d&apos;analyse d&apos;audience - données anonymisées, aucun suivi personnel.
              </li>
            </ul>

            <h3>Cookies de réseaux sociaux</h3>
            <p>
              Ce site peut contenir des liens vers des réseaux sociaux (Facebook, LinkedIn).
              Ces plateformes peuvent déposer des cookies lors de votre interaction avec
              leurs éléments. NeoTravel ne contrôle pas ces cookies tiers ; nous vous
              invitons à consulter les politiques de confidentialité de ces plateformes.
            </p>
          </div>

          <hr className={styles.divider} />

          <div className={styles.section}>
            <h2>3. Durées de conservation</h2>
            <ul>
              <li>Cookies de session (sessionStorage) : supprimés à la fermeture du navigateur.</li>
              <li>Cookies de mesure d&apos;audience : 13 mois maximum.</li>
              <li>Cookies tiers (réseaux sociaux) : selon les règles de chaque plateforme.</li>
            </ul>
          </div>

          <hr className={styles.divider} />

          <div className={styles.section}>
            <h2>4. Gestion de vos préférences</h2>
            <p>
              Vous pouvez à tout moment modifier vos préférences en matière de cookies via
              les paramètres de votre navigateur :
            </p>
            <ul>
              <li>Google Chrome : Paramètres → Confidentialité et sécurité → Cookies</li>
              <li>Firefox : Options → Vie privée et sécurité → Cookies</li>
              <li>Safari : Préférences → Confidentialité → Gérer les données de site</li>
              <li>Microsoft Edge : Paramètres → Cookies et autorisations du site</li>
            </ul>
            <p>
              Attention : la désactivation de certains cookies peut affecter le bon
              fonctionnement du chatbot ou d&apos;autres fonctionnalités du site.
            </p>
          </div>

          <hr className={styles.divider} />

          <div className={styles.section}>
            <h2>5. Vos droits</h2>
            <p>
              Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de rectification,
              d&apos;effacement et d&apos;opposition concernant vos données traitées via les cookies.
            </p>
            <p>
              Pour exercer ces droits ou pour toute question, contactez-nous à :{' '}
              <a href="mailto:helloneotravel@gmail.com" style={{ color: 'var(--accent)' }}>
                helloneotravel@gmail.com
              </a>
            </p>
          </div>

          <hr className={styles.divider} />

          <div className={styles.section}>
            <h2>6. Modifications</h2>
            <p>
              NeoTravel se réserve le droit de mettre à jour la présente politique à tout
              moment. La date de dernière mise à jour figure en haut de cette page.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
