import React from 'react';
// Components
import Header from './Header';
import ContentWrapper from './ContentWrapper';
import Footer from './Footer';
// Assets
import './App.css';

function App() {
  return (
    <div className="app">
      <Header className="flex-section header" />
      <ContentWrapper className="content-wrapper"/>
      <Footer className="flex-section footer" />
    </div>
  );
}

export default App;
