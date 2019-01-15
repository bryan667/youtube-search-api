import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import Searchbar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyD6OR3hDFpkmdWUy32WD6M6GHfVb4SUDm4';

class Awyis extends Component {
  constructor(props) {
    super(props);

    this.state = {
      VideoResponse: [],
      selectedVideo: null,
    };

    this.vidSearch('pewds');
  }

  vidSearch(searchstring) {
    YTSearch({ key: API_KEY, term: searchstring }, results => {
      this.setState({
        VideoResponse: results,
        selectedVideo: results[0],
      });
    });
  }

  render() {
    const videoSearch = _.debounce(event => {
      this.vidSearch(event);
    }, 200);

    return (
      <div id="main-body">
        <div id="left">
          <Searchbar onSearchChange={videoSearch} />
          <VideoDetail videoDetail={this.state.selectedVideo} />
        </div>
        <div id="right">
          <VideoList
            onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
            VideoResponse={this.state.VideoResponse}
          />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Awyis />, document.getElementById('root'));
