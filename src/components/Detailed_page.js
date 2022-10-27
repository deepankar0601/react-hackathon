import React, {useState, useEffect } from "react";
import './components.css'
import {AdminContext} from './Context';
import mySvg from "./Aicon";
import NavBar from './NavBar'
function DetailPage(){
    const {singleDetailedPage,handleDelete,handleEdit,activeness} = React.useContext(AdminContext);
    console.log(singleDetailedPage);
    const {id,challengeName,selectedValue,description,startDate,endDate}=singleDetailedPage;
    const [timeline,setTimeline]=useState({status:'',dates:''})
    
    useEffect(()=>{
        if(activeness==='active'){
            setTimeline({status:'ends on',dates:endDate})
        }else if(activeness==='upcoming'){
            setTimeline({status:'starts on',dates:startDate})
        }
        else{
            setTimeline({status:'ends on',dates:endDate})
        }
    },[])
   
   return( <>
            <NavBar/>
            <section className="detail-jumbo">
              <div className='time-start-count'><p className="date-text"> {timeline.status.toUpperCase()  }   { new Date(timeline.dates).toUTCString()}</p></div>
              <h1 className='detail-header'> {challengeName}</h1>
              <p className="identity-class">Identify the class to which each butterfly belongs to</p>
              <div className='difficulty-level'><img src={mySvg.DifficultyLevelIcon}className='difficulty-level-icon'/><div className="level-text">{selectedValue}</div></div>
            </section>
            <section className='overview-section'>
                <p className='overview-text'>Overview</p>
                <div className='green-overview-line'></div>
                <button className='overview-btn-edit'  onClick={()=>handleEdit(id)}><span className='overview-btn-text'>Edit</span></button>
                <div className="overview-btn-delete" onClick={()=>handleDelete(id)}><span className="overview-btn-delete-text">Delete</span></div>
            
            </section>
            <section className='overview-detail'>
                <p>
                   Butterflies are the adult flying stage of certain insects
                   belonging to an order or group called Lepidoptera. The word 
                   "Lepidoptera" means "scaly wings" in Greek. This name perfectly 
                   suits the insects in this group because their wings are covered 
                   with thousands of tiny scales overlapping in rows.
                </p>   
                <p>
                    An agency of the Governmental Wildlife Conservation is planning to 
                    implement an automated system based on computer vision so that it can
                    identify butterflies based on captured images. As a consultant for this 
                    project, you are responsible for developing an efficient model.
                </p>
                <p>
                   Your Task is to build an Image Classification Model using CNN that 
                   classifies to which class of weather  each image belongs to.
                </p>
            </section>
            </>)
}

export default DetailPage