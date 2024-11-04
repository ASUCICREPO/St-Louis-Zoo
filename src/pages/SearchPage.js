import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SearchPage.css';
import { styled } from '@mui/material/styles';
import SearchBar from '../components/Input/SearchBar';
import logo from '../assets/images/logo/logo.png';
import Checkbox from '../components/Input/Checkbox';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import addButton from '../assets/icons/add.png';
import addedButton from '../assets/icons/added.png';
import thumbnail from '../assets/images/logo/thumbnail.png';
import Typography from '@mui/material/Typography';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={2} square {...props} />
))(({ theme }) => ({
  backgroundColor: '#EEECE5',
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&::before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: '#EEECE5',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
}));


const videoDurationOptions = [
  { label: "5-10 min", value: "5-10" },
  { label: "10-30 min", value: "10-30" },
  { label: "30-60 min", value: "30-60" },
  { label: "1-3 hr", value: "1-3hr" },
  { label: "3-5 hr", value: "3-5hr" },
  { label: ">5 hr", value: "5+" },
];

const zooOrAquariumOptions = [
  { label: "Saint Louis Zoo", value: "saint-louis-zoo" },
  { label: "San Diego Zoo", value: "san-diego-zoo" },
  { label: "Los Angeles Zoo", value: "los-angeles-zoo" },
  { label: "New York Zoo", value: "new-york-zoo" },
  { label: "Arizona Zoo", value: "arizona-zoo" },
];

const commonNameOptions = [
  { label: "Enter Common Name", value: "" },
];

const scientificNameOptions = [
  { label: "Enter Scientific Name", value: "" },
];

const groupSizeOptions = [
  { label: "One Animal (singly housed)", value: "one-animal" },
  { label: "Two Animals (pair housed)", value: "two-animals" },
  { label: "Three or more Animals (group housed)", value: "three-or-more-animals" },
];

const sexOptions = [
  { label: "Only Males", value: "only-males" },
  { label: "Only Females", value: "only-females" },
  { label: "All/Any", value: "all-any" },
];

const lifeStagesOptions = [
  { label: "Adults", value: "adults" },
  { label: "Juveniles", value: "juveniles" },
];

const animalVisibilityOptions = [
  { label: "Publicly Viewable", value: "publicly-viewable" },
  { label: "Behind-the-scene", value: "behind-the-scene" },
];

const areaOptions = [
  { label: "Indoor", value: "indoor" },
  { label: "Outdoor", value: "outdoor" },
];

const videoCollectedDuringOptions = [
  { label: "Normal circumstances", value: "normal-circumstances" },
  { label: "An experimental manipulation of the subject or its environment", value: "experimental-manipulation" },
  { label: "Rare/unusual life events", value: "rare-unusual-life-events" },
];

const originalVideoFormatOptions = [
  { label: "Digital", value: "digital" },
  { label: "DVD", value: "dvd" },
  { label: "VHS", value: "vhs" },
];

const fileTypeOptions = [
  { label: "mp4", value: "mp4" },
  { label: "mkv", value: "mkv" },
  { label: "avi", value: "avi" },
  { label: "wmv", value: "wmv" },
  { label: "mov", value: " mov" },
  { label: "other", value: "other" },
];

const dataCollectionOngoingOptions = [
  { label: "Yes", value: "yes" },
  { label: "No", value: "no" },
];

const videoPreviouslyScoredOptions = [
  { label: "Yes", value: "yes" },
  { label: "No", value: "no" },
];

