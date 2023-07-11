import bean_with_text from './bean_with_text.svg';
import bean_clear from './bean_clear.svg'
import './App.css';
import BeanNavbar from './components/BeanNavbar';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <BeanNavbar />
    </BrowserRouter>
    
  );
}

export default App;
