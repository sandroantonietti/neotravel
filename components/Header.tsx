import Link from 'next/link'
import styles from './Header.module.css'

const navLinks = [
  { label: 'La flotte', href: '#flotte' },
  { label: 'Comment ça marche', href: '#comment-ca-marche' },
  { label: 'Avis clients', href: '#temoignages' },
  { label: 'FAQ', href: '#faq' },
]

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        <span className={styles.logoMain}>autocar-location</span>
        <span className={styles.logoTld}>.com</span>
      </Link>

      <nav className={styles.nav}>
        {navLinks.map((l) => (
          <a key={l.label} href={l.href} className={styles.navLink}>
            {l.label}
          </a>
        ))}
        <a href="tel:+33980400484" className={styles.navPhone}>
          09 80 40 04 84
        </a>
      </nav>

      <a href="#chatbot" className={styles.btnDevis}>
        Devis gratuit
      </a>
    </header>
  )
}
