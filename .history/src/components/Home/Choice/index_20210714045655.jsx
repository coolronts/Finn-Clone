import React from 'react';
import {FaHome} from 'react-icons/fa';
const Choice = () => {

 return (
  <div className="flex px-40 mt-12">
   <div className="w-4/5 grid grid-cols-4 grid-flow-row gap-8 ">
    <div className="text-2xl "><FaHome className="self-center"/><p className="text-lg text-center">Eindom</p> </div>
  <div className="text-2xl "><FaHome className="self-center"/><p className="text-lg">Eindom</p> </div>
<div className="text-2xl "><FaHome className="self-center"/><p className="text-lg">Eindom</p> </div>
<div className="text-2xl "><FaHome className="self-center"/><p className="text-lg">Eindom</p> </div>
<div className="text-2xl "><FaHome className="self-center"/><p className="text-lg">Eindom</p> </div>
<div className="text-2xl "><FaHome className="self-center"/><p className="text-lg">Eindom</p> </div>


   </div>
   
  </div>
 )
}

export default Choice;