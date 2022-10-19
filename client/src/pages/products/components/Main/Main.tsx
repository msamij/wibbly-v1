import React from 'react';
import FigureContainer from '@figureContainer/FigureContainer';
import Heading from '@headingMain/Heading';
import './Main.css';

function Main() {
  return (
    <main className="main">
      <Heading headingTitle="Hotels 🏨" />
      <FigureContainer />
      <Heading headingTitle="Tours ⛰️" />
      <FigureContainer />
      <Heading headingTitle="Activities 🏊🏻‍♂️" />
      <FigureContainer />
    </main>
  );
}

export default Main;
