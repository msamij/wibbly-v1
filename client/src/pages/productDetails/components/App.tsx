import React, { useEffect, useState } from 'react';
import { fetchProductDetails } from '@actions/fetch';
import BookingDatePopup from '@bookingDatePopup/BookingDatePopup';
import { IActivityDetailResponse } from '@models/Activity';
import { IHotelDetailResponse } from '@models/Hotel';
import { ITourDetailResponse } from '@models/Tour';
import { connect } from 'react-redux';
import { useLocation } from 'react-router-dom';
import ComposeProductDetail from './ComposeProductDetail';

interface IProductDetailProps {
  state: IProductDetail;
  fetchProductDetails: (pathName: string) => void;
}
interface IProductDetailMapState {
  products: {
    productDetail: IProductDetail;
  };
}
export interface IProductDetail extends ITourDetailResponse, IHotelDetailResponse, IActivityDetailResponse {}

interface UrlMapping {
  hotels: 'hotel';
  tours: 'tour';
  activities: 'activity';
}
const urlMapping: UrlMapping = {
  hotels: 'hotel',
  tours: 'tour',
  activities: 'activity',
};
type pathName = 'hotels' | 'activities' | 'tours';

function ProductDetails(props: IProductDetailProps) {
  let url = useLocation().pathname.replace('/', '') as pathName;
  let pathName = url.split('/')[0] as pathName;

  useEffect(() => {
    props.fetchProductDetails(url);
  }, []);

  const returnComposedComponent = () => {
    return <ComposeProductDetail product={props.state} productType={pathName} />;
  };

  return (
    <React.Fragment>
      {/* <BookingDatePopup /> */}
      {props.state[urlMapping[pathName]] && returnComposedComponent()}
    </React.Fragment>
  );
}

const mapStateToProps = (state: IProductDetailMapState) => {
  return {
    state: state.products.productDetail,
  };
};

export default connect(mapStateToProps, { fetchProductDetails })(ProductDetails);
