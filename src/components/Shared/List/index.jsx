import React, {useState,useEffect,useRef} from 'react';
import Card from 'utils/Card'
import axios from 'axios';

let link = "https://cdn.contentful.com/spaces/" + process.env.REACT_APP_CONTENTFUL_SPACE_ID + "/environments/master/entries?access_token=" + process.env.REACT_APP_CONTENTFUL_API_TOKEN

const List = ({ listType }) => {
  const initialLoadNumber = 6;
  var loadNumber = 0;
  const [items, setItems] = useState([])
  const [loading,setLoading] = useState(true)
  const [imagesDetail, setImagesDetail] = useState([])
  const [element, setElement] = useState(null)
  const [sliceUpperLimit, setSliceUpperLimit] = useState(initialLoadNumber)
  
  useEffect(() => {
    const currentElement = element;
    const currentObserver = observer.current;
    getItems()
    if (currentElement) {currentObserver.observe(currentElement)}
    
    return () => {
      if (currentElement) {currentObserver.unobserve(currentElement)}
    }
  }, [element]);
  
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
    if (listType.name === "recommendation") {
      return rawList.filter(item => item.fields.place === listType.place)
    }else {return rawList}
  }

  const styles = {
    body: "pb-24 mx-36 mt-6",
    title: "text-xl font-semibold",
    subtitle: "text-xs font-normal",
    cardsContainer: "flex flex-wrap py-16 justify-between",
    cardContainer:"h-64 w-80 mb-72"
  }
  return(
    <div data-cy="List" className={styles.body}  ref={setElement}>
      <p className={styles.title}>Populære annonser <span className={styles.subtitle}>Hvorfor anbefaler vi disse annonsene?</span></p>
      {!loading &&
      <div className={styles.cardsContainer} >
        {items.slice(0, sliceUpperLimit).map((item, index) =>
          <div className={styles.cardContainer} key={item.sys.id}>
            <Card detail={item} allImages={imagesDetail} />
            {((index + 1) % initialLoadNumber === 0) && <div ref={setElement}/>}
          </div>
        )}
      </div>}
    </div>
  )
}

export default List;