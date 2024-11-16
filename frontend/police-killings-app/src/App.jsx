import React from 'react';
import './App.css';
import Header from './components/Header';
import Article from './components/Article';
import Chart from './components/Chart';
import Chart2 from './components/Chart2';


// import Header from './components/Header';
// import MainContent from './components/MainContent';
// import Footer from './components/Footer';
// import Cited from './components/Cited';

function App() {
    return (
    <div className="App">
      < Header />
      < Article />        
      < Chart />
      {/* < Chart2 /> */}
    </div>
  );
}

export default App;