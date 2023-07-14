import { IconButton, Typography, Button, Icon, Card } from '@mui/material';
import { NavLink } from 'react-router-dom';
import './style.css';
import { useState } from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

function ImageGallery(props) {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [currentPhoto, setCurrentPhoto] = useState(props.images[currentPhotoIndex]);



  const handleRightOnClick = () => {
    if (currentPhotoIndex < props.images.length-1) {
        var newPhotoIndex = currentPhotoIndex+1;
        setCurrentPhoto(props.images[newPhotoIndex]);
        setCurrentPhotoIndex(newPhotoIndex);
        console.log(newPhotoIndex);
    }
  }

  const handleLeftOnClick = () => {
    if (currentPhotoIndex-1 >= 0) {
        var newPhotoIndex = currentPhotoIndex-1;
        setCurrentPhoto(props.images[newPhotoIndex]);
        setCurrentPhotoIndex(newPhotoIndex);
        console.log(newPhotoIndex);
    }
  }

  return (
    <div className="image-gallery-container">
            <Card className="card-wrapper">
                <div className="image-gallery">
                    <div className="item-row-wrapper">
                            <IconButton onClick={handleLeftOnClick} >
                                <ArrowBackIosIcon style={{fontSize: "60px", color: "black"}}/>
                            </IconButton>
                            <img src={currentPhoto} className="image-gallery-photo"></img>
                            <IconButton onClick={handleRightOnClick}>
                                <ArrowForwardIosIcon style={{fontSize: "60px", color: "black"}}/>
                            </IconButton>
                    </div>
                </div>
            </Card>
    </div>
  );
}

export default ImageGallery;
