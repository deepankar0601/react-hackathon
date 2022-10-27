import React,{useEffect, useState} from "react";
import { Card } from "react-bootstrap";
import { AdminContext } from "./Context";
import Countdown from './Coutndown'
function SingleCard(props){
  const { partipateDetailPage,getActiveness}=React.useContext(AdminContext);
  const {id,challengeName,startDate,endDate,upload} = props
  const [deadlineTimes,setDeadlineTimes] = useState('')
  const [active,setActive] = useState('')
  const [colors,setColors] = useState('')
  useEffect(()=>{
    
    if(new Date(startDate)>new Date()){
      setDeadlineTimes('upcoming');
      setActive('starts in');
      setColors('rgba(242, 201, 76, 0.25)')
    } else if(new Date(endDate) > new Date() && new Date(startDate) < new Date()){
      setDeadlineTimes('active')
      setActive('ends in');
      setColors('rgba(68, 146, 76, 0.24)')
    
      
    }else{
     setDeadlineTimes('past');
     setActive('ended on');
     setColors ('rgba(255, 60, 0, 0.170148)')
    
     
    }
    getActiveness(active);
  },[deadlineTimes])
   
    
  
  
  
 
  
  function handleclick(id){
    partipateDetailPage(id)
  } 
  
    return (
      
      <div className="col-md-4 mb-5 mt-4 pl-4" id={id}>
    <div className="card single-card-design" >
       <img src={upload} className='card-img-top card-image' />
      <div className="card-body">
        <p className='feature'  style={{ background: colors}}><span className="featureText">{deadlineTimes}</span></p>
        <h5 className="card-title challenge-card-title">{challengeName}</h5>
        <p className="countdownCompetition">{active}</p>
        {deadlineTimes==='past' ? <div className="countdown ended-on"> {new Date(endDate).toDateString()}</div>:<Countdown clock={{startDate,endDate}} />}
        <button className='card-button-participate' onClick={()=>handleclick(id)}><span className='participate-button-text'>Participate Now</span></button>
      </div>
    </div>

  </div>
  
     
    )
}

export default SingleCard;