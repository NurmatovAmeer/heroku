import React, {useEffect, useState} from 'react';
import '../sass/levels.scss'
import {Link} from "react-router-dom";

const Library = (props) => {

    const [data,setData] = useState([])

    useEffect(() => {

        const getLibData = async () => {
            var requestOptions = {
                method: 'GET',
                redirect: 'follow',
                headers: { Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmFkNjAxOGRjMWY1ZjE5ZTViZWYxN2IiLCJpYXQiOjE2NTU2Mzk1NTksImV4cCI6MTY1NjI0NDM1OX0.cMBXv4G8Dsu0bCZwBtybfdebBRWxLvi44fhUepPj5UE` }
            };

            fetch("https://coursesnodejs.herokuapp.com/employee/book?limit=5&page=1", requestOptions)
                .then(response => response.json())
                .then(result => setData(result.data.data))
                .catch(error => console.log('error', error));
        }

        getLibData()

    },[])

console.log(data)


    const openSideBar = () => {
        document.getElementById("sidebar").classList.toggle("active")
    }

    let isLogged = localStorage.getItem('isLogged')
    console.log(isLogged)

    return (
        <>
            <div className="bar d-flex  align-items-center" onClick={openSideBar} >
            <img src="/images/burger.svg" alt="bar" className="burger" />
            <h2 className="Poppins" >Library</h2>
            </div>

            <div className="main">
                <div className="conatiner">
                        <div className="form-actions d-flex justify-content-around">
                        <p className="limit Poppins">Limit:</p>

                        <select className="ui dropdown">
                            <option value="10">10</option>
                            <option value="9">9</option>
                            <option value="8">8</option>
                        </select>
                        </div>

                     <div className="level row" id='level'>
                         {data.map((item,index) => {
                             return(
                                 <div className="card col-sm-10 col-md-3 col-lg-3 col-xl-3 ml-3 mt-3" key={item._id}>
                                     <div className="card-header">
                                         <h3>{item.name}</h3>
                                     </div>
                                     <div className="card-body">
                                         <img src={`https://coursesnodejs.herokuapp.com/${item.imgUrl}`} alt={item.name}/>
                                     </div>
                                     <div className="card-footer">
                                         {isLogged ?  (<Link to={`/book/${item._id}`} className='btn btn-outline-info'>show more</Link>) : (<Link to='/login'>Log In</Link>)}
                                     </div>
                                 </div>
                             )
                         })}
                    </div>
                </div>
            </div>

        </>

    );
};

export default Library;