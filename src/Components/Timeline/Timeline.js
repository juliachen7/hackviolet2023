import './Timeline.css';
import React from 'react';
import ProgressBar from './CycleBar.js'

class Timeline extends React.Component {
  render() {
    return <div className="Timeline">
        <ProgressBar progressColor="red" backColor="black" progress='30'  height={30}></ProgressBar>
          <header className="Timeline-header">
            <p>
              test - Edit <code>src/Timeline.js</code> and save to reload.
            </p>
            <a
              className="Timeline-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >   
              Learn React
            </a>
          </header>
        </div>
      ;
  }
   
}

export default Timeline;