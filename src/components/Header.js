import { useState, useContext  } from "react";
import Logo from "../assets/img/FoodVilla.jpeg";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/userContext";
import { useSelector } from "react-redux";

const loggedInUser = ()=>{
   // API CALL
   return false;
}; 
// SPA
const Title = () => (
    <a href = "/">
<img className = "h-28 p-2" alt = "logo" src = {Logo}/>
</a>
);

// Composing Component 
const Header = ()=>{
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const isOnline = useOnline();

    const {user} = useContext(UserContext);

    const cartItems = useSelector(store => store.cart.items);

    return (
    <div className="flex justify-between bg-pink-50 shadow-lg">
      <Title />
      {/* <h1>{Title}</h1>
      <button onClick = {() => setTitle("New Food App")}>Change title</button> */}
       <div className = "nav-items">
        <ul className = "flex py-10">
            <Link to = "/"> 
              <li className="px-2"> Home </li>
            </Link>

            <Link to = "/about">
              <li className="px-2"> About </li>
            </Link>
             
            <Link to = "/contact">
            <li className="px-2"> Contact </li>
            </Link>

            <Link to = "/instamart">
              <li className="px-2">Instamart</li>
            </Link>
            
            <Link to = "/cart">
            <li className="px-2"> Cart {cartItems.length} items  </li>
            </Link>
        </ul>
       </div>
       <h1>{isOnline? "✅" : "🔴"}</h1>
       <span className="p-10 font-bold text-red-900"> {user.name} </span>
        {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout </button>
        ) :(
        <button onClick={() => setIsLoggedIn(true)}> Login </button>
        )}
       
   </div>
   );
};

export default Header;

 