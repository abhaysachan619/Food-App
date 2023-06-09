import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";
import useRestaurant from "../utils/useRestaurant";
import Shimmer from "./Shimmer";
import { addIte } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const RestaurantMenu = ()=>{
    // how to read a dynamic URL params
    const {resId} = useParams();
    // Use proper name
    //const [restaurant, setRestaurant] = useState(null);

    const restaurant = useRestaurant(resId);
    // if(!restaurant){
    //   return <Shimmer />;
    // }
    const dispatch = useDispatch();


    const addFoodItem= (item)=>{
      dispatch(addIte(item));
    }

   

  return !restaurant ? (
    <Shimmer />
    ) : (
    <div className = "flex">
        <div>
        <h1>Restaurant id: {resId}</h1>
        <h2>{restaurant?.name}</h2>
        <img src = {IMG_CDN_URL + restaurant?.cloudinaryImageId}/>
        <h3>{restaurant?.area}</h3>
        <h3>{restaurant?.city}</h3>
        <h3>{restaurant?.avgRating} stars</h3>
        <h3>{restaurant?.costForTwoMsg}</h3>
    </div>
    <div className="p-5">
      <h1>Menu</h1>
      <ul>{
          Object.values(restaurant?.menu?.items).map((item)=>(
          <li key={item.id}>{item.name} -{" "} <button className="p-1 bg-green-50" onClick={()=>addFoodItem(item)}> Add</button></li>
        ))}
      </ul>
    </div>
    </div>
  );
};

export default RestaurantMenu;















//Dummy

// const handleAddItem =()=>{
//   dispatch(addIte("Grapes"));    //{payload: "Grapes"}
// };
// Dummy Button

{/* <div>
<button className="p-2 m-5 bg-green-100" 
onClick={()=>handleAddItem()}
> Add item</button>
</div> */}