import React from "react";
import List from "./List";
import Text from "./Text"
class App extends React.Component{
    state={
        list:[]
    };
    
    additem=(item)=>{
        this.setState({
            list:[...this.state.list,item]
        })
    }
    Deleteval=(item)=>{
        this.setState({
            list:this.state.list.filter(i => i !== item)
        })

    }
    
    render(){

    return(
    <div>
        <nav class="navbar navbar-light bg-light"><span class="navbar-brand mb-0 h1"><center>ToDo</center></span></nav>
        <Text additem={this.additem} /><br></br><br></br>
        <List item={this.state.list} Deleteval={this.Deleteval}/>
       
    </div>
    );
};
}
export default App;