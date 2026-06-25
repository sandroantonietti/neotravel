import Header from '@/components/Header'
import ChatWindow from '@/components/ChatWindow'
import Reassurance from '@/components/Reassurance'
import HowItWorks from '@/components/HowItWorks'
import Fleet from '@/components/Fleet'
import UseCases from '@/components/UseCases'
import About from '@/components/About'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'
import styles from './page.module.css'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* ── Hero + Chatbot ── */}
        <section className={styles.hero}>
          <h1 className={styles.h1}>
            Location d&apos;autocar, minibus<br />
            et berlines sur mesure
          </h1>

          <p className={styles.heroSub}>
            Voyagez sereinement en groupe avec nos véhicules premium et nos chauffeurs professionnels. Devis gratuit et rappel commercial rapide.
          </p>

          {/* ── Chatbot — CTA principal ── */}
          <div className={styles.chatBlock} id="chatbot">
            <p className={styles.chatLabel}>
              <span className={styles.chatLabelDot} aria-hidden="true" />
              Obtenez votre devis en quelques minutes
            </p>
            <ChatWindow />
          </div>
        </section>

        {/* ── Réassurance ── */}
        <Reassurance />

        {/* ── Comment ça marche ── */}
        <HowItWorks />

        {/* ── Flotte ── */}
        <Fleet />

        {/* ── Cas d'usage ── */}
        <UseCases />

        {/* ── Stats + Engagements ── */}
        <About />

        {/* ── Témoignages ── */}
        <Testimonials />

        {/* ── FAQ ── */}
        <FAQ />

        {/* ── CTA Final ── */}
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
