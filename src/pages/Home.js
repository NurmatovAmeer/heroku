import React from 'react';

const Home = () => {

    const openSideBar = () => {
        document.getElementById("sidebar").classList.toggle("active")
    }

    return (
        <>
            <div className="bar d-flex  align-items-center" onClick={openSideBar}>
                <img src="/images/burger.svg" alt="bar" className="burger"/>
                <h2 className="Poppins" >Home</h2>
            </div>
        </>
    );
};

export default Home;