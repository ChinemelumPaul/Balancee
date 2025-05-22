
import './App.css';
import BookForm from './Components/BookForm';
import Success from './Components/BookSuccess';
import Stations from './Components/StationList';

import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <main>
 
      <Routes>

        <Route path='/' element={<BookForm/>}/>
        <Route path='/Stations' element={<Stations/>} />
        <Route path='/Success' element={<Success/>}/>

      </Routes>
      
     
      
    </main>
  );
}

export default App;
