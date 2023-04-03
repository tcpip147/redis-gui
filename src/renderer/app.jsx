import React from 'react';
import { createRoot } from 'react-dom/client';
import './app.scss';
import settings from '/package.json';
import logo from '@assets/images/logo.png';
import { maximizePath, minimizePath, closePath } from '@common/globalVariables';
import Application from './components/Application';
import { configureStore } from '@reduxjs/toolkit';

const app = (
  <div className='app' style={settings.customTitleBar ? null : { display: 'none' }}>
    <div className='customWindow'>
      <div className='logo'>
        <img src={logo} />
      </div>
      <div className='title'>
        {settings.productName}
      </div>
      <div className='controls'>
        <div className='control' onClick={onClickMinimize}>
          <svg aria-hidden='true' version='1.1' width='10' height='10'>
            <path fill='currentColor' shapeRendering='crispEdges' d={minimizePath} />
          </svg>
        </div>
        <div className='control' onClick={onClickMaximize}>
          <svg aria-hidden='true' version='1.1' width='10' height='10'>
            <path fill='none' stroke='currentColor' strokeWidth='1' shapeRendering='crispEdges' d={maximizePath} id='window-btn-maximize' />
          </svg>
        </div>
        <div className='control close' onClick={onClickClose}>
          <svg aria-hidden='true' version='1.1' width='10' height='10'>
            <path fill='currentColor' shapeRendering='crispEdges' d={closePath} />
          </svg>
        </div>
      </div>
    </div>
    <div id='container' className='container'>
      <Application />
    </div>
  </div>
);

function onClickMinimize() {
  electronWindow.ipcContextTitlebar.minimize();
}

function onClickMaximize() {
  electronWindow.ipcContextTitlebar.toggleMaximize();
}

function onClickClose() {
  electronWindow.ipcContextTitlebar.close();
}

createRoot(document.getElementById('app')).render(app);