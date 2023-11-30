import React, { useEffect, useState } from 'react';
import './index.css'
import Index from './Pages/Index';
import Footer from './Components/Footer';
import { Landing } from './Pages/Landing';





const App = () => {

  return (
    <div>
      <Landing/>
      {/* <Index/> */}
      <Footer/>
    </div>
  );
};

export default App;
