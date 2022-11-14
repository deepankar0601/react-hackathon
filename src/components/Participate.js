import React from "react";
import { Container,Row,Col } from "react-bootstrap";
import mySvg from './Aicon';
import './components.css';
import CardComponent from './Dropdown'
function participate(){
    const {CarbonNotebook,Vector,Robot,IdentificationCard} = mySvg
   /*const contents =[{
        logo: CarbonNotebook,
        title:'Prove your skills',
        content:'Gain substantial experience by solving real-world problems and pit against others to come up with innovative solutions.'
    },
    {
        logo:Vector,
        title:'Learn from community',
        content:'One can look and analyze the solutions submitted by the other Data Scientists in the community and learn from them.'
    },
    {
        logo:Robot,
        title:'Challenge yourself',
        content:'There is nothing for you to lose by participating in a challenge. You can fail safe, learn out of the entire experience and bounce back harder.'
    },
    {
        logo:IdentificationCard,
        title:'Earn recognition',
        content:'You will stand out from the crowd if you do well in AI challenges, it not only helps you shine in the community but also earns rewards.'
    }]*/



    return (
        <section className='participate-whole-section'>
            <h3 className="participate-header">Why Participate in <span style={{color:'#44924C'}} >coding Challenges?</span></h3>
              <Row>
            <Col className='participate-card-section'>
                <img src={CarbonNotebook} className='participate-logo-1'/>
                <h4 className="card-1-title">Prove your skills</h4>
                <p className='content-1'>Gain substantial experience by solving real-world problems and pit against others to come up with innovative solutions.</p>
              
              </Col>
              <Col className='participate-card-section-2'>
                <img src={Vector} className='card-2-logo'/>
                <h4 className='card-2-title'>Learn from community</h4>
                <p className='card-2-content'>One can look and analyze the solutions submitted by the other and learn from them.</p>
              
              </Col>
              </Row>
              <Row>
              <Col className='participate-card-section-3'>
                <img src={Robot} className='card-3-logo'/>
                <h4 className='card-3-title'>Challenge yourself</h4>
                <p className='card-3-content'>There is nothing for you to lose by participating in a challenge. You can fail safe, learn out of the entire experience and bounce back harder.</p>
              
              </Col>
              
             <Col className='participate-card-section-4'>
                <img src={IdentificationCard} className='card-4-logo'/>
                <h4 className='card-4-title'>Earn recognition</h4>
                <p className='card-4-content'>You will stand out from the crowd if you do well in AI challenges, it not only helps you shine in the community but also earns rewards.</p>
              
              </Col>
              </Row>
           
        </section>
    )
}


export default participate;