import React from "react"
import '../App.css'

export default function product(props){
    // console.log(props.consultancy)
    const color=["#ff6666","#6666ff","#ffff99","#99ff99","pink"]
    const col=""
    return (
        <div className="Products">
            { props.consultancy.Topic && <div className="title-tag">
                <h2 className="title">{props.consultancy.Topic}</h2>
            </div>}
            <h2 className="consultancyName">{props.consultancy.Name}</h2>
            <hr/>
            <div className="Service">
            {
                props.consultancy.Service.map((val,index)=>(
                <div className="ServiceProduct">
                    <div className="NameTag" >
                        <h1 className="Character" style={{backgroundColor: color[Math.floor((Math.random())*color.length)]}}>{val[0]}</h1>
                    </div>
                    <p className="ServiceName">{props.consultancy.Service[index]}</p>
                </div>
                )
                )
            }
            </div>
        </div>
    )
}