import React from 'react';
import './GitHubButton.css';

export const GitHubButton = ({ 
  repoUrl = 'https://github.com/DevCat-HGS/DevTools',
  text = 'DevTools',
  customStyles = {}
}) => {
  return (
    <a 
      href={repoUrl} 
      target="_blank" 
      rel="noopener noreferrer"
      className="github-btn"
      style={customStyles}
    >
      {text}
      <img 
        src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" 
        alt="GitHub Logo" 
        className="github-logo"
      />
    </a>
  );
};

export default GitHubButton;