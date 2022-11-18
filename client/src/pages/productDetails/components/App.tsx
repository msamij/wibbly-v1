import React, { useEffect } from 'react';
import { fetchProductDetails } from '@actions/fetch';
import BookingDatePopup from '@bookingDatePopup/BookingDatePopup';
import { IActivityDetailResponse } from '@models/Activity';
import { IHotelDetailResponse } from '@models/Hotel';
import { ITourDetailResponse } from '@models/Tour';
import { connect } from 'react-redux';
import { useLocation } from 'react-router-dom';
import ComposeProductDetail from './ComposedProductDetail/ComposeProductDetail';

interface IProductDetailProps {
  state: IProductDetailMapState;
  fetchProductDetails: (pathName: string) => void;
}
export interface IProductDetail extends ITourDetailResponse, IHotelDetailResponse, IActivityDetailResponse {}

interface IUrlMapping {
  hotels: 'hotel';
  tours: 'tour';
  activities: 'activity';
}
const urlMapping: IUrlMapping = {
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

  return (
    <React.Fragment>
      {props.state.uiChange.toggleBookingDatesPopup && <BookingDatePopup pathName={url} />}
      {props.state.fetchedData.productDetail[urlMapping[pathName]] && (
        <ComposeProductDetail product={props.state.fetchedData.productDetail} productType={pathName} />
      )}
    </React.Fragment>
  );
}

interface IProductDetailMapState {
  fetchedData: {
    productDetail: IProductDetail;
  };
  uiChange: {
    toggleBookingDatesPopup: boolean;
  };
}
const mapStateToProps = (state: IProductDetailMapState) => {
  return { state: state };
};

export default connect(mapStateToProps, { fetchProductDetails })(ProductDetails);
