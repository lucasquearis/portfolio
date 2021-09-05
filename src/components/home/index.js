import React from 'react';
import Body from '../Body/index';
import Footer from '../Footer/index';
import Header from '../Header/index';
import './Home.css';

const Home = () => (
  <div className="home">
    <div>
      <Header />
    </div>
    <div>
      <Body />
    </div>
    <div>
      <Footer />
    </div>
  </div>
);

export default Home;
