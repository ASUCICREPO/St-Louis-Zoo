import React, { useState } from 'react';
import ToggleButton from '../Buttons/ToggleButton';
import Popover from './Popover';

const VideoCard = ({ video, index, title, duration, date, videoUrl, thumbnailUrl }) => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  // Function to handle opening the popover
  const handleThumbnailClick = () => {
    setIsPopoverOpen(true);
  };

  // Function to handle closing the popover
  const handlePopoverClose = () => {
    setIsPopoverOpen(false);
  };

  const formatDuration = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    return `${hours > 0 ? `${hours}h ` : ''}${minutes}m`;
  };

  const videoContainerStyle = {
    height: '225px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '270px',
    padding: '10px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    background: '#EEECE5',
    margin: '2px',
  };

  const thumbnailStyle = {
    width: '100%',
    height: '125px',
    borderRadius: '10px',
    objectFit: 'cover',
    cursor: 'pointer',
  };

  const videoInfoContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '100%',
    marginTop: '20px',
  };

  const titleStyle = {
    fontSize: '15px',
    fontWeight: 'bold',
  };

  const metaDataContainerStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  };

  const metaDataStyle = {
    fontSize: '10px',
    color: '#666',
    marginRight: '20px',
  };

  return (
    <div style={videoContainerStyle}>
      {/* Thumbnail with click handler */}
      <div style={{ width: '100%' }} onClick={handleThumbnailClick}>
        <img src={thumbnailUrl} alt={title} style={thumbnailStyle} />
      </div>

      {/* Video Information */}
      <div style={videoInfoContainerStyle}>
        <div style={titleStyle}>{title}</div>

        {/* Metadata and Button */}
        <div style={metaDataContainerStyle}>
          <div>
            <div style={metaDataStyle}>{formatDuration(duration)}</div>
            <div style={metaDataStyle}>{date}</div>
          </div>

          {/* ToggleButton */}
          <div>
            <ToggleButton video={video}/>
          </div>
        </div>
      </div>

      {/* Popover component for video preview */}
      <Popover
        isOpen={isPopoverOpen}
        onClose={handlePopoverClose}
        videoData={{ title, duration, date, videoUrl }}
      />
    </div>
  );
};

export default VideoCard;
