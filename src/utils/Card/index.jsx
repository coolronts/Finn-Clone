import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineHeart } from 'react-icons/hi';
import { AiOutlineDash } from 'react-icons/ai';
import { ModalContext } from "context/ModalContext";

const Card = ({ detail, allImages }) => {
  const { setIsModal } = useContext(ModalContext);
  const [mainPictureLink, setMainPictureLink] = useState('');
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const pictureId = detail.fields.images[0].sys.id;
    allImages.filter(image =>image.sys.id === pictureId)
      .map(image => setMainPictureLink("https:" + image.fields.file.url))
  },[allImages, detail.fields.images])
  
  function popupActive(e) {
    e.preventDefault()
    setIsClicked(!isClicked)
  }

  function ModalActive(e) {
    e.preventDefault()
    setIsModal(true)
  }
  const styles = {
    main: "relative z-10 shadow-sm cursor-pointer flex flex-col bg-white rounded-lg w-full h-auto hover:bg-blue-50 p-2  ",
    imageContainer:"relative h-80 w-full",
    image:"rounded-lg w-full object-cover",
    icon: " absolute top-1.5 right-1.5 text-white text-3xl hover:opacity-100  ",
    iconContainer:"absolute top-1 right-1 z-10 rounded-full w-8 h-8 bg-transparent hover:opacity-50 hover:bg-gray-50",
    shadow: "bg-gradient-to-b opacity-70 from-gray-600 to-gray-900 to-black h-8 absolute bottom-0",
    price:"absolute -bottom-10 text-lg font-semibold text-white px-2 w-full",
    textContainer: "relative flex justify-between mt-16",
    city:"text-gray-600 text-xs",
    textIcon: "absolute z-60 w-1/3 -right-10 text-gray-600 text-2xl",
    popupBody:"absolute right-6 ring-2 -top-12 bg-white shadow-lg py-2 px-3 w-1/3 rounded-md text-sm text-left hover:bg-blue-50",  
    title:"text-lg font-semibold overflow-ellipsis overflow-hidden h-14"
  }

  return (
    <Link to={"/product/" + detail.sys.id}>
      <div data-cy="Card" class={styles.main}>
        <div className={styles.imageContainer}>
          <img src={mainPictureLink} alt="CardMainPicture" className={styles.image} style={{"height": 370}}/>
          <div data-cy="likeButtonContainer" className={styles.iconContainer} onClick={(e)=>ModalActive(e)} />
          <HiOutlineHeart className={styles.icon} />
          <p className={styles.price}>10000 Kr</p>
        </div>
        <div data-cy="Card-textContainer" className={styles.textContainer}>
          <p class={styles.city}>{detail.fields.place}</p>
          <AiOutlineDash data-cy="Dash" onClick={(e)=>popupActive(e)} className={styles.textIcon} />
          <p data-cy="popUp" onClick={(e)=>popupActive(e)} className={`${styles.popupBody} ${isClicked ? 'show':'hidden'}`}>Fjern denne anbefalingen</p>
        </div>
        <p className={styles.title}>{detail.fields.title}</p>
      </div>
    </Link>
  )
}

export default Card;