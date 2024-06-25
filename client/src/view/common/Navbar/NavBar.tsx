import {Component} from "react";
import icon from '../../../images/icon.png';
import {Link} from "react-router-dom";

export class NavBar extends Component {

    render() {

        return (
            <div className="p-2
                            bg-[#444544]
                            flex">
                <h1 className="text-1x1
                         text-secondary">
                    Organic Shop
                </h1>
                <img className="h-5 w-5 ml-1"
                     src={icon} alt=""/>

                <ul className="list-none ml-[100px]">
                    <li className="inline-block mr-2
                                text-[#e6f0e6]
                                cursor-pointer
                                hover:text-green-400">
                        <Link to="/">Home</Link></li>
                    <li className="inline-block mr-2 text-[#e6f0e6] cursor-pointer hover:text-green-400">
                        <Link to="/about">About</Link></li>
                    <li className="inline-block mr-2 text-[#e6f0e6] cursor-pointer hover:text-green-400">
                        <Link to="/contact">Contact</Link></li>
                    <li className="inline-block mr-2 text-[#e6f0e6] cursor-pointer hover:text-green-400">
                        <Link to="/shopping-cart">My-Cart</Link></li>
                </ul>

                <button className="text-[8px]
                                   text-[#e6f0e6]
                                   bg-secondary
                                   pl-3 pr-3
                                   rounded
                                   hover:text-tertiary">
                    <Link to="/login">Sign In</Link>
                </button>
            </div>
        );
    }
}