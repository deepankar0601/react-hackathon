import React from "react";
import {Row,Col, Button } from "react-bootstrap";
import Navbar from './NavBar'
import PicsArt from '../assets/icons/PicsArt_04-14-04.42 1.svg';
import mySvg from'./Aicon.js'
import './components.css'
import {AdminContext} from './Context'
function BackgroundTitle() {
  const {createChallenge, setCreateChallenge} = React.useContext(AdminContext);
  const {Ai,HeartRobot,HumanIcon} = mySvg
  return (<>
  <section className='header-section'>
    <Navbar/>
  <section>
    <Row>
        <Col>
        <div className="yellow-horizontal-line"></div>
        <h1 className="header">
                Accelerate Innovation with Global AI Challenges
            </h1>
        <p className="second-line">
                AI Challenges at DPhi simulate real-world problems. 
                It is a great place to put your AI/Data Science skills to 
                test on diverse datasets allowing you to foster learning 
                through competitions.
            </p>
            
        <Button variant="none" className="buttons" onClick={()=>setCreateChallenge(!createChallenge)}>Create Challenge</Button> 
       </Col>
       <Col>
            <img 
              src={PicsArt}
              className="logo-rocket"
              alt="React Bootstrap logo"
            />
        </Col>

    </Row>
    </section>
  </section>
  
    <section className="intro-data">
      <Row>
        <Col>
           <img src={Ai} alt='AI Icon' className="ai-icon"/>
           <div >
           <p className='icon-count'>100K+</p>
           <p className="icon-detail">AI model submissions</p>
           </div>
           </Col>
           <Col>
           <div className="border-between"></div>
           </Col>
           <Col>
           <img src={HumanIcon} alt='Data Scientist icon' className="second-icon"/>
           <p className='second-icon-count'>50K+</p>
           <p className="second-icon-detail">Data Scientist</p>
           </Col>
           <Col>
           <div className="borderline-between-2-3"></div>
           </Col>
           <Col>
          <img src={HeartRobot} alt='Heart Icon' className="third-icon"/>
          <p className='icon-third-count'>100+</p>
           <p className="icon-third-detail">AI Challenges hosted</p>
           </Col>
           </Row>
        
    </section>
    </>
    
  )
}

export default BackgroundTitle