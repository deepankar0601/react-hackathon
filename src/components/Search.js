import React, { useState,useEffect } from "react";
import './components.css'
import mySvg from "./Aicon";

import DropdownMenu from "./Dropdown";

import {AdminContext} from './Context'
import { filterSearchData } from "./MockData";
function Search(){
  const [index,setIndex] = React.useState([]);
  
  const [dropdownItem,setDropdownItem]=useState(false)
  const {searchVal,setSearchVal,handleFilterSearch,checkSearchData,setLevelFilter,levelFilter,setFilterDatas,filterDatas, setCheckSearchData,checkedState, setCheckedState} = React.useContext(AdminContext);
  function handleClick(e){
    let datas= checkSearchData.filter(data=>{
      if(data===e.target.value){
        return data
      }
    });
    let levelData=datas.filter(data=>{
      if(!levelFilter.includes(data)){
         return data
      }
    });
    let searchData=datas.filter(data=>{
      if(!filterDatas.includes(data)){
         return data
      }
    });
    const idx= filterSearchData.filter((item,i)=>{
      if(datas===item){
         return i;
      }
    });
   
  setIndex(idx)
    setDropdownItem(false)
    setFilterDatas(searchData)
    setLevelFilter(levelData)
    setCheckSearchData(datas)
  }
  function handleFunc(){
    setDropdownItem(!dropdownItem)
  }
 
 useEffect(()=>{
  
if(index.length !==0){
  const filt= checkedState.map((item,i)=>{
    index.map((idxes)=>{
      if(i===idxes){
        //item=false;
        return !item;
       }else{
         return item;
       }
    })
    
  });
  setCheckedState(filt)
}
 },[index])
//console.log(checkedState, ' checked state')

return(
   <section className='search-section'>
    <h3 className="search-title">Explore Challenge</h3>
    
    
      <div style={{marginTop:'270px',marginLeft:'238px'}}>{checkSearchData.map((item,i)=> <div className="d-inline p-2  text-white" style={{marginRight:'30px',background: 'rgba(248, 249, 253, 0.49)',
borderRadius: '30px',width:'142px'}} value={item}><span >{item}</span><button style={{background:'none',border:'none'}} onClick={handleClick}> <img src={mySvg.cancelIcon}  /></button></div>)}</div>
    
      <form onSubmit={handleFilterSearch}>
          <input type='text' placeholder=" Search" className='search-input' value={searchVal} onChange={(e)=>setSearchVal(e.target.value)}/>
      </form>
     <DropdownMenu dropdownItem={dropdownItem} funct={handleFunc}/>
   </section>


)
}

export default Search;