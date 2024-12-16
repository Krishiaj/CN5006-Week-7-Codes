import React,{useState ,useEffect}  from "react";
import Love from './Love.png'
import  Sad from './sad.png'
import Like from './like.png'

function EmojeeCounter(props){
    console.log("function called" , props.pic)

    const[pic,setPic]=useState(Love)
    const[count,setCount]=useState(0)
    useEffect(()=>{console.log("function called", props.pic)
        if(props.pic=="Love")
         setPic(Love)
        else if(props.pic=="Like")
         setPic(Like)
        else if(props.pic=="sad")
         setPic(Sad)
        })

    const handleClick = () => {
        setCount(count+1)
    }
    return(
        <div className="App">
            <p>{props.pic} <span></span></p>
            <button onClick={handleClick}>
                {count}
            <img src={pic} alt="" />
            </button>
        </div>
    )
}

export default EmojeeCounter;
