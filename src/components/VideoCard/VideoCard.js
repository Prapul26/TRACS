import React from 'react';
import './VideoCard.css';
import { Link } from 'react-router-dom';

const VideoCard = ({id, title, subtitle, description, date, imageUrl }) => {
  return (
    <div className='video-card'>
     <Link to={`/video/${id}`}><div className='video-thumbnail'>
        <img src={imageUrl} alt={title} />
      </div></Link>
      <div className='video-info'>
        <div className='video-title'>{title}</div>
        <div className='video-subtitle'>{subtitle}</div>
        <div className='video-description'>{description}</div>
      </div>
      <div className='video-date'>{date}</div>
    </div>
  );
};

export default VideoCard;
