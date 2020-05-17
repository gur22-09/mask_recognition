import React from 'react'

import Speech from 'speak-tts' 

import SpeechRecognition from './SpeechRecognition'

const speech = new Speech() // will throw an exception if not browser supported
if(speech.hasBrowserSupport()) { // returns a boolean
    console.log("speech synthesis supported")
}

speech.init().then((data) => {
  // The "data" object contains the list of available voices and the voice synthesis params
  console.log("Speech is ready, voices are available", data)
}).catch(e => {
  console.error("An error occured while initializing : ", e)
})


let sspeak= ()=> {
  speech.speak({
    text: 'Whats Your Age?',
}).then(() => {
    console.log("Success !")
}).catch(e => {
    console.error("An error occurred :", e)
})
}



const AskAge = () => {
    // Declare a new state variable, which we'll call "count"
 
  
  
    return (
      <div>
    
       <h1> Whats Your Age?</h1>
       <form  noValidate autoComplete="off">
 
      
       <SpeechRecognition/>
        {sspeak()}
       </form>
       
        
      </div>
      
    );
  }

export default AskAge; 