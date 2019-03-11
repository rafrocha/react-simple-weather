import React, { Component } from "react";
import ReactDOM from "react-dom";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lat: null
        };
        window.navigator.geolocation.getCurrentPosition(
            position => {
                this.setState({ lat: position.coords.latitude });
            },
            err => console.log(err)
        );
    }
    componentDidUpdate() {}
    render() {
        const { lat } = this.state;

        return <div>Latitude: {lat}</div>;
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));
