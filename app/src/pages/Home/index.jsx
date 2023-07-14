import './style.css';
import BeanNavbar from '../../components/BeanNavbar';
import { Typography } from '@mui/material';
import bean_clear from '../../assets/bean/bean_clear.svg'

function HomePage() {
  return (
    <div className="App">
      <BeanNavbar />
      <div className="front-page">
        <div className="front-page-container">
          <div className="front-page-section">
            <h1 className="front-page-header">Full coverage. Guaranteed.</h1>
            <img src={process.env.PUBLIC_URL + '/photos/purple_rim1.jpeg'} className='front-page-image'></img>
            <p1 className="front-page-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris posuere leo eu volutpat ultricies. Quisque pharetra magna eget ex posuere rutrum.</p1>
          </div>
          <div className="front-page-section">
            <h1 className="front-page-header">Custom Coatings for Every Project</h1>
            <img src={process.env.PUBLIC_URL + '/photos/black_rim1.jpeg'} className='front-page-image'></img>
            <p1 className="front-page-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris posuere leo eu volutpat ultricies. Quisque pharetra magna eget ex posuere rutrum.</p1>
          </div>
          <div className="front-page-section">
            <h1 className="front-page-header">Enhance, Protect, and Beautify</h1>
            <img src={process.env.PUBLIC_URL + '/photos/grey_rim1.jpeg'} className='front-page-image'></img>
            <p1 className="front-page-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris posuere leo eu volutpat ultricies. Quisque pharetra magna eget ex posuere rutrum.</p1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
