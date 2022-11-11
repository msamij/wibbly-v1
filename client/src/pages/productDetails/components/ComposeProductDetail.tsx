import React from 'react';
import Main from '@productDetailsMain/Main';
import DetailHeader from '@productsDetailsHeader/DetailHeader';
import Description from '@description/Description';
import { IProductDetail } from './App';

interface IComposeProductDetailProps {
  productType: string;
  product: IProductDetail;
}

function ComposeProductDetail(props: IComposeProductDetailProps) {
  interface IComposedComponentArgs {
    name: string;
    price: number;
    title1?: string;
    title2?: string;
    images: string[];
    description: string;
    instructorName?: string;
    instructorImageUrl?: string;
    instructor: boolean;
    headerProductType?: 'hotel';
    descriptionType: 'hotel' | 'tour' | 'activity';
  }

  const returnComposedComponent = (args: IComposedComponentArgs) => {
    return (
      <React.Fragment>
        <DetailHeader
          name={args.name}
          price={args.price}
          type={args.headerProductType}
          title1={args.title1 && args.title1}
          title2={args.title2 && args.title2}
        />
        <Main
          images={args.images}
          instructor={args.instructor}
          instructorName={args.instructorName && args.instructorName}
          imageUrl={args.instructorImageUrl && args.instructorImageUrl}
        />
        <Description productType={args.descriptionType} description={args.description} />
      </React.Fragment>
    );
  };

  const buildAndReturnComponentBasedOnProductType = () => {
    switch (props.productType) {
      case 'hotels':
        const {
          name: hotelName,
          price_per_night,
          description: hotelDescription,
          hotel_images,
        } = props.product.hotel[0];
        const { country_name, city_name, street_name } = props.product.hotel_address[0];

        return returnComposedComponent({
          name: hotelName,
          price: price_per_night,
          title1: street_name,
          instructor: false,
          title2: `${country_name} ${city_name}`,
          images: hotel_images,
          description: hotelDescription,
          headerProductType: 'hotel',
          descriptionType: 'hotel',
        });

      case 'tours':
        const {
          name: tourName,
          price: tourPrice,
          description: tourDescription,
          max_participants,
          duration,
          tour_images,
        } = props.product.tour[0];
        const { first_name, last_name, instructor_image } = props.product.tour_instructor[0].instructor;

        return returnComposedComponent({
          name: tourName,
          price: tourPrice,
          instructor: true,
          description: tourDescription,
          images: tour_images,
          title1: `${duration} days tour`,
          title2: `${max_participants} max participants`,
          descriptionType: 'tour',
          instructorName: `${first_name} ${last_name}`,
          instructorImageUrl: instructor_image,
        });
      case 'activities':
        const {} = props;

        return <div></div>;

      default:
        return <div></div>;
    }
  };

  return buildAndReturnComponentBasedOnProductType();
}

export default ComposeProductDetail;
