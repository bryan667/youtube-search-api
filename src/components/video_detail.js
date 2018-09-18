import React from 'react';

const VideoDetail = ({ videoDetail }) => {
  if (!videoDetail) {
    return (
      <div className="video-detail">
        <h2 id="loading">Loading...</h2>
      </div>
    );
  }
  const videoId = videoDetail.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="video-detail">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe src={url} title="Youtube" allowFullScreen="allowFullScreen" />
      </div>
      <div className="details">
        <a href={`https://www.youtube.com/watch?v=${videoId}`}>
          {videoDetail.snippet.title}
        </a>
        <div>{videoDetail.snippet.description}</div>
      </div>
    </div>
  );
};

export default VideoDetail;
