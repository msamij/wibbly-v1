import { fetchActivities, fetchHotels, fetchTours } from '@actions/httpGet';
import FigureContainer from '@figureContainer/FigureContainer';
import Heading from '@headingMain/Heading';
import { activityResponse } from '@models/Activity';
import { hotelsResponse } from '@models/Hotel';
import { toursResponse } from '@models/Tour';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import './Main.css';

interface IMainProps {
  fetchActivities: () => Promise<void>;
  fetchHotels: () => Promise<void>;
  fetchTours: () => Promise<void>;
  state: IMainMapState['fetchedData'];
}

function Main(props: IMainProps) {
  useEffect(() => {
    props.fetchHotels();
    props.fetchTours();
    props.fetchActivities();
  }, []);

  return (
    <main className="main">
      {props.state.activities.length > 1 && props.state.tours.length > 1 && props.state.hotels.length > 1 && (
        <React.Fragment>
          <Heading headingTitle="Hotels 🏨" />
          <FigureContainer response={props.state.hotels} figureType={'hotels'} />
          <Heading headingTitle="Tours ⛰️" />
          <FigureContainer response={props.state.tours} figureType={'tours'} />
          <Heading headingTitle="Activities 🏊🏻‍♂️" />
          <FigureContainer response={props.state.activities} figureType={'activities'} />
        </React.Fragment>
      )}
    </main>
  );
}

interface IMainMapState {
  fetchedData: {
    activities: activityResponse;
    tours: toursResponse;
    hotels: hotelsResponse;
  };
}
const mapStateToProps = (state: IMainMapState) => ({
  state: state.fetchedData,
});

export default connect(mapStateToProps, { fetchActivities, fetchHotels, fetchTours })(Main);
