import React, { useState } from 'react';

function ProfileSettingsButton() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  let settingsIcon= require("../imgAssets/settingsicon.png")
  
  // Toggle the menu's visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <div className="profile-settings-button">
      
      <img
         className="profile-settings-logo"
         src={settingsIcon}
         alt='Settings'
         onClick={toggleMenu}
       />
      {isMenuOpen && (
        <div className="profile-settings-menu">
          {/* Add menu items here */}
          <ul>
            <li>Change Password</li>
            <li>Edit Profile</li>
            <li>Logout</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default ProfileSettingsButton;
