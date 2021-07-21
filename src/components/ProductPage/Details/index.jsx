import React from 'react';

const Details = ({details}) => {
  const styles = {
    title: "tracking-tight text-3xl mt-4 font-medium",
    place: "text-sm mt-2",
    rentText: "tracking-tight text-base mt-2 font-medium",
    rent: "tracking-tight text-2xl font-medium",
    options: "font-semibold text-medium",
    option: "font-medium",
    descriptionTitle: "font-medium text-2xl mt-3",
    description: "text-justify mt-3"
  }

  return (
     <div data-cy="Details">
      <p className={styles.title}>{details.title} </p>
      <p className={styles.place}> {details.place} </p>
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
        <p>Energimerking <span className={styles.option, "bg-yellow-200 py-1 px-2 rounded"}>A - gul</span></p>
      </div>

      <div>
        <p className={styles.descriptionTitle}>Beskrivelse</p>
        <p className={styles.description}>{details.description}</p>
      </div>
    </div> 
  )
}

export default Details