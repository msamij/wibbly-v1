import React from 'react';
import ButtonSecondary from '@button/ButtonSecondary/ButtonSecondary';
import '../App.css';
import './ReviewMenu.css';

function ReviewMenu() {
  return (
    <div className="popup review-menu" style={{ maxHeight: '25rem' }}>
      <div>
        <select className="rating-menu">
          <option value="0">Select rating</option>
          <option value="1">5</option>
          <option value="2">4</option>
          <option value="3">3</option>
          <option value="4">2</option>
          <option value="5">1</option>
        </select>
      </div>
      <textarea className="review-menu__description" cols={35} rows={3} placeholder="Description (Optional)"></textarea>
      {/* <ButtonSecondary buttonText="Save" /> */}
    </div>
  );
}

export default ReviewMenu;
