import React, { useState } from 'react';
import Checkbox from '../components/Input/Checkbox';
const TagDetails = ({ video }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [checkedState, setCheckedState] = useState({});

  const handleCheckboxChange = (label) => {
    setCheckedState((prevState) => ({
      ...prevState,
      [label]: !prevState[label],
    }));
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const renderPageContent = () => {
    if (currentPage === 1) {
      return (
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            gap: '20px',
          }}
        >
          <div style={{ flex: 1, paddingRight: '10px' }}>
            <h4>
              Video Date <span style={{ color: 'red' }}>*</span>
            </h4>
            <input
              type="date"
              style={{
                width: '100%',
                padding: '10px',
                marginBottom: '20px',
                border: '1px solid #ccc',
                borderRadius: '5px',
              }}
            />
            <hr style={{ border: 'none', borderTop: '1px solid #ccc', margin: '20px 0' }} />
            <h4>
              Video Duration <span style={{ color: 'red' }}>*</span>
            </h4>
            <input
              type="text"
              placeholder="Enter duration"
              style={{
                width: '100%',
                padding: '10px',
                marginBottom: '20px',
                border: '1px solid #ccc',
                borderRadius: '5px',
              }}
            />
            <hr style={{ border: 'none', borderTop: '1px solid #ccc', margin: '20px 0' }} />
            <h4>
              Start Time <span style={{ color: 'red' }}>*</span>
            </h4>
            <input
              type="time"
              style={{
                width: '100%',
                padding: '10px',
                marginBottom: '20px',
                border: '1px solid #ccc',
                borderRadius: '5px',
              }}
            />
            <hr style={{ border: 'none', borderTop: '1px solid #ccc', margin: '20px 0' }} />
            <h4>
              Contact Email <span style={{ color: 'red' }}>*</span>
            </h4>
            <input
              type="email"
              placeholder="Enter email"
              style={{
                width: '100%',
                padding: '10px',
                marginBottom: '20px',
                border: '1px solid #ccc',
                borderRadius: '5px',
              }}
            />
          </div>
          <div
            style={{
              borderLeft: '1px solid #ccc',
              margin: '0 20px',
            }}
          />
          <div style={{ flex: 1, paddingLeft: '10px' }}>
            <h4>
              Contact Name <span style={{ color: 'red' }}>*</span>
            </h4>
            <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
              <input
                type="text"
                placeholder="First Name"
                style={{
                  flex: 1,
                  padding: '10px',
                  border: '1px solid #ccc',
                  borderRadius: '5px',
                }}
              />
              <input
                type="text"
                placeholder="Last Name"
                style={{
                  flex: 1,
                  padding: '10px',
                  border: '1px solid #ccc',
                  borderRadius: '5px',
                }}
              />
            </div>
            <hr style={{ border: 'none', borderTop: '1px solid #ccc', margin: '20px 0' }} />
            <h4>
              Common Name <span style={{ color: 'red' }}>*</span>
            </h4>
            <input
              type="text"
              placeholder="Enter common name"
              style={{
                width: '100%',
                padding: '10px',
                marginBottom: '20px',
                border: '1px solid #ccc',
                borderRadius: '5px',
              }}
            />
            <hr style={{ border: 'none', borderTop: '1px solid #ccc', margin: '20px 0' }} />
            <h4>
              Brief Description <span style={{ color: 'red' }}>*</span>
            </h4>
            <textarea
              placeholder="Enter description"
              style={{
                width: '100%',
                padding: '10px',
                height: '100px',
                border: '1px solid #ccc',
                borderRadius: '5px',
                resize: 'none',
              }}
            ></textarea>
          </div>
        </div>
      );
    }
    if (currentPage == 3) {
      return (
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            gap: '20px',
            padding: '20px',
          }}
        >
          <div style={{ flex: 1 }}>
            {/* Column 1 */}
            <div style={{ marginBottom: '20px',   borderRadius: '5px' }}>
              <h4>Research approval process</h4>
              <input
              type="text"
              placeholder="Enter duration"
              style={{
                width: '100%',
                padding: '10px',
                marginBottom: '20px',
                border: '1px solid #ccc',
                borderRadius: '5px',
              }}
            />
            </div>
             <hr style={{ border: 'none', borderTop: '1px solid #ccc', margin: '20px 0' }} />
      
            <div style={{ marginBottom: '20px',   borderRadius: '5px' }}>
              <h4>Individual animal IDs</h4>
              <input
              type="text"
              placeholder="Enter duration"
              style={{
                width: '100%',
                padding: '10px',
                marginBottom: '20px',
                border: '1px solid #ccc',
                borderRadius: '5px',
              }}
            />
            </div>
             <hr style={{ border: 'none', borderTop: '1px solid #ccc', margin: '20px 0' }} />
      
            <div style={{ marginBottom: '20px', borderRadius: '5px' }}>
              <h4>Publications & published abstracts using these data</h4>
              <input
              type="text"
              placeholder="Enter duration"
              style={{
                width: '100%',
                padding: '10px',
                marginBottom: '20px',
                border: '1px solid #ccc',
                borderRadius: '5px',
              }}
            />
            </div>
             <hr style={{ border: 'none', borderTop: '1px solid #ccc', margin: '20px 0' }} />
      
            <div style={{ marginBottom: '20px',  borderRadius: '5px' }}>
              <h4>Are there any other data relevant to the video that could be shared?</h4>
              <div style={{ display: 'flex', gap: '10px', marginTop: '5px' }}>
              <Checkbox
                label="Yes"
                checked={checkedState['Yes'] || false}
                onChange={() => handleCheckboxChange('Yes')}
              />
              <Checkbox
                label="No"
                checked={checkedState['No'] || false}
                onChange={() => handleCheckboxChange('No')}
              />
              </div>
              <textarea
              placeholder="Enter description"
              style={{
                width: '100%',
                padding: '10px',
                height: '100px',
                border: '1px solid #ccc',
                borderRadius: '5px',
                resize: 'none',
              }}
            ></textarea>
            </div>
          </div>
      
          {/* Vertical Divider */}
          <div
            style={{
              borderLeft: '1px solid #ccc',
              margin: '0 20px',
            }}
          />
      
          <div style={{ flex: 1 }}>
            {/* Column 2 */}
            <div style={{ marginBottom: '20px',  borderRadius: '5px' }}>
              <h4>Scientific name</h4>
              <input
              type="text"
              placeholder="Enter duration"
              style={{
                width: '100%',
                padding: '10px',
                marginBottom: '20px',
                border: '1px solid #ccc',
                borderRadius: '5px',
              }}
            />
            </div>
             <hr style={{ border: 'none', borderTop: '1px solid #ccc', margin: '20px 0' }} />
      
            <div style={{ marginBottom: '20px',  borderRadius: '5px' }}>
              <h4>Is anything else going on during this video that might affect the behavior of the animal(s)?</h4>
              <textarea
              placeholder="Enter description"
              style={{
                width: '100%',
                padding: '10px',
                height: '100px',
                border: '1px solid #ccc',
                borderRadius: '5px',
                resize: 'none',
              }}
            ></textarea>
            </div>
          </div>
        </div>
      );
    }
    if (currentPage === 2) {
      return (
        <div
    style={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      gap: '20px',
      padding: '20px',
    }}
  >
    <div style={{ flex: 1 }}>
      {/* Column 1 */}
      <div style={{ marginBottom: '20px',  borderRadius: '5px' }}>
        <h4>Is this video from an indoor or outdoor area? <span style={{ color: 'red' }}>*</span></h4>
        <Checkbox
          label="Indoor"
          checked={checkedState['Indoor'] || false}
          onChange={() => handleCheckboxChange('Indoor')}
        />
        <Checkbox
          label="Outdoor"
          checked={checkedState['Outdoor'] || false}
          onChange={() => handleCheckboxChange('Outdoor')}
        />
      </div>
       <hr style={{ border: 'none', borderTop: '1px solid #ccc', margin: '20px 0' }} />
      
      <div style={{ marginBottom: '20px',  borderRadius: '5px' }}>
        <h4>Are the animals publicly viewable or behind the scenes? <span style={{ color: 'red' }}>*</span></h4>
        <Checkbox
          label="Publicly Viewable"
          checked={checkedState['Publicly Viewable'] || false}
          onChange={() => handleCheckboxChange('Publicly Viewable')}
        />
        <Checkbox
          label="Behind-the-Scenes"
          checked={checkedState['Behind-the-Scenes'] || false}
          onChange={() => handleCheckboxChange('Behind-the-Scenes')}
        />
      </div>
       <hr style={{ border: 'none', borderTop: '1px solid #ccc', margin: '20px 0' }} />
      
      <div style={{ marginBottom: '20px',  borderRadius: '5px' }}>
        <h4>This video was collected during (check all that apply) <span style={{ color: 'red' }}>*</span></h4>
        <Checkbox
          label="Normal Circumstances"
          checked={checkedState['Normal Circumstances'] || false}
          onChange={() => handleCheckboxChange('Normal Circumstances')}
        />
        <Checkbox
          label="Experimental Manipulation"
          checked={checkedState['Experimental Manipulation'] || false}
          onChange={() => handleCheckboxChange('Experimental Manipulation')}
        />
        <Checkbox
          label="Rare/Unusual Life Events"
          checked={checkedState['Rare/Unusual Life Events'] || false}
          onChange={() => handleCheckboxChange('Rare/Unusual Life Events')}
        />
      </div>
       <hr style={{ border: 'none', borderTop: '1px solid #ccc', margin: '20px 0' }} />
      
      <div style={{ marginBottom: '20px',   borderRadius: '5px' }}>
        <h4>File Type <span style={{ color: 'red' }}>*</span></h4>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          {['MP4', 'MKV', 'AVI', 'WMV', 'MPG', 'MOV', 'Other'].map((type) => (
            <Checkbox
              key={type}
              label={type}
              checked={checkedState[type] || false}
              onChange={() => handleCheckboxChange(type)}
            />
          ))}
        </div>
      </div>
    </div>
    <div
            style={{
              borderLeft: '1px solid #ccc',
              margin: '0 20px',
            }}
          />

    <div style={{ flex: 1 }}>
      {/* Column 2 */}
      <div style={{ marginBottom: '20px',   borderRadius: '5px' }}>
        <h4>Data Collection Ongoing <span style={{ color: 'red' }}>*</span></h4>
        <Checkbox
          label="Yes"
          checked={checkedState['Yes'] || false}
          onChange={() => handleCheckboxChange('Yes')}
        />
        <Checkbox
          label="No"
          checked={checkedState['No'] || false}
          onChange={() => handleCheckboxChange('No')}
        />
      </div>
       <hr style={{ border: 'none', borderTop: '1px solid #ccc', margin: '20px 0' }} />

      <div style={{ marginBottom: '20px',   borderRadius: '5px' }}>
        <h4>What was the original video format? <span style={{ color: 'red' }}>*</span></h4>
        <Checkbox
          label="DVD"
          checked={checkedState['DVD'] || false}
          onChange={() => handleCheckboxChange('DVD')}
        />
        <Checkbox
          label="VHS"
          checked={checkedState['VHS'] || false}
          onChange={() => handleCheckboxChange('VHS')}
        />
      </div>
       <hr style={{ border: 'none', borderTop: '1px solid #ccc', margin: '20px 0' }} />

      <div style={{ marginBottom: '20px',  borderRadius: '5px' }}>
        <h4 >Zoo or Aquarium <span style={{ color: 'red'}}>*</span></h4>
        <Checkbox
          label="Saint Louis Zoo"
          checked={checkedState['Saint Louis Zoo'] || false}
          onChange={() => handleCheckboxChange('Saint Louis Zoo')}
        />
        <Checkbox
          label="San Diego Zoo"
          checked={checkedState['San Diego Zoo'] || false}
          onChange={() => handleCheckboxChange('San Diego Zoo')}
        />
        <Checkbox
          label="New York Zoo"
          checked={checkedState['New York Zoo'] || false}
          onChange={() => handleCheckboxChange('New York Zoo')}
        />
      </div>
    </div>
  </div>
      );
    }
    if (currentPage==4){
      return (
        
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            gap: '20px',
            padding: '20px',
          }}
        >
          {/* Column 1 */}
          <div style={{ flex: 1 }}>
            {/* Was video primarily scored for behavior? */}
            <div style={{ marginBottom: '20px', borderRadius: '5px' }}>
              <h4>Was video primarily scored for behavior?</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', marginTop: '10px' }}>
                <Checkbox label="Yes" checked={checkedState['Yes'] || false}
          onChange={() => handleCheckboxChange('Yes')} />
                <Checkbox label="No"checked={checkedState['No'] || false}
          onChange={() => handleCheckboxChange('No')} />
              </div>
            </div>
            <hr style={{ border: 'none', borderTop: '1px solid #ccc', margin: '20px 0' }} />
      
            {/* Sex(es) of animals */}
            <div style={{ marginBottom: '20px',  borderRadius: '5px' }}>
              <h4>Sex(es) of animals</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', marginTop: '10px' }}>
                <Checkbox label="Only Males" 
                checked={checkedState['Only Males'] || false}
          onChange={() => handleCheckboxChange('Only Males')}/>
                <Checkbox label="Only Females" 
                checked={checkedState['Only Females'] || false}
                onChange={() => handleCheckboxChange('Only Females')} />
                <Checkbox label="All/Any" 
                checked={checkedState['All/Any'] || false}
                onChange={() => handleCheckboxChange('All/Any')} />
              </div>
            </div>
            <hr style={{ border: 'none', borderTop: '1px solid #ccc', margin: '20px 0' }} />
      
            {/* Age of Individual or age range */}
            <div style={{ marginBottom: '20px',  borderRadius: '5px' }}>
              <h4>Age of Individual or age range of individuals</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', marginTop: '10px' }}>
                <Checkbox label="Adult" 
                checked={checkedState['Adult'] || false}
                onChange={() => handleCheckboxChange('Adult')} />
                <Checkbox label="Juveniles" 
                checked={checkedState['Juveniles'] || false}
                onChange={() => handleCheckboxChange('Juveniles')} />
                <Checkbox label="Unknown" 
                checked={checkedState['Unknown'] || false}
                onChange={() => handleCheckboxChange('Unknown')} />
              </div>
            </div>
          </div>
      
          {/* Vertical Divider */}
          <div
            style={{
              borderLeft: '1px solid #ccc',
              margin: '0 20px',
            }}
          />
      
          {/* Column 2 */}
          <div style={{ flex: 1 }}>
            {/* Group size */}
            <div style={{ marginBottom: '20px', borderRadius: '5px' }}>
              <h4>Group size</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', marginTop: '10px' }}>
                <Checkbox label="One Animal (singly housed)" 
                checked={checkedState['One Animal (singly housed)'] || false}
                onChange={() => handleCheckboxChange('One Animal (singly housed)')} />
                <Checkbox label="Two animals (pair housed)" 
                checked={checkedState['Two animals (pair housed)'] || false}
                onChange={() => handleCheckboxChange('Two animals (pair housed)')} />
                <Checkbox
                  label="Three or more animals (group housed)"
                  checked={checkedState['Three or more animals (group housed)'] || false}
          onChange={() => handleCheckboxChange('Three or more animals (group housed)')}
                />
              </div>
            </div>
            <hr style={{ border: 'none', borderTop: '1px solid #ccc', margin: '20px 0' }} />
          </div>
        </div>
      );      
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        width: '100vw',
        height: '100vh',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      {/* Left Panel */}
      <div
        style={{
          width: '20%',
          backgroundColor: 'white',
          padding: '20px',
          boxShadow: '2px 0 5px rgba(0, 0, 0, 0.1)',
        }}
      >
        <h1 style={{ fontSize: '18px', marginBottom: '10px' }}>{"video.title"}</h1>
        <img
          src={"video.thumbnail"}
          alt={"video.title"}
          style={{ width: '100%', borderRadius: '5px', marginBottom: '10px' }}
        />
        <p style={{ fontSize: '14px', marginBottom: '20px' }}>{"video.description"}</p>
        <button
          style={{
            backgroundColor: 'white',
            color: 'black',
            border: '1px solid black',
            padding: '10px 15px',
            cursor: 'pointer',
            borderRadius: '5px',
          }}
          onClick={() => window.history.back()}
        >
          Back
        </button>
      </div>

      {/* Right Panel */}
      <div
        style={{
          flex: 1,
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-start',
          backgroundColor: 'white',
        }}
      >
        <div
          style={{
            width: '80%',
            backgroundColor: '#EEECE5',
            borderRadius: '10px',
            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
            paddingLeft: '50px',
            paddingRight: '50px',
            paddingBottom: '30px',
            paddingTop: '30px',
            position: 'sticky',
            top: '20px',
          }}
        >
          <h2 style={{ fontSize: '16px', marginBottom: '10px',  }}>Tag Information</h2>
          <div
            style={{
              position: 'absolute',
              top: '10px',
              right: '20px',
              fontSize: '14px',
              paddingTop: '20px'
            }}
          >
            Page: {Array.from({ length: 4 }, (_, i) => i + 1).map((page) => (
              <span
                key={page}
                onClick={() => handlePageChange(page)}
                style={{
                  cursor: 'pointer',
                  margin: '0 5px',
                  textDecoration: currentPage === page ? 'underline' : 'none',
                }}
              >
                {page}
              </span>
            ))}
          </div>
          <div style={{ marginTop: '30px', fontSize: '14px' }}>{renderPageContent()}</div>
        </div>
      </div>
    </div>
  );
};

export default TagDetails;
