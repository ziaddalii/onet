import React, { Fragment } from 'react'
import CardsTypesNav from './CardsTypesNav';
import CommonCountries from './CommonCountries';
import GlobalCards from './GlobalCards';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function CardsTypes() {
  return (

    <Fragment>
    
    <div className='row w-100 text-color m-0' style={{backgroundColor:"#F5F1FA"}}>
        <div className='w-75 mx-auto px-0 col-md-12' style={{margin:"82px"}}>

        
        
        <BrowserRouter>
        <CardsTypesNav/>
                <Routes>
                    <Route path="/" element={<CommonCountries/>}/>
                    <Route exact path="/globalcards" element={<GlobalCards/>}/>
                </Routes>
            </BrowserRouter>
 
        </div>
    </div>
    
    </Fragment>
  )
}

export default CardsTypes