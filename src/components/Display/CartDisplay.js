import React from 'react';
import deleteIcon from "../../assets/icons/Delete.png";

const CartDisplay = ({ videos = [], onRemove }) => {
  const containerStyle = {
    padding: '16px',
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    width: '70%',
    maxWidth: '800px',
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
    display: 'block',
  };

  const videoDurationStyle = {
    display: 'block',
  };

  const videoDateStyle = {
    display: 'block',
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

  console.log('Videos stored:', videos);

  return (
    <div style={containerStyle}>
      <div style={videoListContainerStyle}>
        {Array.isArray(videos) && videos.length > 0 ? (
          videos.map((video, index) => (
            <React.Fragment key={index}>
              <div style={videoContainerStyle}>
                <img
                  src={video.presigned_thumbnailstartpath}
                  alt={video.commonname || "Thumbnail"}
                  style={{ width: '120px', height: '80px' }}
                />
                <div style={videoInfoStyle}>
                  <span style={videoTitleStyle}>{video.commonname || "Unknown Title"}</span>
                  <span style={videoDurationStyle}>Duration: {video.duration || "Unknown Duration"}</span>
                  <span style={videoDateStyle}>Date: {video.videodate || "Unknown Date"}</span>
                  <div
                    style={removeButtonStyle}
                    onClick={() => onRemove(index)}
                  >
                    Remove <img src={deleteIcon} alt="Delete Icon" style={deleteIconStyle} />
                  </div>
                </div>
              </div>
              {index < videos.length - 1 && <div style={dividerStyle}></div>}
            </React.Fragment>
          ))
        ) : (
          <div style={videoContainerStyle}>
            <p>No videos in the cart.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartDisplay;
