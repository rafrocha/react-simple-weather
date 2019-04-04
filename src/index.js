import React, { Component } from "react";
import ReactDOM from "react-dom";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lat: null,
            errorMessage: ""
        };
        window.navigator.geolocation.getCurrentPosition(
            position => {
                this.setState({
                    lat: position.coords.latitude,
                    errorMessage: ""
                });
            },
            err => {
                this.setState({ errorMessage: err.message, lat: null });
            }
        );
    }
    componentDidUpdate() {}
    render() {
        const { lat, errorMessage } = this.state;
        return (
            <div>
                {!lat && !errorMessage ? <span>Loading...</span> : null}
                {lat && <span> Latitude: {lat}</span>}
                {errorMessage && <span> Error: {errorMessage}</span>}
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));
