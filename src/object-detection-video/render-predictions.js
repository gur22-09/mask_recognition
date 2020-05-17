import Speech from 'speak-tts' 


const getLabelText = (prediction) => {
  const scoreText = (prediction.score * 100).toFixed(1)
  return `${prediction.label} ${scoreText}%`
}

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
let i  = 0 

export const renderPredictions = (ctx, predictions) => {
  // Font options.
  const font = `${16}px 'ibm-plex-sans', Helvetica Neue, Arial, sans-serif`
  ctx.setFont(font)
  ctx.setTextBaseLine('top')
  const border = 4
  const xPadding = 16
  const yPadding = 8
  const offset = 6
  const textHeight = parseInt(font, 10) // base 10

  predictions.forEach((prediction) => {
    const x = prediction.bbox[0]
    const y = prediction.bbox[1]
    const width = prediction.bbox[2]
    const height = prediction.bbox[3]

    const predictionText = getLabelText(prediction)
    //console.log(predictionText)
    //console.log(predictionText.includes("No"))
    if (predictionText.includes("No")){
    // Draw the bounding box.
    //console.log(predictionText)
    ctx.setStrokeStyle('#FF0000')
    ctx.setLineWidth(border)
    }
    else{
      ctx.setStrokeStyle('#00FF00')
      ctx.setLineWidth(border)
    }

    ctx.strokeRect(
      Math.round(x),
      Math.round(y),
      Math.round(width),
      Math.round(height)
    )
    // Draw the label background.
    if (predictionText.includes("No")){
    ctx.setFillStyle('#FF0000')
    }
    else{
      ctx.setFillStyle('#00FF00')
    }
    const textWidth = ctx.measureText(predictionText).width
    ctx.fillRect(
      Math.round(x - border / 2),
      Math.round(y - (textHeight + yPadding) - offset),
      Math.round(textWidth + xPadding),
      Math.round(textHeight + yPadding)
    )
  })

 
  predictions.forEach((prediction) => {
    const x = prediction.bbox[0]
    const y = prediction.bbox[1]

    const predictionText = getLabelText(prediction)
    // Draw the text last to ensure it's on top.
    ctx.setFillStyle('#ffffff')
    ctx.fillText(
      predictionText,
      Math.round(x - border / 2 + xPadding / 2),
      Math.round(y - (textHeight + yPadding) - offset + yPadding / 2)
    )
    if (prediction.class === 'No Mask') {
      i++
      if(i ===10){
        speech.speak({
          text: 'Hi there !',
          queue:false,
          listeners:{
            onend: () => {
              console.log("End utterance")
           }
          }
      }).then(() => {
          console.log("Success !");
         setTimeout(()=>{
          window.location.href = '/askName'
         },2000);
      }).catch(e => {
          console.error("An error occurred :", e)
      })
     
      }
    //  console.log(i);
    }
  })
}
