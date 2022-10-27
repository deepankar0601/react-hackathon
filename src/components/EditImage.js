import React from "react";
import './components.css';
import mySvg from "./Aicon";
import { AdminContext } from "./Context";

function EditImage(){
    const {singleDetailedPage,handleImageUpload,imageFile} = React.useContext(AdminContext)
    function handleFile(){
      document.getElementById('image_upload').click();
  }
  console.log(singleDetailedPage)
    return (<section className="edit-image-section">
           <img scr={singleDetailedPage.upload}  className='edit-image-class'/>
           <input type='file' id='image_upload' name='upload' accept="image/*" value={imageFile} onChange={handleImageUpload} hidden />
           <button style={{border:'none'}} type='submit' id='edit-submit' onClick={handleFile}><img src={mySvg.Imageicon} className='uploadImageEdit'/>
                <div className="uploadImageEdit" style={{margin:'170px 155px 28px 43px',color:'#44924C'}}>change</div> 
                <img src={mySvg.RightArrow}className='uploadImageEdit' style={{margin:'177px 146px 28px 100px'}}/>
            </button>

    </section>)
}



export default EditImage;