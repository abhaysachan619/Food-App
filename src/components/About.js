import { Outlet } from "react-router-dom";
import ProfileFunctionalComponent from "./Profile";
import Profile from "./ProfileClass";

const About= ()=>{
  return(
    <div>
        <h1> About Us Page</h1>
        <p> 
            This is the Namaste React Live Course Chapter - 07 - Finding the Path 🚀
        </p>
        <ProfileFunctionalComponent name={"Abhay"}/>
        <Profile name={"AbhayClass"} xyz="abc" />
    </div>
  )
}

export default About;