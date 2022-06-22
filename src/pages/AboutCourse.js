import React, {useEffect, useState} from 'react';
import {useHistory, useParams} from "react-router-dom";
import courses from "./Courses";
import {Loader} from '../components/loader/Loader'

const AboutCourse = () => {

const [moreCourse,setMoreCourse] = useState([])
const {id} = useParams()
    const {goBack} = useHistory()

    useEffect(() => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow',
            headers: { Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmFkNjAxOGRjMWY1ZjE5ZTViZWYxN2IiLCJpYXQiOjE2NTU2Mzk1NTksImV4cCI6MTY1NjI0NDM1OX0.cMBXv4G8Dsu0bCZwBtybfdebBRWxLvi44fhUepPj5UE` }

        };

        fetch(`https://coursesnodejs.herokuapp.com/employee/course/${id}`, requestOptions)
            .then(response => response.json())
            .then(result => setMoreCourse(result.data))
            .catch(error => console.log('error', error));
    },[])

    console.log(id)

    console.log(moreCourse)


    return (
        <>
            <button type='button' className='btn btn-outline-info' onClick={goBack}>go Back</button>
            <div className="d-flex justify-content-center align-items-center">

                {moreCourse._id ? (
                    <div className="card">
                    <div className="card-header">{moreCourse.name}</div>
                        <div className="card-body">
                            {moreCourse.description}
                        </div>
                        <div className="card-footer">
                            {moreCourse.createdAt}
                        </div>
                    </div>
                ) : <Loader/>}

            </div>
        </>

    );
};

export default AboutCourse;