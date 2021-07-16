import React,{useContext,useState, useEffect} from 'react';
import { HiOutlineHeart } from 'react-icons/hi';
import { AiOutlineDash } from 'react-icons/ai';
import { ModalContext } from "../../Context/ModalContext";

const Card = ({ detail, allImages}) => {
  const { setIsModal } = useContext(ModalContext);
  const [mainPictureLink, setMainPictureLink] = useState('')

  useEffect(() => {
    const pictureId = detail.fields.images[0].sys.id;
    allImages.map(image => {
      if (image.sys.id == pictureId) {setMainPictureLink("https:" +image.fields.file.url)}
    })
  },[mainPictureLink])
 
  const styles = {
    main: "shadow-sm cursor-pointer flex flex-col bg-white rounded-lg w-full h-auto hover:bg-blue-50 p-2  ",
    imageContainer:"relative h-80 w-full",
    image:"rounded-lg w-full object-cover",
    icon: " absolute top-2 right-2 text-white text-3xl hover:opacity-100  ",
    iconContainer:"absolute top-1.5 right-1 z-10 rounded-full w-8 h-8 bg-transparent hover:opacity-50 hover:bg-gray-50",
    shadow: "bg-gradient-to-b opacity-70 from-gray-600 to-gray-900 to-black h-8 absolute bottom-0",
    price:"absolute -bottom-10 text-lg font-semibold text-white px-2 w-full",
    textContainer: "flex justify-between mt-16",
    city:"text-gray-600 text-xs",
    textIcon: "text-gray-600 text-2xl",
    title:"text-lg font-semibold"  
  }

  return (
    <div class={styles.main}>
      <div className={styles.imageContainer}>
        <img src={mainPictureLink} alt="" className={styles.image} style={{"height": 370}}/>
        <div className={styles.iconContainer} onClick={()=>setIsModal(true)} />
          <HiOutlineHeart className={styles.icon} />
          <p className={styles.price}>10000 Kr</p>
      </div>
      <div className={styles.textContainer}>
        <p class={styles.city}>{detail.fields.place}</p>
        <AiOutlineDash className={styles.textIcon}/>
      </div>
      {!mainPictureLink&&<p>asasdad</p>}
      <p className={styles.title}>{detail.fields.title}</p>
    </div>
  )
}

export default Card;