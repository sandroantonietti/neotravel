import Header from '@/components/Header'
import Footer from '@/components/Footer'
import styles from '../legal.module.css'

export const metadata = {
  title: 'Conditions Générales de Vente - NeoTravel',
  robots: 'noindex',
}

export default function CGV() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <div className={styles.wrapper}>
          <h1 className={styles.title}>Conditions Générales de Vente</h1>
          <p className={styles.updated}>En vigueur au 1er janvier 2026</p>

          <div className={styles.section}>
            <h2>Article 1 - Objet et champ d&apos;application</h2>
            <p>
              Les présentes Conditions Générales de Vente (CGV) s&apos;appliquent à toutes les
              prestations d&apos;intermédiation en transport de voyageurs proposées par NeoTravel SAS
              (ci-après « NeoTravel »), SASU au capital de 13 000 €, immatriculée au RCS de
              Nanterre sous le numéro 529 307 167, dont le siège social est situé au
              55 Rue Raspail, 92300 Levallois-Perret.
            </p>
            <p>
              NeoTravel intervient exclusivement en qualité d&apos;intermédiaire entre le client
              donneur d&apos;ordre et les prestataires transporteurs. NeoTravel n&apos;exploite aucun
              véhicule en propre et n&apos;est pas transporteur au sens de la réglementation sociale
              européenne.
            </p>
            <p>
              Toute commande passée auprès de NeoTravel implique l&apos;acceptation pleine et
              entière des présentes CGV, qui prévalent sur tout autre document du client.
            </p>
          </div>

          <hr className={styles.divider} />

          <div className={styles.section}>
            <h2>Article 2 - Définitions</h2>
            <ul>
              <li><strong style={{ color: 'var(--white)' }}>Client :</strong> toute personne morale ou physique agissant dans un cadre professionnel passant commande auprès de NeoTravel.</li>
              <li><strong style={{ color: 'var(--white)' }}>Devis :</strong> proposition commerciale établie par NeoTravel à la demande du client, valable 10 jours calendaires.</li>
              <li><strong style={{ color: 'var(--white)' }}>Prestataire :</strong> entreprise de transport de voyageurs sélectionnée par NeoTravel pour exécuter la prestation.</li>
              <li><strong style={{ color: 'var(--white)' }}>Prestation :</strong> transport de groupe organisé pour le compte du client, exécuté par le prestataire.</li>
              <li><strong style={{ color: 'var(--white)' }}>Confirmation :</strong> acceptation écrite du devis par le client, valant bon de commande.</li>
            </ul>
          </div>

          <hr className={styles.divider} />

          <div className={styles.section}>
            <h2>Article 3 - Formation du contrat</h2>
            <p>
              Le contrat est formé à la réception par NeoTravel de la confirmation écrite du
              devis et du versement de l&apos;acompte. NeoTravel adresse alors un accusé de
              réception faisant office de confirmation de commande.
            </p>
            <p>
              Les informations transmises par le client (dates, horaires, itinéraires, nombre
              de passagers, nature des bagages) engagent sa responsabilité. Toute modification
              ultérieure peut entraîner une révision tarifaire.
            </p>
          </div>

          <hr className={styles.divider} />

          <div className={styles.section}>
            <h2>Article 4 - Prix et paiement</h2>
            <p>
              Les prix sont exprimés en euros TTC. Ils couvrent la prestation de transport,
              les frais administratifs d&apos;intermédiation et, le cas échéant, les frais de
              péage et de stationnement convenus.
            </p>
            <h3>Modalités de règlement</h3>
            <ul>
              <li>Acompte de 30 % à la confirmation de commande, exigible sous 48 heures.</li>
              <li>Solde à régler au plus tard 30 jours avant la date de départ.</li>
              <li>Pour toute commande passée à moins de 30 jours du départ : paiement intégral à la confirmation.</li>
            </ul>
            <p>
              En cas de retard de paiement, des pénalités égales à 1,5 fois le taux d&apos;intérêt
              légal en vigueur seront appliquées, auxquelles s&apos;ajoutera une indemnité
              forfaitaire de recouvrement de 40 € (art. L.441-10 du Code de commerce).
            </p>
          </div>

          <hr className={styles.divider} />

          <div className={styles.section}>
            <h2>Article 5 - Annulation et modification</h2>
            <h3>Annulation par le client</h3>
            <ul>
              <li>Plus de 31 jours avant le départ : 30 % du montant total.</li>
              <li>Entre 30 et 15 jours : 50 % du montant total.</li>
              <li>Entre 14 et 8 jours : 70 % du montant total.</li>
              <li>7 jours ou moins : 100 % du montant total.</li>
            </ul>
            <p>
              Les frais d&apos;annulation sont retenus sur l&apos;acompte versé. Si le montant dû
              excède l&apos;acompte, le solde est facturé au client.
            </p>
            <h3>Modification par le client</h3>
            <p>
              Toute modification substantielle (date, destination, nombre de passagers) est
              soumise à l&apos;accord du prestataire et peut entraîner une révision tarifaire.
            </p>
          </div>

          <hr className={styles.divider} />

          <div className={styles.section}>
            <h2>Article 6 - Responsabilité de NeoTravel</h2>
            <p>
              En sa qualité d&apos;intermédiaire, NeoTravel met en relation le client avec des
              prestataires de transport sélectionnés selon des critères de qualité et de
              conformité réglementaire. La responsabilité de l&apos;exécution matérielle de la
              prestation incombe au prestataire transporteur, soumis aux dispositions du
              Code des transports et à la réglementation sociale européenne.
            </p>
            <p>
              NeoTravel ne saurait être tenu responsable des dommages résultant d&apos;un
              défaut d&apos;exécution imputable au prestataire, à un cas de force majeure, ou à
              des informations inexactes transmises par le client.
            </p>
          </div>

          <hr className={styles.divider} />

          <div className={styles.section}>
            <h2>Article 7 - Force majeure</h2>
            <p>
              NeoTravel est exonéré de toute responsabilité en cas d&apos;inexécution ou de
              retard résultant d&apos;un événement de force majeure au sens de l&apos;article 1218
              du Code civil : grèves, intempéries, accidents, défaillances mécaniques
              indépendantes de la volonté du prestataire, décisions administratives ou
              sanitaires.
            </p>
            <p>
              En pareil cas, NeoTravel informera le client dans les meilleurs délais et
              proposera une solution de substitution dans la mesure du possible.
            </p>
          </div>

          <hr className={styles.divider} />

          <div className={styles.section}>
            <h2>Article 8 - Réclamations et médiation</h2>
            <p>
              Toute réclamation doit être adressée par écrit à NeoTravel dans un délai de
              8 jours suivant la réalisation de la prestation, à l&apos;adresse :
              helloneotravel@gmail.com ou 55 Rue Raspail, 92300 Levallois-Perret.
            </p>
            <p>
              En cas de litige non résolu à l&apos;amiable, le client professionnel peut recourir
              au médiateur de la consommation compétent. À défaut d&apos;accord, les tribunaux
              du ressort de Nanterre sont seuls compétents.
            </p>
          </div>

          <hr className={styles.divider} />

          <div className={styles.section}>
            <h2>Article 9 - Droit applicable</h2>
            <p>
              Les présentes CGV sont soumises au droit français. Le fait pour NeoTravel de
              ne pas se prévaloir d&apos;une clause ne vaut pas renonciation à cette clause.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
