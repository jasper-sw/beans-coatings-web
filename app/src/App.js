import './App.css';
import AboutPage from './pages/About';
import HomePage from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ContactPage from './pages/Contact';
import GalleryPage from './pages/Gallery';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
        <Route path='/gallery' element={<GalleryPage/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
