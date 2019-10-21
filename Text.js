import React from "react";
class Text extends React.Component{
    state={input:""};
    handleInputchange = event =>{
        this.setState({
            input:event.target.value
        })
    }
    handlesubmit=e=> {
        this.props.additem(this.state.input);
        this.setState({input:""});
    }

    render(){
    return(
        <div>
            <input type="text" className="form-control" placeholder="enter values" onChange={this.handleInputchange} value={this.state.input}></input>
            <button type="button" class="btn btn-primary btn-lg btn-block" onClick={this.handlesubmit}>Add Todo</button>
        </div>
         
    )
}
}
export default Text;