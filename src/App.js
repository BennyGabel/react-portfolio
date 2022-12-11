import logo from './logo.svg';
import './App.css';
import Navbar    from './components/navbar'
import Footer    from './components/footer'
import About     from './pages/about'
import Contact   from './pages/contact'
import Portfolio from './pages/portfolio'

import { useState } from 'react';


function App() {
  const {portfolio, setPortfolio} = useState('about')      // ES6
  const Render = () => {      
    console.log(portfolio)                             // ES6
    switch (portfolio) {
      case 'about':
        console.log('About')
        return <About/>
      case 'contact':
        return <Contact/>
      case 'portfolio':
        return <Portfolio/>
      default:
        return null
      }

  }

  return (
    <div className="App">
       {/* <   />                     /> self closing */}
       <Navbar/>    
       <Render/>
       <Footer/>



    </div>
  );
}

export default App;
