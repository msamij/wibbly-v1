export enum BaseUrls {
  localHost = 'http://127.0.0.1:8000/',
  baseApi = 'api/v1/',
}
export enum Resources {
  users = 'users/',
  tours = 'tours/',
  hotels = 'hotels/',
  tourBookings = 'tour-bookings/',
  hotelBookings = 'hotel-bookings/',
  activityBookings = 'activity-bookings/',
}
export enum ResourceEndPoints {
  exists = 'exists',
  signin = 'signin',
  bookings = 'bookings',
  bookingDates = 'booking-dates',
  reserveBooking = 'reserve-booking',
}

export enum GoogleAuthConfig {
  scope = 'email',
  plugin_name = 'wibbly-v1',
  clientId = '960507316821-h8tc4fapcfacfhd6tlikjpb88aodv9so.apps.googleusercontent.com',
}
