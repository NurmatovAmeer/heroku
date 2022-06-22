import axios from 'axios';
import React, {useEffect, useRef, useState} from 'react';
import '../sass/Login.css'
import {Link} from "react-router-dom";

export default function Login(props) {
    const [data, setData] = useState({
        fullName: "",
        password: ""
    })
    const [users,setUsers] = useState([])
    const [isLogged,setIsLogged] = useState(false)


  const fullName = useRef();
  const password = useRef();

    const openSideBar = () => {
        document.getElementById("sidebar").classList.toggle("active")
    }

    useEffect(() => {
        const getUsers = async () => {
            var requestOptions = {
                method: 'GET',
                redirect: 'follow',
                headers: {Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmFkNjAxOGRjMWY1ZjE5ZTViZWYxN2IiLCJpYXQiOjE2NTU2Mzk1NTksImV4cCI6MTY1NjI0NDM1OX0.cMBXv4G8Dsu0bCZwBtybfdebBRWxLvi44fhUepPj5UE`}
            };

            fetch(`https://coursesnodejs.herokuapp.com/employee/user?page=1&limit=100000`, requestOptions)
                .then(response => response.json())
                .then(result => setUsers(result.data.data))
                .catch(error => console.log('error', error));
        }

        getUsers()
    },[])
    console.log(users)

    const goHome = (e) => {
        e.preventDefault()
        setIsLogged(true)
        localStorage.setItem('isLogged','true')
    }


  return (
      <>
          <div className="bar d-flex  align-items-center" onClick={openSideBar} >
              <img src="/images/burger.svg" alt="bar" className="burger" />
              <h2 className="Poppins" >Login</h2>
          </div>
          <section className="login main">
              <div className="loginContainer">
                  <div className="btnContainer">
                      <form >
                          <h1 className="title">Login</h1>
                          <label>Username</label>
                          <input
                              type="text"
                              autoFocus
                              required
                              id="email"
                              name="email"
                              label="Email Address"
                              ref={fullName}
                              onChange={event => setData({
                                  ...data,
                                  fullName: event.target.value
                              })}
                              value={data.fullName}
                          />
                          <label>Password</label>
                          <input
                              type="password"
                              required
                              id="password"
                              name="password"
                              label="Password"
                              ref={password}
                              onChange={event => setData({
                                  ...data,
                                  password: event.target.value
                              })}
                              value={data.password}
                          />
                          {/* <p className="errorMsg">{passwordError}</p> */}
                          <button  onClick={goHome}>Sign in</button>
                          <p>
                              Don't have accaunt ?
                              <a href='/register'>Sign up</a>
                          </p>
                      </form>


                  </div>
                  {isLogged ? <Link to='/'>Go Home</Link> : ""}
              </div>
          </section>
      </>
  );
}