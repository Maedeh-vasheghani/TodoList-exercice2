import React, {useState} from "react";

export default function IncrButtonFonction() {

    const  [ count, setCount] = useState( 0);
    return (
        <button className="btn2 btn-secondary" onClick={()=> setCount(count + 1)}> Don't click here 
        </button>
    )

}