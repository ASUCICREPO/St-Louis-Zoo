import React, { useState } from 'react';
// import { Accordion, AccordionSummary, AccordionDetails, Typography, Checkbox } from '@mui';
import Checkbox from '../components/Input/Checkbox';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';


const SidebarFilter = () => {
  // State to manage accordion expansion
  const [expanded, setExpanded] = useState(false);

  // Handling accordion change
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  // Example options for the filters
  const videoDurationOptions = [
    { value: 'short', label: 'Short (<5 min)' },
    { value: 'medium', label: 'Medium (5-20 min)' },
    { value: 'long', label: 'Long (>20 min)' },
  ];

  const zooOrAquariumOptions = [
    { value: 'zoo', label: 'Zoo' },
    { value: 'aquarium', label: 'Aquarium' },
  ];

  const groupSizeOptions = [
    { value: 'small', label: 'Small (1-2)' },
    { value: 'medium', label: 'Medium (3-5)' },
    { value: 'large', label: 'Large (>5)' },
  ];

  const sexOptions = [
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' },
  ];

  const lifeStagesOptions = [
    { value: 'infant', label: 'Infant' },
    { value: 'juvenile', label: 'Juvenile' },
    { value: 'adult', label: 'Adult' },
  ];

  const animalVisibilityOptions = [
    { value: 'visible', label: 'Visible' },
    { value: 'hidden', label: 'Hidden' },
  ];

  const areaOptions = [
    { value: 'north', label: 'North Area' },
    { value: 'south', label: 'South Area' },
  ];

  const videoCollectedDuringOptions = [
    { value: 'feeding', label: 'Feeding Time' },
    { value: 'sleeping', label: 'Sleeping Time' },
  ];

  const originalVideoFormatOptions = [
    { value: 'mp4', label: 'MP4' },
    { value: 'avi', label: 'AVI' },
  ];

  const fileTypeOptions = [
    { value: 'video', label: 'Video' },
    { value: 'image', label: 'Image' },
  ];

  const dataCollectionOngoingOptions = [
    { value: 'yes', label: 'Yes' },
    { value: 'no', label: 'No' },
  ];

  const videoPreviouslyScoredOptions = [
    { value: 'yes', label: 'Yes' },
    { value: 'no', label: 'No' },
  ];

  return (
    <aside style={{ backgroundColor: '#EEECE5', padding: '20px', width: '300px' }}>
      <div className="accordion-container">
        {/* Video Duration Filter */}
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography>Video Duration</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div style={{ display: 'grid', gap: '10px' }}>
              {videoDurationOptions.map((option) => (
                <label key={option.value}>
                  <Checkbox />
                  {option.label}
                </label>
              ))}
            </div>
          </AccordionDetails>
        </Accordion>

        {/* Zoo or Aquarium Filter */}
        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
          <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
            <Typography>Zoo or Aquarium</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div style={{ display: 'grid', gap: '10px' }}>
              {zooOrAquariumOptions.map((option) => (
                <label key={option.value}>
                  <Checkbox />
                  {option.label}
                </label>
              ))}
            </div>
          </AccordionDetails>
        </Accordion>

        {/* Group Size Filter */}
        <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography>Group Size</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div style={{ display: 'grid', gap: '10px' }}>
              {groupSizeOptions.map((option) => (
                <label key={option.value}>
                  <Checkbox />
                  {option.label}
                </label>
              ))}
            </div>
          </AccordionDetails>
        </Accordion>

        {/* Sex Filter */}
        <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
          <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
            <Typography>Sex</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div style={{ display: 'grid', gap: '10px' }}>
              {sexOptions.map((option) => (
                <label key={option.value}>
                  <Checkbox />
                  {option.label}
                </label>
              ))}
            </div>
          </AccordionDetails>
        </Accordion>

        {/* Life Stages Filter */}
        <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
          <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
            <Typography>Life Stages</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div style={{ display: 'grid', gap: '10px' }}>
              {lifeStagesOptions.map((option) => (
                <label key={option.value}>
                  <Checkbox />
                  {option.label}
                </label>
              ))}
            </div>
          </AccordionDetails>
        </Accordion>

        {/* Animal Visibility Filter */}
        <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
          <AccordionSummary aria-controls="panel6d-content" id="panel6d-header">
            <Typography>Animal Visibility</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div style={{ display: 'grid', gap: '10px' }}>
              {animalVisibilityOptions.map((option) => (
                <label key={option.value}>
                  <Checkbox />
                  {option.label}
                </label>
              ))}
            </div>
          </AccordionDetails>
        </Accordion>

        {/* Area Filter */}
        <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
          <AccordionSummary aria-controls="panel7d-content" id="panel7d-header">
            <Typography>Area</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div style={{ display: 'grid', gap: '10px' }}>
              {areaOptions.map((option) => (
                <label key={option.value}>
                  <Checkbox />
                  {option.label}
                </label>
              ))}
            </div>
          </AccordionDetails>
        </Accordion>

        {/* Video Collected During Filter */}
        <Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
          <AccordionSummary aria-controls="panel8d-content" id="panel8d-header">
            <Typography>Video Collected During</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div style={{ display: 'grid', gap: '10px' }}>
              {videoCollectedDuringOptions.map((option) => (
                <label key={option.value}>
                  <Checkbox />
                  {option.label}
                </label>
              ))}
            </div>
          </AccordionDetails>
        </Accordion>

        {/* Original Video Format Filter */}
        <Accordion expanded={expanded === 'panel9'} onChange={handleChange('panel9')}>
          <AccordionSummary aria-controls="panel9d-content" id="panel9d-header">
            <Typography>Original Video Format</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div style={{ display: 'grid', gap: '10px' }}>
              {originalVideoFormatOptions.map((option) => (
                <label key={option.value}>
                  <Checkbox />
                  {option.label}
                </label>
              ))}
            </div>
          </AccordionDetails>
        </Accordion>

        {/* File Type Filter */}
        <Accordion expanded={expanded === 'panel10'} onChange={handleChange('panel10')}>
          <AccordionSummary aria-controls="panel10d-content" id="panel10d-header">
            <Typography>File Type</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div style={{ display: 'grid', gap: '10px' }}>
              {fileTypeOptions.map((option) => (
                <label key={option.value}>
                  <Checkbox />
                  {option.label}
                </label>
              ))}
            </div>
          </AccordionDetails>
        </Accordion>

        {/* Data Collection Ongoing Filter */}
        <Accordion expanded={expanded === 'panel11'} onChange={handleChange('panel11')}>
          <AccordionSummary aria-controls="panel11d-content" id="panel11d-header">
            <Typography>Data Collection Ongoing</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div style={{ display: 'grid', gap: '10px' }}>
              {dataCollectionOngoingOptions.map((option) => (
                <label key={option.value}>
                  <Checkbox />
                  {option.label}
                </label>
              ))}
            </div>
          </AccordionDetails>
        </Accordion>

        {/* Video Previously Scored Filter */}
        <Accordion expanded={expanded === 'panel12'} onChange={handleChange('panel12')}>
          <AccordionSummary aria-controls="panel12d-content" id="panel12d-header">
            <Typography>Video Previously Scored</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div style={{ display: 'grid', gap: '10px' }}>
              {videoPreviouslyScoredOptions.map((option) => (
                <label key={option.value}>
                  <Checkbox />
                  {option.label}
                </label>
              ))}
            </div>
          </AccordionDetails>
        </Accordion>
      </div>
    </aside>
  );
};

export default SidebarFilter;
