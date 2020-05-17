import React, { Component } from "react";
import PropTypes from "prop-types";
import SpeechRecognition from "react-speech-recognition";
import Input from '@material-ui/core/Input';
//export const  transcript = true

const propTypes = {
  // Props injected by SpeechRecognition
  transcript: PropTypes.string,
  resetTranscript: PropTypes.func,
  browserSupportsSpeechRecognition: PropTypes.bool
};

const Dictaphone = ({
  transcript,
  resetTranscript,
  browserSupportsSpeechRecognition
}) => {
  if (!browserSupportsSpeechRecognition) {
    return null;
  }else if(transcript.includes('next') || transcript.includes(' next') || transcript.includes('next ') ){
    window.location.href = '/askAge';
    return;
  }

  return (
    <div>
      <Input placeholder="speak up your name" inputProps={{ 'aria-label': 'description' }} value={transcript} /> 
      
    </div>
  );
};

Dictaphone.propTypes = propTypes;

export default SpeechRecognition(Dictaphone);