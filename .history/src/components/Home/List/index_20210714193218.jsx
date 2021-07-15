import React, {useState,useEffect} from 'react';
import Card from '../../../utils/Card'
import axios from 'axios';
let link = "https://fakestoreapi.com/products?limit=9"

const List = () => {
 const [items, setItems] = useState([])
 function getItems() {
  axios.get(link)
   .then(lists => setItems(lists.data))
 }
 useEffect(() => {
  getItems()
  console.log(items)
  },[]);

 const styles = {
  body: "px-36 pb-24",
  title: "text-xl font-semibold",
  subtitle: "text-xs font-normal"
 }
 return(
  <div className={styles.body}>
   <p className={styles.title}>Populære annonser <span className={styles.subtitle}>Hvorfor anbefaler vi disse annonsene?</span></p>
   <div className=" flex flex-wrap justify-between py-16" >
    {
     items.map(item =>
      <>
       <div className=" w-80 px-3 py-16">
        <Card key={item.id} price={item.price} title={item.title} id={item.id} image={item.image} />
       </div>
      </>
     )
    
    }
    </div>
  </div>
 )
}

export default List;