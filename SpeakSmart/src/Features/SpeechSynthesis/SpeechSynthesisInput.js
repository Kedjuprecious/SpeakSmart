import React, { useState } from "react";
import { FaMicrophoneAlt } from "react-icons/fa";
import axios from "axios";
import "../../Styles/SpeechSynthesisInput.css";

const SpeechSynthesisInput = () => {
  const [text, setText] = useState("");
  const [audioUrl, setAudioUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState("");  // Added state for loading message

  const handleChange = (e) => {
    if (e.target.value.length <= 1000) {
      setText(e.target.value);
    }
  };

  const handleSpeak = async () => {
    if (!text.trim()) {
      alert("Please enter some text.");
      return;
    }

    setLoading(true);
    setLoadingMessage("Please wait...");  

    // Log the message being sent to the backend
    console.log(`Sending to backend: ${text}`);  // Console log the text being sent

    try {
      const response = await axios.post("http://localhost:5000/api/tts/synthesize", { text });
      if (response.data.audioUrl) {
        setAudioUrl(response.data.audioUrl);
        setLoadingMessage("Audio received. Playing now...");
      }
    } catch (error) {
      console.error("Error:", error.response?.data?.error || error.message);
      setLoadingMessage("Error occurred while processing the request.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="synthesis-input-main-container">
      <button className="speech-mic-btn" disabled={loading} onClick={handleSpeak}>
        <FaMicrophoneAlt size={60} color={loading ? "#ccc" : "#ffffff"} />
      </button>

      <div className="speech-input-container">
        <textarea
          value={text}
          onChange={handleChange}
          placeholder="Write something..."
          className="speech-input"
          rows={1}
        />
      </div>

      {loading && <p className="loading-indicator">{loadingMessage}</p>}  

      {audioUrl && (
        <div>
          <audio controls autoPlay>
            <source src={audioUrl} type="audio/wav" />
            Your browser does not support the audio element.
          </audio>
        </div>
      )}
    </div>
  );
};

export default SpeechSynthesisInput;
