import React from 'react';
import GitHubButton from './components/GitHubButton';

const App = () => {
  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      minHeight: '100vh',
      background: '#f5f5f5'
    }}>
      <GitHubButton 
        repoUrl="https://github.com/DevCat-HGS/DevTools"
        text="DevTools"
        customStyles={{
          fontSize: '16px',
          fontWeight: '600'
        }}
      />
    </div>
  );
};

export default App;