import React from 'react';
import Gallery from '@gallery/Gallery';
import Instructor from '@productDetailsMain/Instructor/Instructor';
import './Main.css';

interface IMainProps {
  productImages: string[];
  instructorName?: string;
  instructorImage?: string;
  instructorExists: boolean;
}

function Main(props: IMainProps) {
  return (
    <main className="product-detail-main">
      <Gallery images={props.productImages} />
      {props.instructorExists && (
        <Instructor imageUrl={props.instructorImage as string} instructorName={props.instructorName as string} />
      )}
    </main>
  );
}

export default Main;
