import React from 'react';
import { fetchBookingDates } from '@actions/fetch';
import ButtonSecondary from '@button/ButtonSecondary/ButtonSecondary';
import { connect } from 'react-redux';
import './Description.css';
import { BookingDates } from '@models/BookingDates';
import { Dispatch } from 'redux';
import { renderOverlay } from '@actions/render';

interface IBookingDatePopupProps {
  products: {
    bookingDates: BookingDates;
  };
}
interface IDescriptionProps {
  description: string;
  productType: 'hotel' | 'tour' | 'activity';
  // onButtonClick: () => {
  //   type: string;
  //   payload: boolean;
  // };
  fetchBookingDates: (pathName: string, month: string, year: string) => void;
}

function Description(props: IDescriptionProps) {
  console.log(props);

  return (
    <section className="description">
      <h2 className="heading-default description__heading">About this {props.productType}</h2>
      <h2 className="heading-default description__text">{props.description}</h2>
      <ButtonSecondary
        onButtonClick={() => props.fetchBookingDates('tours/Cozy Camping', '11', '2022')}
        buttonText="Reserve Booking"
      />
    </section>
  );
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onButtonClick: () => dispatch(renderOverlay(true)),
});

const mapStateToProps = (state: any) => {
  return {
    state,
  };
};

export default connect(mapStateToProps, { fetchBookingDates })(Description);
