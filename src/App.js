import React, {Component, Fragment} from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';

class App extends Component{

  foo = () => 'Barz';

  render(){
   
    return (
      <Fragment>
        <Navbar />
      </Fragment>
    );
}  
}

export default App;