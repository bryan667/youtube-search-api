import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = props => {
  const videoItems = props.VideoResponse.map(list => {
    return (
      <VideoListItem
        onVideoSelect2={props.onVideoSelect}
        key={list.etag}
        videoObject={list}
      />
    );
  });

  return <ul className="list-group">{videoItems}</ul>;
};

export default VideoList;
