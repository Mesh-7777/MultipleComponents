import React from 'react';
import Grid from '../gridmaker/ImgGrid2';
import { Logos } from '../objectdata/LogoGridImg';


export default function LogoGrid() {

  return (
    <div>
       <h1>Get a glimpse of our work</h1>
      <Grid width={"400px"}>
      {Logos.map((img,i)=>{
        return(
        <div key={i}><img src={img} alt="grid"/></div>
        )
      })}
      </Grid>
      </div>
  );
}
