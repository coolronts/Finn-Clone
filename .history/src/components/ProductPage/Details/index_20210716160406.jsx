import React from 'react';

const Details = () => {
  const styles = {
    main: "mt-24 px-36 flex justify-between h-full pb-12",
    coloumn_1: "h-2/3 w-3/5",
    coloumn_2: "flex mt-4",
    messageButton: "bg-white hover:bg-blue-50 border-2 hover:border-blue-700 text-blue-700 text-lg font-medium rounded-lg py-1 px-4",
    heartIcon: "inline text-3xl mr-2",
    logoContainer: "ml-2 flex text-gray-500 text-2xl items-center justify-between w-28",
    fav_message: "text-xs mt-1 font-lighter",
    title: "tracking-tight text-3xl mt-4 font-medium",
    place: "text-sm mt-2",
    rentText: "tracking-tight text-base mt-2 font-medium",
    rent: "tracking-tight text-2xl font-medium",
    options: "font-semibold text-medium",
    option: "font-medium",
    descriptionTitle: "font-medium text-2xl mt-3",
    description: "text-justify mt-3"    
  }
  
  return(
    <>
      <p className={styles.title}>Nyere 2-roms hybel på Ekeberg - Toppstandard</p>
      <p className={styles.place}>Vardeveien 3C, 1182 Oslo</p>
      <p className={styles.rentText}>Månedsleie</p>
      <p className={styles.rent}>3000 Kr</p>
    
      <div className={styles.options}>
        <p>Inkluderer <span className={styles.option}>Strøm, Bredbånd, Vannbåren Gulvvarme, Balansert Ventilasjon, Internett</span></p>
        <p>Depositum <span className={styles.option}>37800</span></p>
        <p>Primærrom <span className={styles.option}>38 m²</span></p>
        <p>Soverom <span className={styles.option}>1</span></p>
        <p>Etasje <span className={styles.option}>0</span></p>
        <p>Boligtype <span className={styles.option}>Hybel</span></p>
        <p>Leieperiode <span className={styles.option}>01.08.2021</span></p>
        <p>Energimerking <span className={styles.option,"bg-yellow-200 py-1 px-2 rounded"}>A - gul</span></p>
      </div>

      <div>
        <p className={styles.descriptionTitle}>Beskrivelse</p>
          <p className={styles.description}>
            Lys og hyggelig 2-roms hybelleilighet med separat inngang på Ekeberg. Hybelen fremstår som ny og ble bygd mars 2019 og er ledig fra 1 august.
            
            Den har gjennomgående god standard og smart planløsning med stue med kjøkken og separat soverom og bad. Det er lagt vannbåren varme i alle rom som sørger for et lunt og godt inneklima.

            Inneholder gang, stue med kjøkken, soverom og bad.

            Standard:
            Delvis møblert med gjennomgående god standard

            Gang: Romslig gang på 4.1 m2 med praktisk skoppbevaring.

            Stue og kjøkken: Stue inkludert kjøkken på 20.2 m2. To store vinduer i stuen gir rikelig med lys. Et fullverdig kjøkken med kjøleskap, vask, oppvaskmaskin, koketopp (60 cm) og stekeovn.

            Baderom: Stilrent baderom med gulvvarme og downlights. Innredning består av speilskap med integrert belysning, servant og innredning på 60 cm, veggmontert toalett, dusjhjørne med innfellbare glassdører og vaskemaskin.

            Soverom: Romslig soverom på 9 m2, med god plass til dobbeltseng og garderobeløsning (inkludert).

            Gateparkering

            Beliggenhet:
            Leiligheten ligger i et rolig, meget attraktivt og veletablert villastrøk på Ekeberg. Det er kort vei til offentlig kommunikasjon. Gå avstand til buss og T-bane. Nærmeste kollektivtransport er Simensbråten, der buss 23 og 34 har endestopp, er kun 3 min unna. 15 min gange eller 3 stopp med buss 23 til Ryen T-Bane.

            Det er ønskelig med langtidsleie. Ta gjerne kontakt, så avtaler vi visning.

            Vi søker:
            - Ikke røyker
            - Ikke husdyr
            - Gode referanser
            - Sikker inntektskilde (Ikke NAV garanti)
            - Enslig eller par (Ikke familie med barn)
            - Langtidsleie min 12 mnd.
        </p>
      </div>
    </>  
  )
}

export default Details