import { useState } from 'react';
import { NavBar } from './components/NavBar';
import { ItemListContainer } from './components/ItemListContainer';

import Productos from './routes/Productos';


function App() {
  

  
  return (
      <div>
        
          <NavBar />
          
          <ItemListContainer>
            <Productos></Productos>
          </ItemListContainer>
      </div>
  );
}


export default App
