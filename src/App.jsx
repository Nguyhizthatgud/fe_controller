import React from 'react';
import Bar from './components/Bar'
import Information from './components/Information'
import Headbar from './components/Headbar'
import Controler from './components/Controler';
function App() {
  return (
    <div className='App container-fluid overflow-hidden'>
      <div className="row gy-auto">
        <Bar />
        <Information />
        <Headbar />
        {/* <Controler /> */}
      </div>



    </div >



  );
}

export default App;
