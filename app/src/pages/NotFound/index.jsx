import './style.css';
import BeanNavbar from '../../components/BeanNavbar';
import bean_clear from '../../assets/bean/bean_clear.svg'


function NotFound() {
  return (
    <div className="App">
    <BeanNavbar />
      <header className="App-header">
        <img src={bean_clear} className='not-found-page-image'></img>
        404 Not Found        
      </header>
    </div>
  );
}

export default NotFound;
