import './Timeline.css';
import React from 'react';
import ProgressBar from './CycleBar.js'

class Timeline extends React.Component {
  render() {
    return <div className="Timeline">
        <ProgressBar progressColor="darkturquoise" backColor="lavender" progress='30'  height={30}></ProgressBar>
          <header className="Timeline-header">
          </header>
        </div>
      ;
  }
   
}

export default Timeline;