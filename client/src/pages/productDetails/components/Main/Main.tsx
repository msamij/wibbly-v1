import React from 'react';
import Gallery from '@gallery/Gallery';
import Instructor from '@productDetailsMain/Instructor/Instructor';
import './Main.css';

interface IMainProps {
  instructor: boolean;
  images: string[];
  instructorName?: string;
  imageUrl?: string;
}

function Main(props: IMainProps) {
  return (
    <main className="product-detail-main">
      <Gallery images={props.images} />
      {props.instructor && (
        <Instructor imageUrl={props.imageUrl as string} instructorName={props.instructorName as string} />
      )}
    </main>
  );
}

export default Main;
