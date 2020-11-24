import React from 'react';

class LikeButton extends React.Component {
  state = {
    count: 0,
  };

  changeStateButton = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  render() {
    return (
      <button type="button" onClick={this.changeStateButton}>
        {this.state.count} Likes
      </button>
    );
  }
}

export default LikeButton;
