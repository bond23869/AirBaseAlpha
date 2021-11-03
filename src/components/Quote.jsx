import React, { useState } from 'react';
import {css,cx} from '@emotion/css';

const Quote = () => {

    const quotes = {
        0:{
            client:"Marko Kozlevčar",
            quote:"'Izjemna izkušnja, se definitivno še oglasim'"
        },
        1: {
            quote:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
            client:"Miha Armošt"
        },
        2:{
            quote:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
            client:"Luka Novak"
        },
        3:{
            quote:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
            client:"Maša Kregelj"
        }
    }

    const[current, setCurrent] = useState(quotes[0])
    
    const [active, setActive] = useState(0)

    const handleSetClick = (event) => {
        setCurrent(quotes[event.target.getAttribute("data-quote")])
        setActive(event.target.getAttribute("data-quote"))
    }

    return (
        <div className={css`
            display:flex;
            flex-direction: column;
            align-items:center;
            
            max-width:700px;   
            margin:auto;
            
            p{
                text-align:center;
                margin-bottom:20px;
                color:white;
                font-size:22px;
                font-family: Arial, Helvetica, sans-serif;
            }
        `}>
            <p>{current.quote}</p>
            <p>{current.client}</p>
            <div className={css`
            
            display:flex;

            span{
                height:20px;
                width:20px;
                margin: 0 3px;
                display: flex;
                align-items: center;
                justify-content:center;
                cursor:pointer;
                
            }
            
            span::before{
                content:"";
                height: 6px;
                width: 6px;
                background-color:gray;
                border-radius:50%;
                transition: background-color 0.3s ease;
            }

            span:hover::before {
                background-color:#2c699f;
            }

            span[data-quote="${active}"]::before{
                background-color:#2c699f;
            }
            `}>
            {Object.keys(quotes).map(index =>(
                <span 
                onClick={event => handleSetClick(event)}
                data-quote={index}
                key={index}
                ></span>
            ))}
            </div>
        </div>
    )
}


export default Quote;