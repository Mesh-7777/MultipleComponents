import React from 'react'
import './App.css';
import Card from './components/cards/Card';
import MainBg from './components/header/MainBg';
import MidCard2 from './components/SEO/MidCard2';
import MidCard1 from './components/SEO/MidCard1';
import HomeBg from './components/HomePage/HomeBg';
import MidSec1 from './components/HomePage/MidSec1';
import MidService from './components/HomePage/MidService'
import ImageGrid from './components/HomePage/ImageGrid';
import LogoGrid from './components/logo designing grid component/LogoGrid';

function App() {
  return (
    <div className="App">
      <HomeBg />
      <MainBg />
      <MidSec1 />
      <ImageGrid />
      <LogoGrid />
      <MidService />
      <MidCard1 />
      <MidCard2 />
    </div>
  );
}

export default App;
