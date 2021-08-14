import React from 'react';
import "./card.css";
import { data } from "./../Data"

export default function Cards() {
    
    return (
        <div className="card-container">
        

            {data.map((card) => {
                return (
                    <div className="cards" key={card.id}>
                        <div className="title">
                            <h2>{card.title}</h2>
                        </div>
                        <img src={card.image} />
                        <div className="card-over">
                            <p>
                                {card.desc}
                            </p>
                        </div>
                    </div>

                )
            })}

        </div>






       
    )
}























 // <div className="card-container">
        //     <div className="cards">
        //         <div className="title">
        //          <h2>{data[0].title}</h2>   
        //         </div>

        //         <img src={data[0].image} alt=""></img>
        //     </div>
        //     <div className="card-over">
        //        <p>{data[0].desc} </p> 
        //     </div>


        // </div>