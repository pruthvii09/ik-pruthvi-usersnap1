import React from 'react';
import ReactDOM from 'react-dom/client';
import PopupComponent from './Popup.js';

export const renderWidget = ({ target, options = {} }) => {
  const targetElement = 
    typeof target === 'string' 
      ? document.querySelector(target) 
      : target;

  if (!targetElement) {
    console.error(`Target element ${target} not found`);
    return;
  }

  const root = ReactDOM.createRoot(targetElement);
  root.render(React.createElement(PopupComponent, options));
};

if (typeof window !== 'undefined') {
  window.PopupTool = { renderWidget };
}

export { PopupComponent as Popup };