import React, { useState, useEffect } from 'react';
import SmallCard from '../../../utils/SmallCard'
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation,Scrollbar } from 'swiper/core';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import Geocode from "react-geocode";
import { BiUserCircle } from "react-icons/bi"
import { IoIosArrowDown } from "react-icons/io"
import { AiOutlineHeart } from "react-icons/ai"
import { HiOutlineMail } from "react-icons/hi"
import { FaFacebookSquare, FaTwitter, FaLeaf } from "react-icons/fa"
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"
import "./swipeStyle.css";

SwiperCore.use([Pagination,Navigation]);

const ProductMain = () => {
  Geocode.setApiKey("AIzaSyC6doKmnshrEDCjGAuyURuIMDQpBWTRzn8");
  Geocode.setLanguage("en");
  Geocode.setRegion("no");
  Geocode.setLocationType("ROOFTOP");
  Geocode.enableDebug();

  const [location, setLocation] = useState(null)
  useEffect(() => {
    Geocode.fromAddress("Vardeveien 3C, 1182 Oslo").then(
      (response) => {
        const { lat, lng } = response.results[0].geometry.location;
        setLocation({"lat":lat,"lng":lng});
        console.log(location);
      },
      (error) => {
        console.error(error);
      }
    );

  },[location])
  
  const containerStyle = {
    height: '400px'
  };


  const styles = {
    main: "mt-24 px-36 flex justify-between h-full pb-12",
    coloumn_1: "h-2/3 w-3/5",
    coloumn_2: "flex mt-4",
    messageButton: "bg-white hover:bg-blue-50 border-2 hover:border-blue-700 text-blue-700 text-lg font-medium rounded-lg py-1 px-4",
    heartIcon: "inline text-3xl mr-2",
    logoContainer: "ml-2 flex text-gray-500 text-2xl items-center justify-between w-28",
    fav_message: "text-xs mt-1 font-lighter",
    title: "tracking-tight text-3xl mt-4 font-medium",
    place: "text-sm mt-2",
    rentText: "tracking-tight text-base mt-2 font-medium",
    rent: "tracking-tight text-2xl font-medium",
    options: "font-semibold text-medium",
    option: "font-medium",
    descriptionTitle: "font-medium text-2xl mt-3",
    description: "text-justify mt-3"    
  }
  return (
    
      <div className={styles.main}>
        <div className={styles.coloumn_1}>
          <Swiper pagination={{"type": "fraction"}} navigation={true} className="swiper-navigation-black">
            <SwiperSlide>
              <img style={{"height":400}}  src="https://picsum.photos/200/300"/>
            </SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
            <SwiperSlide>Slide 6</SwiperSlide>
            <SwiperSlide>Slide 7</SwiperSlide>
            <SwiperSlide>Slide 8</SwiperSlide>
            <SwiperSlide>Slide 9</SwiperSlide>
          </Swiper>

          <div className={styles.coloumn_2}>
            <button className={styles.messageButton}>
            <AiOutlineHeart className={styles.heartIcon}/>Legg till favourit
            </button>
            <div className={styles.logoContainer}>
              <HiOutlineMail />
              <FaFacebookSquare/>
              <FaTwitter/>
            </div>
        </div>
        <p className={styles.fav_message}>8 har lagt til som favoritt</p>
        <p className={styles.title}>Nyere 2-roms hybel på Ekeberg - Toppstandard</p>
        <p className={styles.place}>Vardeveien 3C, 1182 Oslo</p>
        <p className={styles.rentText}>Månedsleie</p>
        <p className={styles.rent}>3000 Kr</p>
      
        <div className={styles.options}>
          <p>Inkluderer <span className={styles.option}>Strøm, Bredbånd, Vannbåren Gulvvarme, Balansert Ventilasjon, Internett</span></p>
          <p>Depositum <span className={styles.option}>37800</span></p>
          <p>Primærrom <span className={styles.option}>38 m²</span></p>
          <p>Soverom <span className={styles.option}>1</span></p>
          <p>Etasje <span className={styles.option}>0</span></p>
          <p>Boligtype <span className={styles.option}>Hybel</span></p>
          <p>Leieperiode <span className={styles.option}>01.08.2021</span></p>
          <p>Energimerking <span className={styles.option,"bg-yellow-200 py-1 px-2 rounded"}>A - gul</span></p>
        </div>

        <div>
          <p className={styles.descriptionTitle}>Beskrivelse</p>
          <p className={styles.description}>Lys og hyggelig 2-roms hybelleilighet med separat inngang på Ekeberg. Hybelen fremstår som ny og ble bygd mars 2019 og er ledig fra 1 august.

              Den har gjennomgående god standard og smart planløsning med stue med kjøkken og separat soverom og bad. Det er lagt vannbåren varme i alle rom som sørger for et lunt og godt inneklima.

              Inneholder gang, stue med kjøkken, soverom og bad.

              Standard:
              Delvis møblert med gjennomgående god standard

              Gang: Romslig gang på 4.1 m2 med praktisk skoppbevaring.

              Stue og kjøkken: Stue inkludert kjøkken på 20.2 m2. To store vinduer i stuen gir rikelig med lys. Et fullverdig kjøkken med kjøleskap, vask, oppvaskmaskin, koketopp (60 cm) og stekeovn.

              Baderom: Stilrent baderom med gulvvarme og downlights. Innredning består av speilskap med integrert belysning, servant og innredning på 60 cm, veggmontert toalett, dusjhjørne med innfellbare glassdører og vaskemaskin.

              Soverom: Romslig soverom på 9 m2, med god plass til dobbeltseng og garderobeløsning (inkludert).

              Gateparkering

              Beliggenhet:
              Leiligheten ligger i et rolig, meget attraktivt og veletablert villastrøk på Ekeberg. Det er kort vei til offentlig kommunikasjon. Gå avstand til buss og T-bane. Nærmeste kollektivtransport er Simensbråten, der buss 23 og 34 har endestopp, er kun 3 min unna. 15 min gange eller 3 stopp med buss 23 til Ryen T-Bane.

              Det er ønskelig med langtidsleie. Ta gjerne kontakt, så avtaler vi visning.

              Vi søker:
              - Ikke røyker
              - Ikke husdyr
              - Gode referanser
              - Sikker inntektskilde (Ikke NAV garanti)
              - Enslig eller par (Ikke familie med barn)
              - Langtidsleie min 12 mnd.
          </p>
        </div>
        <p className="text-gray-700 my-6 text-lg font-medium">Vardeveien 3C, 1182 Oslo</p>
        <div className="shadow-sm ring-2 rounded"> 
          <LoadScript googleMapsApiKey="AIzaSyC6doKmnshrEDCjGAuyURuIMDQpBWTRzn8">
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={location}
              zoom={16}
              mapTypeId= "roadmap"
            >
              <Marker position={location}/>
            </GoogleMap>
          </LoadScript>
        </div>
          <div className="bg-blue-100 mt-6 rounded-sm p-6">
            <p class="text-lg">Om nabolaget <span className="text-blue-700 ml-4 text-base">Utforsk</span></p>
            <div className="flex mt-6">
              <Swiper spaceBetween={20} slidesPerView={3} navigation={true} pagination={{ clickable: true }} onSwiper={(swiper) => console.log(swiper)} className="swiper-navigation-black">
                <SwiperSlide >
                    <SmallCard />
                </SwiperSlide>
                <SwiperSlide>
                    <SmallCard />
              </SwiperSlide>
              <SwiperSlide>
                    <SmallCard />
                </SwiperSlide>
                <SwiperSlide>
                    <SmallCard />
              </SwiperSlide>
              <SwiperSlide>
                    <SmallCard />
                </SwiperSlide>
              </Swiper>
            </div>
        </div>
        <div className="mt-6">
          <p>FINN-kode	222971167</p>
          <p>Sist endret	10. jul. 2021 02:22</p>
          <p>Rapporter annonse</p>
          <p>Annonsene kan være mangelfulle i forhold til lovpålagt opplysningsplikt. Før bindende avtale inngås oppfordres interessenter til å innhente komplett informasjon fra meglerforetaket, selger eller utleier.</p>
        </div>
        </div>

        <div className="w-full ml-24 sticky">
          <div className="bg-blue-50 rounded-md px-1 flex py-4 items-center">
            <BiUserCircle className="text-5xl"/>
            <p className="w-1/2 text-center ml-1 mr-2">Du må være logget inn for å se profilen</p>
            <button className="bg-white font-medium hover:bg-transparent border-2 hover:border-blue-700 text-blue-700 text-xs rounded-md p-1">Logg Inn</button>          
          </div>
          <button className="bg-blue-600 w-full mt-3 mb-1 font-semibold  hover:bg-blue-800 text-white rounded-lg py-3 text-lg">Send Melding</button>
          <p className="text-blue-600 text-xs mb-6">Vis mobilnummer</p>
          <div className="bg-green-100 w-full flex items-center px-3 py-4 rounded-lg">
            <FaLeaf className="text-3xl text-green-500"/>
            <div className="ml-2 w-4/5 text-left font-medium  text-black rounded-lg py-3 text-lg">Denne varren sparer CO2 tilsvarende production av <p className="text-xl font-medium">95nye plastposer</p> </div>
            <IoIosArrowDown className="text-blue-500 text-2xl"/>
          </div>
          
          <div className="text-blue-600 text-lg mt-4">
            <p className="font-thin hover:underline cursor-pointer">Få hjelp til frakt</p>
            <p className="font-thin hover:underline cursor-pointer">Pris på lån</p>
          </div>
        </div>
      </div>
  )
}

export default ProductMain;