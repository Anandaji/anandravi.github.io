import React,{useState} from "react";
const Fun = () => {
    const [Name,setName]=useState();
    const [Buttons,PrintName]=useState([]);
const Textvalue=(event)=>{
 setName(event.target.value);
}
const StoredData=()=>{
    if(Name.length ===0){
        alert("Input Box is empty");
    }else{
        PrintName(Buttons.concat(Name))
        setName("")
    }
    

}

    return (<div>
       <input type="text" id="txt"placeholder="Enter text" value={Name} onChange={Textvalue}/>
       <button id="but" onClick={StoredData} >Click</button>
       <ul>
           {
            Buttons.map(i=> {
                 return (<li key ={i}> {i}</li>) 
                 })
                }
       </ul>
    
    </div>);    
};

export default Fun;

