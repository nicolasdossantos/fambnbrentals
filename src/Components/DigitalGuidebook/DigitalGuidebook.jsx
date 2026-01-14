import React from 'react';
import TileGrid from './TileGrid';
import coverImage from '../../photos/general/cover_50.jpg'
import WifiIcon from '@mui/icons-material/Wifi';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CheckIcon from '@mui/icons-material/Check';
import '../../style/DigitalGuideBook.css';
import ComingSoon from '../ComingSoon';

function DigitalGuideBook() {
  const propertyId = "";
  
  const [guestyAPIKey, setGuestyAPIKey] = React.useState("");
  const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 768);
  const [copied, setCopied] = React.useState(false);

  const wifiPassword = "Poconos2023";

  const handleCopyPassword = async () => {
    try {
      await navigator.clipboard.writeText(wifiPassword);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };


  React.useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
        // Set window width/height to state
        setIsMobile(window.innerWidth <= 768);
    }
    
    // Add event listener
    window.addEventListener("resize", handleResize);
    
    // Call handler right away so state gets updated with initial window size
    handleResize();
    
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
}, []);

  React.useEffect(() => {
    if(guestyAPIKey === ""){
      // Future: Fetch Guesty API key
    }
  }, []);

  return (
    <div>
      {!isMobile ? <ComingSoon /> : 
      <div className="App main">
      <div className="guidebook-content">
        <div className="cover-container">
          <img id="coverImage" src={coverImage} alt="Cover" />
          <div className="cover-overlay"></div>
          <div className="welcome-text">
            <span className="welcome-subtitle">Welcome to</span>
            <h1 className="property-name">194 Bishop</h1>
          </div>
        </div>
        
        <div className="wifi-bar" onClick={handleCopyPassword}>
          <div className="wifi-content">
            <WifiIcon className="wifi-icon" />
            <div className="wifi-details">
              <span className="wifi-label">WiFi Network</span>
              <span className="wifi-network">FAM BNB</span>
            </div>
          </div>
          <div className="wifi-password-section">
            <div className="wifi-password-info">
              <span className="wifi-label">Password</span>
              <span className="wifi-password">{wifiPassword}</span>
            </div>
            <button className={`copy-btn ${copied ? 'copied' : ''}`}>
              {copied ? <CheckIcon className="copy-icon" /> : <ContentCopyIcon className="copy-icon" />}
              <span>{copied ? 'Copied!' : 'Copy'}</span>
            </button>
          </div>
        </div>
        
        <TileGrid />
      </div>
    </div>}
    </div>
  );
}

export default DigitalGuideBook;