import React from 'react';
import Card from '../../../utils/Card'
let link = "https://fakestoreapi.com/products?limit=9"

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
    <Card  />
    </div>
  </div>
 )
}

export default List;