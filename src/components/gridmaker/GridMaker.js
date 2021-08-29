import React from 'react'
import styled from 'styled-components'

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, ${props => props.width});
    column-gap: 1em;
    row-gap: 1em;
    justify-content: center;
`
const ContentHolder = styled.div`
    width: fit-content;
    grid-row: span 1;
    grid-column: span 1;
`

const GridMaker = ({width = '300px', children}) => {
    return (
        <Grid width={width}>
            {children && children.length !== 0 && children.map((child, i) => <ContentHolder key={i}>{child}</ContentHolder>)}
        </Grid>
    )
}

export default GridMaker
