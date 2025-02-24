import React from 'react';
import PageHeader from '../Components/PageHeader';
import PronunciationAssessmentMain from '../Features/PronunciationAssessment/PronunciationAssessmentMain';


function AssessmentPage() {
  return (
    <div className='assessment-container'>
      <PageHeader title="Pronunciation Assessment" bgColor="#FF6347" />
      <PronunciationAssessmentMain />
    </div>
  )
}

export default AssessmentPage