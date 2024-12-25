import React, { useState } from 'react';

const Popup = ({ buttonText = 'Open Popup', annotation = false }) => {
  const [isOpen, setIsOpen] = useState(false);

  const popupStyles = {
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: isOpen ? 'flex' : 'none',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000,
    },
    content: {
      position: 'relative',
      background: 'white',
      padding: '20px',
      borderRadius: '8px',
      maxWidth: '500px',
      width: '90%',
    },
    closeButton: {
      position: 'absolute',
      top: '10px',
      right: '10px',
      border: 'none',
      background: 'none',
      fontSize: '20px',
      cursor: 'pointer',
    },
    button: {
      padding: '10px 20px',
      backgroundColor: '#007bff',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
    }
  };

  return (
    <div>
      <button
        style={popupStyles.button}
        onClick={() => setIsOpen(true)}
      >
        {buttonText}
      </button>
      
      <div style={popupStyles.overlay}>
        <div style={popupStyles.content}>
          <button
            style={popupStyles.closeButton}
            onClick={() => setIsOpen(false)}
          >
            ×
          </button>
          <h2>Popup Content</h2>
          <p>This is your popup content.</p>
          {annotation && (
            <div style={{ marginTop: '10px' }}>
              <textarea
                placeholder="Add your annotation here..."
                style={{ width: '100%', minHeight: '100px' }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Popup