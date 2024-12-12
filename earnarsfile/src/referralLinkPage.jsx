// ReferAFriend.js
import React, { useState,useContext } from "react";
import "./style/referAFriend.css";
import { AuthContext } from './context/authContext';

const ReferAFriend = () => {
  const [copied, setCopied] = useState(false);
const {currentUser} = useContext(AuthContext);
  const referralLink = `https://wegotips.com/register?referralCode=${currentUser?.user.referral_code}`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000); // Reset after 3 seconds
  };

  return (
    <div className="refer-container">
      <h3 className="refer-heading">Refer a Friend</h3>
      <p className="refer-description">
        Share your referral link with friends and earn rewards when they sign up!
      </p>
      <div className="refer-link-container">
        <input 
          type="text" 
          value={referralLink} 
          readOnly 
          className="refer-input" 
        />
        <button 
          className={`refer-button ${copied ? "copied" : ""}`} 
          onClick={copyToClipboard}
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
    </div>
  );
};

export default ReferAFriend;
