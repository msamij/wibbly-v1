import React, { useEffect } from 'react';
import { fetchProductDetails } from '@actions/httpGet';
import { updateSelectedProduct } from '@actions/uiChange';
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

    // This is so that when user tries to do a booking we can then check if they already had a booking.
    // By doing this redux would know what product is currently being viewed that user is trying to book.
    props.updateSelectedProduct(pathName);
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

export default connect(mapStateToProps, { fetchProductDetails, updateSelectedProduct })(ProductDetails);
