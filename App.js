import React from "react";
import ReactDOM from "react-dom/client";

const rootReact = document.getElementById("root");
const rootdom = ReactDOM.createRoot(rootReact);


const LogoComponent = function () {
    return (
        <div className="headerlogo">
            <img src="https://png.pngtree.com/template/20200704/ourmid/pngtree-restaurant-logo-design-vector-template-image_388753.jpg" className="logo" />

        </div>
    )
}

const TitleComponent = function () {
    return (
        <div className="title">
            <h1> Restaurant Food</h1>
        </div>

    )
}

const MenuComponent = function () {
    return (
        <div className="menubar">
            <h4> Home </h4>
            <h4> About </h4>
            <h4> Contact Us  </h4>
            <h4> Services </h4>
        </div>
    )
}





const HeaderComponent = function () {
    return (
        <>
            <LogoComponent />
            <TitleComponent />
            <MenuComponent />
        </>
    )
}

const CardComponent = function () {
    return (
        <>
            <img height="150px" src="https://media.cnn.com/api/v1/images/stellar/prod/210211141204-05-classic-italian-dishes.jpg?q=w_1110,c_fill" />

            <h3>Food Name</h3>

            <h3>Rating: 4/5</h3>

            <h3>30 rupees</h3>
        </>


    )
}

const Bodycomponent = function () {
    return (
        <>
            <HeaderComponent />

            <CardComponent />

            <CardComponent />

            <CardComponent />
        </>

    )
}



const AppComponent = function () {
    return (
        <>

            <Bodycomponent />


            {/* <h2>body</h2>
        <h3>Footer</h3> */}
        </>
    )
}

rootdom.render(<AppComponent />)