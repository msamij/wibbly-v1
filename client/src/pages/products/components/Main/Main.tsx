import FigureContainer from '@figureContainer/FigureContainer';
import Heading from '@headingMain/Heading';
import Urls from '@http/constants';
import HTTP from '@http/http';
import { activityResponse, hotelsResponse, toursResponse } from '@responseData/ResponseData';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { ActionTypes } from 'src/state/types/actions';
import { Store } from 'src/state/types/store';
import { fetchActivities, fetchHotels, fetchTours } from '../../../../state/actions/index';
import './Main.css';

type figureType = ['hotels', 'tours', 'activities'];

// function Main() {
//   const [hotelsData, setHotelsData] = useState([]);
//   const [toursData, setToursData] = useState([]);
//   const [activitiesData, setActivitiesData] = useState([]);
//   const [figureNameIndex, setFigureNameIndex] = useState(0);

//   let figureNames: figureType = ['hotels', 'tours', 'activities'];

//   useEffect(() => {
//     (async () => {
//       const response = await HTTP.get(`${Urls.baseUrl}${Urls.baseApiUrl}${figureNames[figureNameIndex]}`);
//       let jsonResponse = await response.json();

//       if (figureNameIndex === 0) {
//         setHotelsData(jsonResponse);
//       } else if (figureNameIndex === 1) {
//         setToursData(jsonResponse);
//       } else if (figureNameIndex === 2) {
//         setActivitiesData(jsonResponse);
//       }

//       if (figureNameIndex < figureNames.length - 1) setFigureNameIndex(figureNameIndex + 1);
//     })();
//   }, [figureNameIndex]);

//   return (
//     <main className="main">
//       {hotelsData.length > 0 && toursData.length > 0 && activitiesData.length > 0 ? (
//         <React.Fragment>
//           <Heading headingTitle="Hotels 🏨" />
//           <FigureContainer response={(hotelsData as unknown) as hotelsResponse} figureType={'hotels'} />
//           <Heading headingTitle="Tours ⛰️" />
//           <FigureContainer response={(toursData as unknown) as toursResponse} figureType={'tours'} />
//           <Heading headingTitle="Activities 🏊🏻‍♂️" />
//           <FigureContainer response={(activitiesData as unknown) as activityResponse} figureType={'activities'} />
//         </React.Fragment>
//       ) : (
//         ''
//       )}
//     </main>
//   );
// }

// export default Main;

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

  console.log(props);
  return (
    <main className="main">
      {props.state.products.activities.length > 0 &&
      props.state.products.tours.length > 0 &&
      props.state.products.hotels.length > 0 ? (
        <React.Fragment>
          <Heading headingTitle="Hotels 🏨" />
          <FigureContainer response={props.state.products.hotels} figureType={'hotels'} />
          <Heading headingTitle="Tours ⛰️" />
          <FigureContainer response={props.state.products.tours} figureType={'tours'} />
          <Heading headingTitle="Activities 🏊🏻‍♂️" />
          <FigureContainer response={props.state.products.activities} figureType={'activities'} />
        </React.Fragment>
      ) : (
        ''
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
