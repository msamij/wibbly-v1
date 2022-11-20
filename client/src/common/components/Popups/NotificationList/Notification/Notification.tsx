import React from 'react';
import './Notification.css';

function Notification(props: { NotificationText: string }) {
  return (
    <p className="notification">
      {props.NotificationText}
      <a href="#" className="btn-rating">
        Rate Now
      </a>
    </p>
  );
}

export default Notification;
