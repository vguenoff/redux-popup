import React from 'react';
import { Route, Switch } from 'react-router-dom';

import VideoInput from './VideoInput';
import VideoPlayer from './VideoPlayer';

const App = () => (
  <Switch>
    <Route exact path="/" component={VideoInput} />
    <Route path="/video-player" component={VideoPlayer} />
  </Switch>
);

export default App;
