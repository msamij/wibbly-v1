export interface IBookingDates {
  bookingDates: [string];
}

interface IUserTourBooking {
  tourBookings: {
    tourName: string;
    bookingDate: string;
  };
}
interface IUserHotelBooking {
  hotelBookings: {
    hotelName: string;
    checkInDate: string;
    checkOutDate: string;
  };
}
interface IUserActivityBooking {
  activityBookings: {
    activityName: string;
    bookingDay: string;
  };
}

export interface IUserBookingsList {
  tourBookings: [IUserTourBooking];
  hotelBookings: [IUserHotelBooking];
  activityBookings: [IUserActivityBooking];
}
