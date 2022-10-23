import React, { useEffect, useState } from 'react';
import Figure from '@figure/Figure';
import './FigureContainer.css';
import HTTP from '@http/http';
import Urls from '@http/constants';

export interface FigureContainerConfig {
  figureType?: 'hotels' | 'activities' | 'tours';
  updateFigureTitle?: React.Dispatch<React.SetStateAction<string>>;
}

interface ResponseData {
  id: number;
  name: string;
  images: [string];
  price: number;
  duration?: number;
  noOfRooms?: number;
}

function FigureContainer(props: ResponseData) {
  const [responseData, setResponseData] = useState([]);

  // useEffect(() => {
  //   (async () => {
  //     const response = await HTTP.get(`${Urls.baseUrl}${Urls.baseApiUrl}${props.figureType}`);
  //     let jsonResponse = await response.json();
  //     setResponseData(jsonResponse);
  //   })();
  // }, []);

  return (
    <div className="figure-container">
      <Figure />
      {/* {responseData.map((response: any, index: number) => { */}
      {/* })} */}
    </div>
  );
}

export default FigureContainer;
