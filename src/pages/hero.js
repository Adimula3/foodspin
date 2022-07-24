import React, {Component} from "react";

 class Hero extends Component {

     render() {
         return (
             <div className="hero d-flex">
                 <div className="container">
                     <div className="left-hero">
                         <h2>$32</h2>
                         <p>Green Goddess<br/> Chicken Salad</p>
                         <p className="left-hero-text">It is a non vegetarian salad which consists of the<br/>
                             green goddess dressing mixed with chicken,<br/>
                             peppers, olives and celery. </p>
                         <div className="order">
                             <button type="button" className="btn btn-primary">Schedule a call</button>
                         </div>
                     </div>
                     <div className="right-hero">
                         <div className="circle">

                         </div>
                     </div>
                 </div>
             </div>
         );
     }


}
export default Hero;
