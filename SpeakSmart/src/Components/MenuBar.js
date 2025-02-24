import React, { useState } from 'react';
import { MdMenu, MdSettings, MdBuild, MdFeedback, MdHelp } from 'react-icons/md';
import '../Styles/MenuBar.css';

const MenuBar = () => {
  // State to manage if the menu is open or closed
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle menu state when clicked
  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  return (
    <div className="menu-bar">
      <div className="menu-icon" onClick={toggleMenu}>
        <MdMenu size={30} />
      </div>

      {isMenuOpen && (
        <div className="menu-content">
          <ul>
            <li><MdSettings /> <a href="/settings">Settings</a></li>
            <li><MdBuild /> <a href="/preferences">Preferences</a></li>
            <li><MdFeedback /> <a href="/feedback">Feedback</a></li>
            <li><MdHelp /> <a href="/help">Help</a></li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default MenuBar;
