import React from 'react';
import { Link } from 'react-router-dom'

const Header =() => {

      return(
        <header className="p-3 text-bg-dark">
        <div className="container" bis_skin_checked="1">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start" bis_skin_checked="1">
            <Link to="/Home" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
              <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap" ><use href="#bootstrap"></use></svg>
            </Link>
    
            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li><Link to="/Home" className="nav-link px-2 text-secondary">Home</Link></li>
              <li><Link to="/Markeplace" className="nav-link px-2 text-white">NFT Markeplace</Link></li>
              <li><Link to="/About" className="nav-link px-2 text-white">About</Link></li>
            </ul>
    
            <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
              <input type="search" className="form-control form-control-dark text-bg-dark" placeholder="Search..." aria-label="Search"/>
            </form>
    
            
          </div>
        </div>
      </header>
      )
  
    }
    export default Header;