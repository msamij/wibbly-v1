import React, { useEffect } from 'react';
import { fetchProductDetails } from '@actions/httpGet';
import BookingDatePopup from '@bookingDatePopup/BookingDatePopup';
import { connect } from 'react-redux';
import { useLocation } from 'react-router-dom';
import ComposeProductDetail from './ComposedProductDetail/ComposeProductDetail';
import { IProductDetailMapState, IProductDetailProps, pathName, urlMapping } from './types';

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

const mapStateToProps = (state: IProductDetailMapState) => ({
  state,
});

export default connect(mapStateToProps, { fetchProductDetails })(ProductDetails);
