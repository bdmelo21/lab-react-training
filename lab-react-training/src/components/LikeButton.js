import React from 'react';

class LikeButton extends React.Component {
  state = {
    count: 0,
    index: -1,
    backgroundColor: 'blue',
  };

  changeStateButton = () => {
    let array = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];

    let newIndex = this.state.index;
    if (newIndex >= array.length - 1) {
      newIndex = 0;
    } else {
      newIndex++;
    }
    this.setState({
      count: this.state.count + 1,
      backgroundColor: array[newIndex],
      index: newIndex,
    });
  };
  render() {
    return (
      <button
        type="button"
        onClick={this.changeStateButton}
        style={{ backgroundColor: this.state.backgroundColor }}
      >
        {this.state.count} Likes
      </button>
    );
  }
}

export default LikeButton;
