import React from 'react';
function Hero() {
  return (
    // - overlay and responsive navbar
    <div className='hero-container w-100 h-100 overlay text-color' style={{backgroundColor:"#FBF9FE",opacity:"0.89", marginTop:"60px"}}>
    <div className='hero-overlay' style={{zIndex:-1}}></div>
      <nav className='navbar navbar-expand-lg d-flex align-items-center justify-content-between mx-auto w-75' style={{height:"57.24px", top:"30px", marginBottom:"60px"}}>
        <div className="collapse navbar-collapse d-flex w-100 p-0 mx-auto d-flex align-items-center justify-content-between" style={{height:"57.24px" }} id="navbarNav">
            <div className='w-100 navbar-nav d-flex align-items-center justify-content-between'>
            <div style={{width:"145.69px", height:"57.24px"}} className="nav-brand">
            <a className='navbar-brand m-0'>
              <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="145.688" height="57.239" viewBox="0 0 145.688 57.239">
                <defs>
                  <clipPath id="clip-path">
                    <rect id="Rectangle_2792" data-name="Rectangle 2792" width="145.688" height="57.239" fill="none"/>
                  </clipPath>
                </defs>
                <g id="Group_657" data-name="Group 657" transform="translate(0 0)">
                  <g id="Group_656" data-name="Group 656" transform="translate(0 0)" clipPath="url(#clip-path)">
                    <path id="Path_1441" data-name="Path 1441" d="M214.825.212A9.893,9.893,0,0,0,212.732,0h-.045c-.235,0-.469.011-.716.034a10.211,10.211,0,0,0-2.864.615,2.4,2.4,0,0,0-.392.157.041.041,0,0,0-.034.011,10.674,10.674,0,0,0-2.831,1.8V2.607L205.84,2.6a10.313,10.313,0,0,0-3.513,7.5,3.406,3.406,0,0,1,.034.492v.034c0,.123,0,.235-.011.358a3.253,3.253,0,0,1-.481,1.578,1.468,1.468,0,0,1-.145.213,3.237,3.237,0,0,1-1.108.984,3.691,3.691,0,0,1-5.482-3.916,3.653,3.653,0,0,1,2.954-2.842,3.576,3.576,0,0,1,3.032.862,11.738,11.738,0,0,1,3.334-6.277A10.206,10.206,0,0,0,198.981.011,10.359,10.359,0,0,0,188.71,11.725a10.226,10.226,0,0,0,10.271,9,9.126,9.126,0,0,0,5.852-1.88,3.054,3.054,0,0,0,.369-.291l.022-.022a5.652,5.652,0,0,0,.526-.5,13.148,13.148,0,0,0,3.166-7.34c.313-2.059,1.7-3.715,3.748-3.748a3.912,3.912,0,0,1,3.849,3.939v9.756h3.39a3.171,3.171,0,0,0,3.167-3.166v-7.1A10.39,10.39,0,0,0,214.825.212" transform="translate(-77.383 0)" fill="#ff9133"/>
                    <path id="Path_1442" data-name="Path 1442" d="M16.3,73.817a16.669,16.669,0,0,1,0-33.329,16.669,16.669,0,0,1,0,33.329m0-27.735a11.076,11.076,0,0,0,0,22.14,11.076,11.076,0,0,0,0-22.14" transform="translate(0 -16.61)" fill="#4c00a9"/>
                    <path id="Path_1443" data-name="Path 1443" d="M69.144,73.6a2.8,2.8,0,0,1-2.8-2.8V43.1a2.8,2.8,0,0,1,5.022-1.695l16,20.992V42.98a2.8,2.8,0,1,1,5.594,0v27.7a2.8,2.8,0,0,1-5.022,1.7l-16-20.993V70.806a2.8,2.8,0,0,1-2.8,2.8" transform="translate(-27.219 -16.485)" fill="#4c00a9"/>
                    <path id="Path_1444" data-name="Path 1444" d="M141.186,73.809h-15.8a2.8,2.8,0,0,1-2.8-2.8V43.187a2.8,2.8,0,0,1,2.8-2.8h16.16a2.8,2.8,0,0,1,0,5.594H128.188V68.215h13a2.8,2.8,0,1,1,0,5.594" transform="translate(-50.294 -16.57)" fill="#4c00a9"/>
                    <path id="Path_1445" data-name="Path 1445" d="M141.451,68.647H126.627a2.8,2.8,0,0,1,0-5.595h14.824a2.8,2.8,0,0,1,0,5.595" transform="translate(-50.801 -25.867)" fill="#4c00a9"/>
                    <path id="Path_1446" data-name="Path 1446" d="M178.739,74.316a2.8,2.8,0,0,1-2.8-2.8v-27.1a2.8,2.8,0,0,1,5.594,0v27.1a2.8,2.8,0,0,1-2.8,2.8" transform="translate(-72.18 -17.076)" fill="#4c00a9"/>
                    <path id="Path_1447" data-name="Path 1447" d="M181.117,46.233H165.2a2.8,2.8,0,0,1,0-5.594h15.918a2.8,2.8,0,0,1,0,5.594" transform="translate(-66.625 -16.672)" fill="#4c00a9"/>
                  </g>
                </g>
              </svg>
            </a>
          </div>
              <div className='nav-item d-flex align-items-center justify-content-center'>
                <a className="navbar-a nav-link line m-1" style={{fontWeight:"400", color:"#4A4A4A" }} href="#">بطاقات محلية</a>
                <a className="navbar-a nav-link line m-1" style={{fontWeight:"400", color:"#4A4A4A"}} href="#">بطاقات اقليمية</a>
                <a className="navbar-a nav-link line m-1" style={{fontWeight:"400", color:"#4A4A4A"}} href="#">بطاقات عالمية</a>
              </div>

              <div className='d-flex align-items-center nav-item d-flex align-items-center justify-content-between'>
                  <svg xmlns="http://www.w3.org/2000/svg" className='m-3' width="22.735" height="20.382" viewBox="0 0 22.735 20.382">
                    <path id="cart-shopping-solid_1_" data-name="cart-shopping-solid (1)" d="M0,.955A.953.953,0,0,1,.955,0H2.767A2.229,2.229,0,0,1,4.781,1.274H21.142A1.591,1.591,0,0,1,22.679,3.28L21.047,9.343a2.871,2.871,0,0,1-2.767,2.122H6.8L7.01,12.6a.959.959,0,0,0,.939.776H19.427a.955.955,0,0,1,0,1.911H7.95a2.863,2.863,0,0,1-2.814-2.329L3.081,2.17a.317.317,0,0,0-.314-.259H.955A.953.953,0,0,1,0,.955ZM5.1,18.471a1.911,1.911,0,1,1,1.911,1.911A1.911,1.911,0,0,1,5.1,18.471ZM18.471,16.56a1.911,1.911,0,1,1-1.911,1.911A1.911,1.911,0,0,1,18.471,16.56Z" fill="#4a4a4a"/>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" className='m-3' width="20.378" height="20.382" viewBox="0 0 20.378 20.382">
                    <path id="magnifying-glass-solid_3_" data-name="magnifying-glass-solid (3)" d="M16.558,8.279a8.259,8.259,0,0,1-1.592,4.884L20,18.206a1.275,1.275,0,1,1-1.8,1.8l-5.039-5.043a8.28,8.28,0,1,1,3.4-6.687ZM8.279,14.011A5.732,5.732,0,1,0,2.547,8.279,5.733,5.733,0,0,0,8.279,14.011Z" fill="#4a4a4a"/>
                  </svg>
                  <a className="btn d-flex justify-content-center align-items-center nav-link navbar-a text-white btn-hover" style={{fontSize:" 18px",fontWeight:"400", backgroundColor:"#FB0066", width:"140px", height:"50px", borderRadius:"10px"}} href="#">تسجيل</a>
              </div>
            </div>
          </div>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
      </nav>
      <div className='hero-items-container w-75 mx-auto d-flex justify-content-between row-cols-md-2 row-cols-sm-1 flex-row row'>
        <div className='d-flex p-0 flex-column col col-md-6 col-sm-12 justify-content-center'>
          <p className='font-weight-bolder flex-end mb-0 mt-1' style={{fontSize:"3rem", fontWeight:"400", color:"#4A4A4A"}}>ملتزمين بابقائك</p>
          <p className='font-weight-bolder flex-end' style={{fontSize:"3rem",fontWeight:"400", color:"#4A4A4A"}}>على تواصل فى كل مكان</p>
          <a className="btn d-flex justify-content-center align-items-center text-white btn-hover" style={{fontSize:" 18px",fontWeight:"400", backgroundColor:"#FB0066", width:"140px", height:"50px", borderRadius:"10px"}} href="#">المزيد</a>
        </div>
        <div className='d-flex p-0 flex-row row row-md-6' style={{margin:"60px 0px"}}>
          <svg xmlns="http://www.w3.org/2000/svg" width="529.898" height="318.753" viewBox="0 0 529.898 318.753">
            <path id="Path_1448" data-name="Path 1448" d="M591.668,3.266A152.18,152.18,0,0,0,559.48,0h-.69c-3.61,0-7.221.172-11.013.517a157.072,157.072,0,0,0-44.063,9.462,36.947,36.947,0,0,0-6.024,2.413.634.634,0,0,0-.517.172A164.2,164.2,0,0,0,453.629,40.27V40.1l-.172-.172A158.637,158.637,0,0,0,399.415,155.24a52.389,52.389,0,0,1,.517,7.575v.517c0,1.9,0,3.62-.172,5.507a50.039,50.039,0,0,1-7.4,24.268,22.592,22.592,0,0,1-2.231,3.275,49.795,49.795,0,0,1-17.046,15.141c-46.467,24.44-93.45-14.452-84.333-60.238a56.2,56.2,0,0,1,45.442-43.718,55,55,0,0,1,46.639,13.254,180.558,180.558,0,0,1,51.293-96.553A157,157,0,0,0,347.95.172,159.2,159.2,0,0,0,228.336,54.214C197.7,88.978,184.1,133.9,189.952,180.369c10.152,80.205,76.767,138.384,158,138.384,35.807,0,66.1-9.807,90.021-28.912a46.976,46.976,0,0,0,5.679-4.482l.345-.345a86.93,86.93,0,0,0,8.092-7.738c24.957-25.991,41.477-64.03,48.707-112.91,4.817-31.67,26.163-57.144,57.652-57.661,32.532-.517,59.212,27.887,59.212,60.592V317.374H669.8a48.776,48.776,0,0,0,48.716-48.707V159.376c0-76.767-54.568-140.96-126.853-156.11" transform="translate(-188.623)" fill="#ff9133"/>
          </svg>
        </div>
      </div>
    </div>
    
  )
}

export default Hero