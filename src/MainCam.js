import React from 'react'

import useModel from './useModel'
import ObjectDetectionVideo from './object-detection-video/ObjectDetectionVideo'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import './index.css'

const handlePrediction = (predictions) => {
  console.timeEnd('detect')
  console.time('detect')
  console.log(predictions)
}

const render = (ctx, predictions) => {
  predictions.forEach((prediction) => {
    const x = prediction.bbox[0]
    const y = prediction.bbox[1]
    const width = prediction.bbox[2]
    const height = prediction.bbox[3]

    ctx.setStrokeStyle('#0062ff')
    ctx.setLineWidth(4)
    ctx.strokeRect(
      Math.round(x),
      Math.round(y),
      Math.round(width),
      Math.round(height)
    )
  })
}




const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(60, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  headText: {
    padding: theme.spacing(0, 75, 6),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));


const MainCam = () => {
  const classes = useStyles();
  const model = useModel(process.env.PUBLIC_URL + '/model_web')

  return (
    <React.Fragment>
    
    
    <div className="fillPage">
      <ObjectDetectionVideo
        model={model}
        // onPrediction={handlePrediction}
        // render={render}
        // aspectFill: The option to scale the video to fill the size of the view.
        //             Some portion of the video may be clipped to fill the view's
        //             bounds.
        // aspectFit:  The option to scale the video to fit the size of the view
        //             by maintaining the aspect ratio. Any remaining area of the
        //             view's bounds is transparent.
        fit="aspectFill"
        // mirrored:   mirror the video about its vertical axis.
        mirrored
      />
    </div>
    <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="alert" gutterBottom>
              Welcome,  
            </Typography>
            </Container>
          
            </div>
  
    </React.Fragment>
  )
}

export default MainCam  
