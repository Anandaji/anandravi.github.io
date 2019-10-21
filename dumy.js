import React from "react";

class Form extends React.Component {
    state = { input: "" };
    handleInputChange = event => {
        this.setState({
            input: event.target.value
        })
    }

    handleSubmit = e => {
        this.props.addItem(this.state.input);
        this.setState({ input: " " });

    }
    render() {
        return (
            <div>
                <input type="text"
                    className="form-control"
                    onChange={this.handleInputChange}
                    value={this.state.input}>
                </input>
                <button className="btn btn-block btn btn-outline-primary"
                    onClick={this.handleSubmit}>Add Todo
                </button>
            </div>
        );
    }
}
export default Form;



import React from "react";
import ReactDOM from "react-dom"

import App from "./App"

ReactDOM.render(<App />, document.getElementById("root"));




import React from "react";
class List extends React.Component {
    render() {
        return (
            <div>
                <ul className="list-group">
                    {
                        this.props.items.map(i => {
                            return (
                                <li key={i} className="list-group-item">
                                    <span>{i}</span> 
                                    <span><button>Delete</button></span>  
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        );
    }
}
export default List;



import React from "react";
class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-light bg-light">
                <span className="navbar-brand mb-0 h1">My Todo</span>
            </nav>
        );
    }
}
export default Navbar;



import React from "react";
import Form from "./Form";
import List from "./List";
import Navbar from "./Navbar";

class App extends React.Component {
    state = {
        list: []
    };
    addItem = (item) => {
        //console.log("new item", value);
        this.setState({
            list: [...this.state.list, item]
        })
    }

    render() {
        return (
            <div className="container">
                <div className="row align-items-center">
                    <div className="col">
                        <Navbar />
                        <Form addItem={this.addItem} /><br></br><br></br>
                        <List items={this.state.list} />
                    </div>
                </div>
            </div>
        );
    }
};
export default App;

