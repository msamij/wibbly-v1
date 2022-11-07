import { fetchActivities, fetchHotels, fetchTours } from '@actions/fetch';
import FigureContainer from '@figureContainer/FigureContainer';
import Heading from '@headingMain/Heading';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { activityResponse, hotelsResponse, toursResponse } from 'types/response';
import './Main.css';

interface IMainState {
  products: {
    activities: activityResponse;
    tours: toursResponse;
    hotels: hotelsResponse;
  };
}
interface IMainProps {
  fetchActivities: () => Promise<void>;
  fetchHotels: () => Promise<void>;
  fetchTours: () => Promise<void>;
  state: IMainState;
}

function Main(props: IMainProps) {
  useEffect(() => {
    props.fetchHotels();
    props.fetchTours();
    props.fetchActivities();
  }, []);

  return (
    <main className="main">
      {props.state.products.activities.length > 1 &&
        props.state.products.tours.length > 1 &&
        props.state.products.hotels.length > 1 && (
          <React.Fragment>
            <Heading headingTitle="Hotels 🏨" />
            <FigureContainer response={props.state.products.hotels} figureType={'hotels'} />
            <Heading headingTitle="Tours ⛰️" />
            <FigureContainer response={props.state.products.tours} figureType={'tours'} />
            <Heading headingTitle="Activities 🏊🏻‍♂️" />
            <FigureContainer response={props.state.products.activities} figureType={'activities'} />
          </React.Fragment>
        )}
    </main>
  );
}

const mapStateToProps = (state: IMainState) => {
  return {
    state,
  };
};

export default connect(mapStateToProps, { fetchActivities, fetchHotels, fetchTours })(Main);
