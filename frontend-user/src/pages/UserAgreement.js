// UserAgreement.js
import React, { useState, useContext } from 'react';
import Checkbox from '../components/Input/Checkbox';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../components/CartContext'

const UserAgreement = () => {
  const [agree1, setAgree1] = useState(false);
  const [agree2, setAgree2] = useState(false);
  const [agree3, setAgree3] = useState(false);
  const [agree4, setAgree4] = useState(false);

  const [requesterName, setRequesterName] = useState('');
  const [facilitatorAffiliation, setFacilitatorAffiliation] = useState('');
  const [title, setTitle] = useState('');
  const [email, setEmail] = useState('');
  const [whyVideos, setWhyVideos] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const navigate = useNavigate();
  const { cartItems } = useContext(CartContext);

  const handleSubmit = () => {
    console.log('Form submitted');
    const requestPayload = {
      requestedVideos: cartItems.map((item) => ({
        id: item.id,
        contactemail: item.contactEmail,
        duration: item.duration,
        ageofindividuals: item.ageOfIndividuals,
        covariatedata: item.covariateData,
        videocontext: item.videoContext,
        videolocation: item.videoLocation,
        datacollectionstatus: item.dataCollectionStatus,
        researchapproval: item.researchApproval,
        scientificname: item.scientificName,
        contactlastname: item.contactLastName,
        animalvisibility: item.animalVisibility,
        clippedvideopath: item.clippedVideoPath,
        videoformat: item.videoFormat,
        commonname: item.commonName,
        groupsize: item.groupSize,
        contactfirstname: item.contactFirstName,
        sexofanimals: item.sexOfAnimals,
        behavioraleffects: item.behavioralEffects,
        animalids: item.animalIds,
        briefvideodescription: item.briefVideoDescription,
        thumbnailstartpath: item.thumbnailStartPath,
        thumbnailendpath: item.thumbnailEndPath,
        videodate: item.videoDate,
        starttime: item.startTime,
        endtime: item.endTime,
        thumbnail_url: item.thumbnailUrl,
        clipping_video_url: item.clippingVideoUrl,
      })),
      requestername: requesterName,
      faculty: facilitatorAffiliation,
      title: title,
      email: email,
      reason: whyVideos,
      phone: phoneNumber,
    };
    // Call the additional API
    fetch('https://o63peui5vb.execute-api.us-east-1.amazonaws.com/default/SendEmail', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(requestPayload),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('API response:', data);
        navigate('/confirmation');
      })
      .catch((error) => console.error('API error:', error));
  };

  const handleBackToSearch = () => {
    navigate('/cart');
  };

  const isFormValid = () => {
    // Validate checkboxes
    const allChecked = agree1 && agree2 && agree3 && agree4;

    // Validate input fields
    const isRequesterNameValid = requesterName.trim() !== '';
    const isFacilitatorAffiliationValid = facilitatorAffiliation.trim() !== '';
    const isTitleValid = title.trim() !== '';
    const isEmailValid = email.includes('@');
    const isWhyVideosValid = whyVideos.trim() !== '';
    const isPhoneNumberValid = /^\d{10}$/.test(phoneNumber); // 10 digits only

    return (
      allChecked &&
      isRequesterNameValid &&
      isFacilitatorAffiliationValid &&
      isTitleValid &&
      isEmailValid &&
      isWhyVideosValid &&
      isPhoneNumberValid
    );
  };

  return (
    <div className="user-agreement-page" style={{ padding: '30px', textAlign: 'left' }}>
      <h1 style={{ paddingLeft: '20px' }}>
        <b>User Agreement Form</b>
      </h1>
      <div className="agreement-checkboxes" style={{ padding: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', padding: '10px' }}>
        <Checkbox
          label="I agree to only use these videos for purposes described below and not
              copy or distribute them to other parties without permission of the
              owning facilities."
          checked={agree1}
          onChange={(e) => setAgree1(e.target.checked)}
        />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', padding: '10px' }}>
        <Checkbox
          label="I agree to maintain contact with the providing facilities according to
              their expectations."
          checked={agree2}
          onChange={(e) => setAgree2(e.target.checked)}
        />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', padding: '10px' }}>
        <Checkbox
          label="I understand that many of these videos have not been pre-reviewed or
              reviewed recently. If I see something concerning, which could include
              graphic content such as animals harming themselves or one another or
              appearing to be in distress, I agree to contact the providing
              facility regarding further use of this video."
          checked={agree3}
          onChange={(e) => setAgree3(e.target.checked)}
        />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', padding: '10px' }}>
        <Checkbox
          label="If there are opportunities for the user to further enrich the
              metadata of these videos to aid other potential users in deciding if
              this video is of interest to them, I will provide details in the
              database of any behaviors or observations that I feel are relevant
              for this purpose."
          checked={agree4}
          onChange={(e) => setAgree4(e.target.checked)}
        />        
        </div>
      </div>
      <div className="input-fields" style={{ padding: '20px' }}>
        <div className="row" style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div className="input-field" style={{ flex: '1', padding: '10px' }}>
            <label>
              Requester Name <span style={{ color: 'red' }}>*</span>
            </label>
            <input
              type="text"
              value={requesterName}
              onChange={(e) => setRequesterName(e.target.value)}
              style={{ width: '100%' }}
            />
          </div>
          <div className="input-field" style={{ flex: '1', padding: '10px' }}>
            <label>
              Facilitator/Affiliation <span style={{ color: 'red' }}>*</span>
            </label>
            <input
              type="text"
              value={facilitatorAffiliation}
              onChange={(e) => setFacilitatorAffiliation(e.target.value)}
              style={{ width: '100%' }}
            />
          </div>
          <div className="input-field" style={{ flex: '1', padding: '10px' }}>
            <label>
              Title <span style={{ color: 'red' }}>*</span>
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              style={{ width: '100%' }}
            />
          </div>
          <div className="input-field" style={{ flex: '1', padding: '10px' }}>
            <label>
              Email <span style={{ color: 'red' }}>*</span>
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ width: '100%' }}
            />
          </div>
        </div>
        <div className="row" style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div className="input-field" style={{ flex: '1', padding: '10px' }}>
            <label>
              Why these videos? Explain the reasons <span style={{ color: 'red' }}>*</span>
            </label>
            <textarea
              value={whyVideos}
              onChange={(e) => setWhyVideos(e.target.value)}
              rows={5}
              style={{ width: '100%' }}
            />
          </div>
          <div className="input-field" style={{ flex: '1', padding: '10px' }}>
            <label>
              Phone Number <span style={{ color: 'red' }}>*</span>
            </label>
            <input
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              style={{ width: '100%' }}
            />
          </div>
        </div>
      </div>

      <div className="buttons" style={{ textAlign: 'left', padding: '20px' }}>
      <Button
          variant="contained"
          style={{
            backgroundColor: 'white',
            color: 'black',
            border: '1px solid black',
            marginRight: '20px',
          }}
          onClick={handleBackToSearch}
        >
          Back
        </Button>
        <Button
          variant="contained"
          disabled={!isFormValid()}
          style={{ backgroundColor: !isFormValid() ? '#EEECE5' : '#FDBD57',
            color: 'black',
            cursor: !isFormValid() ? 'not-allowed' : 'pointer',}}
          onClick={handleSubmit}
        >
          Submit request
        </Button>
      </div>
    </div>
  );
};

export default UserAgreement;
