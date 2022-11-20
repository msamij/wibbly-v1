import React from 'react';
import Notification from '@notificationList/Notification/Notification';
import PopupMessage from '@popupMessage/PopupMessage';
import '../App.css';

function NotificationList() {
  return (
    <div className="popup notification-popup">
      <PopupMessage messageText="✨ Notifications ✨" />
      <Notification NotificationText="✨ Your booking for hotel transalvania for 20, dec 2022 is now finished." />
    </div>
  );
}

export default NotificationList;
