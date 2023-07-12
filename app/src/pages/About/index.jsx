import './style.css';
import BeanNavbar from '../../components/BeanNavbar';
import bean_clear from '../../assets/bean/bean_clear.svg'



function AboutPage() {
  return (
    <div className="App">
    <BeanNavbar />
      <header className="App-header">
        <img src={bean_clear} className='about-page-bean'></img>
        About Page        
      </header>
    </div>
  );
}

export default AboutPage;
