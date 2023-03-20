import React, {lazy, Suspense, useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/Profile";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/userContext";
import { Provider } from "react-redux";
import store from "./utils/store";
import Cart from "./components/Cart";
// import Instamart from "./components/Instamart"; 

// Chunking
// Code Splitting
// Dynamic Bundling
// Lazy Loading
// OnDemand Loading
// Dynamic Import

const Instamart = lazy(()=>import("./components/Instamart"));
// Upon on demand loading -> upon render -> react suspend loading

const AppLayout = ()=>{

    const [user, setUser] = useState({
        name: "Abhay Sachan",
        email: "abhaysachan@gmail.com", 
    });
    return(
          <Provider store = {store}>
          <UserContext.Provider 
          value={{
            user:user,
            setUser: setUser,
          }}
          >
          <Header />
          {/* {Outlet} */}
          <Outlet  />
          <Footer />
          </UserContext.Provider>
          </Provider>   
    );
};



const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        errorElement:<Error/>,
        children:[
            {
                path:"/",
                element:<Body/>,
            },
            {
                path:"/about",
                element:<About/>,
                children:[
                    {
                        path: "profile",  //parentPath/{Path} => localhost:1244/about/profile
                        element: <Profile/>,
                    },
                ],
            },
            {
                path:"/contact",
                element:<Contact/>,
            },
            {
                path:"/restaurant/:resId",
                element:<RestaurantMenu/>,
            },
            {
                path:"/instamart",
                element:(
                <Suspense fallback={<Shimmer/>}>
                    <Instamart/>
                </Suspense>
                ),

            },
            {
                path:"/cart",
                element:<Cart/>
            }
        ],
        
    },

]);
    


const root = ReactDOM.createRoot(document.getElementById("root"));

// Passing a react element inside the root
//root.render(<AppLayout/>);

root.render(<RouterProvider router={appRouter}/>);



































   /**
         * Header
         *   Logo(Title)
         *   Nav Items(Right Side)
         *   Cart
         * Body
         *   Search Bar
         *   RestaurantList
         *      Restaurant Card(many cards)
         *        Image
         *        Name
         *        Rating
         *        Cusine
         * Footer
         *   Links 
         *   Copyright
         */ 

// JSX => React.createElement => Object => HTML(DOM)


// React Component
// FUNCTIONAL - NEW way of writting code


 

// config driven UI

// const config =[
//     {
//         type:"carousel",
//         cards:[
//             {
//                 offerName: "50% off"
//             },
//             {
//                 offerName: "No Delivery Charges"
//             },
//         ],
//     },

//     {
//         type:"carousel",
//         cards:[
//             {
//                 name: "Burger King",
//                 image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/jdzxiolzcuaidizvxjer",
//                 cuisines: ["Burger", "American"],
//                 rating: "4.2"
            
//             },
//             {
//                 name: "KFC",
//                 image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/jdzxiolzcuaidizvxjer",
//                 cuisines: ["Burger", "American"],
//                 rating: "4.2"
            
//             },
//         ],
//     },
// ]