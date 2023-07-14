import './style.css';
import BeanNavbar from '../../components/BeanNavbar';
import bean_clear from '../../assets/bean/bean_clear.svg'


function ContactPage() {
  return (
    <div className="App">
    <BeanNavbar />
      <div className="contact-section">
        <img src={bean_clear} className='contact-page-bean'></img>
        <h1 className="contact-blurb-header">Need a quote? <br/> Just wanna talk?</h1>
        <p1 className="contact-blurb-text">Hit us up anytime! 
        <br/><br/>
        Phone: 000-000-0000
        <br/>
        Email: bean@bean.com
        </p1>
      </div>
    </div>
  );
}

export default ContactPage;
