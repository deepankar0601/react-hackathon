import React,{useState,useEffect,useCallback} from "react";
import { v4 as uuidv4 } from 'uuid';
import {mockData,filterSearchItem} from './MockData'

const AdminContext = React.createContext();
function AdminProvider({ children }){
 
       
    const  [createChallenge,setCreateChallenge] = useState(false);
    const [singleDetailedPage,setSingleDetailedPage] = useState(null);
    const [deadline,setDeadline] = useState(false);
    const [isEditing,setIsEditing] = useState(false);
    //const [fileRef, setFileRef] = useRef();
    const [searchVal,setSearchVal]=useState('');
    const [bool,setBool]= useState(true);
    const [formData,setFormData] = useState({
        challengeName :'',
        startDate :'',
        endDate:'',
        description:'',
        selectedValue:'easy',
      });
    const [imageFile,setImageFile] = useState(null);
    const [challengesData,setChallengesdata] =useState(mockData);
    const [activeness,setActivness] = useState('');
    const [checkSearchData,setCheckSearchData] = useState([]);
    const [filterDatas,setFilterDatas] = useState([]);
    const [levelFilter,setLevelFilter] = useState([]);
    const [checkedState, setCheckedState] = useState(
      new Array(filterSearchItem.length).fill(false)
    );
    function handleChange(e){
    let name=e.target.name;
    let value = e.target.value;
    setFormData({...formData,[name]:value})
   // console.log(formData)
    
   }
   function handleImageUpload(e){
    if(e.target.files.length !==0){
     console.log(e.target.files)
     setImageFile(URL.createObjectURL(e.target.files[0]));
    }
   }
   const handleSubmit=(e)=>{
    e.preventDefault();
    const unsortedData=[...challengesData,{...formData,id:uuidv4(),upload:imageFile}]
    const sortedData=unsortedData.sort((date1, date2) => {return new Date(date2.startDate).getTime()- new Date(date1.startDate).getTime()});
   setChallengesdata(sortedData)
    
    
    setCreateChallenge(false);
    setFormData({id:'',challengeName :'',
   startDate :'',
   endDate:'',
   description:'',
   upload:'',
   selectedValue:''});
   //const sortedData=challengesData.sort((item,itemB) =>   itemB.startDate- item.startDate)
   //setChallengesdata(sortedData)
   }
   
   
    

   
   function handleFilterSearch(e){
    e.preventDefault();
    setBool(true)
   }
 
  function partipateDetailPage(id){
    console.log(id);
    const singleitem=challengesData.filter((item)=>item.id===id)
    setSingleDetailedPage(singleitem[0])
    setDeadline(true);
    
  }
  const handleDelete =(id)=>{
    const data= challengesData.filter((item)=> id != item.id)
    setChallengesdata(data);
    setDeadline(false)
   }
   const handleEdit=(id)=>{
    setDeadline(false)
    setIsEditing(true)
    setCreateChallenge(true);

    setFormData({
      id:id,
      challengeName :singleDetailedPage.challengeName,
   startDate :singleDetailedPage.startDate,
   endDate:singleDetailedPage.endDate,
   description:singleDetailedPage.description,
   upload:singleDetailedPage.upload,
   selectedValue:singleDetailedPage.selectedValue
    });
    
//console.log(singleDetailedPage.upload)
    
   }
  const handleFormEdit=(e)=>{
       e.preventDefault();
       const updatedChallenge=challengesData.map((item)=>{
        if(item.id===formData.id){
          return {...formData,upload:imageFile}
        }else{
          return item;
        }
       });
       const sortedData=updatedChallenge.sort((date1, date2) => {return new Date(date2.startDate).getTime()- new Date(date1.startDate).getTime()});
       setChallengesdata(sortedData);
       setIsEditing(false)
       setCreateChallenge(false)
       
      
      }
      function getActiveness(active){
           setActivness(active)
      }
   
  useEffect(()=>{
    if(singleDetailedPage){
      setDeadline(true);
    }
    if(bool){
      const nameSearch = challengesData.filter(item=>  {
        if(searchVal===''){
          return item
        }else if(item.challengeName.toLowerCase().includes(searchVal.toLowerCase())){
          return item
        }
       
      });
      setChallengesdata(nameSearch)
      //console.log(challengesData);
      setBool(false);
    }//console.log(mockData)
    

},[bool,singleDetailedPage])
 
    //console.log(filterDatas,' filter datas');
    //console.log(levelFilter, 'filtered level')
   /*create challenge click main page */
   
  
   
return ( <AdminContext.Provider value={{formData,createChallenge,setCreateChallenge,handleChange,handleSubmit,challengesData,handleImageUpload,partipateDetailPage,deadline,singleDetailedPage,handleDelete,handleEdit,isEditing,handleFormEdit,searchVal,setSearchVal,handleFilterSearch,getActiveness,activeness,setFilterDatas,filterDatas,setLevelFilter,levelFilter,setChallengesdata,checkSearchData,setCheckSearchData,checkedState, setCheckedState}}> {children} </AdminContext.Provider>)



}
export {AdminProvider, AdminContext}