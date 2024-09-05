import React, { useEffect } from "react";

function Home() {
  useEffect(() => {
    document.title = "Home";
    // Remove default body margin
    document.body.style.margin = '0';
  }, []);

  return (
<div
  style={{
    position: 'relative', // Add this line
    height: '100vh',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
    margin: 0,
    padding: 0,
  }}
>
  <div
    style={{
      backgroundImage: `url(${require('./img/image2.jpg')})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      position: 'absolute', // Add this line
      top: 0, // Add this line
      left: 0, // Add this line
      height: '100%',
      width: '100%',
      opacity: 0.9, // Add this line
      zIndex: -1, // Add this line
    }}
  />
  <h1>Spanish Learning App</h1>
</div>
  );
}

export default Home;
