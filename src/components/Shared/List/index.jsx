import React, {useState,useEffect,useRef} from 'react';
import Card from '#utils/Card'
import axios from 'axios';
import dotenv from "dotenv";

let link = "https://cdn.contentful.com/spaces/" + process.env.CONTENTFUL_SPACE_ID + "/environments/master/entries?access_token=" + process.env.CONTENTFUL_API_TOKEN

const List = ({listType}) => {
  var loadNumber = 0;
  const [items, setItems] = useState([])
  const [loading,setLoading] = useState(true)
  const [imagesDetail, setImagesDetail] = useState([])
  const [element, setElement] = useState(null)
  const [sliceUpperLimit, setSliceUpperLimit] = useState(0)
  
  const observer = useRef(new IntersectionObserver((entries) => {
    const first = entries[0]
    if (first.isIntersecting) {
      loadNumber += 6
      setSliceUpperLimit(sliceUpperLimit+loadNumber)
    }
  }, { threshold: 1 }))
 
  function getItems() {
    axios.get(link)
      .then(lists => {
      const refinedList = typeOfList(lists.data.items)
      setItems(refinedList)
      setImagesDetail(lists.data.includes.Asset)
      setLoading(false)
    })  
  }
  
  function typeOfList(rawList) {
    if (listType.name == "recommendation") {
      return rawList.filter(item => item.fields.place == listType.place)
    }else {return rawList}
  }

  useEffect(() => {
    const currentElement = element;
    const currentObserver = observer.current;
    getItems()
    if (currentElement) {currentObserver.observe(currentElement)}
    
    return () => {
      if (currentElement) {currentObserver.unobserve(currentElement)}
    }
  },[element]);

  const styles = {
    body: "pb-24 mx-36 mt-6",
    title: "text-xl font-semibold",
    subtitle: "text-xs font-normal"
  }
  return(
    <div className={styles.body}  ref={setElement}>
      <p className={styles.title}>Populære annonser <span className={styles.subtitle}>Hvorfor anbefaler vi disse annonsene?</span></p>
      {!loading &&
      <div className=" flex flex-wrap py-16 justify-between" >
        {items.slice(0, sliceUpperLimit).map((item, index) =>
          <div className="h-64 w-80 mb-72" key={item.sys.id}>
            {((index + 1) % 3 == 0) && <div ref={setElement}/>}
            <Card detail={item} allImages={imagesDetail} />
          </div>
        )}
      </div>}
    </div>
  )
}

export default List;