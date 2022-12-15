import React from 'react'

function WhyWe() {
  return (
    <div className='row w-100 m-0' style={{background:"#F5F1FA 0% 0% no-repeat padding-box"}}>

        <div className='w-75 mx-auto px-0' style={{margin:"82px"}}>
            <div className='section d-flex align-items-center justify-content-between' style={{marginBottom:"45px", }}>
                <p className='font-weight-bolder textColor' style={{fontSize:"2rem", zIndex:"10"}}>لماذا نحن ؟</p>
            </div>

            <div className='row col-md-12 m-0 justify-content-between'>
            <div className="card p-4 my-3 why-we-card col-md-5 justify-content-center align-items-center" style={{position:"relative", overflow:"hidden", border:"none"}}>
                <div className='why-we-card-overlay'></div>
                <div className="card-img-top d-flex justify-content-center" style={{zIndex:"1"}}>
                    <img src={require("../images/Group 1560.png")} style={{marginTop:"46px"}}/>
                </div>
                                
                <div className="card-body" style={{zIndex:"1"}}>
                            <h5 className="card-title d-flex justify-content-center "  style={{color:'#4A4A4A'}}>اتصال فوري</h5>
                            <p className="card-text d-flex justify-content-center " style={{color:"#707070" , fontWeight:"300"}}>شراء eSIM الخاص بك من أي مكان</p>
                        </div>

                        <div className='card-body row w-100 review d-flex'>
                            <div className='d-flex col col-md-12 justify-content-between align-items-center'>
                                <div className='reviewer-info d-flex col-md-6'>
                                    <div className='d-flex reviwer-info-container col-md-12 align-items-center'>
                                        <div className='d-flex col-md-1 justify-content-center align-items-center review-photo'>
                                            <svg xmlns=" http://www.w3.org/2000/svg" width="14.405" height="14.191" viewBox="0 0 14.405 14.191">
                                                <g id="icons" transform="translate(-1.984 -2.191)">
                                                <g id="user" transform="translate(1.984 2)">
                                                    <circle id="Ellipse_8" data-name="Ellipse 8" cx="4" cy="4" r="4" transform="translate(3.202 0.191)" fill="#4a4a4a"/>
                                                    <path id="Path_2534" data-name="Path 2534" d="M16.234,17.881a6.554,6.554,0,0,0-3.452-3.02,1.61,1.61,0,0,0-1.294.072,4.415,4.415,0,0,1-4.6,0,1.618,1.618,0,0,0-1.294,0,6.554,6.554,0,0,0-3.452,3.02,1.419,1.419,0,0,0,1.366,2.013H14.868A1.457,1.457,0,0,0,16.234,17.881Z" transform="translate(-1.984 -5.584)" fill="#4a4a4a"/>
                                                </g>
                                                </g>
                                            </svg>
                                        
                                        </div>
                                        <p className='col col-md-8 card-reviewer-name' >دكتور محمد</p>
                                    
                                    </div>
                                </div>
                                <div className='review-stars-container'>
                                    <svg className='review-stars' xmlns="http://www.w3.org/2000/svg" width={94} height={13}>
                                    <defs>
                                    <linearGradient
                                        id="b"
                                        x1={0.091}
                                        y1={0.378}
                                        x2={1}
                                        y2={0.5}
                                        gradientUnits="objectBoundingBox"
                                    >
                                        <stop offset={0} stopColor="#fcb52c" />
                                        <stop offset={1} stopColor="#ffc60c" />
                                    </linearGradient>
                                    <clipPath id="a">
                                        <path fill="none" d="M0 0h94v13H0z" />
                                    </clipPath>
                                    </defs>
                                    <g data-name="Repeat Grid 2" clipPath="url(#a)">
                                    <path
                                        data-name="Polygon 1"
                                        d="M6.526 1.41a.5.5 0 0 1 .948 0l1.165 3.465a.5.5 0 0 0 .461.341l3.542.1a.5.5 0 0 1 .3.889L10.089 8.5a.5.5 0 0 0-.167.525l1.014 3.592a.5.5 0 0 1-.774.541l-2.869-2.076a.5.5 0 0 0-.586 0l-2.868 2.075a.5.5 0 0 1-.774-.541l1.014-3.592a.5.5 0 0 0-.168-.524L1.058 6.2a.5.5 0 0 1 .3-.889l3.542-.1a.5.5 0 0 0 .461-.341Z"
                                        fill="url(#b)"
                                    />
                                    <path
                                        data-name="Polygon 1"
                                        d="M6.526 1.41a.5.5 0 0 1 .948 0l1.165 3.465a.5.5 0 0 0 .461.341l3.542.1a.5.5 0 0 1 .3.889L10.089 8.5a.5.5 0 0 0-.167.525l1.014 3.592a.5.5 0 0 1-.774.541l-2.869-2.076a.5.5 0 0 0-.586 0l-2.868 2.075a.5.5 0 0 1-.774-.541l1.014-3.592a.5.5 0 0 0-.168-.524L1.058 6.2a.5.5 0 0 1 .3-.889l3.542-.1a.5.5 0 0 0 .461-.341Z"
                                        transform="translate(20)"
                                        fill="url(#b)"
                                    />
                                    <path
                                        data-name="Polygon 1"
                                        d="M6.526 1.41a.5.5 0 0 1 .948 0l1.165 3.465a.5.5 0 0 0 .461.341l3.542.1a.5.5 0 0 1 .3.889L10.089 8.5a.5.5 0 0 0-.167.525l1.014 3.592a.5.5 0 0 1-.774.541l-2.869-2.076a.5.5 0 0 0-.586 0l-2.868 2.075a.5.5 0 0 1-.774-.541l1.014-3.592a.5.5 0 0 0-.168-.524L1.058 6.2a.5.5 0 0 1 .3-.889l3.542-.1a.5.5 0 0 0 .461-.341Z"
                                        transform="translate(40)"
                                        fill="url(#b)"
                                    />
                                    <path
                                        data-name="Polygon 1"
                                        d="M6.526 1.41a.5.5 0 0 1 .948 0l1.165 3.465a.5.5 0 0 0 .461.341l3.542.1a.5.5 0 0 1 .3.889L10.089 8.5a.5.5 0 0 0-.167.525l1.014 3.592a.5.5 0 0 1-.774.541l-2.869-2.076a.5.5 0 0 0-.586 0l-2.868 2.075a.5.5 0 0 1-.774-.541l1.014-3.592a.5.5 0 0 0-.168-.524L1.058 6.2a.5.5 0 0 1 .3-.889l3.542-.1a.5.5 0 0 0 .461-.341Z"
                                        transform="translate(60)"
                                        fill="url(#b)"
                                    />
                                    <path
                                        data-name="Polygon 1"
                                        d="M6.526 1.41a.5.5 0 0 1 .948 0l1.165 3.465a.5.5 0 0 0 .461.341l3.542.1a.5.5 0 0 1 .3.889L10.089 8.5a.5.5 0 0 0-.167.525l1.014 3.592a.5.5 0 0 1-.774.541l-2.869-2.076a.5.5 0 0 0-.586 0l-2.868 2.075a.5.5 0 0 1-.774-.541l1.014-3.592a.5.5 0 0 0-.168-.524L1.058 6.2a.5.5 0 0 1 .3-.889l3.542-.1a.5.5 0 0 0 .461-.341Z"
                                        transform="translate(80)"
                                        fill="url(#b)"
                                    />
                                    </g>
                                    </svg>
                                </div>
                            </div>
                            <p className='font-weight-bolder mt-3'  style={{color:'#4A4A4A', fontWeight:"400"}}>تجربة رائعة</p>
                            <span style={{color:"#707070", fontSize:".75rem", fontWeight:"300"}}>هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي توزيعاَ طبيعياَ -إلى حد ما- للأحرف عوضاً عن استخدام «هنا يوجد محتوى نصي، هنا يوجد محتوى نصي» فتجعلها تبدو (أي الأحرف) وكأنها نص مقروء. العديد من برامح النشر المكتبي وبرامح تحرير صفحات الويب</span>
                        </div>

                            </div>
                <div className="card p-4  my-3 why-we-card col-md-5 justify-content-center align-items-center" style={{position:"relative", overflow:"hidden", border:"none"}}>
                    <div className='why-we-card-overlay'></div>
                    <svg style={{zIndex:"1"}}
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width={260.646}
        height={245.096}  >
        <defs>
        <clipPath id="g">
            <path
            data-name="Rectangle 4709"
            fill="none"
            d="M0 0h260.646v245.096H0z"
            />
        </clipPath>
        <clipPath id="h">
            <path
            data-name="Rectangle 4713"
            fill="none"
            d="M0 0h260.647v11.879H0z"
            />
        </clipPath>
        <clipPath id="i">
            <path
            data-name="Rectangle 4714"
            fill="none"
            d="M0 0h157.652v134.858H0z"
            />
        </clipPath>
        <clipPath id="j">
            <path
            data-name="Path 2022"
            d="M397.331 377.5a9.723 9.723 0 0 0-9.721 9.721v146.143a9.723 9.723 0 0 0 9.721 9.721h71.917a9.724 9.724 0 0 0 9.721-9.724V387.217a9.724 9.724 0 0 0-9.724-9.721Z"
            transform="translate(-387.61 -377.496)"
            fill="#4c00a9"
            />
        </clipPath>
        <clipPath id="k">
            <path
            data-name="Rectangle 4718"
            fill="#fff"
            d="M0 0h91.36v122.408H0z"
            />
        </clipPath>
        <clipPath id="l">
            <path
            data-name="Path 2025"
            d="M666.075 514.354a5.605 5.605 0 0 0-5.605 5.605v26.917a5.605 5.605 0 0 0 5.605 5.605h6.025l.024 9.969 12.012-9.969h47.5a5.605 5.605 0 0 0 5.605-5.605v-26.917a5.605 5.605 0 0 0-5.605-5.605Z"
            transform="translate(-660.47 -514.354)"
            fill="none"
            />
        </clipPath>
        <clipPath id="m">
            <path
            data-name="Path 2026"
            d="M195.605 749.217a5.605 5.605 0 0 0-5.605 5.605v26.917a5.605 5.605 0 0 0 5.605 5.605h47.5l12.012 9.969.025-9.969h6.022a5.606 5.606 0 0 0 5.606-5.605v-26.917a5.605 5.605 0 0 0-5.606-5.605Z"
            transform="translate(-190 -749.217)"
            fill="none"
            />
        </clipPath>
        <clipPath id="o">
            <path
            data-name="Path 2058"
            d="m171.071 1209.016-2.935 2.935a.746.746 0 0 0 1.055 1.055l2.935-2.935a.746.746 0 1 0-1.055-1.055"
            transform="translate(-167.916 -1208.797)"
            fill="none"
            />
        </clipPath>
        <clipPath id="p">
            <path
            data-name="Path 2059"
            d="M275.827 1208.9a.746.746 0 0 0 0 1.055l2.958 2.958a.746.746 0 0 0 1.055-1.055l-2.958-2.958a.746.746 0 0 0-1.055 0"
            transform="translate(-275.608 -1208.682)"
            fill="none"
            />
        </clipPath>
        <clipPath id="r">
            <path
            data-name="Path 2060"
            d="m301.331 1036.734-2.239 2.239a.746.746 0 1 0 1.055 1.055l2.239-2.239a.746.746 0 1 0-1.055-1.055"
            transform="translate(-298.873 -1036.515)"
            fill="none"
            />
        </clipPath>
        <clipPath id="t">
            <path
            data-name="Path 2061"
            d="M148.573 1036.734a.746.746 0 0 0 0 1.055l2.239 2.239a.746.746 0 0 0 1.055-1.055l-2.239-2.239a.746.746 0 0 0-1.055 0"
            transform="translate(-148.354 -1036.515)"
            fill="none"
            />
        </clipPath>
        <clipPath id="v">
            <path
            data-name="Path 2062"
            d="M128.651 1037.385a17.911 17.911 0 1 1 17.911 17.911 17.932 17.932 0 0 1-17.911-17.911m-2.985 0a20.9 20.9 0 1 0 20.9-20.9 20.921 20.921 0 0 0-20.9 20.9"
            transform="translate(-125.666 -1016.489)"
            fill="none"
            />
        </clipPath>
        <clipPath id="w">
            <path
            data-name="Path 2074"
            d="m294.069 1013.6 7.517 7.516a5.315 5.315 0 0 0-7.517-7.516"
            transform="translate(-294.069 -1012.046)"
            fill="#fb0066"
            />
        </clipPath>
        <clipPath id="x">
            <path
            data-name="Path 2075"
            d="M127.224 1013.6a5.315 5.315 0 0 0 0 7.516l7.516-7.516a5.315 5.315 0 0 0-7.516 0"
            transform="translate(-125.667 -1012.046)"
            fill="#fb0066"
            />
        </clipPath>
        <clipPath id="y">
            <path
            data-name="Path 2076"
            d="M184.93 331.261a1.266 1.266 0 0 0-1.266 1.266v6.73l2.157 3.568 1.708-3.568h8.086a1.266 1.266 0 0 0 1.266-1.266v-5.464a1.266 1.266 0 0 0-1.266-1.266Z"
            transform="translate(-183.664 -331.261)"
            fill="none"
            />
        </clipPath>
        <clipPath id="A">
            <path
            data-name="Path 2077"
            d="m220.3 345.792 2.94 1.794v-4.145Z"
            transform="translate(-220.298 -343.441)"
            fill="none"
            />
        </clipPath>
        <clipPath id="B">
            <path
            data-name="Path 2078"
            d="M199.311 357.324h7.017l-2.94-1.794-.293.233a.434.434 0 0 1-.549 0l-.3-.235Z"
            transform="translate(-199.311 -355.527)"
            fill="none"
            />
        </clipPath>
        <clipPath id="D">
            <path
            data-name="Path 2079"
            d="m199.311 347.586 2.94-1.8-2.94-2.348Z"
            transform="translate(-199.311 -343.441)"
            fill="none"
            />
        </clipPath>
        <clipPath id="F">
            <path
            data-name="Path 2080"
            d="M199.311 342.074v.266l2.94 2.348.3.236a.434.434 0 0 0 .549 0l.293-.233 2.94-2.351v-.266Z"
            transform="translate(-199.311 -342.074)"
            fill="none"
            />
        </clipPath>
        <clipPath id="H">
            <path
            data-name="Path 2081"
            d="M227.987 339.9a.992.992 0 1 0 .992-.992.992.992 0 0 0-.992.992"
            transform="translate(-227.987 -338.903)"
            fill="none"
            />
        </clipPath>
        <clipPath id="J">
            <path
            data-name="Path 2082"
            d="m1121.469 413.729-8.1 2.11a.732.732 0 0 0-.544.881l1.431 5.5 8.83-2.3a.729.729 0 0 0 .545-.878l-1.251-4.807a.719.719 0 0 0-.706-.53.8.8 0 0 0-.2.026"
            transform="translate(-1112.797 -413.703)"
            fill="none"
            />
        </clipPath>
        <clipPath id="K">
            <path
            data-name="Rectangle 4780"
            transform="rotate(-14.6 3.096 .396)"
            fill="none"
            d="M0 0h3.145v.524H0z"
            />
        </clipPath>
        <clipPath id="M">
            <path
            data-name="Rectangle 4782"
            transform="rotate(-14.6 3.943 .505)"
            fill="none"
            d="M0 0h4.012v.524H0z"
            />
        </clipPath>
        <clipPath id="O">
            <path
            data-name="Rectangle 4784"
            transform="rotate(-14.576 5.97 .763)"
            fill="none"
            d="M0 0h6.068v.524H0z"
            />
        </clipPath>
        <clipPath id="Q">
            <path
            data-name="Rectangle 4786"
            transform="rotate(-14.6 .629 .08)"
            fill="none"
            d="M0 0h.638v.524H0z"
            />
        </clipPath>
        <clipPath id="S">
            <path
            data-name="Rectangle 4788"
            transform="rotate(-14.576 .63 .08)"
            fill="none"
            d="M0 0h.638v.524H0z"
            />
        </clipPath>
        <clipPath id="V">
            <path
            data-name="Path 2083"
            d="m1120.277 454.9 2.98 1.474-.548-2.107Z"
            transform="translate(-1120.277 -454.264)"
            fill="none"
            />
        </clipPath>
        <clipPath id="X">
            <path
            data-name="Path 2086"
            d="M1056.711 993.171a2.4 2.4 0 1 0 2.726-2.017 2.431 2.431 0 0 0-.357-.027 2.4 2.4 0 0 0-2.369 2.044"
            transform="translate(-1056.685 -991.127)"
            fill="none"
            />
        </clipPath>
        <clipPath id="Z">
            <path
            data-name="Path 2088"
            d="M904.884 362.921a2.4 2.4 0 1 0 2.726-2.017 2.427 2.427 0 0 0-.357-.027 2.4 2.4 0 0 0-2.369 2.044"
            transform="translate(-904.858 -360.877)"
            fill="none"
            />
        </clipPath>
        <clipPath id="ab">
            <path
            data-name="Path 2090"
            d="M1141.059 632.161a2.395 2.395 0 1 0 2.369-2.044 2.4 2.4 0 0 0-2.369 2.044"
            transform="translate(-1141.033 -630.117)"
            fill="none"
            />
        </clipPath>
        <clipPath id="ad">
            <path
            data-name="Path 2092"
            d="M28.337 854.165a2.394 2.394 0 1 0 2.368-2.044 2.4 2.4 0 0 0-2.368 2.044"
            transform="translate(-28.311 -852.121)"
            fill="none"
            />
        </clipPath>
        <clipPath id="af">
            <path
            data-name="Path 2097"
            d="M75.906 596.309v1.2H74.7a.476.476 0 0 0 0 .952h1.2v1.2a.476.476 0 0 0 .952 0v-1.2h1.2a.476.476 0 0 0 0-.952h-1.2v-1.2a.476.476 0 0 0-.952 0"
            transform="translate(-74.227 -595.833)"
            fill="none"
            />
        </clipPath>
        <linearGradient
            id="a"
            x1={-1.389}
            y1={2.219}
            x2={-1.387}
            y2={2.219}
            gradientUnits="objectBoundingBox"
        >
            <stop offset={0} stopColor="#ffd571" />
            <stop offset={0.256} stopColor="#ffbc5f" />
            <stop offset={0.795} stopColor="#ff7d33" />
            <stop offset={1} stopColor="#ff6421" />
        </linearGradient>
        <linearGradient
            id="n"
            x1={-0.334}
            y1={1.469}
            x2={-0.332}
            y2={1.469}
            xlinkHref="#a"
        />
        <linearGradient
            id="b"
            x1={-7.117}
            y1={2.31}
            x2={-7.074}
            y2={2.31}
            gradientUnits="objectBoundingBox"
        >
            <stop offset={0} stopColor="gray" />
            <stop offset={0.629} stopColor="#52524d" />
            <stop offset={1} stopColor="#3c3c35" />
        </linearGradient>
        <linearGradient
            id="q"
            x1={-11.635}
            y1={2.303}
            x2={-11.593}
            y2={2.303}
            xlinkHref="#b"
        />
        <linearGradient
            id="s"
            x1={-14.957}
            y1={11.711}
            x2={-14.907}
            y2={11.711}
            xlinkHref="#b"
        />
        <linearGradient
            id="u"
            x1={-7.415}
            y1={11.711}
            x2={-7.364}
            y2={11.711}
            xlinkHref="#b"
        />
        <linearGradient
            id="z"
            x1={-2.412}
            y1={13.868}
            x2={-2.398}
            y2={13.868}
            xlinkHref="#a"
        />
        <linearGradient
            id="c"
            x1={-14.561}
            y1={43.03}
            x2={-14.495}
            y2={43.03}
            gradientUnits="objectBoundingBox"
        >
            <stop offset={0} stopColor="#fff" />
            <stop offset={0.003} stopColor="#fff" />
            <stop offset={0.369} stopColor="#f1f1ff" />
            <stop offset={1} stopColor="#d2d2ff" />
        </linearGradient>
        <linearGradient
            id="C"
            x1={-17.457}
            y1={25.031}
            x2={-17.374}
            y2={25.031}
            xlinkHref="#c"
        />
        <linearGradient
            id="E"
            x1={-13.173}
            y1={43.03}
            x2={-13.107}
            y2={43.03}
            xlinkHref="#c"
        />
        <linearGradient
            id="G"
            x1={-5.519}
            y1={59.948}
            x2={-5.491}
            y2={59.948}
            xlinkHref="#c"
        />
        <linearGradient
            id="I"
            x1={-22.325}
            y1={90.347}
            x2={-22.227}
            y2={90.347}
            gradientUnits="objectBoundingBox"
        >
            <stop offset={0} stopColor="#f75757" />
            <stop offset={1} stopColor="#cc1212" />
        </linearGradient>
        <linearGradient
            id="d"
            x1={-15.838}
            y1={13.488}
            x2={-15.824}
            y2={13.488}
            gradientUnits="objectBoundingBox"
        >
            <stop offset={0} stopColor="#be73de" />
            <stop offset={1} stopColor="#514eb7" />
        </linearGradient>
        <linearGradient
            id="L"
            x1={-64.123}
            y1={79.191}
            x2={-64.065}
            y2={79.191}
            xlinkHref="#c"
        />
        <linearGradient
            id="N"
            x1={-51.167}
            y1={65.351}
            x2={-51.121}
            y2={65.351}
            xlinkHref="#c"
        />
        <linearGradient
            id="P"
            x1={-34.572}
            y1={46.421}
            x2={-34.542}
            y2={46.421}
            xlinkHref="#c"
        />
        <linearGradient
            id="R"
            x1={-244.964}
            y1={189.749}
            x2={-244.747}
            y2={189.749}
            xlinkHref="#c"
        />
        <linearGradient
            id="T"
            x1={-246.321}
            y1={190.126}
            x2={-246.104}
            y2={190.126}
            xlinkHref="#c"
        />
        <linearGradient
            id="U"
            x1={-247.684}
            y1={190.505}
            x2={-247.467}
            y2={190.505}
            xlinkHref="#c"
        />
        <linearGradient
            id="W"
            x1={-60.428}
            y1={43.811}
            x2={-60.374}
            y2={43.811}
            xlinkHref="#d"
        />
        <linearGradient
            id="Y"
            x1={-39.954}
            y1={10.576}
            x2={-39.916}
            y2={10.576}
            xlinkHref="#d"
        />
        <linearGradient
            id="aa"
            x1={-34.207}
            y1={35.237}
            x2={-34.169}
            y2={35.237}
            xlinkHref="#d"
        />
        <linearGradient
            id="ac"
            x1={-43.144}
            y1={24.703}
            x2={-43.106}
            y2={24.703}
            xlinkHref="#d"
        />
        <linearGradient
            id="ae"
            x1={-1.038}
            y1={16.015}
            x2={-1}
            y2={16.015}
            xlinkHref="#d"
        />
        <linearGradient
            id="ag"
            x1={-2.219}
            y1={21.362}
            x2={-2.188}
            y2={21.362}
            xlinkHref="#a"
        />
        <linearGradient
            id="ah"
            x1={0.264}
            y1={0.734}
            x2={0.692}
            y2={0.341}
            gradientUnits="objectBoundingBox"
        >
            <stop offset={0.12} stopColor="#de7f00" />
            <stop offset={0.48} stopColor="#ffae3d" />
            <stop offset={0.74} stopColor="#ffda6a" />
        </linearGradient>
        <linearGradient
            id="f"
            x1={0.169}
            y1={0.844}
            x2={0.931}
            y2={0.293}
            gradientUnits="objectBoundingBox"
        >
            <stop offset={0.28} stopColor="#de7f00" />
            <stop offset={0.48} stopColor="#ffae3d" />
            <stop offset={0.74} stopColor="#ffda6a" />
        </linearGradient>
        <linearGradient
            id="ai"
            x1={-0.469}
            y1={0.5}
            x2={2.467}
            y2={0.5}
            gradientUnits="objectBoundingBox"
        >
            <stop offset={0} stopColor="#663600" />
            <stop offset={0.02} stopColor="#5e3104" />
            <stop offset={0.09} stopColor="#4d260b" />
            <stop offset={0.17} stopColor="#431f10" />
            <stop offset={0.26} stopColor="#401d11" />
            <stop offset={0.49} stopColor="#663600" />
            <stop offset={0.55} stopColor="#5f3300" />
            <stop offset={0.61} stopColor="#512b00" />
            <stop offset={0.69} stopColor="#4a2703" />
            <stop offset={0.8} stopColor="#381b0a" />
            <stop offset={0.84} stopColor="#30160d" />
        </linearGradient>
        <linearGradient
            id="e"
            x1={0.588}
            y1={0.239}
            x2={0.22}
            y2={1.197}
            gradientUnits="objectBoundingBox"
        >
            <stop offset={0} stopColor="#fcbba7" />
            <stop offset={0.48} stopColor="#fa9778" />
            <stop offset={0.66} stopColor="#f39071" />
            <stop offset={0.91} stopColor="#e17e5f" />
            <stop offset={1} stopColor="#d97657" />
        </linearGradient>
        <linearGradient
            id="aj"
            x1={0.43}
            y1={0.306}
            x2={0.705}
            y2={0.763}
            xlinkHref="#e"
        />
        <linearGradient
            id="ak"
            x1={-0.647}
            y1={0.5}
            x2={1.047}
            y2={0.5}
            xlinkHref="#f"
        />
        </defs>
        <g data-name="Group 1561">
        <g data-name="Group 1147">
            <g data-name="Group 1154">
            <g data-name="Group 989">
                <g
                data-name="Group 988"
                clipPath="url(#g)"
                transform="translate(0 -.001)"
                >
                <g data-name="Group 984" opacity={0.15}>
                    <g data-name="Group 983">
                    <g
                        data-name="Group 982"
                        clipPath="url(#h)"
                        transform="translate(0 233.216)"
                    >
                        <path
                        data-name="Path 1958"
                        d="M260.646 5.939c0 3.28-58.348 5.939-130.323 5.939S0 9.22 0 5.939s58.347-5.94 130.323-5.94 130.323 2.659 130.323 5.94"
                        />
                    </g>
                    </g>
                </g>
                <g data-name="Group 987" opacity={0.6}>
                    <g data-name="Group 986">
                    <g
                        data-name="Group 985"
                        clipPath="url(#i)"
                        fillRule="evenodd"
                        transform="translate(47.763 26.196)"
                    >
                        <path
                        data-name="Path 1959"
                        d="m14.859 120.539 1.246-1.212a26.866 26.866 0 0 1-1.86-2.12l-1.368 1.073a28.6 28.6 0 0 0 1.981 2.259"
                        />
                        <path
                        data-name="Path 1960"
                        d="m18.911 124.062 1.035-1.4c-.763-.565-1.5-1.16-2.211-1.787l-1.151 1.3q1.122.993 2.327 1.881"
                        />
                        <path
                        data-name="Path 1961"
                        d="m23.424 126.924.812-1.537a33.386 33.386 0 0 1-2.45-1.44l-.943 1.46c.838.54 1.7 1.049 2.581 1.517"
                        />
                        <path
                        data-name="Path 1962"
                        d="m8.109 106.118 1.736-.1a20.969 20.969 0 0 1 .046-2.778l-1.732-.149a22.651 22.651 0 0 0-.049 3.025"
                        />
                        <path
                        data-name="Path 1963"
                        d="m9.131 111.442 1.648-.553a18.049 18.049 0 0 1-.681-2.685l-1.712.3a19.778 19.778 0 0 0 .744 2.936"
                        />
                        <path
                        data-name="Path 1964"
                        d="m11.474 116.301 1.464-.937a21.384 21.384 0 0 1-1.344-2.444l-1.575.735a23.117 23.117 0 0 0 1.455 2.646"
                        />
                        <path
                        data-name="Path 1965"
                        d="m12.424 90.744 1.5.879c.243-.411.482-.824.745-1.223s.508-.81.785-1.2l-1.44-.974c-.286.405-.547.828-.815 1.246s-.523.845-.775 1.273"
                        />
                        <path
                        data-name="Path 1966"
                        d="m10.042 95.543 1.612.651c.091-.218.17-.44.27-.656l.291-.648c.186-.435.411-.855.619-1.282l-1.549-.788c-.218.448-.454.888-.65 1.347l-.307.683c-.1.227-.19.462-.285.693"
                        />
                        <path
                        data-name="Path 1967"
                        d="m8.494 100.682 1.707.329c.1-.457.183-.916.311-1.368.06-.226.115-.454.179-.68l.207-.674-1.658-.525-.221.719c-.068.241-.128.485-.192.728-.136.483-.226.978-.333 1.469"
                        />
                        <path
                        data-name="Path 1968"
                        d="m22.102 78.139 1.38 1.057c.152-.2.309-.393.456-.6l.441-.61.44-.61.421-.626-1.443-.969-.4.6-.425.588-.425.588c-.142.2-.295.385-.441.577"
                        />
                        <path
                        data-name="Path 1969"
                        d="m18.752 82.154 1.3 1.149.97-1.113c.327-.376.658-.747.971-1.137l-1.336-1.112c-.3.378-.627.741-.946 1.108Z"
                        />
                        <path
                        data-name="Path 1970"
                        d="m15.404 86.269 1.395 1.038c.278-.391.585-.763.877-1.145.149-.189.294-.381.445-.568l.46-.557-1.342-1.1-.472.573c-.155.192-.305.39-.458.584-.3.393-.616.775-.9 1.179"
                        />
                        <path
                        data-name="Path 1971"
                        d="m28.33 64.2 1.734.123a18.888 18.888 0 0 0-.055-3.134l-1.729.184a17.127 17.127 0 0 1 .05 2.828"
                        />
                        <path
                        data-name="Path 1972"
                        d="m27.245 69.174 1.637.585c.163-.488.34-.971.469-1.473.067-.25.145-.5.2-.749l.168-.76-1.7-.348-.154.695c-.052.232-.125.458-.186.688-.117.461-.283.909-.433 1.361"
                        />
                        <path
                        data-name="Path 1973"
                        d="m25.044 73.813 1.5.879c.246-.443.5-.878.739-1.329l.345-.68.172-.34c.055-.115.106-.232.159-.348l-1.576-.733-.149.327-.163.321-.326.642c-.222.426-.468.84-.7 1.261"
                        />
                        <path
                        data-name="Path 1974"
                        d="m23.301 49.953 1.429-.99a121.53 121.53 0 0 0-1.728-2.415l-1.4 1.027c.577.789 1.147 1.58 1.7 2.378"
                        />
                        <path
                        data-name="Path 1975"
                        d="m26.025 54.376 1.541-.8c-.232-.454-.484-.893-.734-1.333s-.515-.868-.787-1.29l-1.469.929a32.693 32.693 0 0 1 1.449 2.5"
                        />
                        <path
                        data-name="Path 1976"
                        d="m27.879 59.124 1.687-.419a21.268 21.268 0 0 0-.972-2.947l-1.608.662a19.5 19.5 0 0 1 .893 2.7"
                        />
                        <path
                        data-name="Path 1977"
                        d="m14.532 36.666 1.577-.731a24.683 24.683 0 0 1-1.035-2.61l-1.652.542a26.428 26.428 0 0 0 1.109 2.8"
                        />
                        <path
                        data-name="Path 1978"
                        d="m17.158 41.335 1.457-.947a41.633 41.633 0 0 1-1.483-2.449l-1.519.845a43.75 43.75 0 0 0 1.544 2.551"
                        />
                        <path
                        data-name="Path 1979"
                        d="m20.196 45.666 1.4-1.028c-.579-.788-1.15-1.574-1.7-2.366l-1.423 1c.566.809 1.145 1.605 1.727 2.4"
                        />
                        <path
                        data-name="Path 1980"
                        d="m13.28 20.806 1.672.477a25.291 25.291 0 0 1 .923-2.653l-1.606-.666a27 27 0 0 0-.989 2.842"
                        />
                        <path
                        data-name="Path 1981"
                        d="m12.374 26.131 1.736.089c.009-.464.076-.925.115-1.388.026-.231.068-.461.1-.691s.063-.461.115-.69l-1.709-.319c-.056.245-.084.5-.124.744s-.08.5-.108.747l-.074.752c-.03.25-.041.5-.051.754"
                        />
                        <path
                        data-name="Path 1982"
                        d="m12.792 31.514 1.7-.358c-.108-.451-.165-.911-.243-1.368-.046-.46-.115-.918-.13-1.381l-1.735.108c.018.505.091 1.006.143 1.508.084.5.148 1 .264 1.491"
                        />
                        <path
                        data-name="Path 1983"
                        d="m23.535 8.87.525 1.657a16.007 16.007 0 0 1 2.67-.573l-.215-1.725a17.782 17.782 0 0 0-2.981.641"
                        />
                        <path
                        data-name="Path 1984"
                        d="m18.739 11.523 1.13 1.321a12.967 12.967 0 0 1 1.061-.819l.569-.354.142-.089.149-.078.3-.156-.8-1.543-.341.18-.17.09-.164.1-.654.408a14.674 14.674 0 0 0-1.219.94"
                        />
                        <path
                        data-name="Path 1985"
                        d="m15.33 15.766 1.516.85c.115-.2.224-.4.343-.6l.376-.572a6.757 6.757 0 0 1 .4-.554l.205-.271a3.084 3.084 0 0 1 .212-.265l-1.338-1.111c-.087.094-.162.2-.239.3l-.231.3c-.154.2-.311.4-.445.621l-.418.638c-.132.216-.253.439-.379.659"
                        />
                        <path
                        data-name="Path 1986"
                        d="m39.481 9.839-.5 1.665c.461.133.918.288 1.377.431l1.369.465.576-1.64-1.4-.477c-.473-.147-.941-.306-1.417-.444"
                        />
                        <path
                        data-name="Path 1987"
                        d="m34.29 8.575-.306 1.711.7.13.7.149c.467.095.93.216 1.4.327l.426-1.685c-.483-.116-.963-.241-1.451-.341l-.73-.156Z"
                        />
                        <path
                        data-name="Path 1988"
                        d="m28.952 8.079.012 1.738c.465-.011.933.014 1.4.032.234.008.468.035.7.051s.469.034.7.065l.186-1.728c-.248-.033-.5-.049-.748-.07s-.5-.045-.75-.054c-.5-.02-1-.046-1.507-.034"
                        />
                        <path
                        data-name="Path 1989"
                        d="m54.219 15.866-.761 1.563q1.314.639 2.62 1.3l.783-1.552q-1.317-.663-2.641-1.311"
                        />
                        <path
                        data-name="Path 1990"
                        d="m49.423 13.623-.707 1.588 1.329.6 1.323.615.74-1.573-1.339-.622Z"
                        />
                        <path
                        data-name="Path 1991"
                        d="m44.543 11.588-.626 1.622 1.351.533 1.344.556.675-1.6-1.367-.57Z"
                        />
                        <path
                        data-name="Path 1992"
                        d="m68.297 23.173-.815 1.536 2.606 1.377.806-1.54Z"
                        />
                        <path
                        data-name="Path 1993"
                        d="m63.64 20.698-.814 1.536 2.595 1.379.817-1.535Z"
                        />
                        <path
                        data-name="Path 1994"
                        d="m58.978 18.256-.8 1.545 2.6 1.354.808-1.539Z"
                        />
                        <path
                        data-name="Path 1995"
                        d="m82.485 29.868-.469 1.674c.5.148 1.011.255 1.521.364l.772.129c.258.042.518.064.778.1l.179-1.729c-.234-.03-.47-.048-.7-.086l-.7-.117c-.462-.1-.925-.195-1.379-.33"
                        />
                        <path
                        data-name="Path 1996"
                        d="m77.689 27.946-.735 1.576q1.348.629 2.728 1.212l.671-1.6q-1.341-.566-2.664-1.184"
                        />
                        <path
                        data-name="Path 1997"
                        d="m72.995 25.632-.793 1.547q1.314.675 2.644 1.33l.767-1.56q-1.312-.648-2.617-1.317"
                        />
                        <path
                        data-name="Path 1998"
                        d="m97.348 27.686.77 1.558c.9-.446 1.783-.92 2.651-1.41l-.856-1.513c-.846.477-1.7.935-2.565 1.365"
                        />
                        <path
                        data-name="Path 1999"
                        d="m92.559 29.619.5 1.665a30.09 30.09 0 0 0 2.874-1.038l-.672-1.6a28.324 28.324 0 0 1-2.7.977"
                        />
                        <path
                        data-name="Path 2000"
                        d="m87.549 30.48.058 1.737a20 20 0 0 0 3.092-.348l-.327-1.707a18.292 18.292 0 0 1-2.824.318"
                        />
                        <path
                        data-name="Path 2001"
                        d="m110.95 19.636.844 1.52c.84-.466 1.688-.91 2.546-1.317l-.743-1.571c-.9.427-1.781.888-2.647 1.369"
                        />
                        <path
                        data-name="Path 2002"
                        d="m106.399 22.36.922 1.474c.828-.518 1.655-1.031 2.486-1.529l-.893-1.491c-.846.507-1.682 1.026-2.515 1.546"
                        />
                        <path
                        data-name="Path 2003"
                        d="m101.941 25.131.9 1.488c.847-.512 1.685-1.033 2.518-1.555l-.924-1.473c-.829.52-1.659 1.035-2.493 1.539"
                        />
                        <path
                        data-name="Path 2004"
                        d="m126.52 16.552-.486 1.669a13.665 13.665 0 0 1 2.523 1.014l.8-1.545a15.427 15.427 0 0 0-2.834-1.138"
                        />
                        <path
                        data-name="Path 2005"
                        d="m121.075 16.039.157 1.731a13.178 13.178 0 0 1 2.7.027l.2-1.727a14.908 14.908 0 0 0-3.06-.032"
                        />
                        <path
                        data-name="Path 2006"
                        d="m115.82 17.314.618 1.625a20.769 20.769 0 0 1 2.663-.821l-.394-1.693a22.556 22.556 0 0 0-2.887.89"
                        />
                        <path
                        data-name="Path 2007"
                        d="m139.267 26.208-1.342 1.1a43.99 43.99 0 0 1 1.747 2.27l1.413-1.013c-.584-.8-1.181-1.6-1.818-2.362"
                        />
                        <path
                        data-name="Path 2008"
                        d="m135.611 22.298-1.187 1.27c.351.32.686.659 1.025.993.169.168.331.343.5.514s.331.343.489.521l1.279-1.178c-.166-.186-.338-.365-.511-.544s-.342-.361-.519-.537c-.354-.349-.7-.7-1.073-1.039"
                        />
                        <path
                        data-name="Path 2009"
                        d="m131.448 18.95-.979 1.436a32.316 32.316 0 0 1 2.27 1.7l1.1-1.343a33.168 33.168 0 0 0-2.394-1.8"
                        />
                        <path
                        data-name="Path 2010"
                        d="m147.119 40.122-1.639.581.236.677c.076.226.146.455.219.682.151.453.278.914.412 1.372l1.674-.47c-.139-.477-.272-.956-.428-1.428-.076-.237-.149-.474-.229-.709Z"
                        />
                        <path
                        data-name="Path 2011"
                        d="m145.043 35.199-1.561.766c.213.428.41.864.613 1.3l.287.657.144.328.135.332 1.606-.664-.141-.345-.149-.341-.3-.683c-.211-.45-.415-.9-.636-1.347"
                        />
                        <path
                        data-name="Path 2012"
                        d="m142.432 30.557-1.464.938c.255.4.513.807.753 1.221s.482.826.716 1.243l1.521-.843c-.243-.433-.485-.867-.744-1.291s-.518-.848-.782-1.268"
                        />
                        <path
                        data-name="Path 2013"
                        d="m149.523 55.918-1.736-.09-.016.356-.028.355-.057.71c-.019.237-.052.472-.077.708s-.049.472-.085.706l1.723.234c.039-.246.059-.495.09-.742s.06-.5.081-.744l.059-.745.029-.373Z"
                        />
                        <path
                        data-name="Path 2014"
                        d="m149.421 50.564-1.731.153.058.711c.021.237.026.475.04.713s.028.475.031.713l.013.713 1.738-.02-.014-.747c0-.249-.022-.5-.033-.746s-.02-.5-.042-.746Z"
                        />
                        <path
                        data-name="Path 2015"
                        d="m148.603 45.295-1.7.376c.1.465.194.934.286 1.4l.121.7.061.352.05.354 1.72-.254-.053-.369-.063-.368-.126-.735c-.1-.488-.189-.977-.3-1.462"
                        />
                        <path
                        data-name="Path 2016"
                        d="m145.097 71.273-1.515-.852-.35.619-.373.606c-.126.2-.243.407-.378.6l-.4.592 1.44.974.415-.622c.141-.206.264-.423.4-.634l.392-.637Z"
                        />
                        <path
                        data-name="Path 2017"
                        d="m147.36 66.411-1.628-.609-.253.664c-.086.221-.184.437-.274.656s-.182.438-.281.653l-.3.644 1.569.747.318-.677.3-.687c.1-.228.2-.458.289-.691Z"
                        />
                        <path
                        data-name="Path 2018"
                        d="m148.842 61.274-1.7-.35c-.2.926-.418 1.85-.7 2.756l1.666.5c.293-.954.522-1.926.733-2.9"
                        />
                        <path
                        data-name="Path 2019"
                        d="m134.548 83.274-1.069-1.371-.566.442c-.191.145-.387.283-.58.425-.388.281-.77.57-1.171.834l.988 1.43c.413-.273.81-.572 1.212-.863.2-.147.4-.29.6-.44Z"
                        />
                        <path
                        data-name="Path 2020"
                        d="m138.57 79.756-1.222-1.237-1.035.989-1.069.955 1.136 1.316 1.111-.993Z"
                        />
                        <path
                        data-name="Path 2021"
                        d="m142.11 75.767-1.374-1.065-.439.562c-.147.187-.3.365-.457.548l-.46.546-.478.531 1.29 1.166.5-.554.481-.572c.159-.191.323-.378.478-.574Z"
                        />
                    </g>
                    </g>
                </g>
                </g>
            </g>
            <g data-name="Group 991">
                <g
                data-name="Group 990"
                clipPath="url(#j)"
                transform="translate(75.312 73.347)"
                >
                <path
                    data-name="Rectangle 4716"
                    fill="#4c00a9"
                    d="m-14.196 1.226 104.88-9.06 14.874 172.196-104.88 9.06z"
                />
                </g>
            </g>
            <g data-name="Group 993" opacity={0.88}>
                <g
                data-name="Group 992"
                clipPath="url(#k)"
                transform="translate(75.312 90.477)"
                >
                <path
                    data-name="Rectangle 4717"
                    fill="#fff"
                    d="m-56.415 84.937 84.34-127.042L147.732 37.43l-84.34 127.043z"
                />
                </g>
            </g>
            <g data-name="Group 995">
                <g
                data-name="Group 994"
                clipPath="url(#g)"
                fill="#d5daeb"
                transform="translate(0 -.001)"
                >
                <path
                    data-name="Path 2023"
                    d="M120.991 219.454a6.887 6.887 0 1 1-6.886 6.886 6.886 6.886 0 0 1 6.886-6.886"
                />
                <path
                    data-name="Path 2024"
                    d="M126.702 84.767h-11.42a2.855 2.855 0 0 1 0-5.71h11.42a2.855 2.855 0 0 1 0 5.71"
                />
                </g>
            </g>
            <g data-name="Group 997">
                <g
                data-name="Group 996"
                clipPath="url(#l)"
                transform="translate(128.328 99.938)"
                >
                <path
                    data-name="Rectangle 4720"
                    transform="rotate(-18.964 7.814 46.792)"
                    fill="url(#a)"
                    d="M0 0h88.235v70.435H0z"
                />
                </g>
            </g>
            <g data-name="Group 999">
                <g
                data-name="Group 998"
                clipPath="url(#m)"
                transform="translate(36.917 145.571)"
                >
                <path
                    data-name="Rectangle 4721"
                    transform="rotate(-27.25 11.02 45.429)"
                    fill="url(#n)"
                    d="M0 0h90.275v77.919H0z"
                />
                </g>
            </g>
            <g data-name="Group 1001">
                <g
                data-name="Group 1000"
                clipPath="url(#g)"
                fill="#faf9f9"
                transform="translate(0 -.001)"
                >
                <path
                    data-name="Rectangle 4722"
                    d="M134.557 108.341h63.017v3.042h-63.017z"
                />
                <path
                    data-name="Rectangle 4723"
                    d="M134.557 116.598h63.017v3.042h-63.017z"
                />
                <path
                    data-name="Rectangle 4724"
                    d="M134.557 124.856h36.507v3.042h-36.507z"
                />
                <path
                    data-name="Rectangle 4725"
                    d="M43.725 154.554h63.017v3.042H43.725z"
                />
                <path
                    data-name="Rectangle 4726"
                    d="M43.725 162.811h63.017v3.042H43.725z"
                />
                <path
                    data-name="Rectangle 4727"
                    d="M43.725 171.068h36.507v3.042H43.725z"
                />
                </g>
            </g>
            <g data-name="Group 1069">
                <g
                data-name="Group 1068"
                clipPath="url(#o)"
                transform="translate(32.626 234.867)"
                >
                <path
                    data-name="Rectangle 4764"
                    transform="translate(-.073)"
                    fill="url(#b)"
                    d="M0 0h4.574v4.428H0z"
                />
                </g>
            </g>
            <g data-name="Group 1071">
                <g
                data-name="Group 1070"
                clipPath="url(#p)"
                transform="translate(53.55 234.844)"
                >
                <path
                    data-name="Rectangle 4765"
                    transform="translate(-.073)"
                    fill="url(#q)"
                    d="M0 0h4.596v4.45H0z"
                />
                </g>
            </g>
            <g data-name="Group 1073">
                <g
                data-name="Group 1072"
                clipPath="url(#r)"
                transform="translate(58.07 201.393)"
                >
                <path
                    data-name="Rectangle 4766"
                    transform="translate(-.073)"
                    fill="url(#s)"
                    d="M0 0h3.878v3.732H0z"
                />
                </g>
            </g>
            <g data-name="Group 1075">
                <g
                data-name="Group 1074"
                clipPath="url(#t)"
                transform="translate(28.825 201.393)"
                >
                <path
                    data-name="Rectangle 4767"
                    transform="translate(-.073)"
                    fill="url(#u)"
                    d="M0 0h3.878v3.732H0z"
                />
                </g>
            </g>
            <g data-name="Group 1077">
                <g
                data-name="Group 1076"
                clipPath="url(#v)"
                transform="translate(24.417 197.502)"
                >
                <path
                    data-name="Path 2101"
                    d="M0 0h41.793v41.793H0Z"
                    fill="#fb0066"
                />
                </g>
            </g>
            <g data-name="Group 1079">
                <g
                data-name="Group 1078"
                clipPath="url(#g)"
                fill="#181a44"
                transform="translate(0 -.001)"
                >
                <path
                    data-name="Path 2063"
                    d="M45.313 203.383a.649.649 0 0 0-.649.649v.649a.65.65 0 0 0 1.3 0v-.649a.648.648 0 0 0-.649-.649"
                />
                <path
                    data-name="Path 2064"
                    d="M45.313 231.288a.649.649 0 0 0-.649.649v.649a.65.65 0 0 0 1.3 0v-.649a.648.648 0 0 0-.649-.649"
                />
                <path
                    data-name="Path 2065"
                    d="M59.59 217.659h-.649a.65.65 0 1 0 0 1.3h.649a.65.65 0 1 0 0-1.3"
                />
                <path
                    data-name="Path 2066"
                    d="M31.685 217.659h-.649a.65.65 0 1 0 0 1.3h.649a.65.65 0 1 0 0-1.3"
                />
                <path
                    data-name="Path 2067"
                    d="m54.949 207.754-.459.459a.649.649 0 1 0 .917.917l.459-.458a.65.65 0 0 0-.918-.918"
                />
                <path
                    data-name="Path 2068"
                    d="m35.218 227.486-.459.459a.649.649 0 1 0 .917.917l.459-.458a.65.65 0 0 0-.918-.918"
                />
                <path
                    data-name="Path 2069"
                    d="M55.408 227.486a.65.65 0 0 0-.918.918l.459.458a.649.649 0 0 0 .917-.917Z"
                />
                <path
                    data-name="Path 2070"
                    d="M35.676 207.754a.65.65 0 0 0-.918.918l.459.458a.649.649 0 0 0 .917-.917Z"
                />
                <path
                    data-name="Path 2071"
                    d="m51.221 225.426-4.29-4.152a.746.746 0 0 1 1.038-1.073l4.29 4.153a.746.746 0 0 1-1.038 1.072"
                />
                <path
                    data-name="Path 2072"
                    d="M45.313 216.906a.746.746 0 0 1-.746-.746v-8.209a.747.747 0 1 1 1.493 0v8.209a.746.746 0 0 1-.746.746"
                />
                <path
                    data-name="Path 2073"
                    d="M45.313 221.384a2.985 2.985 0 1 1 2.985-2.985 2.988 2.988 0 0 1-2.985 2.985m0-4.478a1.493 1.493 0 1 0 1.493 1.493 1.494 1.494 0 0 0-1.493-1.493"
                />
                </g>
            </g>
            <g data-name="Group 1081">
                <g
                data-name="Group 1080"
                clipPath="url(#w)"
                transform="translate(57.137 196.638)"
                >
                <path
                    data-name="Rectangle 4770"
                    fill="#fb0066"
                    d="M0 0h9.592v9.073H0z"
                />
                </g>
            </g>
            <g data-name="Group 1083">
                <g
                data-name="Group 1082"
                clipPath="url(#x)"
                transform="translate(24.417 196.638)"
                >
                <path
                    data-name="Rectangle 4771"
                    fill="#fb0066"
                    d="M-.519 0h9.592v9.073H-.519z"
                />
                </g>
            </g>
            <g data-name="Group 1085">
                <g
                data-name="Group 1084"
                clipPath="url(#y)"
                transform="translate(35.686 64.363)"
                >
                <path
                    data-name="Rectangle 4772"
                    transform="rotate(-6.988 .702 11.526)"
                    fill="url(#z)"
                    d="M0 0h14.526v13.087H0z"
                />
                </g>
            </g>
            <g data-name="Group 1087">
                <g
                data-name="Group 1086"
                clipPath="url(#A)"
                transform="translate(42.803 66.73)"
                >
                <path
                    data-name="Rectangle 4773"
                    fill="url(#c)"
                    d="M0 0h2.94v4.145H0z"
                />
                </g>
            </g>
            <g data-name="Group 1089">
                <g
                data-name="Group 1088"
                clipPath="url(#B)"
                transform="translate(38.726 69.078)"
                >
                <path
                    data-name="Rectangle 4774"
                    transform="rotate(-85.41 .895 .97)"
                    fill="url(#C)"
                    d="M0 0h2.352v7.138H0z"
                />
                </g>
            </g>
            <g data-name="Group 1091">
                <g
                data-name="Group 1090"
                clipPath="url(#D)"
                transform="translate(38.726 66.73)"
                >
                <path
                    data-name="Rectangle 4775"
                    fill="url(#E)"
                    d="M0 0h2.94v4.145H0z"
                />
                </g>
            </g>
            <g data-name="Group 1093">
                <g
                data-name="Group 1092"
                clipPath="url(#F)"
                transform="translate(38.726 66.464)"
                >
                <path
                    data-name="Rectangle 4776"
                    fill="url(#G)"
                    d="M0 0h7.017v2.98H0z"
                />
                </g>
            </g>
            <g data-name="Group 1095">
                <g
                data-name="Group 1094"
                clipPath="url(#H)"
                transform="translate(44.297 65.848)"
                >
                <path
                    data-name="Rectangle 4777"
                    fill="url(#I)"
                    d="M0 0h1.984v1.984H0z"
                />
                </g>
            </g>
            <g data-name="Group 1097">
                <g
                data-name="Group 1096"
                clipPath="url(#J)"
                transform="translate(216.214 80.382)"
                >
                <path
                    data-name="Rectangle 4778"
                    transform="rotate(-24.889 1.753 8.294)"
                    fill="url(#d)"
                    d="M0 0h13.565v12.354H0z"
                />
                </g>
            </g>
            <g data-name="Group 1099">
                <g
                data-name="Group 1098"
                transform="translate(218.161 82.557)"
                clipPath="url(#K)"
                >
                <path
                    data-name="Rectangle 4779"
                    transform="rotate(-14.589 .166 1.28)"
                    fill="url(#L)"
                    d="M0 0h3.401v2.057H0z"
                />
                </g>
            </g>
            <g data-name="Group 1101">
                <g
                data-name="Group 1100"
                transform="translate(218.467 83.513)"
                clipPath="url(#M)"
                >
                <path
                    data-name="Rectangle 4781"
                    transform="rotate(-14.589 .19 1.493)"
                    fill="url(#N)"
                    d="M0 0h4.267v2.48H0z"
                />
                </g>
            </g>
            <g data-name="Group 1103">
                <g
                data-name="Group 1102"
                transform="translate(218.772 84.169)"
                clipPath="url(#O)"
                >
                <path
                    data-name="Rectangle 4783"
                    transform="rotate(-14.6 .256 2.001)"
                    fill="url(#P)"
                    d="M0 0h6.323v3.482H0z"
                />
                </g>
            </g>
            <g data-name="Group 1105">
                <g
                data-name="Group 1104"
                transform="translate(219.059 86.639)"
                clipPath="url(#Q)"
                >
                <path
                    data-name="Rectangle 4785"
                    transform="rotate(-14.59 .083 .658)"
                    fill="url(#R)"
                    d="M0 0h.894v.836H0z"
                />
                </g>
            </g>
            <g data-name="Group 1107">
                <g
                data-name="Group 1106"
                transform="translate(220.272 86.323)"
                clipPath="url(#S)"
                >
                <path
                    data-name="Rectangle 4787"
                    transform="rotate(-14.589 .083 .658)"
                    fill="url(#T)"
                    d="M0 0h.894v.836H0z"
                />
                </g>
            </g>
            <g data-name="Group 1109">
                <g
                data-name="Group 1108"
                transform="translate(221.485 86.007)"
                clipPath="url(#Q)"
                >
                <path
                    data-name="Rectangle 4789"
                    transform="rotate(-14.59 .083 .658)"
                    fill="url(#U)"
                    d="M0 0h.894v.836H0z"
                />
                </g>
            </g>
            <g data-name="Group 1111">
                <g
                data-name="Group 1110"
                clipPath="url(#V)"
                transform="translate(217.667 88.262)"
                >
                <path
                    data-name="Rectangle 4791"
                    transform="rotate(-45 .745 1.798)"
                    fill="url(#W)"
                    d="M0 0h3.597v3.597H0z"
                />
                </g>
            </g>
            <g data-name="Group 1115">
                <g
                data-name="Group 1114"
                clipPath="url(#g)"
                transform="translate(0 -.001)"
                >
                <path
                    data-name="Path 2085"
                    d="M94.468 28.088a.4.4 0 0 1-.108-.1l-1.255-1.642a.4.4 0 0 1 .636-.486l.977 1.279 2.033-2.029a.4.4 0 1 1 .565.567l-2.356 2.352a.4.4 0 0 1-.493.058"
                    fill="#fff"
                />
                </g>
            </g>
            <g data-name="Group 1117">
                <g
                data-name="Group 1116"
                clipPath="url(#X)"
                transform="translate(205.312 192.574)"
                >
                <path
                    data-name="Rectangle 4794"
                    transform="translate(-.169)"
                    fill="url(#Y)"
                    d="M0 0h5.134v4.966H0z"
                />
                </g>
            </g>
            <g data-name="Group 1119">
                <g
                data-name="Group 1118"
                clipPath="url(#g)"
                transform="translate(0 -.001)"
                >
                <path
                    data-name="Path 2087"
                    d="M207.315 196.19a.255.255 0 0 1-.069-.062l-.8-1.045a.255.255 0 0 1 .405-.31l.621.814 1.294-1.292a.255.255 0 1 1 .36.361l-1.5 1.5a.255.255 0 0 1-.313.036"
                    fill="#fff"
                />
                </g>
            </g>
            <g data-name="Group 1121">
                <g
                data-name="Group 1120"
                clipPath="url(#Z)"
                transform="translate(175.812 70.118)"
                >
                <path
                    data-name="Rectangle 4796"
                    transform="translate(-.169)"
                    fill="url(#aa)"
                    d="M0 0h5.135v4.966H0z"
                />
                </g>
            </g>
            <g data-name="Group 1123">
                <g
                data-name="Group 1122"
                clipPath="url(#g)"
                transform="translate(0 -.001)"
                >
                <path
                    data-name="Path 2089"
                    d="M177.814 73.734a.267.267 0 0 1-.069-.062l-.8-1.045a.255.255 0 0 1 .4-.31l.622.814 1.294-1.292a.255.255 0 1 1 .36.361l-1.5 1.5a.256.256 0 0 1-.314.036"
                    fill="#fff"
                />
                </g>
            </g>
            <g data-name="Group 1125">
                <g
                data-name="Group 1124"
                clipPath="url(#ab)"
                transform="translate(221.7 122.43)"
                >
                <path
                    data-name="Rectangle 4798"
                    transform="translate(-.169)"
                    fill="url(#ac)"
                    d="M0 0h5.135v4.965H0z"
                />
                </g>
            </g>
            <g data-name="Group 1127">
                <g
                data-name="Group 1126"
                clipPath="url(#g)"
                transform="translate(0 -.001)"
                >
                <path
                    data-name="Path 2091"
                    d="M223.703 126.046a.259.259 0 0 1-.068-.062l-.8-1.045a.255.255 0 0 1 .4-.309l.622.814 1.294-1.291a.255.255 0 1 1 .36.36l-1.5 1.5a.256.256 0 0 1-.314.036"
                    fill="#fff"
                />
                </g>
            </g>
            <g data-name="Group 1129">
                <g
                data-name="Group 1128"
                clipPath="url(#ad)"
                transform="translate(5.501 165.565)"
                >
                <path
                    data-name="Rectangle 4800"
                    transform="translate(-.169)"
                    fill="url(#ae)"
                    d="M0 0h5.135v4.966H0z"
                />
                </g>
            </g>
            <g data-name="Group 1131">
                <g
                data-name="Group 1130"
                clipPath="url(#g)"
                transform="translate(0 -.001)"
                >
                <path
                    data-name="Path 2093"
                    d="M7.504 169.181a.26.26 0 0 1-.069-.062l-.8-1.045a.255.255 0 0 1 .4-.31l.622.814 1.294-1.292a.255.255 0 1 1 .36.361l-1.5 1.5a.256.256 0 0 1-.314.037"
                    fill="#fff"
                />
                </g>
            </g>
            <g data-name="Group 1135">
                <g
                data-name="Group 1134"
                clipPath="url(#g)"
                transform="translate(0 -.001)"
                >
                <path
                    data-name="Path 2095"
                    d="M6.193 37.809a.255.255 0 0 1-.069-.062l-.8-1.045a.255.255 0 0 1 .4-.31l.622.814 1.294-1.291a.255.255 0 1 1 .36.36l-1.5 1.5a.255.255 0 0 1-.314.037"
                    fill="#fff"
                />
                </g>
            </g>
            <g data-name="Group 1139">
                <g
                data-name="Group 1138"
                clipPath="url(#af)"
                transform="translate(14.422 115.769)"
                >
                <path
                    data-name="Rectangle 4805"
                    transform="rotate(-44.77 1.52 3.687)"
                    fill="url(#ag)"
                    d="M0 0h6.096v6.096H0z"
                />
                </g>
            </g>
            </g>
        </g>
        <g data-name="Group 1162">
            <path
            data-name="Path 2109"
            d="m122.755 213.227-2.481-48.153-1.109-.54-16.625 1.411-.886.528 2.75 46.63Z"
            fill="#4c00a9"
            />
            <path
            data-name="Path 2110"
            d="m59.1 89.908-2.469-42.392-16.7-9.705-.059.607-4.241 48.029Z"
            transform="rotate(-8 985.707 -473.17)"
            fill="url(#ah)"
            />
            <path
            data-name="Path 2111"
            d="M24.734 84.4 28.5 37.847l.249-3.129L7.777 45.351 0 80.762Z"
            transform="rotate(-8 984.827 -420.921)"
            fill="url(#f)"
            />
            <path
            data-name="Path 2112"
            d="M50.871 10.121a5.78 5.78 0 0 0-5.517-6.03 5.947 5.947 0 0 0-.8 0C41.643 1.818 39.562-.668 34.687.165a6.754 6.754 0 0 0-4.578 3.057 5.056 5.056 0 0 0-.368.714 10.169 10.169 0 0 0-4.756 1.832 5.947 5.947 0 0 0-3.829 7.6l.4 1.416a26.749 26.749 0 0 0 1.5 7.589c.238 0 .939.809.939.809s2.545 2.034 3.294.809a24.125 24.125 0 0 0 .69-2.878v-1.974a17.01 17.01 0 0 1 .154-4.329 4.827 4.827 0 0 1 1.653-2.474 13.952 13.952 0 0 0 6.338 1.26 4.52 4.52 0 0 0 2.379.761 4.342 4.342 0 0 0 2.379-.571 5.778 5.778 0 0 0 3.971 1.855 5.369 5.369 0 0 0 .88 0 5.2 5.2 0 0 1 .654 1.416c.238 1.058 2.379-.833 3.223-3.568a5.79 5.79 0 0 0 1.26-3.366Z"
            transform="rotate(-8 932.108 -447.743)"
            fill="url(#ai)"
            />
            <path
            data-name="Path 2113"
            d="m120.306 133.396 1.137 6.47Z"
            fill="#e17460"
            opacity={0.46}
            />
            <path
            data-name="Path 2114"
            d="M47.841 31.249v-.595l-.392-11.216V18.7l-.178-5.412a5.694 5.694 0 0 1-2.5.463 5.778 5.778 0 0 1-4.067-1.879 4.336 4.336 0 0 1-2.379.571A4.567 4.567 0 0 1 34.213 9.4a11.987 11.987 0 0 0-3.1.214 4.888 4.888 0 0 0-3.116 3.283 17.01 17.01 0 0 0-.154 4.329V19.2a13.79 13.79 0 0 1-.571 2.272c-.892 1.475-1.558-.178-1.831-1.106a.746.746 0 0 0-.749-.524 3.354 3.354 0 0 0-3.27 4.044l.1.512a3.973 3.973 0 0 0 4.044 3.283v1.26l-1.38 13.1a6.031 6.031 0 0 0 5.314 6.666l4.234.476a6.043 6.043 0 0 0 6.666-5.329l.476-4.294a8.054 8.054 0 0 0 6.969-8.314Z"
            transform="rotate(-8 945.72 -449.457)"
            fill="url(#e)"
            />
            <g data-name="Group 1159" fill="#e17460">
            <path
                data-name="Path 2115"
                d="m123.48 151.53-.084-.589a7.672 7.672 0 0 1-6.243 8.889l-5.332.94a7.682 7.682 0 0 1-8.89-6.269l-.65-3.68-1.342.19.755 4.265a8.054 8.054 0 0 0 5.857 6.383 3.337 3.337 0 0 0 .018.982c.365 2.087 2.726 3.424 5.22 2.977s4.307-2.515 3.94-4.602l-.027-.198.212-.03a8.054 8.054 0 0 0 6.564-9.258Z"
                opacity={0.46}
            />
            <path
                data-name="Path 2116"
                d="M116.178 155.8a.2.2 0 0 1-.14-.052.213.213 0 0 1-.042-.305 2.155 2.155 0 0 1 2.3-.727.225.225 0 0 1 .142.292.232.232 0 0 1-.111.129.215.215 0 0 1-.17.006 1.709 1.709 0 0 0-1.851.585.223.223 0 0 1-.122.076Zm-17.022-6.965a.232.232 0 0 1-.223-.265.224.224 0 0 1 .093-.15l1.01-.683-1.2-1.704a.2.2 0 0 1-.047-.166.2.2 0 0 1 .099-.142.246.246 0 0 1 .166-.04.214.214 0 0 1 .142.093l1.49 2.06-1.38.951a.273.273 0 0 1-.15.045Z"
            />
            </g>
            <g data-name="Group 1160" fill="#fff">
            <path
                data-name="Path 2117"
                d="m120.578 162.76 2.149 4.949a1.688 1.688 0 0 1-.235 1.75l-4.838 5.992a.879.879 0 0 1-1.6.153l-4.576-5.214 7.474-8.35c.532-.664 1.526-.251 1.627.72Z"
            />
            <path
                data-name="Path 2118"
                d="m100.62 161.565 12.029 9.115-6.973 5.928a1.664 1.664 0 0 1-2.269-.077L97.2 169.61a1.711 1.711 0 0 1-.26-1.849l2.632-5.966a.782.782 0 0 1 1.048-.231Z"
            />
            </g>
            <path
            data-name="Path 2119"
            d="M57.433 55.32V53.5l.1-6.78c-3.567-1-7.016-5.638-7-5.626l-3.079-2.76a1.486 1.486 0 0 1-.261-1.95 1.428 1.428 0 0 1 2.106-.226l2.925 2.617a.7.7 0 0 0 1.176-.595 5.273 5.273 0 0 0-1.189-2.474L45.2 28.058a1.429 1.429 0 0 1 .084-2.021 1.89 1.89 0 0 1 2.236.333l4.876 5.317a.691.691 0 0 0 .856.131l.19-.119a.69.69 0 0 0 .261-.928l-4.055-8.077a1.488 1.488 0 0 1 .463-1.915 1.428 1.428 0 0 1 2.045.559l3.949 7.85a.939.939 0 0 0 1.118.476 1.059 1.059 0 0 0 .69-1.333l-2.379-7.482a1.476 1.476 0 0 1 .761-1.82 1.412 1.412 0 0 1 1.926.868l2.486 7.779a2.6 2.6 0 0 0 .939 1.284.749.749 0 0 0 1.189-.678l-.309-3.651a1.488 1.488 0 0 1 1.129-1.618 1.437 1.437 0 0 1 1.7 1.272l.927 7.957a47.588 47.588 0 0 1 .818 13.086l.607 6.863.166 1.558-10.441 1.57Z"
            transform="rotate(-8 957.213 -484.635)"
            fill="url(#aj)"
            />
            <path
            data-name="Path 2120"
            d="M139.35 161.06a.451.451 0 0 1-.378-.223 4.281 4.281 0 0 0-4.255-1.9.438.438 0 0 1-.51-.374.45.45 0 0 1 .36-.518 5.221 5.221 0 0 1 5.133 2.342.454.454 0 0 1-.164.624.537.537 0 0 1-.185.05Z"
            fill="#e27f6d"
            />
            <path
            data-name="Path 2121"
            d="M53.089 43.122a3.8 3.8 0 0 0-3.1 4.056l3.271 41.273c-.249 3.878 6.672 7.136 13.961 5.84A12.119 12.119 0 0 0 76.9 79.84l-6.841-36.029a3.816 3.816 0 0 0-4.447-3.044L53.09 43.122Z"
            transform="rotate(-8 988.457 -494.364)"
            fill="url(#ak)"
            />
            <path
            data-name="Path 2125"
            d="M107.534 137.874s1.201-.001.906 1.145-2.858.173-4.395 2.395c0 0-1.005-2.537 3.49-3.542Zm7.214-1.843a.884.884 0 0 0-.512 1.385c.634 1.003 2.78-.727 4.93.904.059.031.15-2.744-4.422-2.294Zm-.529 13.1a6.717 6.717 0 0 1-3.969-.642.3.3 0 0 1-.168-.178.292.292 0 0 1 .024-.244.309.309 0 0 1 .185-.17.313.313 0 0 1 .25.025c.144.08 3.747 1.876 5.543-.887a.32.32 0 0 1 .446-.063.332.332 0 0 1 .063.447 3.744 3.744 0 0 1-2.376 1.715Zm-.68-4.42a3.094 3.094 0 0 1-1.531-.036.321.321 0 1 1 .177-.613 2.584 2.584 0 0 0 1.343-.01l-1.68-2.73a.333.333 0 0 1 .093-.445.32.32 0 0 1 .448.104l1.893 3.074a.31.31 0 0 1 .035.246.323.323 0 0 1-.163.203 3.058 3.058 0 0 1-.62.207Zm-4.48-.522c.167.77-.036 1.46-.467 1.555s-.903-.45-1.07-1.206.035-1.459.466-1.555.903.449 1.071 1.206Zm7.547-1.662c.108.766-.047 1.45-.467 1.543s-.916-.448-1.079-1.204.047-1.46.467-1.555.916.483 1.08 1.216Z"
            fill="#45240c"
            />
            <path
            data-name="Path 2126"
            d="M100.228 148c.122.872 1.407 1.472 2.864 1.327s2.636-.983 2.546-1.872-1.407-1.468-2.864-1.326-2.636.983-2.546 1.871Zm16.747-2.678c.378.812 1.79.95 3.153.313s2.15-1.803 1.788-2.653-1.79-.95-3.151-.303-2.154 1.853-1.79 2.642Z"
            fill="#fa6e64"
            opacity={0.23}
            />
        </g>
        </g>
                    </svg>
                    
                    <div className="card-body" style={{zIndex:"1"}}>
                        <h5 className="card-title d-flex justify-content-center" style={{color:'#4A4A4A'}}>تغطية عالمية</h5>
                        <p className="card-text d-flex justify-content-center " style={{color:"#707070", fontWeight:"300"}}>تواصل في أكثر من 190 دولة ومنطقة حول العالم</p>
                    </div>

                    <div className='card-body row w-100 review d-flex'>
                        <div className='d-flex col col-md-12 justify-content-between align-items-center'>
                            <div className='reviewer-info d-flex col-md-6'>
                            <div className='d-flex reviwer-info-container col-md-12 align-items-center'>
                            <div className='d-flex col-md-1 justify-content-center align-items-center review-photo'>
                                <svg xmlns=" http://www.w3.org/2000/svg" width="14.405" height="14.191" viewBox="0 0 14.405 14.191">
                                    <g id="icons" transform="translate(-1.984 -2.191)">
                                    <g id="user" transform="translate(1.984 2)">
                                        <circle id="Ellipse_8" data-name="Ellipse 8" cx="4" cy="4" r="4" transform="translate(3.202 0.191)" fill="#4a4a4a"/>
                                        <path id="Path_2534" data-name="Path 2534" d="M16.234,17.881a6.554,6.554,0,0,0-3.452-3.02,1.61,1.61,0,0,0-1.294.072,4.415,4.415,0,0,1-4.6,0,1.618,1.618,0,0,0-1.294,0,6.554,6.554,0,0,0-3.452,3.02,1.419,1.419,0,0,0,1.366,2.013H14.868A1.457,1.457,0,0,0,16.234,17.881Z" transform="translate(-1.984 -5.584)" fill="#4a4a4a"/>
                                    </g>
                                    </g>
                                </svg>
                            
                            </div>
                            <p className='col col-md-8 card-reviewer-name' >دكتور محمد</p>
                        
                        </div>
                            </div>
                            <div className='review-stars-container'>
                                <svg className='review-stars' xmlns="http://www.w3.org/2000/svg" width={94} height={13}>
                                <defs>
                                <linearGradient
                                    id="b"
                                    x1={0.091}
                                    y1={0.378}
                                    x2={1}
                                    y2={0.5}
                                    gradientUnits="objectBoundingBox"
                                >
                                    <stop offset={0} stopColor="#fcb52c" />
                                    <stop offset={1} stopColor="#ffc60c" />
                                </linearGradient>
                                <clipPath id="a">
                                    <path fill="none" d="M0 0h94v13H0z" />
                                </clipPath>
                                </defs>
                                <g data-name="Repeat Grid 2" clipPath="url(#a)">
                                <path
                                    data-name="Polygon 1"
                                    d="M6.526 1.41a.5.5 0 0 1 .948 0l1.165 3.465a.5.5 0 0 0 .461.341l3.542.1a.5.5 0 0 1 .3.889L10.089 8.5a.5.5 0 0 0-.167.525l1.014 3.592a.5.5 0 0 1-.774.541l-2.869-2.076a.5.5 0 0 0-.586 0l-2.868 2.075a.5.5 0 0 1-.774-.541l1.014-3.592a.5.5 0 0 0-.168-.524L1.058 6.2a.5.5 0 0 1 .3-.889l3.542-.1a.5.5 0 0 0 .461-.341Z"
                                    fill="url(#b)"
                                />
                                <path
                                    data-name="Polygon 1"
                                    d="M6.526 1.41a.5.5 0 0 1 .948 0l1.165 3.465a.5.5 0 0 0 .461.341l3.542.1a.5.5 0 0 1 .3.889L10.089 8.5a.5.5 0 0 0-.167.525l1.014 3.592a.5.5 0 0 1-.774.541l-2.869-2.076a.5.5 0 0 0-.586 0l-2.868 2.075a.5.5 0 0 1-.774-.541l1.014-3.592a.5.5 0 0 0-.168-.524L1.058 6.2a.5.5 0 0 1 .3-.889l3.542-.1a.5.5 0 0 0 .461-.341Z"
                                    transform="translate(20)"
                                    fill="url(#b)"
                                />
                                <path
                                    data-name="Polygon 1"
                                    d="M6.526 1.41a.5.5 0 0 1 .948 0l1.165 3.465a.5.5 0 0 0 .461.341l3.542.1a.5.5 0 0 1 .3.889L10.089 8.5a.5.5 0 0 0-.167.525l1.014 3.592a.5.5 0 0 1-.774.541l-2.869-2.076a.5.5 0 0 0-.586 0l-2.868 2.075a.5.5 0 0 1-.774-.541l1.014-3.592a.5.5 0 0 0-.168-.524L1.058 6.2a.5.5 0 0 1 .3-.889l3.542-.1a.5.5 0 0 0 .461-.341Z"
                                    transform="translate(40)"
                                    fill="url(#b)"
                                />
                                <path
                                    data-name="Polygon 1"
                                    d="M6.526 1.41a.5.5 0 0 1 .948 0l1.165 3.465a.5.5 0 0 0 .461.341l3.542.1a.5.5 0 0 1 .3.889L10.089 8.5a.5.5 0 0 0-.167.525l1.014 3.592a.5.5 0 0 1-.774.541l-2.869-2.076a.5.5 0 0 0-.586 0l-2.868 2.075a.5.5 0 0 1-.774-.541l1.014-3.592a.5.5 0 0 0-.168-.524L1.058 6.2a.5.5 0 0 1 .3-.889l3.542-.1a.5.5 0 0 0 .461-.341Z"
                                    transform="translate(60)"
                                    fill="url(#b)"
                                />
                                <path
                                    data-name="Polygon 1"
                                    d="M6.526 1.41a.5.5 0 0 1 .948 0l1.165 3.465a.5.5 0 0 0 .461.341l3.542.1a.5.5 0 0 1 .3.889L10.089 8.5a.5.5 0 0 0-.167.525l1.014 3.592a.5.5 0 0 1-.774.541l-2.869-2.076a.5.5 0 0 0-.586 0l-2.868 2.075a.5.5 0 0 1-.774-.541l1.014-3.592a.5.5 0 0 0-.168-.524L1.058 6.2a.5.5 0 0 1 .3-.889l3.542-.1a.5.5 0 0 0 .461-.341Z"
                                    transform="translate(80)"
                                    fill="url(#b)"
                                />
                                </g>
                                </svg>
                            </div>
                        </div>
                        <p className='font-weight-bolder mt-3'  style={{color:'#4A4A4A'}}>تجربة رائعة</p>
                        <span style={{color:"#707070", fontSize:".75rem" , fontWeight:"300"}}>هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي توزيعاَ طبيعياَ -إلى حد ما- للأحرف عوضاً عن استخدام «هنا يوجد محتوى نصي، هنا يوجد محتوى نصي» فتجعلها تبدو (أي الأحرف) وكأنها نص مقروء. العديد من برامح النشر المكتبي وبرامح تحرير صفحات الويب</span>
                    </div>

                </div>

            
            </div>
        
        </div>

    </div>
  )
}

export default WhyWe