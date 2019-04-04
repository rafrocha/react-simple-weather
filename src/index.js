import React, { Component } from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends Component {
    state = {
        lat: null,
        errorMessage: ""
    };

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position =>
                this.setState({
                    lat: position.coords.latitude,
                    errorMessage: ""
                }),
            err => this.setState({ errorMessage: err.message, lat: null })
        );
    }

    renderContent() {
        if (!this.state.lat && !this.state.errorMessage) {
            return <Spinner message="Please accept location request" />;
        } else {
            return this.state.lat ? (
                <SeasonDisplay lat={this.state.lat} />
            ) : (
                <span> Error: {this.state.errorMessage}</span>
            );
        }
    }

    render() {
        return <div>{this.renderContent()}</div>;
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));
