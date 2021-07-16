import React, {useState,useEffect,useRef} from 'react';
import Card from '../../../utils/Card'
import axios from 'axios';
let link = "https://cdn.contentful.com/spaces/d7b3k59by6fq/environments/master/entries?access_token=N7N_nXolJykqdW8Wpbo4pRy49fbWUqPyxLd8Bju4KGI"

const List = ({ isOpenModal }) => {

  var loadNumber = 1;
  const [items, setItems] = useState([])
  const[imagesDetail, setImagesDetail] = useState([])
  const [element, setElement] = useState(null)
  const [sliceUpperLimit, setSliceUpperLimit]= useState(3)
  const observer = useRef(new IntersectionObserver((entries) => {
    const first = entries[0]
    if (first.isIntersecting) {
      loadNumber++
      setSliceUpperLimit(sliceUpperLimit*loadNumber)
    }
  }, { threshold: 1 }))
 
  function getItems() {
   var just =[]
  axios.get(link)
    .then(lists => {
    just =lists.data.items
    setItems(lists.data.items)
    setImagesDetail(lists.data.includes.Asset)
  })
  .then(just.map(item => {
     const imageId = item.fields.images[0].sys.id;
     imagesDetail.map(image => {
      if (image.sys.id == imageId) {
        item.pictureLink = "https:" + image.fields.file.url
      }
     })
  }))
   .then(console.log(items))
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
 },[element]);

 const styles = {
  body: "px-36 pb-24",
  title: "text-xl font-semibold",
  subtitle: "text-xs font-normal"
 }
 return(
  <div className={styles.body}>
   <p className={styles.title}>Populære annonser <span className={styles.subtitle}>Hvorfor anbefaler vi disse annonsene?</span></p>
   <div className=" flex flex-wrap py-16" >
    {
     items.slice(0,sliceUpperLimit).map((item, index) =>
       <div className="h-64 w-1/3 mb-64" key={item.sys.id}>
         {((index + 1) % 3 == 0) && <div ref={setElement}/>}
        <Card isOpenModal={isOpenModal} detail={item} allImages={imagesDetail} />
       
      </div>
     )
    }
    </div>
  </div>
 )
}

export default List;