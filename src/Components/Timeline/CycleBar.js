import React from 'react'
  
let BloodLogo = require('./blood.png')
const ProgressBar = ({progressColor,backColor,progress,height}) => {
      
    const Parentdiv = {
        height: height,
        width: '93%',
        backgroundColor: backColor,
        borderRadius: 40,
        margin: 50
      }
      
      const Childdiv = {
        height: '100%',
        width: `${progress}%`,
        backgroundColor: progressColor,
       borderRadius:40,
        textAlign: 'right'
      }

      /*const progresstext = {
        padding: 10,
        color: 'black',
        fontWeight: 900
        
      }*/
      //<span style={progresstext}>{`O`}</span> goes in the middle of the inner div below
    return (
    <div style={Parentdiv}>
      <div style={Childdiv}>
        <img src={BloodLogo} alt="O" width="25" height="30"></img>
      </div>
    </div>
    )
}
  
export default ProgressBar;