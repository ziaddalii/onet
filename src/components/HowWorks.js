import React from 'react'
import phone1 from '../images/Group 1562.png';
// overlay
function HowWorks() {
  return (
    <div className='row w-100 text-color m-0' style={{backgroundColor:"#FBF9FE", position:"relative", overflow:"hidden"}}>
                <div className=' how-works-overlay1 '></div>
                <div className=' how-works-overlay2 '></div>
        
        <div className='w-75 mx-auto px-0' style={{margin:"82px", overflow:'hidden'}}>
            <div className='section d-flex align-items-center justify-content-between' style={{marginBottom:"45px", }}>
                <p className='font-weight-bolder text-color' style={{fontSize:"2rem", zIndex:"10"}}>كيف تعمل المنصة ؟</p>
            </div>
            <div className='col-md-12 row m-0 d-flex justify-content-between'>
            <div className="mb-3 col-md-3 col-sm-6" style={{ border:"none",zIndex:"10"}}>
                <div className='phone-photo1'></div>
                <p className='phone-text'>تنزيل التطبيق</p>
            </div>
            <div className="mb-3 col-md-3 col-sm-6" style={{ border:"none",zIndex:"10"}}>
                <div className='phone-photo2'></div>
                <p className='phone-text'>اختر الوجهة والباقة</p>
            </div>
            <div className="mb-3 col-md-3 col-sm-6" style={{ border:"none",zIndex:"10"}}>
                <div className='phone-photo3'></div>
                <p className='phone-text'>تثبيت eSIM</p>
            </div>
            <div className="mb-3 col-md-3 col-sm-6" style={{ border:"none",zIndex:"10"}}>
                <div className='phone-photo4'></div>
                <p className='phone-text text-color'>تنشيط eSIM</p>
            </div>
      
        </div>
        </div>
    </div>
  )
}

export default HowWorks