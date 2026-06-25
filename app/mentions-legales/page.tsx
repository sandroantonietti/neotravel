import Header from '@/components/Header'
import Footer from '@/components/Footer'
import styles from '../legal.module.css'

export const metadata = {
  title: 'Mentions légales - NeoTravel',
  robots: 'noindex',
}

export default function MentionsLegales() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <div className={styles.wrapper}>
          <h1 className={styles.title}>Mentions légales</h1>
          <p className={styles.updated}>Dernière mise à jour : juin 2026</p>

          <div className={styles.section}>
            <h2>Éditeur du site</h2>
            <p>
              <strong style={{ color: 'var(--white)' }}>NeoTravel SAS</strong><br />
              Société par actions simplifiée au capital de 13 000 €<br />
              RCS Nanterre - SIREN 529 307 167<br />
              55 Rue Raspail, 92300 Levallois-Perret, France<br />
              Téléphone : <a href="tel:+33980400484" style={{ color: 'var(--accent)' }}>09 80 40 04 84</a><br />
              E-mail : <a href="mailto:helloneotravel@gmail.com" style={{ color: 'var(--accent)' }}>helloneotravel@gmail.com</a>
            </p>
            <p>
              NeoTravel est un intermédiaire en transport de voyageurs. La société n&apos;exploite
              pas de véhicules en propre et intervient en qualité de mandataire entre le client
              et les prestataires transporteurs sélectionnés.
            </p>
          </div>

          <hr className={styles.divider} />

          <div className={styles.section}>
            <h2>Directeur de la publication</h2>
            <p>
              Le directeur de la publication est le représentant légal de NeoTravel SAS.
            </p>
          </div>

          <hr className={styles.divider} />

          <div className={styles.section}>
            <h2>Hébergement</h2>
            <p>
              Ce site est hébergé par Vercel Inc., 340 Pine Street, Suite 701, San Francisco,
              CA 94104, États-Unis - <a href="https://vercel.com" style={{ color: 'var(--accent)' }}>vercel.com</a>.
            </p>
          </div>

          <hr className={styles.divider} />

          <div className={styles.section}>
            <h2>Propriété intellectuelle</h2>
            <p>
              L&apos;ensemble des éléments constituant ce site (textes, images, logo, structure)
              est la propriété exclusive de NeoTravel SAS ou de ses ayants droit et est
              protégé par les lois françaises et internationales relatives à la propriété
              intellectuelle.
            </p>
            <p>
              Toute reproduction, représentation, modification, publication ou transmission,
              totale ou partielle, du site ou de son contenu, est interdite sans l&apos;accord
              écrit préalable de NeoTravel SAS.
            </p>
          </div>

          <hr className={styles.divider} />

          <div className={styles.section}>
            <h2>Données personnelles</h2>
            <p>
              Le traitement des données à caractère personnel collectées via ce site est régi
              par notre{' '}
              <a href="/confidentialite" style={{ color: 'var(--accent)' }}>
                Politique de confidentialité
              </a>{' '}
              et notre{' '}
              <a href="/cookies" style={{ color: 'var(--accent)' }}>
                Politique de cookies
              </a>
              , conformément au Règlement (UE) 2016/679 (RGPD) et à la loi Informatique et
              Libertés modifiée.
            </p>
          </div>

          <hr className={styles.divider} />

          <div className={styles.section}>
            <h2>Limitation de responsabilité</h2>
            <p>
              NeoTravel SAS s&apos;efforce d&apos;assurer l&apos;exactitude et la mise à jour des
              informations publiées sur ce site, dont elle se réserve le droit de modifier le
              contenu à tout moment. NeoTravel SAS ne saurait être tenu responsable de
              l&apos;utilisation faite de ces informations ni des dommages directs ou indirects
              qui pourraient en résulter.
            </p>
          </div>

          <hr className={styles.divider} />

          <div className={styles.section}>
            <h2>Droit applicable</h2>
            <p>
              Le présent site et ses mentions légales sont soumis au droit français.
              Tout litige relatif à son utilisation relèvera de la compétence exclusive
              des tribunaux du ressort de Nanterre.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
