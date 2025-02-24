import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import AssessmentPage from './Pages/AssessmentPage';
import RecognitionPage from './Pages/RecognitionPage';
import SynthesisPage from './Pages/SynthesisPage';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/synthesis" element={<SynthesisPage />} />
        <Route path="/recognition" element={<RecognitionPage />} />
        <Route path="/assessment" element={<AssessmentPage />} />
      </Routes>
    </Router>
  )
}

export default App