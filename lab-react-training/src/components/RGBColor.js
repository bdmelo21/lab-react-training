import React, { Component } from 'react';
import SingleColorPicker from './SingleColorPicker';

export default class RGBColorPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rValue: 255,
      bValue: 255,
      gValue: 255,
    };
    this.handleColorChange = this.handleColorChange.bind(this);
  }
  handleColorChange(value, color) {
    if (color === 'r') {
      this.setState({
        rValue: value,
      });
    }
    if (color === 'g') {
      this.setState({
        gValue: value,
      });
    }
    if (color === 'b') {
      this.setState({
        bValue: value,
      });
    }
  }
  render() {
    return (
      <div className="RGBColorPicker">
        <SingleColorPicker
          color="r"
          value={this.state.rValue}
          onColorChange={this.handleColorChange}
        />{' '}
        {/* Method 1 */}
        <SingleColorPicker
          color="g"
          value={this.state.gValue}
          onColorChange={(value) => this.handleColorChange(value, 'g')}
        />{' '}
        {/* Method 2 */}
        <SingleColorPicker
          color="b"
          value={this.state.bValue}
          onColorChange={(value) => this.handleColorChange(value, 'b')}
        />{' '}
        {/* Method 2 */}
        <div className="flex-align-items-center">
          <div
            className="color-box"
            style={{
              backgroundColor: `rgb(${this.state.rValue},${this.state.gValue},${this.state.bValue})`,
            }}
          />
          rgb({this.state.rValue},{this.state.gValue},{this.state.bValue})
        </div>
      </div>
    );
  }
}
