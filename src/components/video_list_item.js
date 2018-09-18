import React from 'react';

const VideoListItem = ({ videoObject, onVideoSelect2 }) => {
  const imageURL = videoObject.snippet.thumbnails.medium.url;

  return (
    <li onClick={() => onVideoSelect2(videoObject)} className="list-group-item">
      <div className="media">
        <img className="media-object" src={imageURL} alt="noimg" />
        <div className="media-heading">{videoObject.snippet.title}</div>
      </div>
    </li>
  );
};

export default VideoListItem;
