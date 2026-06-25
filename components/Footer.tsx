import Link from 'next/link'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <span className={styles.logoText}>
              <span className={styles.logoMain}>autocar-location</span>
              <span className={styles.logoTld}>.com</span>
            </span>
            <p>
              NeoTravel SAS<br />
              55 Rue Raspail<br />
              92300 Levallois-Perret
            </p>
            <p>RCS Nanterre 529 307 167</p>
            <p>
              <a href="tel:+33980400484" className={styles.contact}>
                09 80 40 04 84
              </a>
              <br />
              <a href="mailto:helloneotravel@gmail.com" className={styles.contact}>
                helloneotravel@gmail.com
              </a>
            </p>
            <div className={styles.social}>
              <a
                href="https://www.facebook.com/neotravel"
                className={styles.socialLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook NeoTravel"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/neotravel"
                className={styles.socialLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn NeoTravel"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>
          </div>

          <div className={styles.col}>
            <h4>Navigation</h4>
            <ul>
              <li><Link href="/">Accueil</Link></li>
              <li><span className={styles.disabled}>Qui sommes-nous</span></li>
              <li><span className={styles.disabled}>Services</span></li>
              <li><span className={styles.disabled}>Réglementation</span></li>
            </ul>
          </div>

          <div className={styles.col}>
            <h4>Légal</h4>
            <ul>
              <li><Link href="/mentions-legales">Mentions légales</Link></li>
              <li><Link href="/cgv">CGV</Link></li>
              <li><Link href="/confidentialite">Politique de confidentialité</Link></li>
              <li><Link href="/cookies">Politique de cookies</Link></li>
            </ul>
          </div>

          <div className={styles.col}>
            <h4>Nos services</h4>
            <ul>
              <li><Link href="#chatbot">Devis gratuit</Link></li>
              <li><span className={styles.disabled}>Transport entreprise</span></li>
              <li><span className={styles.disabled}>Transport collectivités</span></li>
              <li><span className={styles.disabled}>Transport associations</span></li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>&copy; 2026 NeoTravel SAS - Tous droits réservés - RCS Nanterre 529 307 167</p>
          <div className={styles.rgpd}>
            <Link href="/mentions-legales">Mentions légales</Link>
            <Link href="/confidentialite">Confidentialité</Link>
            <Link href="/cookies">Cookies</Link>
            <Link href="/cgv">CGV</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
