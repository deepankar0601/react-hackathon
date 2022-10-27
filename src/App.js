
import React from 'react';
import NavBar from './components/NavBar';
import BackgroundTitle from './components/BackgroundTitle'
import Participate from './components/Participate';
import Search from './components/Search';
import CompetionCard from './components/CompetitonCard';
import SearchForm from './components/Form';
import DetailPage from './components/Detailed_page'
import {AdminContext} from './components/Context'
function App() {
  const {createChallenge,deadline,isEditing} = React.useContext(AdminContext);
  if(createChallenge || isEditing){
    return <SearchForm/>
  }
  if(deadline){
    return <DetailPage/>
      
  }
if(!createChallenge && !deadline){
  return (
    <>
    <NavBar />
    <BackgroundTitle/>
    <Participate/>
    <Search/>
  <CompetionCard/>
  
    
    </>
  )
}


}

export default App;
