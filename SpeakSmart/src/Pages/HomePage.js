import React from 'react';
import FeatureBox from '../Components/FeatureBox';
import { MdKeyboardVoice, MdVolumeUp, MdRecordVoiceOver } from "react-icons/md";
import MenuBar from '../Components/MenuBar';
import '../Styles/HomePage.css';

const HomePage = () => {
    return (
        <div className="homepage">
            <div className="header-bar">
                <MenuBar />
                <h1 className="HomePage-heading">SpeakSmart</h1>
            </div>
            <div className="feature-container">
                <div className="feature-column">
                    <FeatureBox
                        icon={MdRecordVoiceOver}
                        title="Pronunciation Assessment"
                        description="Evaluate clarity and accuracy of spoken words."
                        link="/assessment"
                        boxColor="#FF6347"
                        iconStyle={{ fontSize: '100px'}}
                    />
                </div>
                <div className="feature-column">
                    <FeatureBox
                        icon={MdVolumeUp}
                        title="Speech Synthesis"
                        description="Convert text to speech"
                        link="/synthesis"
                        boxColor="#32CD32"
                        iconStyle={{ fontSize: '100px'}}
                    />
                    <FeatureBox
                        icon={MdKeyboardVoice}
                        title="Speech Recognition"
                        description="Convert your speech to text"
                        link="/recognition"
                        boxColor="#1E90FF"
                        iconStyle={{ fontSize: '100px'}}
                    />
                </div>
            </div>
        </div>
    );
}

export default HomePage;
