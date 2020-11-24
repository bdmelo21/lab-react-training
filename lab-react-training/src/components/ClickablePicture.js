import React from 'react';

class ClickablePicture extends React.Component {
  state = {
    image: this.props.img,
  };
  changeImage = () => {
    this.setState({
      image: this.props.imgClicked,
    });
  };
  render() {
    return <img src={this.state.image} onClick={this.changeImage}></img>;
  }
}

export default ClickablePicture;
