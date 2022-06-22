import React, {useEffect, useState} from 'react';
import {useHistory, useParams} from "react-router-dom";
import {Loader} from '../components/loader/Loader'

const AboutCourse = () => {

    const [moreBook,setMoreBook] = useState([])
    const {id} = useParams()
    const {goBack} = useHistory()

    useEffect(() => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow',
            headers: { Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmFkNjAxOGRjMWY1ZjE5ZTViZWYxN2IiLCJpYXQiOjE2NTU2Mzk1NTksImV4cCI6MTY1NjI0NDM1OX0.cMBXv4G8Dsu0bCZwBtybfdebBRWxLvi44fhUepPj5UE` }

        };

        fetch(`https://coursesnodejs.herokuapp.com/employee/book/${id}`, requestOptions)
            .then(response => response.json())
            .then(result => setMoreBook(result.data))
            .catch(error => console.log('error', error));
    },[])

    console.log(id)

    console.log(moreBook)


    return (
        <>
            <button type='button' className='btn btn-outline-info' onClick={goBack}>go Back</button>
            <div className="d-flex justify-content-center align-items-center">

                {moreBook._id ? (
                    <div className="card">
                        <div className="card-header text-center" >{moreBook.name}</div>
                        <div className="card-body">
                            <img src={`https://coursesnodejs.herokuapp.com/${moreBook.imgUrl}`} alt={moreBook.name}/>
                        </div>

                    </div>
                ) : <Loader/>}

            </div>
        </>

    );
};

export default AboutCourse;