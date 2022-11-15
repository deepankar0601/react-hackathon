import mySvg from "./Aicon"
import { v4 as uuidv4 } from 'uuid';
const {Image1,Image2,Image3,Image4,Image5,Image6} = mySvg;


const mockData1=[{
        id:uuidv4(),
        challengeName:'Data Science Challenge - Graded Datathon',
        startDate :'2022-11-20',
        endDate:'2022-11-30',
        
        description:'Identify the class to which each butterfly belongs to',
        upload:Image1,
},{ 
        id:uuidv4(),
        challengeName:'Data Structures Arrays challenge - Butterfly Identification',
        startDate :'2022-10-10',
        endDate:'2022-12-11',
        
        description:
        'Butterflies are the adult flying stage of certain insects belonging to an order or group called Lepidoptera. The word "Lepidoptera" means "scaly wings" in Greek. This name perfectly suits the insects in this group because their wings are covered with thousands of tiny scales overlapping in rows.An agency of the Governmental Wildlife Conservation is planning to implement an automated system based on computer vision so that it can identify butterflies based on captured images. As a consultant for this project, you are responsible for developing an efficient model.Your Task is to build an Image Classification Model using CNN that classifies to which class of weather  each image belongs to.',
        selectedValue:'medium',
        upload:Image2,
},
{   
        id:uuidv4(),
        challengeName:'Engineering Graduates Interview Challenge',
        startDate :'2022-10-12',
        endDate:'2022-12-30',
       
        description:'Identify the class to which each butterfly belongs to',
        selectedValue:'medium',
        upload:Image3,
},
{   
        id:uuidv4(),
        challengeName:'Travel Insurance Claim Prediction challenge',
        startDate :'2022-10-10',
        endDate:'2022-10-12',
        
        description:'Identify the class to which each butterfly belongs to',
        selectedValue:'medium',
        upload:Image4,
},
{
        id:uuidv4(),
        challengeName:'Data Structures Strings Challenge',
        startDate :'2022-10-05',
        endDate:'2022-10-20',
        
        description:'Identify the strings to which each butterfly belongs to',
        selectedValue:'hard',
        upload:Image5,
}];



const filterSearchItem =[{name:'All',isChecked:false},{name:'Upcoming',isChecked:false},{name:'Active',isChecked:false},{name:'Past',isChecked:false},{name:'Easy',isChecked:false},{name:'Medium',isChecked:false},{name:'Hard',isChecked:false}];
const filterSearchData=['ALL','Upcoming','Active','Past','Easy','Medium','Hard']
  let mockData = mockData1.sort((date1, date2) => {return (new Date(date2.startDate).getTime() - new Date(date1.startDate).getTime())
  });

export {mockData,filterSearchItem,filterSearchData};