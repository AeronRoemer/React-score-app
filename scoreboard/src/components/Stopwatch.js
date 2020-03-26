import React, { Component } from 'react';

class Stopwatch extends Component{
    state = {
        isRunning: false,
        elapsedTime: 0,
        prevTime: 0,
    }

    handleStopWatch = () => {
        this.setState({
            isRunning: !this.state.isRunning
        });
        if (!this.state.isRunning){
            this.setState({prevTime: Date.now()})
        }
    }

    componentDidMount(){
        this.intervalID = setInterval(() => this.tick(), 100)
    }
//tick calcluations to ensure accuracy of timer
    tick = () => {
        if (this.state.isRunning){
        const now = Date.now()
        this.setState(prevState => ({
            prevTime: now,
            elapsedTime: prevState.elapsedTime + (now - prevState.prevTime)}
            ))};
    }

    handleReset = () => {
        this.setState({elapsedTime: 0})
    }

    render(){
        return(
            <div className="stopwatch">
                <h2>Stopwatch</h2>
                <span className="stopwatch-time">
                  {Math.floor(this.state.elapsedTime / 1000)}</span>
                <button onClick={this.handleStopWatch}>
                  {this.state.isRunning ? 'Stop' : 'Start'}</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        )
    }
}

export default Stopwatch;