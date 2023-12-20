import './App.css';
import Create from './components/Create';
import Edit from './components/Edit';
import Single from './components/single'
import Read from './components/Read';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="container">
      <Routes>
        <Route exact path='/' element={<Read />}></Route>
        <Route exact path='/home' element={<Home />}></Route>
        <Route exact path='/create' element={<Create />}></Route>
        <Route exact path='/edit' element={<Edit />}></Route>
        <Route exact path='/single' element={<Single />}></Route>
      </Routes>
    </div>
  );
}

export default App;
