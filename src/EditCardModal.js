import React, { useState } from 'react';
import Modal from 'react-modal';

const EditCardModal = ({cardData, onSave }) => {

  
  const [formData, setFormData] = useState(cardData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
//     <Modal isOpen={true} ariaHideApp={false}>
      
// <div class="container">
// <h2 >Edit Card</h2>
//   <form onSubmit={handleSubmit}>
//   <div class="row">
//     <div class="col-25">
//       <label for="fname">Name</label>
//     </div>
//     <div class="col-75">
//       <input type="text" name="title" value={formData.name} onChange={handleChange}/>
//     </div>
//   </div>
//   <div class="row">
//     <div class="col-25">
//       <label >Email</label>
//     </div>
//     <div class="col-75">
//       <textarea name="email" value={formData.email} onChange={handleChange} />
//     </div>
//   </div>
//   <div class="row">
//     <div class="col-25">
//       <label >Phone</label>
//     </div>
//     <div class="col-75">
//       <textarea type="text" name="Phone" value={formData.phone} onChange={handleChange} ></textarea>
//     </div>
//   </div>
//   <div class="row">
//     <div class="col-25">
//       <label >Web</label>
//     </div>
//     <div class="col-75">
//       <textarea type="text" name="Web" value={formData.web} onChange={handleChange} ></textarea>
//     </div>
//   </div>
//   <div class="row">
//     <button  type="submit">Save</button>
//   </div>
//   </form>
// </div>
//     </Modal>

    <Modal isOpen={true}> 
      <h2>Edit Card</h2> 
      <form onSubmit={handleSubmit} className='contain'> 
        <label>Name:</label> 
        <input type="text" name="name" value={formData.name} onChange={handleChange} /> 
 
        <label>Email:</label> 
        <input type="text" name="name" value={formData.email} onChange={handleChange} /> 
 
        <label>Phone:</label> 
        <input type="text" name="name" value={formData.phone} onChange={handleChange} /> 
 
        <label>Website:</label> 
        <input type="text" name="name" value={formData.web} onChange={handleChange} /> 
         
        <button type="submit">Save</button> 
      </form> 
    </Modal>
  );
};

export default EditCardModal;
