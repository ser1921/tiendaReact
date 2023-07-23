import { useState } from 'react';
import { NavBar } from './components/NavBar';
import { ItemListContainer } from './components/ItemListContainer';


function App() {
  return (
      <div>
        
          <NavBar />
          
          <ItemListContainer greetings="1921 Sports" />
      </div>
  );
}


export default App
