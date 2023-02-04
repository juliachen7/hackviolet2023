import React from 'react'
  
const Progress_bar = ({progressColor,backColor,progress,height}) => {
     
    const Parentdiv = {
        height: height,
        width: '100%',
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
      
      const progresstext = {
        padding: 10,
        color: 'black',
        fontWeight: 900
      }
        
    return (
    <div style={Parentdiv}>
      <div style={Childdiv}>
        <span style={progresstext}>{`O`}</span>
      </div>
    </div>
    )
}
  
export default Progress_bar;