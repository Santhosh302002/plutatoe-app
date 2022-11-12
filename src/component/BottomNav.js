import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faHomeUser} from '@fortawesome/free-solid-svg-icons'
import {faUser} from '@fortawesome/free-solid-svg-icons'
import {faClipboardList} from '@fortawesome/free-solid-svg-icons'
import {faComment} from '@fortawesome/free-solid-svg-icons'
import '../App.css'
export default function BottomNav(){
    
    return(
        <main>
           <div className="BottomNav">
            <div className="BottomIcon">
            <FontAwesomeIcon className="icon-size-bottom" icon={faHomeUser}></FontAwesomeIcon>
            <p>Home</p>
            </div>
            <div className="BottomIcon">
                <FontAwesomeIcon className="icon-size-bottom" icon={faUser}></FontAwesomeIcon>
                <p>Home</p>
            </div>
            <div className="BottomIcon">
                <FontAwesomeIcon className="icon-size-bottom" icon={faClipboardList}></FontAwesomeIcon>
                <p>Home</p>
            </div>
            <div className="BottomIcon">
                <FontAwesomeIcon className="icon-size-bottom" icon={faComment}></FontAwesomeIcon>
                <p >Home</p>
            </div>
           </div>
        </main>
    )
}