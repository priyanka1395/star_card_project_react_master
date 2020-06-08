import React from 'react'
import './procard.css';
import Star from './Star'
function Procar(props){
    return(

    <div className ="card">
      <img src="https://www.w3schools.com/w3images/team2.jpg" alt="John Doe" style={{ width: '100%' }} />
      <h1>John Doe</h1>
      <p className="title">CEO & Founder, Example</p>
      <Star rating={3.5}/>
      <p>Harvard University</p>
      <a href="#"><i className="fa fa-dribbble"></i></a> 
      <a href="#"><i className="fa fa-twitter"></i></a> 
      <a href="#"><i className="fa fa-linkedin"></i></a> 
      <a href="#"><i className="fa fa-facebook"></i></a> 
      <p><button>Contact</button></p>
    </div>)

}
export default Procar