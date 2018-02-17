import React from 'react';
import { Provider } from 'react-redux';
import {
  Router,
  Route,
  Switch,
} from 'react-router-dom';
import styled from 'styled-components';
import store from '../store';

import VideoInput from './VideoInput';
import VideoPlayer from './VideoPlayer';

import close from '../assets/close.png';

import history from '../history';

const Popup = () => (
  <Provider store={store}>
    <PopupWrapper>
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={VideoInput} />
          <Route path="/video-player" component={VideoPlayer} />
        </Switch>
      </Router>
      <Close />
    </PopupWrapper>
  </Provider>
);

const PopupWrapper = styled.div`
  position: relative;
  max-width: 867px;
  background: #fff;
  margin: 4rem auto;
  padding: 3.2rem;
  border-radius: 0.3rem;

  @media (max-width: 910px) {
    width: 95%;
  }
`;

const Close = styled.div`
  cursor: pointer;
  position: absolute;
  width: 2.2rem;
  height: 2.2rem;
  top: -1.2rem;
  right: -1.2rem;
  background: url(${close}) center / cover;
  transition: 0.2s all;

  &:hover {
    transform: rotate(90deg);
  }
`;

export default Popup;
