// UserAgreement.js
import React, { useState } from 'react';
import Checkbox from '../components/Input/Checkbox';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom'; 

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

  const navigate = useNavigate(); // Initialize useNavigate for navigation

  const handleAgree1Change = (event) => {
    console.log("1");
    setAgree1(event.target.checked);
  };

  const handleAgree2Change = (event) => {
    console.log("2");

    setAgree2(event.target.checked);
  };

  const handleAgree3Change = (event) => {
    console.log("3");

    setAgree3(event.target.checked);
  };

  const handleAgree4Change = (event) => {
    console.log("4");

    setAgree4(event.target.checked);
  };

  const handleRequesterNameChange = (event) => {
    setRequesterName(event.target.value);
  };

  const handleFacilitatorAffiliationChange = (event) => {
    setFacilitatorAffiliation(event.target.value);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleWhyVideosChange = (event) => {
    setWhyVideos(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleSubmit = () => {
    console.log('Form submitted');
    navigate('/confirmation');
  };

  const handleBackToSearch = () => {
    navigate('/cart');
  };

  const isFormValid = () => {
    return (
      agree1 &&
      agree2 &&
      agree3 &&
      agree4 &&
      requesterName !== '' &&
      facilitatorAffiliation !== '' &&
      title !== '' &&
      email !== '' &&
      whyVideos !== '' &&
      phoneNumber !== ''
    );
  };

  return (
    <div className="user-agreement-page" style={{ padding: '30px', textAlign: 'left' }}>
      <h1 style={{ paddingLeft: '20px'}}>
        <b>User Agreement Form</b>
      </h1>
      <div className="agreement-checkboxes" style={{ padding: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', padding: '10px' }}>
          <Checkbox label="I agree to only use these videos for purposes described above and not
            copy or distribute them to other parties without permission of the
            owning facilities." checked={agree1} onChange={handleAgree1Change} />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', padding: '10px' }}>
          <Checkbox label="I agree to maintain contact with the providing facilities according to
            their expectations." checked={agree2} onChange={handleAgree2Change} />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', padding: '10px' }}>
          <Checkbox label="I understand that many of these videos have not been pre-reviewed or
            reviewed recently. If I see something concerning, which could include
            graphic content such as animals harming themselves or one another or
            appearing to be in distress, I agree to contact the providing
            facility regarding further use of this video." checked={agree3} onChange={handleAgree3Change} />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', padding: '10px' }}>
          <Checkbox label="If there are opportunities for the user to further enrich the
            metadata of these videos to aid other potential users in deciding if
            this video is of interest to them, I will provide details in the
            database of any behaviors or observations that I feel are relevant
            for this purpose." checked={agree4} onChange={handleAgree4Change} />

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
              onChange={handleRequesterNameChange}
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
              onChange={handleFacilitatorAffiliationChange}
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
              onChange={handleTitleChange}
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
              onChange={handleEmailChange}
              style={{ width: '100%' }}
            />
          </div>
        </div>
        <div className="row" style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div className="input-field" style={{ flex: '1', padding: '10px' }}>
            <label>
              Why these videos? <span style={{ color: 'red' }}>*</span>
            </label>
            <textarea
              value={whyVideos}
              onChange={handleWhyVideosChange}
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
              onChange={handlePhoneNumberChange}
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
          style={{ backgroundColor: '#FDBD57', color: 'black' }}
          onClick={handleSubmit}
        >
          Submit request
        </Button>
      </div>
    </div>
  );
};

export default UserAgreement;