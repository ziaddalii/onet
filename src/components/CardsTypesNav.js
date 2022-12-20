import React, {useEffect, useState}  from 'react'
import {Link, useMatch, useResolvedPath, useLocation} from "react-router-dom";

function CardsTypesNav() {
  const [sectionTitle, setSectionTitle] = useState('');
  const location = useLocation();

  useEffect(() => {
    const currentLocation = location.pathname;

    if (currentLocation === '/') {
      setSectionTitle('البلدان الشائعة');
    } else if (currentLocation === '/anothercards') {
      // Perform some action if the user is on page 2
    } else if (currentLocation === '/globalcards') {
      setSectionTitle('البطاقات الشائعة');
    }
    console.log('currentPage:', currentLocation);
    console.log("Section Title:", sectionTitle);
  }, [location.pathname, sectionTitle]);

    return (
      <div>
        <div className='section row col-md-12 d-flex align-items-center justify-content-between' style={{marginBottom:"45px",marginRight:"0", zIndex:"10"}}>
            <p className='font-weight-bolder col-md-6' style={{fontSize:"2rem"}}>{sectionTitle}</p>
            <div className="d-flex text-center card-types justify-content-between col-md-6 bd-highlight" style={{fontSize:"57%",maxWidth:"275px"}}>
            
                <CustomLink to = "/">بطاقات محلية</CustomLink>
                <CustomLink to = "/anothercards">بطاقات اقليمية</CustomLink>
                <CustomLink to = "/globalcards">بطاقات عالمية</CustomLink>
            </div>
        </div>
    </div>
  )
}
;

function CustomLink ({to, children, ...props}){
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({path: resolvedPath.pathname, end: true})
  return (
    <li className="list-unstyled col-md-4">
      <Link to={to} {...props} className={isActive ? "list-unstyled text-decoration-none p-2 active" : "list-unstyled text-decoration-none p-2 not-active"}>
        {children}
      </Link>
    </li>
  )
}

export default CardsTypesNav