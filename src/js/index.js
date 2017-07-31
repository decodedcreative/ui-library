// Import CSS
import '../scss/styles.scss';

// Import React and ReactDOM
import React from 'react'; // Necessary for JSX
import { render } from 'react-dom';

// Import our JS code
import App from './components/App';

render(<App/>, document.querySelector('#app'));
