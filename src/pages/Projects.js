import React, { useEffect } from 'react';

const Projects = () => {
  // Set dark mode on the document element when the component mounts.
  

  const headerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  };

  const centeredDivStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const h1Style = {
    textAlign: 'center',
    marginTop: '280px', // Adjust the margin top as needed to push the <h1> lower
  };

  const pStyle = {
    textAlign: 'center',
    marginTop: '150px', // Adjust the margin top as needed to push the <p> lower
  };

  return (
    <div>
      <div className="Header" style={headerStyle}>
        <div style={centeredDivStyle}>
          <h1 style={h1Style} className="line-1 anim-typewriter">{`Jose Jimenez`}</h1>
          <p style={pStyle} className="line-1 anim-typewriter">Software Engineer</p>
        </div>
      </div>
    </div>
  );
};

export default Projects;

