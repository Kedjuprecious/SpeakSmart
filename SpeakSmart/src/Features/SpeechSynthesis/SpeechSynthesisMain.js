import React from 'react';
// import SpeechSynthesisInput from './SpeechSynthesisInput';
import SpeechSynthesisReact from './SpeechSynthesisReact';
import '../../Styles/SpeechSynthesisReact.css';


const SpeechSynthesisMain = () => {
  return (
    <div className='synthesisMain-container'>
      {/* <SpeechSynthesisInput /> */}
      <SpeechSynthesisReact />
    </div>
  );
};


export default SpeechSynthesisMain;
