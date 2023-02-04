import logo from './logo.svg';
import './Timeline.css';

function Timeline() {
  return (
    <div className="Timeline">
      <header className="Timeline-header">
        <img src={logo} className="Timeline-logo" alt="logo" />
        <p>
          test2 - Edit <code>src/Timeline.js</code> and save to reload.
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
  );
}