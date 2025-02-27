import React, { useState } from "react";
import { FaMicrophoneAlt, FaClipboard } from "react-icons/fa";
import "../../Styles/SpeechRecognitionMain.css";

const SpeechRecognitionInput = () => {
  const [text, setText] = useState("");
  const [recording, setRecording] = useState(false);

  const handleToggleRecording = () => {
    if (recording) {
      setRecording(false);
      setText("Recognized speech will appear here.");
    } else {
      setRecording(true);
      setText("Listening..."); // Placeholder while recording
    }
  };

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(text).then(() => {
      alert("Text copied to clipboard!");
    });
  };

  return (
    <div className="recognition-main-container">
      <div className="recognition-textarea-container">
        <textarea value={text} readOnly className="recognition-textarea" />
        <button className="clipboard-btn" onClick={handleCopyToClipboard} title="Copy to clipboard">
          <FaClipboard size={24} color="#1E90FF" />
        </button>
      </div>
      <button
        className="recognition-mic-btn"
        onClick={handleToggleRecording}
        title={recording ? "Stop Recording" : "Start Recording"}
      >
        <FaMicrophoneAlt size={40} color={recording ? "#ff0000" : "#ffffff"} />
      </button>
    </div>
  );
};

export default SpeechRecognitionInput;
