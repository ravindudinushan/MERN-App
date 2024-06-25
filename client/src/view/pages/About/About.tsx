import {Component} from "react";

export class About extends Component {
    render() {
        return (
           <div className="flex">
               <div className="h-auto pt-5 pl-10
                               pr-10 mx-auto">
                   <h2 className="pb-3 text-3xl
                                  text-green-400
                                  underline
                                  decoration-2">
                       About Us</h2>
                   <p className="pb-3 text-[9px]">
                       At Organic Shop, we believe in the power of nature to nourish, heal, and inspire. Our journey began with a simple yet profound realization: the importance of embracing organic living for the well-being of both individuals and the planet.
                       <br/>
                       <br/>
                       Mission:
                       Our mission is to make organic living accessible to all, fostering a harmonious relationship between people and the environment. We are committed to offering a diverse range of high-quality, ethically sourced, and sustainable products that promote health, wellness, and a greener lifestyle.
                   </p>
               </div>
           </div>
        );
    }
}