import React, {useState,useEffect,useRef} from 'react';
import Card from '../../../utils/Card'
import axios from 'axios';
let link = "https://fakestoreapi.com/products"

const List = () => {
 var sliceUpperLimit = 6;
 const [items, setItems] = useState([])
 const [element,setElement]= useState(null)
 const observer = useRef(new IntersectionObserver((entries) => {
  const first = entries[0]
  console.log(first)
  if (first.isIntersecting) {
   console.log("hello")
   sliceUpperLimit += 6
   getItems()
  }
  }, { threshold: 1 }))
 
 function getItems() {
  axios.get(link)
   .then(lists => setItems(lists.data.slice(0,sliceUpperLimit)))
 }
 useEffect(() => {
  const currentElement = element;
  const currentObserver = observer.current;

  if (currentElement) {
   currentObserver.observe(currentElement)
  }
  getItems()

  return () => {
   if (currentElement) {
    currentObserver.unobserve(currentElement)
   }
  }
 },[element,items]);

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
      <div className="w-80 py-6" key={item.id.toString()}>
        <Card  price={item.price} title={item.title} id={item.id} image={item.image} />
       {(item.id % 6 == 0) && <div ref={setElement}/>}
      </div>
     )
    }
    </div>
  </div>
 )
}

export default List;