import './Timeline.css';
import React from 'react';

class Timeline extends React.Component {
  render() {
    return <div className="Timeline">
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