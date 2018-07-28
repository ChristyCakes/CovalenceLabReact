// First React Lab

// import Component for class based components, along with React
import React, { Component } from 'react';

// functional component
// const App = (props) => {
//     return (
//         <div>
//             <h1>{ props.color }</h1>
//         </div>
//     )
// }

// class based component
class App extends Component {
    constructor(props) {
        super(props)

        this.state = {

            // when accessing props from parent, don't need { }
            text: props.color,
            hasLoaded: false
        }
        
        // bind 'this' for toggle to work
        this.handleButtonClick = this.handleButtonClick.bind(this);
    }

    // method for handling input changes (see below first)
    // note: methods between constructor and render should be traditional, not arrow
    handleInputChange(value) {
        // change state to the user's input value; this will replace the h1 and placeholder text
        this.setState({ text: value });
    }

    // method for handling button click (see below first)
    handleButtonClick() {

        // alternate form of setState; receives function instead of object 
        this.setState(function(prevState) {
            return {hasLoaded: !prevState.hasLoaded}
        });
    }

    // componentDidMount will automatically execute after first render (hasLoaded is set to false, but this changes it to true before a button can be clicked)
    componentDidMount() {
            this.setState({hasLoaded: true})
        }
    

    render() {

        // check hasLoaded method before rendering
        if (this.state.hasLoaded) {
            return (
                <div>
                    <h1>{this.state.text}: {this.props.color}</h1>

                    <input
                        placeholder={this.state.text}
                        onChange={(event) => this.handleInputChange(event.target.value)}
                    />
                    <button onClick={this.handleButtonClick}>
                        {this.state.hasLoaded ? 'Click Load Button Off' : 'Click Load Button On'}
                    </button>
                </div>
                // above: create input bar with placeholder text
                // in the event that a user changes it, run method in this component, passing in the value that the user inputs
            )
        } else {
            return (
                <div>
                    <h1>Loading ...</h1>
                    <button onClick={this.handleButtonClick}>
                        {this.state.hasLoaded ? 'Click Load Button Off' : 'Click Load Button On'}
                    </button>
                </div>
            )
        }
    }
}

export default App;
