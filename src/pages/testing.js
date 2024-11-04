import React, { useEffect, useState } from "react";
import VideoCard from "../components/Display/VideoCard";

const TestingPage = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const params = {
        filters: {
          keyword: "snail",
        },
      };

      try {
        const response = await fetch("https://2g2799px6e.execute-api.us-east-1.amazonaws.com/default/GetSearchResults", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(params),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setVideos(data.body);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={containerStyle}>
      {videos.length > 0 ? (
        videos.map((video, index) => (
          <VideoCard
  key={index}
  index={index}
  title={video.commonname}
  duration={video.duration}  
  date={video.videodate || "Unknown Date"}  
  videoUrl={video.presigned_clippedvideopath}
  thumbnailUrl={video.presigned_thumbnailstartpath}  
/>

        ))
      ) : (
        <p>Loading videos...</p>
      )}
    </div>
  );
};

// Inline styling for the container
const containerStyle = {
  display: "flex",
  flexWrap: "wrap",
  gap: "20px",
  padding: "20px",
  justifyContent: "center",
};

export default TestingPage;
