import React, { useEffect, useState } from "react";
import VideoCard from "../components/Display/VideoCard";

const TestingPage = () => {
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
        console.log("API Response:", data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return <div>Check the console for API response.</div>;
};

export default TestingPage;
