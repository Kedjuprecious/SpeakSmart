import React, { useState, useEffect, useRef } from "react";
import { FaMicrophoneAlt, FaClipboard, FaPen, FaGlobe } from "react-icons/fa";
import "../../Styles/SpeechRecognitionMain.css";

const SpeechRecognitionInput = () => {
  const [text, setText] = useState("");
  const [recording, setRecording] = useState(false);
  const [listeningMessage, setListeningMessage] = useState("");
  const [language, setLanguage] = useState("en-US");
  const recognition = useRef(null);

  const languageOptions = [
    { code: "en-US", label: "English (US)" },
    { code: "en-GB", label: "English (UK)" },
    { code: "es-ES", label: "Spanish" },
    { code: "fr-FR", label: "French" },
    { code: "de-DE", label: "German" },
    { code: "it-IT", label: "Italian" },
    { code: "pt-PT", label: "Portuguese" },
    { code: "nl-NL", label: "Dutch" },
    { code: "ru-RU", label: "Russian" },
    { code: "ja-JP", label: "Japanese" },
    { code: "ko-KR", label: "Korean" },
    { code: "zh-CN", label: "Chinese (Mandarin)" },
    { code: "ar-SA", label: "Arabic" },
    { code: "hi-IN", label: "Hindi" },
    { code: "tr-TR", label: "Turkish" },
  ];

  useEffect(() => {
    if (!("webkitSpeechRecognition" in window)) {
      alert("Your browser does not support Speech Recognition.");
      return;
    }

    recognition.current = new window.webkitSpeechRecognition();
    recognition.current.continuous = true;
    recognition.current.interimResults = true;
    recognition.current.lang = language;

    recognition.current.onresult = (event) => {
      let transcript = "";
      for (let i = 0; i < event.results.length; i++) {
        transcript += event.results[i][0].transcript + " ";
      }
      setText((prevText) => prevText + " " + transcript.trim());
    };

    recognition.current.onerror = (event) => {
      console.error("Speech recognition error:", event.error);
    };
  }, [language]);

  const handleToggleRecording = () => {
    if (recording) {
      recognition.current.stop();
      setRecording(false);
      setListeningMessage("");
    } else {
      recognition.current.start();
      setRecording(true);
      setListeningMessage("Listening...");
      setText("");
    }
  };

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(text).then(() => {
      alert("Text copied to clipboard!");
    });
  };

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  return (
    <div className="recognition-main-container">
      <div className="language-selector">
        <button className="language-btn" title="Choose Language">
          <FaGlobe size={24} color="#1E90FF" />
        </button>
        <select id="language-select" value={language} onChange={handleLanguageChange} className="language-dropdown">
          {languageOptions.map((option) => (
            <option key={option.code} value={option.code}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div className="recognition-textarea-container">
        <textarea value={text} readOnly className="recognition-textarea" />
      </div>

      <div className="action-buttons-container">
        <button className="edit-btn" title="Edit text">
          <FaPen size={18} color="#1E90FF" />
        </button>
        <button className="clipboard-btn" onClick={handleCopyToClipboard} title="Copy to clipboard">
          <FaClipboard size={18} color="#1E90FF" />
        </button>
      </div>
      
      {listeningMessage && <p className="listening-indicator">{listeningMessage}</p>}
      <button
        className="recognition-mic-btn"
        onClick={handleToggleRecording}
        title={recording ? "Stop Recording" : "Start Recording"}
      >
        <FaMicrophoneAlt size={35} color={recording ? "#ff0000" : "#ffffff"} />
      </button>
    </div>
  );
};

export default SpeechRecognitionInput;
