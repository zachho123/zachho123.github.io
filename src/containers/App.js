import React from 'react';
// Components
import Header from './Header';
import Sidebar from './Sidebar';
import Content from './Content';
import Footer from './Footer';
// Assets
import './App.css';

function App() {
  return (
    <div className="app">
      <Header className="flex-section header" />
      <Sidebar className="flex-section sidebar" />
      <Content className="flex-section content" />
      <Footer className="flex-section footer" />
    </div>
  );
}

export default App;
