import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { LuPencilLine } from "react-icons/lu";
import { MdDelete } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { useState } from "react";
import EditCardModal from "./EditCardModal";


function Card({id,imgsrc,name,email,phone,web,removeCard}){
    const [isActive, setIsActive] = useState(false);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newcardData , setnewcardData] = useState({imgsrc:imgsrc,name:name,email:email,phone:phone,web:web});

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSave = (updatedData) => {
    closeModal();
    setnewcardData(updatedData);
  };
   
  console.log("neww",newcardData);
  return (
    <>
  <div className='card'>
    <img src={newcardData.imgsrc} alt="mypic" className='card_img' />
    <div className='card_info'>
      <h3 className='card_name'>{newcardData.name}</h3>
      <h3 className='card_email'><MdOutlineEmail /> {newcardData.email}</h3>
      <h3 className="card_phone"><FaPhone /> {newcardData.phone}</h3>
      <h3 className='card_link'><CiGlobe /> {newcardData.web}</h3>
    </div>
    <div className="icons">
    <span className="icon">{isActive? <FaHeart size={32} color="red" onClick={()=>{setIsActive(!isActive)}}/>:<CiHeart size={32} color="red" onClick={()=>{setIsActive(!isActive)}} />}</span><span className="icon" onClick={openModal}><LuPencilLine size={30}/>
    {isModalOpen && (<EditCardModal cardData={newcardData} onSave={handleSave} />)}</span><span className="icon" onClick={() => removeCard(id)} ><MdDelete size={30}/></span>
    </div>
   </div>
  </>
  )
}

export default Card;