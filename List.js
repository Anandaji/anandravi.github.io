import React from "react";
class List extends React.Component{
    linecode =(itm)=>{
        itm.target.style.textDecoration="line-through"
        
    }

    render(){
    return(
        <div>
 
             <ul className="list-group">
                 {
                this.props.item.map(i=>{
                    return(
                    <li key={i} className="list-group-item" >
                    <span onClick={this.linecode}>{i}</span>
                    <span onClick={this.props.Deleteval.bind(this,i)} className="btn btn-primary btn-sm float-right" >Delete</span>
                    </li>);
                }) 
            }
                 
             </ul>
           
        </div>
    );
     }
};
export default List;
