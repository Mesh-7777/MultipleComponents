import React from 'react';
import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '../gridmaker/GridMaker';
import Card from '../cards/Card';
import {SEOCardData} from '../objectdata/CardData'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function MidCard2() {
  const classes = useStyles();
  const MidContainer = styled.div`
    padding: 40px;
    background-color: #F8F8F8;
  `

  return (
      <MidContainer>
    <div className={classes.root}>
      
        <Grid width={"50%"}>
          <h1>What Will You Get with CCG Professional SEO Services?</h1>
          <p>Majority of online searches begin with a search engine like Google. Amongst the thousands of results, rank your website higher to immediately attract relevant customers.</p>
        </Grid>
        <Grid width={"440px"}>
        {SEOCardData.map((data,k)=>{
          return(
            <Card logo={data.logo} heading={data.heading} para={data.para} />
          )
        })}
      </Grid>
    </div>
    </MidContainer>
  );
}
