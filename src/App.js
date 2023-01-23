import React from 'react';
import Forminput from './comp/Forminput';
import List from './comp/List'
import Footer from './comp/Footer'
import { DataProvider } from './comp/DataProvider';
import './comp/styleT.css'

function App() {
  return (
    <div >
    <DataProvider>
        <div  id="divp">    
              <Forminput id=""/>
              <List/>
              <Footer/>
              
        </div>
    </DataProvider>
      
    </div>
  );
}

export default App;
