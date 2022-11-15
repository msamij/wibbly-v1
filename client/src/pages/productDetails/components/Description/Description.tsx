import React from 'react';
import { fetchBookingDates } from '@actions/fetch';
import ButtonSecondary from '@button/ButtonSecondary/ButtonSecondary';
import { connect } from 'react-redux';
import './Description.css';
import { BookingDates } from '@models/BookingDates';

interface IBookingDatePopupProps {
  products: {
    bookingDates: BookingDates;
  };
}
interface IDescriptionProps {
  description: string;
  productType: 'hotel' | 'tour' | 'activity';
  state: any;
  fetchBookingDates: (pathName: string, month: string, year: string) => void;
}

function Description(props: IDescriptionProps) {
  const onClick = () => {
    props.fetchBookingDates('tours/Snowy Mountains', '12', '2022');
  };

  console.log(props.state);

  return (
    <section className="description">
      <h2 className="heading-default description__heading">About this {props.productType}</h2>
      <h2 className="heading-default description__text">{props.description}</h2>
      <ButtonSecondary onButtonClick={() => onClick()} buttonText="Reserve Booking" />
    </section>
  );
}

const mapStateToProps = (state: IBookingDatePopupProps) => {
  return {
    state: state.products,
  };
};
export default connect(mapStateToProps, { fetchBookingDates })(Description);
