import React, { Component } from 'react';
import {
   BrowserRouter as Router,
    Link,
    useLocation,
    Route,
    Switch,
  } from "react-router-dom";
import Just from '../Pages/just'

class Details extends Component {
    render() {
        return (
 <div>
 <Link to="/">Go to Home</Link>
<Router>
<Link to={'/detail/1?name=sundars'}>Check</Link>

<Switch>
<Route exact={true} path={'/detail/:my'}  render={(props)=>{


return (

    <div>
        <Just {...props} name="sundar"/>
    </div>
)
}} />


</Switch>
</Router>



 </div>
        );
    }
}

export default Details;
