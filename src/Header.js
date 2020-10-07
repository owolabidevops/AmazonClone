import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "./StateProvider";
import {auth} from "./firebase";

function Header() {
  const [{ basket,user }, ] = useStateValue();
  console.log(basket);


   const handleAuthentication =() =>{
          if(user){
  auth.signOut();
          }
   }

  return (
    <nav className="header">
      {/* logo on the left -> img*/}
      <Link to="/">
        <img
          className="header_logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </Link>
      {/* search box*/}
      <div className="header_search">
        <input type="text" className="header_searchInput"></input>
        <SearchIcon className="header_searchIcon" />
      </div>
      {/* 3 links*/}

      <div className="headerNav">
        {/* 1st links*/}

        <Link to={ !user && '/Login'} className="header_link">
          <div onClick={handleAuthentication} className="header_option">
            <span className="header_optionLineOne">Hello,{user?.email} </span>
            <span className="header_optionLineTwo">{user ? 
            'Sign Out' : 'Sign In'}</span>
          </div>
        </Link>
        {/* 2nd links*/}
        
        <Link to="/orders" className="header_link">
          <div className="header_option">
            <span className="header_optionLineOne">Returns</span>
            <span className="header_optionLineTwo">& Orders</span>
          </div>
        </Link>

        {/* 3rd links*/}
        <Link to="/" className="header_link">
          <div className="header_option">
            <span className="header_optionLineOne">Your</span>
            <span className="header_optionLineTwo">Prime</span>
          </div>
        </Link>
      </div>
      {/*4 link Basket icon with number*/}
      <Link className="header_link " to="/checkout">
        <div className="header_optionBasket">
          {/* shopping basket icon */}
          <ShoppingBasketIcon />
          {/*  number of item in the basket*/}
          <span className="header_optionLineTwo header_basketcount">{basket?.length}</span>
        </div>
      </Link>
    </nav>
  );
}

export default Header;
