import React from 'react'
import styled from 'styled-components'
import MainImg from '../images/mainbg.svg'

function HomeBg() {

    const MainBackground = styled.div`
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        text-align: center;
        align-self: center;
        margin:none;
        padding: 40px;
        height: 798px;
        background-image: url(${MainImg});
        background-repeat:no-repeat;
        background-size: cover;
        ${'' /* background-origin: border-box; */}
        background-position: center;
        h1:nth-child(1){
            font-family: Gotham;
            font-style: normal;
            font-weight: normal;
            font-size: 64px;
            line-height: 61px;
            text-align: center;
            letter-spacing: 0.02em;

            color: #FFFFFF;

        }
        h1:nth-child(2){
            font-family: Gotham;
            font-size: 64px;
            line-height: 75px;
            text-align: center;
            letter-spacing: 0.02em;
            text-transform: capitalize;
                    
            /* Primary Color Pink */
                    
            color: #DD375D;
        }
        h1:nth-child(3){
            font-family: Gotham;
            font-size: 64px;
            line-height: 75px;
            text-align: center;
            letter-spacing: 0.02em;
            text-decoration-line: underline;

            /* Primary Color Pink */

            color: #DD375D;
        }
        p{
            font-family: Lato;
            font-style: normal;
            font-weight: bold;
            font-size: 20px;
            line-height: 24px;
            text-align: center;
                    
            color: #FFFFFF;
        }
        @media only screen and (max-width: 1199px){
            background-size: cover;
            padding: 20px;
            justify-content:center;
        }
        
        @media only screen and (max-width: 1070px){
            background-size: cover;
            padding: 10px;
            justify-content:center;
            h1{
                font-size: 37px;
                line-height: 15px;
            }
            p{
                font-size: 24px;
                line-height: 15px;
            }
        }
        @media only screen and (max-width: 870px){
            background-size: cover;
            padding: 5px;
            justify-content:center;
            h1{
                font-size: 30px;
                line-height: 15px;
            }
            p{
                font-size: 20px;
                line-height: 15px;
            }
        }
        @media only screen and (max-width: 720px){
            background-size: cover;
            padding: 5px;
            justify-content:center;
            h1{
                font-size: 26px;
                line-height: 15px;
            }
            p{
                font-size: 17px;
                line-height: 15px;
            }
        }
    `
    return (
        <MainBackground>
            <h1> All Inclusive</h1>
            <h1>Design and Brand Marketing</h1>
            <h1>Company</h1>
            <p>Endorse your brand to the right audience, convert promising leads and boost sales.</p>
        </MainBackground>
    )
}

export default HomeBg
