import React from 'react';
import Footer from '@footer/Footer';
import Header from '@header/Header';
import Main from '@main/Main';
import Message from '@message/Message';
import Overlay from '@overlay/Overlay';
import './App.css';

function App() {
  return (
    <div className="container">
      <Overlay />
      <Message />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
