import React from 'react';
import {Link} from 'react-router-dom'

const NavBar = () => {

    let isLogged = localStorage.getItem('isLogged')

    const logOut = () => {
        // localStorage.setItem('isLogged','false')
        isLogged = !isLogged
    }

    return (
        <>
         {/*  NavBar codes */}
         <div className="sidebar" id="sidebar">
             <div className="sidebar-header d-flex justify-content-center ">
                 <div className="icons">
                     <img src="images/ivocab-icon.svg" alt="ivocab-inc" className="ivocab-icon"/>
                     <img src="images/ivocab-font.svg" alt="ivocab" className="ivocab-font"/>
                 </div>
             </div>
             <div className="ivocab-description d-flex justify-content-center align-items-center">
                 <p className="Abhaya improve">Improve your</p>

                 <p className="Abhaya vocab">Vocabulary</p>
             </div>
             <div className="sidebar-navigations">
                 <ul className="navbar-nav">
                         <li className="nav-item"><Link to='/' className="nav-link Poppins">Home</Link></li>
                         <li className="nav-item"><Link to='/users' className="nav-link Poppins">Users</Link></li>
                         <li className="nav-item"><Link to='/library' className="nav-link Poppins">Library</Link></li>
                         <li className="nav-item"><Link to='/courses' className="nav-link Poppins">Courses</Link></li>
                         <li className="nav-item"><Link to='/support' className="nav-link Poppins">Support</Link></li>
                     <Link to='/admin' className='Poppins admin'>for Admins</Link>
                     {isLogged ? (<Link to='/login' type='button' className='Poppins log' onClick={logOut}>Log out</Link>) : (<Link to='/login' className='Poppins log'>Log in</Link>)}
                 </ul>

             </div>
         </div>

        </>
    );
};

export default NavBar;