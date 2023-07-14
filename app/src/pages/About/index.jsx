import './style.css';
import BeanNavbar from '../../components/BeanNavbar';
import bean_clear from '../../assets/bean/bean_clear.svg'



function AboutPage() {
  return (
    <div className="App">
    <BeanNavbar />
      <div className="about-section">
        <img src={bean_clear} className='about-page-bean'></img>
        <h1 className="about-blurb-header">Our Story</h1>
        <p1 className="about-blurb-text">Welcome to Bean Coated, the quirkiest powercoating business in town, run by life-sized coffee beans! We accidentally fell into a vat of magical coating mixture, and voila, we became caffeine-fueled entrepreneurs with a passion for making metals fabulous. <br/><br/>
          At Bean Coated, we infuse our expertise, attention to detail, and a shot of joy into every project. Whether you're craving a vibrant red that'll make stop signs jealous or a classy black that Batman would envy, we've got you covered. Our friendly staff is ready to brew up the perfect coating, working closely with you to ensure your project shines brighter than a supernova.<br/><br/>
          So join us on this delightful journey at Bean Coated, where the beans have come alive and your powercoating dreams get a jolt! Let us transform your world, one powdery coat at a time. Get ready to experience the magic as we turn ordinary metals into extraordinary works of art. Welcome to Bean Coated, where we blend creativity and caffeine to make your surfaces truly bean-tastic!</p1>
      </div>
    </div>
  );
}

export default AboutPage;
