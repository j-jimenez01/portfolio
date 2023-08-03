import React, { useEffect } from 'react';

const Header = () => {
  // Set dark mode on the document element when the component mounts.
  useEffect(() => {
    document.documentElement.classList.add('dark-mode');
    document.getElementById('not-dark').classList.add('inverse-dark');
    document.getElementById('not-dark2').classList.add('inverse-dark');
    var x = document.getElementsByClassName('img-pro');
    for (let i = 0; i < x.length; i += 1) {
      x.item(i).classList.add('inverse-dark');
    }
  }, []);

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

export default Header;

