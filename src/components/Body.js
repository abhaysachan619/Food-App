import {RestaurantList} from "../config";
import RestaurantCard  from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/userContext";

    // const searchTxt = "KFC";

    //searchText is a local state variable

const Body = ()=>{
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState(""); // To create state variables
    const {user, setUser} = useContext(UserContext);

    useEffect(()=>{
        // API Call
        getRestaurants();
    },[]);

    async function getRestaurants(){
        const data= await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.449923&lng=80.3318736&page_type=DESKTOP_WEB_LISTING"
            );
        const json = await data.json();
        // Optional Chaining
        setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
        setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    }

    // const isOnline = useOnline();

    // if(!isOnline){
    //     return <h1> 🎈Offline, please check your internet connection </h1>;
    // }

    console.log("render");

    if(!allRestaurants) return null;

    // if(filteredRestaurants?.length === 0) return <h1> No Restaurant match your filter!!!</h1>

    return allRestaurants.length === 0 ? (<Shimmer/>
    ):(
        <> 
        <div className="search_container p-5 bg-pink-50 my-5">
           <input type="text" 
           className="focus:bg-green-200 p-2 m-2" 
           placeholder="Search" 
           value={searchText} 
           onChange={(e) =>{
            setSearchText(e.target.value);
           }}
           />
           <button className="p-2 m-2 bg-purple-900 hover:bg-gray-500 text-white rounded-md"
           onClick={()=>{
            // need to filter the data
            const data = filterData(searchText, allRestaurants);
            // update the state - restaurants
            setFilteredRestaurants(data);
           }}
           >Search
        </button>
        
        {/* //modification */}

        {/* <input value={user.name} onChange={
            e => setUser({
                ...user,
                name: e.target.value,
            })
        }> </input> 

        <input value={user.name} onChange={
            e => setUser({
                ...user,
                email: e.target.value,
            })
        }> </input> */}

        </div>
        <div className="flex flex-wrap">
            {/* You have to write for NO restaurant around here */}
            {
                filteredRestaurants.map((restaurant)=>{
                    return (
                    <Link 
                    to={"/restaurant/" +  restaurant.data.id}
                    key={restaurant.data.id}
                    >
                        <RestaurantCard {...restaurant.data} /></Link>
                    );
                })}
        </div>
        </>
    );
};

export default Body;