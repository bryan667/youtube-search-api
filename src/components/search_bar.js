import React, { Component } from 'react';

class Searchbar extends Component {
  constructor(props) {
    super(props);
    this.state = { search: '' };
  }

  render() {
    return (
      <div className="search-bar">
        <input
          placeholder="YouTube Search"
          value={this.state.search}
          onChange={event => this.onInputChange(event.target.value)}
        />
      </div>
    );
  }

  onInputChange(search) {
    this.setState({ search });
    this.props.onSearchChange(search);
  }
}

export default Searchbar;
