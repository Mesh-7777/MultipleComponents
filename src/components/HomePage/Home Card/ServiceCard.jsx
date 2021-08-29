import React from 'react'
import styled from 'styled-components'


function Card({logo, heading, para}) {

    const CardService = styled.div`
        ${'' /* width: 480px; */}
        height: 263px;
        padding: 20px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        text-align: left;
        span a{
            font-family: Lato;
            font-style: normal;
            font-weight: bold;
            font-size: 16px;
            line-height: 19px;
            display: flex;
            align-items: center;
            text-transform: uppercase;
            /* Primary Color Pink */

            color: #DD375D;
        }
        div{
            display:flex;
            align-items: center;
            align-self:center;
            p{
                padding: 0 0 0 10px;
                margin: 0;
                font-family: Lato;
                font-style: normal;
                font-weight: 600;
                font-size: 18px;
                line-height: 22px;
                color: #222529;
            }
        }
        ul{
            padding:0;
            list-style-type: none;
        }
        li{
            padding:8px;
        }
    `

    return (
        <CardService>
            <div>
                <img src={logo} alt="card-logo" height="48" width="38" />
                <p>{heading}</p>
            </div>
            <ul>
                <li>UI/UX Prototyping</li>
                <li>iOS and Android App </li>
            </ul>
            <span><a href="#Seemore">See More -&gt;</a></span>
        </CardService>
    )
}

export default Card
