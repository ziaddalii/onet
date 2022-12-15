import React from 'react'
import SliderFeedbacks from './SliderFeedbacks'




function ClientsFeedback() {
  return (
    <div className='row w-100 text-color m-0' style={{backgroundColor:"#FBF9FE", position:"relative", overflow:"hidden"}}>
        <div className=' clients-feedback--logo-overlay '></div>


        <div className='w-75 mx-auto px-0' style={{margin:"82px", overflow:'hidden'}}>
            <div className='section d-flex align-items-center justify-content-center' style={{marginBottom:"45px", }}>
                <p className='font-weight-bolder text-color' style={{fontSize:"2rem", zIndex:"10"}}>اراء العملاء</p>
            </div>
            <div className='col-md-12 row justify-content-center m-0' style={{position:"relative"}}>
                <div className='clients-feedback-circle-overlay'></div>
                
                <div className='col-md-12 row justify-content-center align-items-center'>
                

                    <SliderFeedbacks/>
   
                </div>

                <div className='download-img my-3 d-flex row align-items-center justify-content-between col-md-12 p-0'>
                    <div className='col-md-6 col-sm-12 download-details'>
                        <p className='download-title'>حمل تطبيق ONET علي هاتفك</p>
                        <span className='download-span'>يمكنك تحميل تطبيق ONET على جهازك الأن</span>
                        <div className='download-btns row justify-content-between col-12 d-flex'>
                            <div className='download-android col-md-5 col-sm-12 p-0 my-2'>
                                <img style={{cursor:"pointer"}} src={require('../images/Group 1559.png')}/>
                            </div>
                            <div className='download-apple col-md-5 col-sm-12 p-0 my-2'>
                                <img style={{cursor:"pointer"}} src={require('../images/Group 1558.png')}/>
                            </div>
                        </div>
                    </div>
                    <img className="col-md-6 col-sm-12 phone-img" src={require('../images/164.png')}/>

                </div>

               
            </div>
        </div>
    </div>
  )
}

export default ClientsFeedback