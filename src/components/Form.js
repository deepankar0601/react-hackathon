import React,{useState} from "react";
import NavBar from "./NavBar";
import mySvg from "./Aicon";

import {AdminContext} from './Context'
import EditImage from './EditImage';
function FormSearch(){
  const {formData,handleChange,handleSubmit,handleImageUpload,setCreateChallenge,imageFile,isEditing,handleFormEdit} =React.useContext(AdminContext);

    function handleFile(){
        document.getElementById('image_upload').click();
    }

  
    return(
    <section style={{height:'1250px',width:'100%'}}>
    <NavBar/>
        <div className='challenge_details '><span className="challenge-text">Challenge Details</span></div>
  <form onSubmit={isEditing ? handleFormEdit : handleSubmit}>
    <label htmlFor="challenge_name" className='challenge-name' >Challenge Name</label>
  <input type='text'  id='challenge_name'  name='challengeName' defaultValue={formData.challengeName} onChange={handleChange} required/>

  <label htmlFor="start_date" className="start-date">Start date</label>
  <input type='date'  id='start_date' placeholder="Start date" min={new Date().toISOString().split('T')[0]} name='startDate' value={formData.startDate} onChange={handleChange} required/>

  <label htmlFor="end_date" className='end-date'>End date</label>
  <input type='date'  id='end_date' placeholder="End date" 
          disabled={formData.startDate === "" ? true: false}
          min={formData.startDate ? new Date(formData.startDate).toISOString(): ""} 
          name='endDate' value={formData.endDate} onChange={handleChange} required/>

  <label htmlFor="description" className="description-form">Description</label>
  <textarea id='description' name='description' value={formData.description} onChange={handleChange} required/>

  <label htmlFor="image_upload" className='image-form'>Image</label>
  {isEditing ? <EditImage/>
      : <><input type='file' id='image_upload'className='image-upload' name='upload' accept="image/*" value={imageFile} onChange={handleImageUpload} hidden required/>
        <button type='submit' className="image-upload" onClick={handleFile}>Upload <img src={mySvg.UploadIcon}/></button></> }
  
  
  <label htmlFor={isEditing ?'selectOption-edit':'selectOption'} className={isEditing? 'level-type-edit':'level-type'}  >Level</label>
  <select id={isEditing ?'selectOption-edit':'selectOption'} name='selectedValue'  defaultValue={formData.selectedValue} onChange={handleChange} required>
    <option value="Easy" >Easy</option>
    <option value="Meduim">Medium</option>
    <option value="Hard">Hard</option>
    
    </select>
  <button type='submit' value='submit'className={isEditing ? 'edit-challenge-btn': "create-challenge-button"}  > {isEditing ? 'Edit Challenge' : 'Create Challenge'}</button>
 </form>
 </section>
    )
}

export default FormSearch;