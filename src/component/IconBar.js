import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import {faTrainSubway,faChevronCircleDown , faGraduationCap,faTelevision,faBlog,faNewspaper,faLightbulb,faWallet,faFireBurner,faMehBlank,faMobileScreen,faIndianRupeeSign} from '@fortawesome/free-solid-svg-icons'

import '../App.css'
export default function IconBar(){
    return(
        <main className="payingTab">
            <div className="IconTab">
            <div className="ICON"><FontAwesomeIcon  icon={faMobileScreen} className="PhoneIcon icon-size ICON"></FontAwesomeIcon><p className="para">Phone Recharge</p></div>
            <div className="ICON">
                <FontAwesomeIcon  icon={faIndianRupeeSign} className="rupee-icon icon-size ICON "></FontAwesomeIcon> 
                <p className="para">Phone Payment</p>
            </div>
            <div className="ICON"><FontAwesomeIcon  icon={faTelevision} className="TV-icon icon-size ICON"></FontAwesomeIcon> <p className="para">TV Recharge</p></div>
            <div className="ICON"><FontAwesomeIcon  icon={faMehBlank} className="blank-icon icon-size ICON"></FontAwesomeIcon> <p className="para">Jobs</p></div>
            <div className="ICON"><FontAwesomeIcon  icon={faTrainSubway} className="TV-icon icon-size ICON"></FontAwesomeIcon><p className="para">Metro Card</p> </div>
            <div className="ICON"><FontAwesomeIcon  icon={faGraduationCap} className="TV-icon icon-size ICON"></FontAwesomeIcon> <p className="para">Education Fee</p></div>
            <div className="ICON"><FontAwesomeIcon  icon={faFireBurner} className="fire-icon icon-size ICON"></FontAwesomeIcon><p className="para">Gas Payment</p> </div>
            <div className="ICON"><FontAwesomeIcon  icon={faWallet} className="water-icon icon-size ICON"></FontAwesomeIcon> <p className="para">Wallet</p></div>
            <div className="ICON"><FontAwesomeIcon  icon={faBlog} className="blog-icon icon-size ICON"></FontAwesomeIcon><p className="para">Blog</p> </div>
            <div className="ICON"><FontAwesomeIcon  icon={faNewspaper} className="news-icon icon-size ICON"></FontAwesomeIcon> <p className="para">News</p></div>
            <div className="ICON"><FontAwesomeIcon  icon={faLightbulb} className="light-icon icon-size ICON"></FontAwesomeIcon><p className="para">Elecicity Charge</p> </div>
            <div className="ICON"><FontAwesomeIcon  icon={faChevronCircleDown} className="light-icon icon-size ICON"></FontAwesomeIcon><p className="para">See More</p> </div>
        </div>
        </main>
 
    )
}