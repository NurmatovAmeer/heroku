import React, {useRef, useState} from 'react'
import '../sass/Login.css'
import {message} from 'antd'
import axios from 'axios';
import {Link} from "react-router-dom";



function Register() {
  const fullName_id = useRef();
  const password_id = useRef();

  const [data, setData] = useState({
    fullName: "",
    password: ""
  })
    const [isRegistered,setIsRegistered] = useState(false)

  const handleSubmit = async (e) => {
    await e.preventDefault()
    if(
      data.fullName === " " ||
      data.password === " "
    ) {
    } else {
      


      await axios.post('https://coursesnodejs.herokuapp.com/user/sign-up', data, {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmFkNjAxOGRjMWY1ZjE5ZTViZWYxN2IiLCJpYXQiOjE2NTU4MzY1NjksImV4cCI6MTY1NjQ0MTM2OX0.DLhLhLHpgvXk0VmbgVyVnrl-ZuQ4dkopQGsEC3u53xg`,
          'Content-Type': 'application/json/form-data'
        },
      }).then(res => {
        setIsRegistered(true)
      })
      .catch(err => new Error(err))

    }
  }
    const openSideBar = () => {
        document.getElementById("sidebar").classList.toggle("active")
    }
   
  return (
     <>
         <div className="bar d-flex  align-items-center" onClick={openSideBar} >
             <img src="/images/burger.svg" alt="bar" className="burger" />
             <h2 className="Poppins" >Sign up</h2>
         </div>
         <section className="login main">
             <div className="loginContainer container">
                 <div className="btnContainer">
                     <form encType='application/json/form-data' onSubmit={handleSubmit}>
                         <h1 className="title">Register</h1>
                         <label>Username</label>
                         <input
                             type="text"
                             autoFocus
                             required
                             id="email"
                             name="email"
                             label="Email Address"
                             ref={fullName_id}
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
                             ref={password_id}
                             onChange={event => setData({
                                 ...data,
                                 password: event.target.value
                             })}
                             value={data.password}
                         />
                         {/* <p className="errorMsg">{passwordError}</p> */}
                         <input type="submit" className='button' />
                         <p>
                             Don't have accaunt ?
                             <a href='/login'>Log in</a>
                         </p>
                     </form>
                 </div>

                 {isRegistered ? <Link to='/'>Go Home</Link> : ""}

             </div>
         </section>
     </>
  )
}

export default Register