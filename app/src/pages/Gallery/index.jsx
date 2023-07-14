import './style.css';
import BeanNavbar from '../../components/BeanNavbar';
import bean_clear from '../../assets/bean/bean_clear.svg';
import { useState } from 'react';
import ImageGallery from '../../components/ImageGallery';

function GalleryPage() {
  const images = [`${process.env.PUBLIC_URL}/photos/grey_rim1.jpeg`,
   `${process.env.PUBLIC_URL}/photos/grey_rim2.jpeg`, 
  `${process.env.PUBLIC_URL}/photos/purple_rim1.jpeg`,
  `${process.env.PUBLIC_URL}/photos/purple_rim2.jpeg`,
  `${process.env.PUBLIC_URL}/photos/black_rim1.jpeg`,
  `${process.env.PUBLIC_URL}/photos/black_rim2.jpeg`];

  
  return (
    <div className="App">
      <BeanNavbar />
      <div className="gallery-page-container">
        <div className="gallery-page-section">
            <h1 className="gallery-page-header">Past works</h1>
        </div>
        <div className="image-gallery-wrapper">
            <ImageGallery images={images} />
        </div>
        {/* <div className="gallery-page-section">
          <img src={process.env.PUBLIC_URL + '/photos/grey_rim1.jpeg'} className='gallery-page-image'></img>
          <img src={process.env.PUBLIC_URL + '/photos/grey_rim2.jpeg'} className='gallery-page-image'></img>
        </div>
        <div className="gallery-page-section">
          <img src={process.env.PUBLIC_URL + '/photos/black_rim1.jpeg'} className='gallery-page-image'></img>
          <img src={process.env.PUBLIC_URL + '/photos/black_rim2.jpeg'} className='gallery-page-image'></img>
        </div>
        <div className="gallery-page-section">
          <img src={process.env.PUBLIC_URL + '/photos/purple_rim1.jpeg'} className='gallery-page-image'></img>
          <img src={process.env.PUBLIC_URL + '/photos/purple_rim2.jpeg'} className='gallery-page-image'></img>
        </div> */}
      </div>
    </div>
  );
}

export default GalleryPage;
