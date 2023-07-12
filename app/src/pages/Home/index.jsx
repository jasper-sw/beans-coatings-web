import './style.css';
import BeanNavbar from '../../components/BeanNavbar';
import { Typography } from '@mui/material';

function HomePage() {
  return (
    <div className="App">
      <BeanNavbar />
      <div className="front-page">
        <div class="front-page-container">
          <h1 className="front-page-header">Full coverage. Guaranteed.</h1>
          <img src={process.env.PUBLIC_URL + '/photos/rim2.jpeg'} className='front-page-image'></img>
          <p1 className="front-page-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris posuere leo eu volutpat ultricies. Quisque pharetra magna eget ex posuere rutrum. Proin dapibus, lacus quis suscipit commodo, felis augue efficitur sapien, quis sagittis lectus risus ut neque. Pellentesque quis leo imperdiet purus commodo pretium sed ut risus. Sed blandit enim eu tellus mattis efficitur.</p1>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
