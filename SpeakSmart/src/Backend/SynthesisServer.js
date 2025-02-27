const express = require("express");
const cors = require("cors");
const sdk = require("microsoft-cognitiveservices-speech-sdk");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Speech SDK Configuration
const subscriptionKey = '8GLplNbJMwXhQP7YAPAC8mp7J7BdDRAIq7ygc2paDsRoaYz6CSk2JQQJ99BBACYeBjFXJ3w3AAABACOGDIhQ';
const serviceRegion = 'eastus';

console.log("Speech Subscription Key:", subscriptionKey ? "Loaded" : "Not Found");
console.log("Speech Service Region:", serviceRegion ? "Loaded" : "Not Found");

// Text-to-Speech Route
app.post("/api/tts/synthesize", (req, res) => {
  console.log("Incoming request body:", req.body);
  const { text } = req.body;

  if (!text) {
    console.warn("No text provided in request.");
    return res.status(400).json({ error: "Text is required" });
  }

  console.log("Initializing Speech Config...");
  const speechConfig = sdk.SpeechConfig.fromSubscription(subscriptionKey, serviceRegion);
  speechConfig.speechSynthesisVoiceName = "en-US-JennyNeural";
  console.log("Speech Config Initialized.");

  const audioConfig = sdk.AudioConfig.fromDefaultSpeakerOutput();
  const synthesizer = new sdk.SpeechSynthesizer(speechConfig, audioConfig);

  console.log("Starting speech synthesis...");
  synthesizer.speakTextAsync(
    text,
    (result) => {
      console.log("Speech synthesis result:", result);
      if (result.reason === sdk.ResultReason.SynthesizingAudioCompleted) {
        console.log("Speech synthesis completed successfully.");
        res.status(200).json({
          message: "Speech synthesized successfully",
          audioUrl: "URL_OF_AUDIO_FILE",
        });
      } else {
        console.error("Speech synthesis failed:", result);
        res.status(500).json({ error: "Speech synthesis failed" });
      }
      synthesizer.close();
    },
    (err) => {
      console.error("Error during synthesis:", err);
      res.status(500).json({ error: err.message || err });
      synthesizer.close();
    }
  );
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
