import React, { useContext } from 'react';
import { ModalContext } from "context/ModalContext";
import Header from 'components/Shared/Header';
import Highlight from 'components/Home/Highlight';
import Choice from 'components/Home/Choice';
import List from 'components/Shared/List';
import SearchBar from 'utils/SearchBar';
import Modal from "utils/Modal";

const Home = () => {
  const imgLink="https://static.finncdn.no/_c/travel-promoboard/reise-desktop-bgimage-feriehus.x1.jpg"
  const listType = {name: "general"}
  const { isModal } = useContext(ModalContext)
  const styles = {
    main: "bg-white",
    image: "absolute bg-cover bg-center h-96",
  }
  return (
    <div id="Home" className={styles.main}>
      <img className={styles.image} src={imgLink} alt="Hero"/>
      <Header />
      <Highlight />
      <SearchBar />
      <Choice />
      <List listType={listType} />
      {isModal && <Modal />}
    </div>
  )
}

export default Home;