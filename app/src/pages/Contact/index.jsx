import './style.css';
import BeanNavbar from '../../components/BeanNavbar';
import bean_clear from '../../assets/bean/bean_clear.svg'


function ContactPage() {
  return (
    <div className="App">
    <BeanNavbar />
      <header className="App-header">
        <img src={bean_clear} className='contact-page-bean'></img>
        Contact Page        
      </header>
    </div>
  );
}

export default ContactPage;
