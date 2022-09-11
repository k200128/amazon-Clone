import React from 'react'
import './Header.css';
import {Link}  from "react-router-dom";
// import { SportsBasketball } from '@mui/icons-material';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {useStateValue} from "./StateProvider"
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { auth } from './firebase';
function Header() {
  const [{basket, user}] = useStateValue();
  const handleAauthentication = () =>{

      if (user){
        auth.signOut();

  }
  
  }
  return (
  <nav className = "header">
    <>

      {/* logo on the left */}
      <Link to="/"> 
     <img 
      className ="header__logo"
      src ="https://pngimg.com/uploads/amazon/amazon_PNG11.png" 
      alt = "logo "
      />
    </Link>
      <div className="header__search">
      <input type="Text" className="header__searchInput"  placeholder='Search '/>
      <SearchIcon className="header__searchIcon"/>
          </div>
        
          <div className="header__nav">
          <Link  to={!user && "/login"}className="header__link  ">
          <div  onClick ={handleAauthentication} className="header__option">
            <span className="header__optionLineOne"> Hello {!user ?"Guest" : user.email}</span>
            <span  className="header__optionLineTwo">{user ? 'SignOut': 'SignIn'}</span>
            </div>
            </Link>
            < Link to="/"className="header__link  ">
             <div className="header__option">
             <span  className="header__optionLineOne">Returns</span>
             <span  className="header__optionLineTwo"> & Orders</span>
             </div>
             </Link>
             <Link  to="/"className="header__link  ">
             <div className="header__option">
             <span  className="header__optionLineOne "> Your</span>
             <span  className="header__optionLineTwo"> Prime</span>
             </div> 
             </Link>
             <Link  to="/checkout"
             className="header__link  ">
             <div className="header__optionBasket">
               <ShoppingBasketIcon/>
             {/* <span  className="header__optionLineOne"> Basket</span> */}
             <span className="header__optionLineTwo header__basketCount"> {basket?.length} </span>
             </div>
             </Link>  
            </div> 
            
            </>
</nav>
  );
}

export default Header;