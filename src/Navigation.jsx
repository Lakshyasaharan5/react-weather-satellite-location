import React from "react";
import {Link} from "react-router-dom";

function Navigation(){
    return (<nav id='menu'>
    <ul>
      <li><Link to="/satellite">Satellite</Link></li> 
      <li><Link to="/weather">Weather</Link></li> 
      <li><Link to="/example">Example</Link>
      </li>
      
    </ul>
  </nav>);
}

export default Navigation;