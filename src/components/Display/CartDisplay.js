import React from 'react';
import deleteIcon from "../../assets/icons/Delete.png";

const CartDisplay = ({ videos, onRemove }) => {
  const containerStyle = {
    padding: '16px',
    backgroundColor: '#f8f8f8',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  };

  const videoListContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
  };

  const videoContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '12px',
  };

  const videoInfoStyle = {
    marginLeft: '12px',
    flex: '1',
  };

  const videoTitleStyle = {
    fontSize: '16px',
    fontWeight: 'bold',
    display: 'block', // Ensure it takes a full line
  };

  const videoDurationStyle = {
    display: 'block', // Ensure duration takes a full line
  };

  const videoDateStyle = {
    display: 'block', // Ensure date takes a full line
  };

  const removeButtonStyle = {
    cursor: 'pointer',
    color: '#d9534f',
    display: 'flex',
    alignItems: 'center',
    marginTop: '4px',
  };

  const deleteIconStyle = {
    width: '16px',
    height: '16px',
    marginLeft: '4px',
  };

  const dividerStyle = {
    height: '1px',
    backgroundColor: '#e0e0e0',
    margin: '8px 0',
  };

  return (
    <div style={containerStyle}>
      {/* Video list */}
      <div style={videoListContainerStyle}>
        {videos.map((video, index) => (
          <React.Fragment key={index}>
            {/* Video Item */}
            <div style={videoContainerStyle}>
              <img src={video.thumbnail} alt="Thumbnail" style={{ width: '120px', height: '80px' }} />
              <div style={videoInfoStyle}>
                <span style={videoTitleStyle}>{video.title}</span>
                <span style={videoDurationStyle}>Duration: {video.duration}</span>
                <span style={videoDateStyle}>Date: {video.date}</span>
                <div
                  style={removeButtonStyle}
                  onClick={() => onRemove(index)} // Use index to identify which video to remove
                >
                  Remove <img src={deleteIcon} alt="Delete Icon" style={deleteIconStyle} />
                </div>
              </div>
            </div>

            {/* Divider */}
            {index < videos.length - 1 && <div style={dividerStyle}></div>} {/* Only show divider if not last video */}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default CartDisplay;
