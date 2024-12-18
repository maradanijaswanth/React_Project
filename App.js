import React from "react";
import ReactDOM from "react-dom/client";

const rootReact=document.getElementById("root");
const rootdom=ReactDOM.createRoot(rootReact);

const AppComponent=function(){
    return (
        <>
        <h1> Header </h1>
        <p> body</p>
        <p>footer</p>
        </>
    )    
}

rootdom.render(<AppComponent/>)