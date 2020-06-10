import React, { Component } from "react";
// import Navbar from "./Navbar/navbar";
import {
  BrowserRouter as Router,
  Link,
  useLocation,
  Route,
  Switch,
} from "react-router-dom";
import axios from 'axios';
import About from '../src/Pages/about'
import Details from '../src/Pages/details'
export default class App extends Component {
  state={error:false,details:''}

  async componentDidMount(){

    try{
     const ok=  await axios.get('http://localhost:8000/data?page=1&limit=12')
    
     console.log(ok.data)
  
    }catch(error){
      if (error.response) {
        // Request made and server responded
        console.log(error.response);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
      }

      
    }

  }
  render() {
    return (
      <div>
       <Router>
      <div className="navigationBar">
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
          <a className="navbar-brand" href="#">
            RoutingTutorial
          </a>

          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to={"/"}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" exact to={"/detail"}>
                Detail
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/about?token=1212A"}>
                About
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <Switch>
        <Route
          exact
          path={"/"}
          render={() => {
            return (
              <div>
                <h1>Hello</h1>
              </div>
            );
          }}
        />
        <Route
          exact
          path={"/detail"}
          component={Details}
        />

        <Route
          exact
          path={"/about"}
          render={(props)=>{

            return <About {...props} name="rahul"/>
          }}
        />
        <Route path="*" render={()=>{

          return (<h1>404 ERRRORR</h1>)
        }}/>
      
      </Switch>

      {this.state.error?(this.state.details):''}
    </Router>
      </div>
    );
  }
}
