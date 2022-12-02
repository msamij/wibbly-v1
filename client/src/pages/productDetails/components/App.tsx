import { fetchProductDetails } from '@actions/httpGet';
import { updateSelectedProduct } from '@actions/uiChange';
import BookingDatePopup from '@bookingDatePopup/BookingDatePopup';
import { productTypePlural } from '@globalTypes/types';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useLocation } from 'react-router-dom';
import ComposeProductDetail from './ComposedProductDetail/ComposeProductDetail';
import { IProductDetailMapState, IProductDetailProps, urlMapping } from './types';

function ProductDetails(props: IProductDetailProps) {
  let url = useLocation().pathname.replace('/', '');
  let pathName = url.split('/')[0] as productTypePlural;

  useEffect(() => {
    props.fetchProductDetails(url);
    // By doing this redux would know what product is currently being viewed that user is trying to book.
    // So we can fetch selected product bookings of a user, And if they had any booking in progress then we don't let them do another.
    props.updateSelectedProduct(pathName);
  }, []);

  return (
    <React.Fragment>
      {props.state.uiChange.toggleBookingDatesPopup && <BookingDatePopup pathName={url} productType={pathName} />}
      {props.state.fetchedData.productDetail[urlMapping[pathName]] && (
        <ComposeProductDetail product={props.state.fetchedData.productDetail} productType={pathName} />
      )}
    </React.Fragment>
  );
}

const mapStateToProps = (state: IProductDetailMapState) => ({
  state,
});

export default connect(mapStateToProps, { fetchProductDetails, updateSelectedProduct })(ProductDetails);
