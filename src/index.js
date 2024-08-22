import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Header, Nav, Articles, Footer} from "./components/index"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Header/>
      <Nav/>
      <Articles/>
      <Footer/>
  </React.StrictMode>
);
