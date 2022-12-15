// i want a code to add the className "active" to the `Link` which is clicked that changes the window location path
import React  from 'react'
import {Link, useMatch, useResolvedPath} from "react-router-dom";

function CardsTypesNav() {
//   const [active, setActive] = useState(false);

//   function handleClick(e) {
//     e.preventDefault();
//     setActive(true);
//     // You can also use the `history` object from React Router
//     // to change the window location path.
//   }

  return (
    <div>
        <div className='section row col-md-12 d-flex align-items-center justify-content-between' style={{marginBottom:"45px", zIndex:"10"}}>
            <p className='font-weight-bolder col-md-6' style={{fontSize:"2rem"}}></p>
            <div className="d-flex text-center card-types justify-content-between col-md-6 bd-highlight" style={{fontSize:"60%",maxWidth:"275px"}}>
            
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