import React, { useEffect, useState } from 'react';
import FigureContainer from '@figureContainer/FigureContainer';
import Heading from '@headingMain/Heading';
import './Main.css';
import Urls from '@http/constants';
import HTTP from '@http/http';

const figureTitle = {
  hotels: 'Hotels 🏨',
  tours: 'Tours ⛰️',
  activities: 'Activities 🏊🏻‍♂️',
};

interface ResponseData {
  id: number;
  name: string;
}

interface HotelResponseData extends ResponseData {
  noOfRooms: number;
  price_per_night: number;
  hotel_images: [string];
}

interface TourResponseData {
  price: number;
  duration: number;
  tour_images: [string];
}

interface ActivityResponseData {
  price: number;
  activity_images: [string];
}

type hotelsResponse = [HotelResponseData];

type figureType = ['hotels', 'tours', 'activities'];

function Main() {
  // const [hotelsData, setHotelsData] = useState<hotelsResponse>([{id:0,name:'', noOfRooms:0,price_per_night:0,hotel_images:['']}]);
  const [hotelsData, setHotelsData] = useState([]);
  const [toursData, setToursData] = useState([]);
  const [activitiesData, setActivitiesData] = useState([]);
  const [figureNameIndex, setFigureNameIndex] = useState(0);

  let figureNames: figureType = ['hotels', 'tours', 'activities'];

  useEffect(() => {
    (async () => {
      const response = await HTTP.get(`${Urls.baseUrl}${Urls.baseApiUrl}${figureNames[figureNameIndex]}`);
      let jsonResponse = await response.json();

      if (figureNameIndex === 0) {
        console.log(jsonResponse);
        setHotelsData(jsonResponse);
      } else if (figureNameIndex === 1) {
        setToursData(jsonResponse);
      } else if (figureNameIndex === 2) {
        setActivitiesData(jsonResponse);
      }

      if (figureNameIndex < figureNames.length - 1) setFigureNameIndex(figureNameIndex + 1);
    })();
  }, [figureNameIndex]);

  return (
    <main className="main">
      {hotelsData.length > 0 && toursData.length > 0 && activitiesData.length > 0 ? (
        <React.Fragment>
          <Heading headingTitle="Hotels 🏨" />
          {/* <FigureContainer /> */}
          <Heading headingTitle="Tours ⛰️" />
          {/* <FigureContainer /> */}
          <Heading headingTitle="Activities 🏊🏻‍♂️" />
          {/* <FigureContainer /> */}
        </React.Fragment>
      ) : (
        ''
      )}
    </main>
  );
}

export default Main;
