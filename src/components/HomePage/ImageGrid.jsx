import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '../gridmaker/ImageGrid1';
import { GridImg } from '../objectdata/GridImgData';


export default function ImageGrid() {


  return (
    <div>
       <h1>Our Portfolio</h1>
          <p>We create ideas that speak, inspire and innovate</p>
      <Grid>
      {GridImg.map((img,i)=>{
        return(
        <div key={i}><img  src={img} alt="grid"/></div>
        )
      })}
      </Grid>
      </div>
  );
}
