import FigureContainer from '@figureContainer/FigureContainer';
import Heading from '@heading/Heading';
import './Main.css';

function Main() {
  return (
    <main className="main">
      <Heading headingTitle="Hotels 🏨"></Heading>
      <FigureContainer />
      <Heading headingTitle="Tours ⛰️" />
      <FigureContainer />
      <Heading headingTitle="Activities 🏊🏻‍♂️" />
      <FigureContainer />
    </main>
  );
}

export default Main;
