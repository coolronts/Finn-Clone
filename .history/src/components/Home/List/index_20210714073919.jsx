import React from 'react';

const List = () => {
 const styles = {
  body: "px-36 pb-24",
  title:"text-lg"
 }
 return(
  <div className={styles.body}>
   <p className={styles.title}>Populære annonser (Hvorfor anbefaler vi disse annonsene?)</p>
  </div>
 )
}

export default List;