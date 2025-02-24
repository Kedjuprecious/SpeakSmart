import React from 'react';
import PageHeader from '../Components/PageHeader';
import SpeechSynthesisMain from '../Features/SpeechSynthesis/SpeechSynthesisMain';
import '../Styles/SynthesisPage.css'; 

const SynthesisPage = () => {
  return (
    <div className='synthesis-container'>
      <PageHeader title="Speech Synthesis" bgColor="#32CD32" />
      <SpeechSynthesisMain />
    </div>
  );
};

export default SynthesisPage;
