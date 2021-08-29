import React from 'react';
import styled from 'styled-components'
import Grid from '../gridmaker/GridMaker';
import Card from './Home Card/ServiceCard';
import {ServiceData} from './Home data/ServiceData'

export default function MidService() {

  const MidServiceContainer = styled.div`
    padding: 40px;
    height: 668;
    background-color: #F8F8F8;
  `

  return (
      <MidServiceContainer>
          <h1>Our Services</h1>
          <p>Creative Consulting Group offers services in the areas of Web/Mobile Development, Digital Marketing, Graphic Design and Events.</p>
        <Grid width={"229px"}>
        {ServiceData.map((data,k)=>{
          return(
            <Card logo={data.logo} heading={data.heading} para={data.para} />
          )
        })}
      </Grid>
    </MidServiceContainer>
  );
}
