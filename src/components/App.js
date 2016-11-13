import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: 0
    };
    this.handleImageTimer = this.handleImageTimer.bind(this)
  }

  handleImageTimer() {
    let nextImage = this.state.image + 1;
      if (nextImage >= this.props.data.length) {
        this.setState({image: 0})
    } else {
      this.setState({image: nextImage})
    }
  }

  componentDidMount() {
    this.timer = setInterval(this.handleImageTimer,2000)
  }

  render () {
    return (
      <div className="appbox row">
        <h1 className="title small-8 text-center">Hiring Partners</h1>
        <hr className="line small-7"></hr>
        <h4 className="blurb small-8 text-center">We work with the very best. We are proud of our partners, We are proud of our partners.</h4>

        <div className="partner small-8 text-center">
        <img src={this.props.data[this.state.image]}/>
        </div>
      </div>
    );
  }
}

export default App;
