import React from 'react';
import Card from '../../../utils/Card'

const List = () => {
 const styles = {
  body: "px-36 pb-24",
  title: "text-xl font-semibold",
  subtitle: "text-xs font-normal"
 }
 return(
  <div className={styles.body}>
   <p className={styles.title}>Populære annonser <span className={styles.subtitle}>Hvorfor anbefaler vi disse annonsene?</span></p>
   <div className="px-24 w-1/3" >
    <Card className="w-1/3" />
    </div>
  </div>
 )
}

export default List;