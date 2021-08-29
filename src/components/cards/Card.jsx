import React from 'react'
import styled from 'styled-components'


function Card({logo, heading, para}) {

    const CardMain = styled.div`
        ${'' /* width: 480px; */}
        height: 180px;
        padding: 20px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        text-align: left;
    `

    return (
        <CardMain>
            <div>
                <img src={logo} alt="card-logo" height="42" width="42" />
            </div>
            <h4>{heading}</h4>
            <p>{para}</p>
        </CardMain>
    )
}

export default Card
