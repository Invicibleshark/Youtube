import React, { useState } from 'react';
import ReactPlayer from 'react-player';

export const App = () => {
  const [URL, setURL] = useState('');

  const sendURL = (URL) => {
    window.location.href = `http://localhost:4000/download?URL=${URL}`;
  };
  return (
    <div className='app'>
      <div>
        <h1 className='heading'>YouTube Downloader!</h1>
        <div className='content'>
          <input
            className='URL-input'
            placeholder='e.g. https://www.youtube.com/watch?v=MtN1YnoL46Q'
            value={URL}
            onChange={(e) => setURL(e.target.value)}
          />
          <button onClick={()=>{
            console.log(`URL: ${URL}`);
            sendURL(URL);
          }} className='convert-button'>
            Download
          </button>
        </div>
      </div>
      <div className='videoPlayer'>
        <ReactPlayer url={URL} controls={true} />
      </div>
    </div>
  );
};

export default App;
