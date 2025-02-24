import React, { useState } from "react";
import { FaMicrophoneAlt } from "react-icons/fa";
import "../../Styles/SpeechSynthesisInput.css";

const SpeechSynthesisInput = () => {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    if (e.target.value.length <= 1000) {
      setText(e.target.value);
    }
  };

  return (
    <div className="synthesis-input-main-container">
      {/* Microphone Button */}
      <button className="speech-mic-btn">
        <FaMicrophoneAlt size={60} color="#ffffff" />
      </button>

      {/* Text Input */}
      <div className="speech-input-container">
        <textarea
          value={text}
          onChange={handleChange}
          placeholder="Write something..."
          className="speech-input"
          rows={1}
        />
      </div>
    </div>
  );
};

export default SpeechSynthesisInput;
