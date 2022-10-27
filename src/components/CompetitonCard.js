import React, { useState,useEffect } from "react";
import './components.css';

import  Form  from './Form'
import {Card,Button,Row,Col} from 'react-bootstrap'
import SingleCard from "./SingleCard";
import {AdminContext} from './Context';
import { propTypes } from "react-bootstrap/esm/Image";


function CompetitionCards(){
    const {searchVal,challengesData,filterDatas,levelFilter} = React.useContext(AdminContext);

   
    return(

        <section className=' main-whole-card-section'>
            
            <div className = "container">
            <div className="row row-cols-3 mt-5">
                {
                    challengesData.filter(item=>{
                         if(searchVal===''){
                            return item
                         }else if(item.challengeName.toLowerCase().includes(searchVal.toLowerCase())){
                                    return item;
                         }
                        }).filter(item=>{
                            if(filterDatas.length ===0 || filterDatas.includes('ALL')){
                                return item;
                            }else if(filterDatas.includes('Upcoming') && new Date(item.startDate)>new Date()){
                               return item
                            }else if(filterDatas.includes('Active') &&(new Date(item.startDate)<= new Date() && new Date(item.endDate)>new Date())){
                                return item
                            }else if(filterDatas.includes('Past') && new Date(item.endDate) < new Date()){
                                return item
                            }
                        }).filter(item=>{
                            if(levelFilter.length ===0 || filterDatas.includes('ALL')){
                                return item;
                            }else if(levelFilter.includes('Easy') && item.selectedValue==='easy'){
                            return item
                            }else if(levelFilter.includes('Medium') && item.selectedValue==='medium'){
                                return item
                            }else if(levelFilter.includes('Hard') && item.selectedValue==='hard'){
                                return item
                            }
                        }).map((item,index)=><SingleCard {...item} key={item.id} idx={index}/> )
                }
            </div>
            </div>

        </section>
              )
}
export default CompetitionCards