import bean_with_text from './bean_with_text.svg';
import bean_clear from './bean_clear.svg'
import './App.css';
import BeanNavbar from './components/BeanNavbar';
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
