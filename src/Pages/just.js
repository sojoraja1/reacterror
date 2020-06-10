import React from 'react';
import {
    BrowserRouter as Router,
     Link,
     useLocation,
     Route,
     Switch,
     Redirect,
   } from "react-router-dom";

const Just=(props)=>{

    

    return(

      
        <div>
        {new URLSearchParams(useLocation().search).get("name")}
         {props.match.params.my}
         {props.name}
          <Link to="/">ssssss</Link>
    
        </div>
    )
}

export default Just;