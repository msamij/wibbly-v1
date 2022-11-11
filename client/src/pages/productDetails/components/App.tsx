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

function ProductDetails(props: IProductDetailProps) {
  let pathname = useLocation().pathname.replace('/', '');
  const [productType, setProductType] = useState('');

  useEffect(() => {
    setProductType(pathname.split('/')[0]);
    props.fetchProductDetails(pathname);
  }, []);

  const returnComposedComponent = () => {
    return <ComposeProductDetail product={props.state} productType={productType} />;
  };

  console.log(props.state);

  return (
    <React.Fragment>
      {/* <BookingDatePopup /> */}
      {Object.keys(props.state).length > 0 && returnComposedComponent()}
    </React.Fragment>
  );
}

const mapStateToProps = (state: IProductDetailMapState) => {
  return {
    state: state.products.productDetail,
  };
};

export default connect(mapStateToProps, { fetchProductDetails })(ProductDetails);
