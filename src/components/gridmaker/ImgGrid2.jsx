import React from 'react'
import styled from 'styled-components'

const Grid = styled.div`
    padding: 40px;
    display: grid;
    grid-template-columns: repeat(3, auto);
    grid-template-row: minmax(2rem,auto);
    column-gap: 1rem;
    row-gap: 1rem;
    justify-content: center;
`
const ContentHolder = styled.div`
    width: fit-content;
    grid-row: span 1;
    grid-column: span 1;
    
`

const GridMaker2 = ({ children}) => {
    return (
        <Grid>
            {children && children.length !== 0 && children.map((child, i) => <ContentHolder key={i}>{child}</ContentHolder>)}
        </Grid>
    )
}

export default GridMaker2
