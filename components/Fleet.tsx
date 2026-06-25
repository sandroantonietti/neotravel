import Image from 'next/image'
import styles from './Fleet.module.css'

const vehicles = [
  {
    name: 'Minibus',
    capacity: 'Jusqu\'à 25 passagers',
    image: 'https://images.unsplash.com/photo-1535655685871-dc8158ff167e?w=800&q=80',
    alt: 'Minibus de location pour groupes jusqu\'à 25 personnes',
    features: ['Climatisation', 'WiFi à bord', 'Idéal transferts aéroport'],
    usage: 'Transferts, sorties d\'équipe, navettes',
  },
  {
    name: 'Minicar',
    capacity: '25 à 35 passagers',
    image: 'https://images.unsplash.com/photo-1570125909517-53cb21c89ff2?w=800&q=80',
    alt: 'Minicar de location pour groupes de 25 à 35 personnes',
    features: ['Climatisation', 'Soutes à bagages', 'Prise USB'],
    usage: 'Excursions, voyages CE, groupes scolaires',
  },
  {
    name: 'Autocar',
    capacity: '49 à 63 passagers',
    image: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=800&q=80',
    alt: 'Autocar grande capacité pour séminaires et événements',
    features: ['Sièges inclinables', 'WC à bord', 'Vidéo / micro'],
    usage: 'Séminaires, conventions, voyages longue distance',
  },
  {
    name: 'Autocar double étage',
    capacity: 'Jusqu\'à 93 passagers',
    image: 'https://images.unsplash.com/photo-1639189959071-8b3a80380f04?w=800&q=80',
    alt: 'Autocar double étage pour grands groupes et événements majeurs',
    features: ['Étage panoramique', 'Grande capacité bagages', 'Confort premium'],
    usage: 'Grands événements, déplacements interrégionaux',
  },
  {
    name: 'Berline VIP',
    capacity: '1 à 7 passagers',
    image: 'https://images.unsplash.com/photo-1589148938909-4d241c91ee52?w=800&q=80',
    alt: 'Berline VIP avec chauffeur pour déplacements professionnels',
    features: ['Chauffeur en costume', 'Eau et journaux', 'Discrétion garantie'],
    usage: 'Cadres dirigeants, transport VIP, aéroports',
  },
]

export default function Fleet() {
  return (
    <section className={styles.section} id="flotte">
      <div className={styles.inner}>
        <div className={styles.header}>
          <div className={styles.eyebrow}>Notre flotte</div>
          <h2 className={styles.title}>Le bon véhicule pour chaque groupe</h2>
          <p className={styles.sub}>
            Du minibus à l&apos;autocar double étage, nous sélectionnons le véhicule le mieux adapté à votre groupe, votre budget et votre itinéraire.
          </p>
        </div>

        <div className={styles.grid}>
          {vehicles.map((v) => (
            <div key={v.name} className={styles.card}>
              <div className={styles.imgWrap}>
                <Image
                  src={v.image}
                  alt={v.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className={styles.img}
                />
                <div className={styles.imgOverlay} />
                <div className={styles.capacityBadge}>{v.capacity}</div>
              </div>
              <div className={styles.body}>
                <h3 className={styles.vehicleName}>{v.name}</h3>
                <p className={styles.usage}>{v.usage}</p>
                <ul className={styles.features}>
                  {v.features.map((f) => (
                    <li key={f} className={styles.feature}>
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <p className={styles.note}>
          Vous avez un besoin spécifique ?&nbsp;
          <a href="#chatbot" className={styles.noteLink}>Décrivez-le à notre assistant →</a>
        </p>
      </div>
    </section>
  )
}
