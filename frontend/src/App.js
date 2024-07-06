import React, { useState} from 'react';
import ReactPlayer from 'react-player';

const App = () => {
  const [URL, setURL] = useState('');
  const [videoData, setVideoData] = useState(null);
  const [error, setError] = useState('');

  const fetchVideoData = async (url) => {
    try {
      const response = await fetch('http://localhost:4000/video', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url}),
      });
      if (!response.ok) {
        throw new Error('Failed to fetch video data');
      }
      const data = await response.json();
      setVideoData(data);
      setError('');
    } catch (error) {
      console.error(error);
      setError('Failed to fetch video data');
      setVideoData(null);
    }
  };

  const handleDownload = () => {
    if (URL) {
      fetchVideoData(URL);
    }
  };

  return (
    <div className='app'>
        <div className='content'>
          <h2 className='heading'>Complete YouTube Toolkit !</h2>
          <div>
          <input
            className='URL-input'
            placeholder='e.g.https://youtu.be/EXMOiMXF4C8?si=vdKevmaA8diF_UZT'
            value={URL}
            onChange={(e) => {
              setURL(e.target.value);
            }}
          />
          
          <button onClick={handleDownload} className='convert-button'>
            Get Details
          </button>
          </div>
        </div>
      {error && <div className='error'>{error}</div>}
      {videoData && (
        <div className='videoDetails'>
          <div className='details-container'>
            <h2 className='video-title'>{videoData.title}</h2>
            <img src={videoData.thumbnail} alt='Video Thumbnail' className='thumbnail' />
            <div>
              <a href={videoData.download} download className='download-link'>
                Download
              </a>
            </div>
          </div>
        </div>
      )}
      <div className='videoPlayer'>
        <ReactPlayer url={URL} controls={true} />
      </div>
    </div>
  );
};

export default App;
