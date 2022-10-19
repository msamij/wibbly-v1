import React from 'react';
import './Figure.css';

function Figure() {
  return (
    <figure className="figure">
      <a href="#" className="figure__link">
        <img
          src="https://images.unsplash.com/photo-1509558567730-6c838437b06b?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1170&amp;q=80"
          alt="Hotel Image"
          className="figure__image"
        />
        <h2 className="heading-default figure__title">
          Transalvania, <span className="figure__rooms">100 rooms</span>
        </h2>
        <h2 className="heading-default figure__price">400$ night</h2>
      </a>
    </figure>
  );
}

export default Figure;
