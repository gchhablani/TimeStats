import { Component } from 'react';
import { sToHMS } from './utils.js';
// https:/ / gist.github.com / kshitijpurwar / 4dc36c33b5ea36ca2e648f2ec0ff019d

// Just shows the time, taking app state time as input prop
const TimeDisplay = function (props) {
    return (
        <h1>
            {sToHMS(props.time)}
        </h1>
    );
};

// Resets the timer on click and clear the setInterval
const Reset = function (props) {
    return (
        <button onClick={props.onClickReset} className="reset">
            Reset
        </button>
    );
};


// Pause/ play button
class Control extends Component {
    constructor(props) {
        super(props);
    };

    onClickHandler = () => {
        if (this.props.paused) {
            this.props.start();
        }
        else {
            this.props.stop();
        }
    }

    render() {
        return (
            <button className={this.props.paused ? "paused" : ""} onClick={this.onClickHandler}>
                {this.props.paused ? "Play" : "Pause"}
            </button>
        );
    };
};




class Card extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = { timer: props.totalTime, paused: true };

    };

    tick = () => {
        this.setState({ timer: this.state.timer + 1 });
    }

    startTimer = () => {
        this.interval = setInterval(this.tick, 1000);
        this.setState({ paused: false });
    }

    stopTimer = () => {
        clearInterval(this.interval);
        this.setState({ paused: true });
    }

    reset = () => {
        this.setState({ timer: 0, paused: true });
        clearInterval(this.interval);
    }

    render() {
        return (
            <div className={`${this.props.bgcolor} dib br3 pa3 ma2 grow`}>
                < h1 > {this.props.name}</h1 >
                <TimeDisplay time={this.state.timer} />
                <Control
                    paused={this.state.paused}
                    start={this.startTimer}
                    stop={this.stopTimer}
                />
                <Reset onClickReset={this.reset} />
                <button onClick={this.props.onDelete}>Delete</button>
            </div >
        );
    };
};

export default Card;