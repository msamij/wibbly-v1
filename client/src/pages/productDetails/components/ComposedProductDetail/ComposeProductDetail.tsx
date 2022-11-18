import React from 'react';
import Main from '@productDetailsMain/Main';
import DetailHeader from '@productsDetailsHeader/DetailHeader';
import Description from '@description/Description';
import { IProductDetail } from '../App';

interface IComposeProductDetailProps {
  product: IProductDetail;
  productType: 'hotels' | 'activities' | 'tours';
}

interface IDetailHeaderArgs {
  name: string;
  price: number;
  title1?: string;
  title2?: string;
  hotelType?: 'hotel';
}
interface IMainArgs {
  images: string[];
  description: string;
  instructorName?: string;
  instructorImage?: string;
  instructorExists: boolean;
}
interface IDescriptionArgs {
  description: string;
  descriptionType: 'hotel' | 'tour' | 'activity';
}
interface IComposedComponentArgs extends IDetailHeaderArgs, IMainArgs, IDescriptionArgs {}

class ComposeProductDetail extends React.Component<IComposeProductDetailProps> {
  buildAndReturnComposedComponent() {
    if (this.props.productType === 'hotels') {
      const hotel = { ...this.props.product.hotel[0] };
      const hotelAddress = { ...this.props.product.hotel_address[0] };

      return this.returnComposedComponent({
        name: hotel.name,
        hotelType: 'hotel',
        instructorExists: false,
        descriptionType: 'hotel',
        images: hotel.hotel_images,
        price: hotel.price_per_night,
        description: hotel.description,
        title1: hotelAddress.street_name,
        title2: `${hotelAddress.country_name} ${hotelAddress.city_name}`,
      });
    }
    //
    else if (this.props.productType === 'tours') {
      const tour = { ...this.props.product.tour[0] };
      const tourInstructor = { ...this.props.product.tour_instructor[0].instructor };

      return this.returnComposedComponent({
        name: tour.name,
        price: tour.price,
        descriptionType: 'tour',
        instructorExists: true,
        images: tour.tour_images,
        description: tour.description,
        title1: `${tour.duration} days tour`,
        instructorImage: tourInstructor.instructor_image,
        title2: `${tour.max_participants} max participants`,
        instructorName: `${tourInstructor.first_name} ${tourInstructor.last_name}`,
      });
    }
    //
    else if (this.props.productType === 'activities') {
      const activity = { ...this.props.product.activity[0] };
      const activityInstructor = { ...this.props.product.activity_instructor[0].instructor };

      return this.returnComposedComponent({
        name: activity.name,
        price: activity.price,
        instructorExists: true,
        descriptionType: 'activity',
        images: activity.activity_images,
        description: activity.description,
        instructorImage: activityInstructor.instructor_image,
        instructorName: `${activityInstructor.first_name} ${activityInstructor.last_name}`,
      });
    }
  }

  returnComposedComponent(args: IComposedComponentArgs) {
    return (
      <React.Fragment>
        {this.returnDetailHeader(args)}
        {this.returnMain(args)}
        {this.returnDescription(args)}
      </React.Fragment>
    );
  }

  returnDetailHeader(args: IDetailHeaderArgs) {
    return (
      <DetailHeader
        name={args.name}
        price={args.price}
        hotel={args.hotelType}
        title1={args.title1}
        title2={args.title2}
      />
    );
  }

  returnMain(args: IMainArgs) {
    return (
      <Main
        productImages={args.images}
        instructorExists={args.instructorExists}
        instructorName={args.instructorName}
        instructorImage={args.instructorImage}
      />
    );
  }

  returnDescription(args: IDescriptionArgs) {
    return <Description productType={args.descriptionType} description={args.description} />;
  }

  render(): React.ReactNode {
    return this.buildAndReturnComposedComponent();
  }
}

export default ComposeProductDetail;
