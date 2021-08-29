import React from 'react'
import styled from 'styled-components'
import MainImg from '../images/mainbg.svg'

function MainBg() {

    const MainBackground = styled.div`
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        text-align: center;
        align-self: center;
        margin:none;
        padding: 40px;
        height: 500px;
        background-image: url(${MainImg});
        background-repeat:no-repeat;
        background-size: cover;
        ${'' /* background-origin: border-box; */}
        background-position: center;
        h1{
            padding: 10px;
            font-family: Montserrat;
            font-style: normal;
            font-weight: bold;
            font-size: 48px;
            line-height: 59px;
            letter-spacing: 0.02em;
            color: #FFFFFF;
        }
        p{
            padding: 10px;
            font-family: Lato;
            font-style: normal;
            font-weight: normal;
            font-size: 24px;
            line-height: 29px;
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
            <h1>Search Engine Optimization Service</h1>
            <p>People are Already searching for You, let them find you</p>
        </MainBackground>
    )
}

export default MainBg
