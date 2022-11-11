import React from 'react';
import './Gallery.css';

function Gallery(props: { images: string[] }) {
  return (
    <React.Fragment>
      <div style={{ width: 'fit-content' }}>
        {props.images.map((imageUrl: string, index: number) => (
          <img key={index} className="gallery-image" src={imageUrl} alt="Image" />
        ))}
      </div>
    </React.Fragment>
  );
}

export default Gallery;
