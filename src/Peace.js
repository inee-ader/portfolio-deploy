import React, { Component } from 'react';
import './Peace.css'

class Peace extends Component{

  
    render() {

        return (
           <div className="peace">
               <p className="peace__p">This is peace</p>
               <iframe className="video" title="nature" width="560" height="315" src="https://www.youtube.com/embed/Qm846KdZN_c" frameBorder="0" allow="accelerometer; autoplay; encrypted-media" allowFullScreen></iframe>
           </div>
       )
   }
    }


export default Peace;
