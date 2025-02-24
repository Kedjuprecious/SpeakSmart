import React from 'react'
import PageHeader from '../Components/PageHeader'
import SpeechRecognitionMain from '../Features/SpeechRecognition/SpeechRecognitionMain'


function RecognitionPage() {
  return (
    <div className='recognition-container'>
      <PageHeader title="Speech Recognition" bgColor="#1E90FF" />
      <SpeechRecognitionMain />
    </div>
    
  )
}

export default RecognitionPage