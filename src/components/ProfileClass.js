import React from "react";

class Profile extends React.Component {

   constructor(props){
      super(props);
      // create state
      this.state={
         count : 0,
      };
   }

   render(){
    return (<div>
       <h1> Profile Class Component </h1>
       <h2> Name: {this.props.name}</h2>
       <h2> XYZ: {this.props.xyz}</h2>
       <h2> COUNT: {this.state.count}</h2>
       <button 
         onClick={()=>{
         // we donot mutate state directly
         //never do this.state=something
         this.setState({
           count:1,
           count2:2,
         });
       }}
       >
         setCount
         </button>
    </div>
    ); 
   }
}

export default Profile;