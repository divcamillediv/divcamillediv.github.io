import './App.css'
import {BrowserRouter, Route,Routes} from 'react-router-dom';
import Index from './pages/Index';
import Layout from './Layout';
import CouronneeDetoiles from './chants/CouronneeDetoiles';

function App(){ 
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Index/>} />
          <Route path='/couronnee-d-etoiles' element={<CouronneeDetoiles/>} />
        </Route> 
      </Routes>
    </BrowserRouter>
    {/*
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Index/>} />
          
        </Route> 
      </Routes>
  */}
  </>
  )
}

export default App