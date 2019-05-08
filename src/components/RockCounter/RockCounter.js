import React, { Component } from 'react';

class RockCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rocksPicked: 0
    }
  }

  clickForMoreRocks = () => {
    this.setState({
      rocksPicked: this.state.rocksPicked + 1,
    })
  }

  clickForLessRocks = () => {
    this.setState({
      rocksPicked: this.state.rocksPicked - 1,
    })
  }

  resetRocks = () => {
    this.setState({
      rocksPicked: 0,
    })
  }

  render() {
    return (
      <div>
        <div>
          Rocks Picked: {this.state.rocksPicked}
        </div>
        <div>
          <button onClick={this.clickForMoreRocks}>Increase</button>
          <button onClick={this.clickForLessRocks}>Decrease</button>
          <button onClick={this.resetRocks}>Reset</button>
        </div>
      </div>
    );
  }
}

export default RockCounter;