const SearchPage = () => {
  const [expanded, setExpanded] = useState('panel1');
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [searchClicked, setSearchClicked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  // State for inputs
  const [inputs, setInputs] = useState({
    keyword: '',
    duration: '',
    videodate: ['', ''],
    commonname: '',
    scientificname: '',
    groupsize: '',
    sexofanimals: '',
    ageofindividuals: '',
    animalvisibility: '',
    videolocation: '',
    videocontext: '',
    videoformat: '',
    fileType: '',
    datacollectionstatus: '',
    behavioraleffects: '',
    starttime: ''
  });

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputs(prevInputs => ({
      ...prevInputs,
      [name]: value
    }));
  };
  
  const handleCheckboxChange = (event, name) => {
    const { checked } = event.target;
    setInputs(prevInputs => ({
      ...prevInputs,
      [name]: checked ? event.target.value : ''
    }));
  };
  
  const handleSearch = async () => {
    setLoading(true);
    setError(null);
  
    try {
      // Gather all filter inputs
      const filters = {
        keyword: inputs.keyword,
        duration: inputs.duration,
        videodate: inputs.videodate,
        commonname: inputs.commonname,
        scientificname: inputs.scientificname,
        groupsize: inputs.groupsize,
        sexofanimals: inputs.sexofanimals,
        ageofindividuals: inputs.ageofindividuals,
        animalvisibility: inputs.animalvisibility,
        videolocation: inputs.videolocation,
        videocontext: inputs.videocontext,
        videoformat: inputs.videoformat,
        fileType: inputs.fileType,
        datacollectionstatus: inputs.datacollectionstatus,
        behavioraleffects: inputs.behavioraleffects,
        starttime: inputs.starttime
      };
  
      // Make API call with the filters
      const response = await fetch('https://2g2799px6e.execute-api.us-east-1.amazonaws.com/default/GetSearchResults', {
        method: 'POST', // or 'GET', depending on your API
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(filters)
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      setSearchResults(data.results); // Adjust based on your API response structure
      setShowResults(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="search-page">
      <aside className="sidebar" style={{ position: 'sticky', top: 0, left: 0 , width: '30%'}}>
        <div className="filter-header-container">
          <h3 className="filter-header">Filters/Tags</h3>
          <div className="reset">Reset</div>
        </div>

        <div className="accordion-container">
          {/* Video Duration Filter */}
          <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
            <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
              <Typography>Video Duration</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div style={{ display: 'grid', gap: '10px' }}>
                {videoDurationOptions.map(option => (
                  <label key={option.value}><Checkbox label={option.label} /></label>
                ))}
              </div>
            </AccordionDetails>
          </Accordion>

          {/* Video Date Filter */}
          <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
            <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
              <Typography>Video Date</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div style={{ display: 'grid', gap: '10px' }}>
                <input type="date" />
              </div>
            </AccordionDetails>
          </Accordion>

          {/* Zoo or Aquarium Filter */}
          <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
            <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
              <Typography>Zoo or Aquarium</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div style={{ display: 'grid', gap: '10px' }}>
                {zooOrAquariumOptions.map(option => (
                  <label key={option.value}><Checkbox label={option.label} /></label>
                ))}
              </div>
            </AccordionDetails>
          </Accordion>

          {/* Common Name Filter */}
          <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
            <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
              <Typography>Common Name</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div style={{ display: 'grid', gap: '10px' }}>
                <input type="text" />
              </div>
            </AccordionDetails>
          </Accordion>

          {/* Scientific Name Filter */}
          <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
            <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
              <Typography>Scientific Name</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div style={{ display: 'grid', gap: '10px' }}>
                <input type="text" />
              </div>
            </AccordionDetails>
          </Accordion>

          {/* Group Size Filter */}
          <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
            <AccordionSummary aria-controls="panel6d-content" id="panel6d-header">
              <Typography>Group Size</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div style={{ display: 'grid', gap: '10px' }}>
                {groupSizeOptions.map(option => (
                  <label key={option.value}><Checkbox label={option.label} /></label>
                ))}
              </div>
            </AccordionDetails>
          </Accordion>

          {/* Sex Filter */}
          <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
            <AccordionSummary aria-controls="panel7d-content" id="panel7d-header">
              <Typography>Sex</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div style={{ display: 'grid', gap: '10px' }}>
                {sexOptions.map(option => (
                  <label key={option.value}><Checkbox label={option.label} /></label>
                ))}
              </div>
            </AccordionDetails>
          </Accordion>

          {/* Life Stages Filter */}
          <Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
            <AccordionSummary aria-controls="panel8d-content" id="panel8d-header">
              <Typography>Life Stages</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div style={{ display: 'grid', gap: '10px' }}>
                {lifeStagesOptions.map(option => (
                  <label key={option.value}><Checkbox label={option.label} /></label>
                ))}
              </div>
            </AccordionDetails>
          </Accordion>

          {/* Animal Visibility Filter */}
          <Accordion expanded={expanded === 'panel9'} onChange={handleChange('panel9')}>
            <AccordionSummary aria-controls="panel9d-content" id="panel9d-header">
              <Typography>Animal Visibility</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div style={{ display: 'grid', gap: '10px' }}>
                {animalVisibilityOptions.map(option => (
                  <label key={option.value}><Checkbox label={option.label} /></label>
                ))}
              </div>
            </AccordionDetails>
          </Accordion>

          {/* Area Filter */}
          <Accordion expanded={expanded === 'panel10'} onChange={handleChange('panel10')}>
            <AccordionSummary aria-controls="panel10d-content" id="panel10d-header">
              <Typography>Area</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div style={{ display: 'grid', gap: '10px' }}>
                {areaOptions.map(option => (
                  <label key={option.value}><Checkbox label={option.label} /></label>
                ))}
              </div>
            </AccordionDetails>
          </Accordion>

          {/* Video Collected During Filter */}
          <Accordion expanded={expanded === 'panel11'} onChange={handleChange('panel11')}>
            <AccordionSummary aria-controls="panel11d-content" id="panel11d-header">
              <Typography>Video Collected During</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div style={{ display: 'grid', gap: '10px' }}>
                {videoCollectedDuringOptions.map(option => (
                  <label key={option.value}><Checkbox label={option.label} /></label>
                ))}
              </div>
            </AccordionDetails>
          </Accordion>

          {/* Original Video Format Filter */}
          <Accordion expanded={expanded === 'panel12'} onChange={handleChange('panel12')}>
            <AccordionSummary aria-controls="panel12d-content" id="panel12d-header">
              <Typography>Original Video Format</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div style={{ display: 'grid', gap: '10px' }}>
                {originalVideoFormatOptions.map(option => (
                  <label key={option.value}><Checkbox label={option.label} /></label>
                ))}
              </div>
            </AccordionDetails>
          </Accordion>

          {/* File Type Filter */}
          <Accordion expanded={expanded === 'panel13'} onChange={handleChange('panel13')}>
            <AccordionSummary aria-controls="panel13d-content" id="panel13d-header">
              <Typography>File Type</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div style={{ display: 'grid', gap: '10px' }}>
                {fileTypeOptions.map(option => (
                  <label key={option.value}><Checkbox label={option.label} /></label>
                ))}
              </div>
            </AccordionDetails>
          </Accordion>

          {/* Data Collection Ongoing Filter */}
          <Accordion expanded={expanded === 'panel14'} onChange={handleChange('panel14')}>
            <AccordionSummary aria-controls="panel14d-content" id="panel14d-header">
              <Typography>Data Collection Ongoing</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div style={{ display: 'grid', gap: ' 10px' }}>
                {dataCollectionOngoingOptions.map(option => (
                  <label key={option.value}><Checkbox label={option.label} /></label>
                ))}
              </div>
            </AccordionDetails>
          </Accordion>

          {/* Video Previously Scored Filter */}
          <Accordion expanded={expanded === 'panel15'} onChange={handleChange('panel15')}>
            <AccordionSummary aria-controls="panel15d-content" id="panel15d-header">
              <Typography>Video Previously Scored</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div style={{ display: 'grid', gap: '10px' }}>
                {videoPreviouslyScoredOptions.map(option => (
                  <label key={option.value}><Checkbox label={option.label} /></label>
                ))}
              </div>
            </AccordionDetails>
          </Accordion>

          {/* Start Time Filter */}
          <Accordion expanded={expanded === 'panel16'} onChange={handleChange('panel16')}>
            <AccordionSummary aria-controls="panel16d-content" id="panel16d-header">
              <Typography>Start Time</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div style={{ display: 'grid', gap: '10px' }}>
                <input type="time" />
                <input type="time" />
              </div>
            </AccordionDetails>
          </Accordion>
        </div>
      </aside>

      <main className="main-content">
        <div className="main-container">
          {!searchClicked && <img src={logo} alt="Logo" className="logo" />}
          <div className="search-bar-wrapper">
            <SearchBar onSearch={handleSearch} />
          </div>

          
            {/* Search Results Display */}
          {showResults && (
            <div className="results-container">
              <h2>Search Results</h2>
              <pre>
                {JSON.stringify(searchResults, null, 2)}
              </pre>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default SearchPage;