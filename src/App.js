import { BrowserRouter, Routes, Route , Link} from 'react-router-dom';
import './App.css';
import Create from './components/Create';
import Read from './components/Read';
import Update from './components/Update';

function App() {
  return (
    <div className="App">
      <h1>Sudheer's Team</h1>
      <h2>Abhay,Ranjan,Nitya</h2>
      <BrowserRouter>
      <Link to="/">Home</Link>
        <Routes>
          <Route  path="/" element={<Create/>}/>
          <Route  path="/read" element={<Read/>}/>
          <Route  path="/update" element={<Update/>}/>
        </Routes>
      </BrowserRouter>
   
    </div>
  );
}

export default App;
