import React from 'react'
import styled from 'styled-components'
import MidSec1Card from '../cards/MidSec1Card'
import {ProgressCard} from '../objectdata/MidSec1Data'
import ProImg from '../images/progressimages/progressimg.svg'



function MidCard1() {

    const MainProgressCard = styled.div`
        height: 405px;
        margin: none;
        padding: 40px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        align-self: center;
        p{
            font-family: Lato;
            font-style: normal;
            font-weight: normal;
            font-size: 20px;
            line-height: 24px;
            color: #3E454E;
        }
        .left-text{
                width: 45%;
                padding: 10px;
                height:305px;
            h1{
                text-align: left;
                font-family: Montserrat;
                font-style: normal;
                font-weight: 800;
                font-size: 42px;
                line-height: 51px;
                align-self: flex-start;
                color: #222529;
            }
            p{
                text-align: justify;
            }
        }
        .progress-image{
            width: 45%;
            height: 229px;
            display:flex;
            justify-content:space-evenly;
            height: initial;
            padding: 4px;
            p{
                padding: 11px;
            }
        }
    `

    // const ProgressImg = styled.img`
    //     height: 138px;
    //     width: 138px;
    // `
    return (
        <MainProgressCard>
            <div className="left-text">
                <h1>{ProgressCard.heading}</h1>
                <p>{ProgressCard.para}</p>
            </div>
            <div className="progress-image">
                <img src={ProgressCard.image}  alt="side data" />
            </div>
       
        </MainProgressCard>
    )
}

export default MidCard1
