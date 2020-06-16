import React, { Component } from 'react';
import './App.scss';

class App extends Component{
  render(){
   return(  <div className="container-fluid p-4">
   <div className="row">
       <div className="col">
         <h1 className="display-1 text-center">SnipTree React Starter</h1>
         <p>This is the Snip Tree react starter project v1</p>
       </div>
   </div>
   <div className="row mt-4">
     <div className="col">
       <p> <strong>The project contains:</strong></p>
         <ul className="list-group">
           <li className="list-group-item">React Starter</li>
           <li className="list-group-item">Node Sass</li>
           <li className="list-group-item">Boot Strap</li>
           <li className="list-group-item">Font Awesome</li>
         </ul>
       </div> 
   </div>
 </div>);
  }
}
export default App;