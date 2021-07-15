import React from 'react';

const List = () => {
 const styles = {
  body: "px-36 pb-24",
  title: "text-lg font-semibold",
  subtitle: "text-xs"
 }
 return(
  <div className={styles.body}>
   <p className={styles.title}>Populære annonser <span className={styles.subtitle}>Hvorfor anbefaler vi disse annonsene?</span></p>
  </div>
 )
}

export default List;