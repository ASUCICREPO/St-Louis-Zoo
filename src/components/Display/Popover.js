import React from 'react';
import cancelIcon from '../../assets/icons/cancelPopup.png';
import ToggleButton from '../Buttons/ToggleButton';

const Popover = ({ isOpen, onClose, videoData }) => {
  if (!isOpen || !videoData) return null;

  const formatDuration = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    return `${hours > 0 ? `${hours}h ` : ''}${minutes}m`;
  };

  const overlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
  };

  const modalStyle = {
    width: '80vw',
    height: '70vh',
    backgroundColor: '#EEECE5',
    borderRadius: '10px',
    position: 'relative',
    padding: '20px',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    marginTop: '150px',
  };

  const closeButtonStyle = {
    position: 'absolute',
    top: '20px',
    right: '20px',
    cursor: 'pointer',
  };

  const contentStyle = {
    flex: 1,
    display: 'flex',
    justifyContent: 'space-between',
    paddingTop: '10px',
    paddingBottom: '10px',
    height: '100%',
  };

  const textContainerStyle = {
    flex: 1,
    paddingRight: '20px',
    alignSelf: 'flex-start',
  };

  const videoPreviewStyle = {
    width: '60%',
    height: '100%',
    marginTop: '30px',
    marginRight: '30px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const videoStyle = {
    maxWidth: '100%',
    height: '100%',
  };

  return (
    <div style={overlayStyle}>
      <div style={modalStyle}>
        {/* Close Icon */}
        <img
          src={cancelIcon}
          alt="Close"
          style={closeButtonStyle}
          onClick={onClose}
        />
        <div style={contentStyle}>
          {/* Video Details and Preview */}
          <div style={textContainerStyle}>
            {/* Text Details on the Left */}
            <h2 style={{ fontWeight: 'bold' }}>{videoData.title}</h2>
            <p>Duration: {formatDuration(videoData.duration)}</p>
            <p>Date: {videoData.date}</p>
          </div>

          {/* Video Preview on the Right */}
          <div style={videoPreviewStyle}>
            <video style={videoStyle} controls>
              <source src={videoData.presigned_clippedvideopath} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* Bottom Section */}
        <div>
          <ToggleButton />
          {/* <a href="#" onClick={() => alert('View Tag details clicked!')}>View Tag details</a> */}
        </div>
      </div>
    </div>
  );
};

export default Popover;
