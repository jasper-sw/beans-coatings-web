import './style.css';
import BeanNavbar from '../../components/BeanNavbar';
import bean_clear from '../../assets/bean/bean_clear.svg'

function GalleryPage() {
  return (
    <div className="App">
    <BeanNavbar />
      <header className="App-header">
        <img src={bean_clear} className='gallery-page-bean'></img>
        Gallery Page        
      </header>
    </div>
  );
}

export default GalleryPage;
