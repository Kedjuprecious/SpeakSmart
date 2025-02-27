import React, { useState, useEffect } from 'react';
import { FaMicrophoneAlt, FaGlobe } from 'react-icons/fa';
import '../../Styles/SpeechSynthesisReact.css';

const SpeechSynthesisReact = () => {
  const [text, setText] = useState('');
  const [voices, setVoices] = useState([]);
  const [selectedVoice, setSelectedVoice] = useState(null);
  const [pitch, setPitch] = useState(1);
  const [rate, setRate] = useState(1);

  useEffect(() => {
    if ('speechSynthesis' in window) {
      const loadVoices = () => {
        const availableVoices = window.speechSynthesis.getVoices();
        setVoices(availableVoices);
        if (availableVoices.length > 0) {
          const defaultVoice = localStorage.getItem('preferredVoice');
          setSelectedVoice(defaultVoice || availableVoices[0].name);
        }
      };
      loadVoices();
      window.speechSynthesis.onvoiceschanged = loadVoices;
    } else {
      alert('Speech synthesis is not supported in this browser.');
    }
  }, []);

  useEffect(() => {
    if (selectedVoice) {
      localStorage.setItem('preferredVoice', selectedVoice);
    }
  }, [selectedVoice]);

  const handleSpeak = () => {
    if (!text.trim()) {
      alert('Please enter some text to read aloud.');
      return;
    }
    const utterance = new SpeechSynthesisUtterance(text);
    const voice = voices.find((v) => v.name === selectedVoice);
    if (voice) utterance.voice = voice;
    utterance.pitch = pitch;
    utterance.rate = rate;
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className='synthesisMainReact-container'>
      <div className="accent-selector">
        <button className="accent-btn" title="Choose Accent">
          <FaGlobe size={24} color="#32CD32" />
        </button>
        <select
          id="accent-select"
          value={selectedVoice || ''}
          onChange={(e) => setSelectedVoice(e.target.value)}
          className="accent-dropdown"
        >
          {voices.map((voice) => (
            <option key={voice.name} value={voice.name}>
              {voice.name} ({voice.lang})
            </option>
          ))}
        </select>
      </div>

      <button className='speech-mic-btn' onClick={handleSpeak}>
        <FaMicrophoneAlt size={60} />
      </button>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder='Write something...'
        className='speech-input'
      />
      
      <div className='controls-container' style={{ display: 'flex', justifyContent: 'flex-end', width: '90%', marginTop: '10px' }}>
        <div className='control-group' style={{ marginRight: '10px'}}>
          <button 
            onClick={() => setText('')} 
            className='control-btn'
            style={{ padidng: '4px'}}
          >
            Refresh
          </button>
        </div>
        <div className='control-group' style={{ marginRight: '10px' }}>
          <label>Pitch:</label>
          <select value={pitch} onChange={(e) => setPitch(parseFloat(e.target.value))} className='control-dropdown'>
            {[...Array(16).keys()].map(i => {
              const value = (i * 0.1 + 0.5).toFixed(1);
              return <option key={value} value={value}>{value}</option>;
            })}
          </select>
        </div>
        <div className='control-group'>
          <label>Rate:</label>
          <select value={rate} onChange={(e) => setRate(parseFloat(e.target.value))} className='control-dropdown'>
            {[...Array(16).keys()].map(i => {
              const value = (i * 0.1 + 0.5).toFixed(1);
              return <option key={value} value={value}>{value}</option>;
            })}
          </select>
        </div>
      </div>
    </div>
  );
};

export default SpeechSynthesisReact;
