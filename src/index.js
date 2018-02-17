import React from 'react';
import ReactDOM from 'react-dom';
import 'css-reset-and-normalize/css/reset-and-normalize.css';
import './index.css';
import Popup from './components/Popup';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Popup />, document.getElementById('root'));
registerServiceWorker();
