import React from 'react';

const Ads = () => {
  return(
    <>
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
    </>
  )
}

export default Ads