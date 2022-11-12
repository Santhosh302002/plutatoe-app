import React from "react"
// import React from "react-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faLocationDot} from '@fortawesome/free-solid-svg-icons'
import {faBell} from '@fortawesome/free-solid-svg-icons'
import {faCartPlus} from '@fortawesome/free-solid-svg-icons'
import {faMicrophone} from '@fortawesome/free-solid-svg-icons'
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import '../App.css'
export default function NavBar(){
    return(
        <nav className="NavBar">
            <div className="NavTop">
                <div className="location"><FontAwesomeIcon className="icon" icon={faLocationDot} /></div>
                <div className="placetag"><p className="place">India</p></div>
                <div className="bell"><FontAwesomeIcon className="icon" icon={faBell} /></div>
                <div className="cart"><FontAwesomeIcon className="icon" icon={faCartPlus} /></div>
            </div>
            <div className="NavBottom">
                <div className="Search-bar">
                    <div className="searchIcon">
                        <FontAwesomeIcon className="Icon" icon={faSearch} />
                    </div>
                    <input className="bar" type="text" id="SearchBar" placeholder="  Search for Product">
                    
                    </input>
                </div>
                <FontAwesomeIcon className="micro" icon={faMicrophone} />
            </div>
        </nav>
    );
}