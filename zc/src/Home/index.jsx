import React, { useEffect } from "react";
import { useState,useCallback } from "react";
import { useBeforeUnload, useNavigate } from "react-router-dom";
const Homepage = () => {
    const[value,setvalue] = useState();
    const navigate = useNavigate();
    const handleroomjoin = useCallback(() => {
  navigate(`/room/${value}`)
    }, [navigate, value])
    return(
       <div>
        <input
        value={value}
        onChange={(e) => setvalue(e.target.value)}
        type="text" placeholder="enter the code"></input>
        <button onClick={handleroomjoin}>Join</button>
       </div>
    )
    
};

export default Homepage