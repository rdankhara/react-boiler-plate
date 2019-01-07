import React from 'react';
import {hot} from 'react-hot-loader';

class App extends React.Component{
    constructor(){
        super();
        this.state = { 
            count : 0
        };

        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }
    state = {
        count : 0
    }

    increment(){
        this.setState({count: this.state.count + 1});
    }

    decrement(){
        this.setState({count : this.state.count -1});
    }
    render() {
        return (
            <React.Fragment>
                <h1>Hello World</h1>
                <h2 className={ this.state.count > 5 ? 'warning' : null}>
                    Count: {this.state.count}
                </h2>
                <button onClick={ this.increment }>+</button>
                <button onClick={ this.decrement }>-</button>
            </React.Fragment>
        
        );
    }
}

export default hot(module)(App);