import React, {useEffect, useState} from 'react';
import axios from "axios";

const initialValueLib = {
    name: '',
    description: '',
    imgUrl: ''
}

const AdminPanel = () => {

    const [libData, setLibData] = useState([])
    const [courseData, setCourseData] = useState([])
    const [users,setUsers] = useState([])
    const [submitLibData, setSubmitLibData] = useState(initialValueLib)
    const [counter,setCounter] = useState(5)

    console.log(submitLibData.name)

    const lessCount = () => {
        if (counter > 5 ){
            setCounter(counter -10)
        }
    }
    const moreCount = () => {

        setCounter(counter + 10)

    }

    console.log(counter)

    useEffect(() => {

        const getLibraryData = async () => {

            var requestOptions = {
                method: 'GET',
                redirect: 'follow',
                headers: {Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmFkNjAxOGRjMWY1ZjE5ZTViZWYxN2IiLCJpYXQiOjE2NTU4MzY1NjksImV4cCI6MTY1NjQ0MTM2OX0.DLhLhLHpgvXk0VmbgVyVnrl-ZuQ4dkopQGsEC3u53xg`}
            };

            await fetch("https://coursesnodejs.herokuapp.com/employee/book?limit=100&page=1", requestOptions)
                .then(response => response.json())
                .then(result => setLibData(result.data.data))
                .catch(error => console.log('error', error));
        }
        const getCourseData = async () => {

            var requestOptions = {
                method: 'GET',
                redirect: 'follow',
                headers: {Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmFkNjAxOGRjMWY1ZjE5ZTViZWYxN2IiLCJpYXQiOjE2NTU4MzY1NjksImV4cCI6MTY1NjQ0MTM2OX0.DLhLhLHpgvXk0VmbgVyVnrl-ZuQ4dkopQGsEC3u53xg`}
            };

            await fetch("https://coursesnodejs.herokuapp.com/employee/course?limit=5&page=1", requestOptions)
                .then(response => response.json())
                .then(result => setCourseData(result.data.data))
                .catch(error => console.log('error', error));
        }
        const getUsers = async () => {
            var requestOptions = {
                method: 'GET',
                redirect: 'follow',
                headers: {Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmFkNjAxOGRjMWY1ZjE5ZTViZWYxN2IiLCJpYXQiOjE2NTU4MzY1NjksImV4cCI6MTY1NjQ0MTM2OX0.DLhLhLHpgvXk0VmbgVyVnrl-ZuQ4dkopQGsEC3u53xg`}
            };

            fetch(`https://coursesnodejs.herokuapp.com/employee/user?page=1&limit=${counter}`, requestOptions)
                .then(response => response.json())
                .then(result => setUsers(result.data.data))
                .catch(error => console.log('error', error));

            console.log(counter)
        }

        getCourseData();
        getLibraryData();
        getUsers();

    },[counter])
    console.log('libdata:', libData)
    console.log('coursedata :', courseData)
    console.log('users:',users)


    const postLibData = async (e) => {
        await e.preventDefault()
        if (
            submitLibData.name === " " ||
            submitLibData.description === " "
        ) {
            await console.log(("To'liq to'ldiring"))
        } else {


            await axios.post('https://coursesnodejs.herokuapp.com/employee/book', submitLibData, {
                headers: {
                    Authorization: `Bearer 
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmFkNjAxOGRjMWY1ZjE5ZTViZWYxN2IiLCJpYXQiOjE2NTU2Mzk1NTksImV4cCI6MTY1NjI0NDM1OX0.cMBXv4G8Dsu0bCZwBtybfdebBRWxLvi44fhUepPj5UE`,
                    'Content-Type': 'application/json'
                },
            }).then(res => {
                console.log('qoshildi')
                window.location = "/"
            })
                .catch(err => new Error(err))

        }
        handleOpen();
    }
    const deleteLibData = async (bookIndex) => {
        var requestOptions = {
            method: 'DELETE',
            redirect: 'follow',
            headers: {Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmFkNjAxOGRjMWY1ZjE5ZTViZWYxN2IiLCJpYXQiOjE2NTU2Mzk1NTksImV4cCI6MTY1NjI0NDM1OX0.cMBXv4G8Dsu0bCZwBtybfdebBRWxLvi44fhUepPj5UE`}
        };

        fetch(`https://coursesnodejs.herokuapp.com/employee/book/${bookIndex}`, requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));

    }
    const editLibData = async (bookIndex) => {
        var raw = `{\r\n    \"_id\":\"${bookIndex}\",\r\n    \"name\":\"otgan kunlar\",\r\n    \"imgUrl\":\"img/img-a463268af6f271bc3adac0871d505b4a.jpg\",\r\n    \"ebookUrl\":\"img/img-a463268af6f271bc3adac0871d505b4a.jpg\",\r\n     \"description\":\"kitob haqida malumot\",\r\n    \"authorId\":\"62aa3a2988318e0be4a5f5d7\"\r\n}`;

        var requestOptions = {
            method: 'PUT',
            body: raw,
            redirect: 'follow'
        };

        fetch("https://coursesnodejs.herokuapp.com/employee/book", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));

        console.log(bookIndex)
    }

    const postCourseData = async (e) => {
        var raw = "{\r\n    \"courseId\":\"62aa7501fa10d14270237c3d\",\r\n    \"videoUrl\":\"img/img-a463268af6f271bc3adac0871d505b4a.jpg\",\r\n    \"description\":\"required\",\r\n    \"imgUrl\":\"img/img-a463268af6f271bc3adac0871d505b4a.jpg\"\r\n}";

        var requestOptions = {
            method: 'POST',
            body: raw,
            redirect: 'follow',
            headers: {Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmFkNjAxOGRjMWY1ZjE5ZTViZWYxN2IiLCJpYXQiOjE2NTU2Mzk1NTksImV4cCI6MTY1NjI0NDM1OX0.cMBXv4G8Dsu0bCZwBtybfdebBRWxLvi44fhUepPj5UE`}

        };

        fetch("https://coursesnodejs.herokuapp.com/employee/courseParts", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }
    const deleteCourseData = async (courseIndex) => {
        var requestOptions = {
            method: 'DELETE',
            redirect: 'follow',
            headers: {Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmFkNjAxOGRjMWY1ZjE5ZTViZWYxN2IiLCJpYXQiOjE2NTU2Mzk1NTksImV4cCI6MTY1NjI0NDM1OX0.cMBXv4G8Dsu0bCZwBtybfdebBRWxLvi44fhUepPj5UE`}

        };

        fetch(`https://coursesnodejs.herokuapp.com/employee/courseParts/${courseIndex}`, requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }
    const editCourseData = async (courseIndex) => {
        var raw = `{\r\n    \"_id\": \"${courseIndex}\",\r\n    \"courseId\":\"62aa7501fa10d14270237c3d\",\r\n    \"videoUrl\":\"img/img-a463268af6f271bc3adac0871d505b4a.jpg\",\r\n    \"description\":\"required\",\r\n    \"imgUrl\":\"img/img-a463268af6f271bc3adac0871d505b4a.jpg\"\r\n}`;

        var requestOptions = {
            method: 'PUT',
            body: raw,
            redirect: 'follow',
            headers: {Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmFkNjAxOGRjMWY1ZjE5ZTViZWYxN2IiLCJpYXQiOjE2NTU2Mzk1NTksImV4cCI6MTY1NjI0NDM1OX0.cMBXv4G8Dsu0bCZwBtybfdebBRWxLvi44fhUepPj5UE`}

        };

        fetch("https://coursesnodejs.herokuapp.com/employee/courseParts", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }


    const openSideBar = () => {
        document.getElementById("sidebar").classList.toggle("active")
    }
    const handleOpen = () => {
        document.getElementById("modal").classList.toggle("d-none")
    }
    return (
        <>
            <div className="bar d-flex  align-items-center" onClick={openSideBar}>
                <img src="/images/burger.svg" alt="bar" className="burger"/>
                <h2 className="Poppins">Admin Panel</h2>
            </div>

            <div className="main">
                <div className="container">
                    <div className="wrapper">
                        <div className="form-actions d-flex justify-content-around">
                            <p className="limit Poppins">Limit:</p>

                            <select className="ui dropdown">
                                <option value="10">10</option>
                                <option value="9">9</option>
                                <option value="8">8</option>
                            </select>

                            <button type="button" className="btn" onClick={handleOpen}>Create</button>

                            <div className="modal-inner d-none" id="modal">
                                <h3>create book</h3>
                                <form>
                                    <div className="d-flex align-items-center">
                                        <label htmlFor="#name">Name:</label>
                                        <input type="text" id="name" className="form-control"
                                               placeholder="type level name"
                                               onChange={(e) => setSubmitLibData((prevState) => ({
                                                   ...prevState,
                                                   name: e.target.value
                                               }))}
                                               value={submitLibData.name}
                                        />
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <label htmlFor="#name"> description :</label>
                                        <input disabled type="number" id="marksec" className="form-control"
                                               placeholder="type mark for second"
                                               onChange={(e) => setSubmitLibData((prevState) => ({
                                                   ...prevState,
                                                   description: e.target.value
                                               }))}
                                               value={submitLibData.description}
                                        />
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <label htmlFor="#name"> image :</label>
                                        <input disabled type="file" id="marksec" className="form-control"
                                        />
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <label htmlFor="#name">Date :</label>
                                        <input disabled type="number" id="mark" className="form-control"
                                               placeholder="type mark"
                                        />
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <label htmlFor="#name">Score min-max:</label>
                                        <input disabled type="number" id="markmin" className="form-control"
                                               placeholder="type mark min"
                                        />
                                        --
                                        <input disabled type="number" id="markmax" className="form-control"
                                               placeholder="type mark max"
                                        />
                                    </div>
                                    <button type="submit" className="btn" id="btn-create" onClick={postLibData}>Create
                                    </button>
                                    <button type="button" className="btn" id="btn-close" onClick={handleOpen}>Close
                                    </button>
                                    <button type="button" className="btn" id="btn-create">Clean</button>
                                </form>
                            </div>
                        </div>
                        <div className=" level">

                            <h1>Library data</h1>

                            <table className="table table-borderless">
                                <thead>
                                <tr className="table-header">
                                    <th>id</th>
                                    <th>Name</th>
                                    <th>desc</th>
                                    <th>createdDate</th>
                                    <th>Score</th>
                                    <th>Actions</th>
                                </tr>
                                </thead>
                                <tbody>

                                {libData.map((book, index) => {
                                    return (
                                        <tr className="levels" key={book._id}>
                                            <td className="id">{index + 1}</td>
                                            <td className="levels-name">
                                                {book.name.slice(0, 10)}
                                            </td>
                                            <td className="levels-mark-sec d-flex">
                                                {book.desc}
                                            </td>
                                            <td className="levels-mark">
                                                {book.createdAt}
                                            </td>
                                            <td className="levels-access">
                                                {book.scoreMin}--{book.scoreMax}
                                            </td>
                                            <td className="levels-actions d-flex justify-content-around">
                                                <button type="button" className="btn"><img src="/images/edit.svg"
                                                                                           alt='edit'
                                                                                           onClick={() => editLibData(book._id)}/>
                                                </button>
                                                <button type="button" className="btn"><img src="/images/delete.svg"
                                                                                           alt="delete"
                                                                                           onClick={() => deleteLibData(book._id)}/>
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                })}

                                </tbody>

                            </table>
                            <div className=" d-flex align-items-center justify-content-around">
                                <p>1 of 1</p>
                                <button type="button" className="btn"> &#8701; </button>
                                <button type="button" className="btn"> &#8702; </button>
                            </div>
                        </div>
                    </div>

                    <div className="wrapper mt-5">
                        <div className="form-actions d-flex justify-content-around">
                            <p className="limit Poppins">Limit:</p>

                            <select className="ui dropdown">
                                <option value="10">10</option>
                                <option value="9">9</option>
                                <option value="8">8</option>
                            </select>

                            <button type="button" className="btn" onClick={handleOpen}>Create</button>

                            <div className="modal-inner d-none" id="modal">
                                <h3>create course</h3>
                                <form>
                                    <div className="d-flex align-items-center">
                                        <label htmlFor="#name">Name:</label>
                                        <input type="text" id="name" className="form-control"
                                               placeholder="type level name"

                                        />
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <label htmlFor="#name">description:</label>
                                        <input type="number" id="marksec" className="form-control"
                                               placeholder="type mark for second"
                                        />
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <label htmlFor="#name">Date:</label>
                                        <input type="number" id="mark" className="form-control" placeholder="type mark"
                                        />
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <label htmlFor="#name">Score min-max:</label>
                                        <input type="number" id="markmin" className="form-control"
                                               placeholder="type mark min"
                                        />
                                        --
                                        <input type="number" id="markmax" className="form-control"
                                               placeholder="type mark max"
                                        />
                                    </div>
                                    <button type="submit" className="btn" id="btn-create"
                                            onClick={postCourseData}>Create
                                    </button>
                                    <button type="button" className="btn" id="btn-close" onClick={handleOpen}>Close
                                    </button>
                                    <button type="button" className="btn" id="btn-create">Clean</button>
                                </form>
                            </div>
                        </div>
                        <div className=" level">

                            <h1>Courses data</h1>

                            <table className="table table-borderless">
                                <thead>
                                <tr className="table-header">
                                    <th>id</th>
                                    <th>Name</th>
                                    <th>desc</th>
                                    <th>createdDate</th>
                                    <th>Score</th>
                                    <th>Actions</th>
                                </tr>
                                </thead>
                                <tbody>

                                {courseData.map((course, index) => {
                                    return (
                                        <tr className="levels" key={course._id}>
                                            <td className="id">{index + 1}</td>
                                            <td className="levels-name">
                                                {course.name.slice(0, 10)}
                                            </td>
                                            <td className="levels-mark-sec d-flex">
                                                {course.description.slice(0, 10)}
                                            </td>
                                            <td className="levels-mark">
                                                {course.createdAt}
                                            </td>
                                            <td className="levels-access">
                                                {course.scoreMin}--{course.scoreMax}
                                            </td>
                                            <td className="levels-actions d-flex justify-content-around">
                                                <button type="button" className="btn"><img src="/images/edit.svg"
                                                                                           onClick={() => editCourseData(course._id)}/>
                                                </button>
                                                <button type="button" className="btn"><img src="/images/delete.svg"
                                                                                           alt="delete"
                                                                                           onClick={() => deleteCourseData(course._id)}/>
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                })}

                                </tbody>

                            </table>
                            <div className=" d-flex align-items-center justify-content-around">
                                <p>1 of 1</p>
                                <button type="button" className="btn"> &#8701; </button>
                                <button type="button" className="btn"> &#8702; </button>
                            </div>
                        </div>
                    </div>

                    <div className="wrapper mt-5">
                        <div className="form-actions d-flex justify-content-around">
                            <p className="limit Poppins">Limit:</p>

                            <select className="ui dropdown">
                                <option value="10">10</option>
                                <option value="9">9</option>
                                <option value="8">8</option>
                            </select>

                            <button type="button" className="btn" onClick={handleOpen}>Create</button>

                            <div className="modal-inner d-none" id="modal">
                                <h3>create course</h3>
                                <form>
                                    <div className="d-flex align-items-center">
                                        <label htmlFor="#name">Name:</label>
                                        <input type="text" id="name" className="form-control"
                                               placeholder="type level name"

                                        />
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <label htmlFor="#name">description:</label>
                                        <input type="number" id="marksec" className="form-control"
                                               placeholder="type mark for second"
                                        />
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <label htmlFor="#name">Date:</label>
                                        <input type="number" id="mark" className="form-control" placeholder="type mark"
                                        />
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <label htmlFor="#name">Score min-max:</label>
                                        <input type="number" id="markmin" className="form-control"
                                               placeholder="type mark min"
                                        />
                                        --
                                        <input type="number" id="markmax" className="form-control"
                                               placeholder="type mark max"
                                        />
                                    </div>
                                    <button type="submit" className="btn" id="btn-create"
                                            onClick={postCourseData}>Create
                                    </button>
                                    <button type="button" className="btn" id="btn-close" onClick={handleOpen}>Close
                                    </button>
                                    <button type="button" className="btn" id="btn-create">Clean</button>
                                </form>
                            </div>
                        </div>
                        <div className=" level">

                            <h1>users data</h1>

                            <table className="table table-borderless">
                                <thead>
                                <tr className="table-header">
                                    <th>id</th>
                                    <th>Name</th>
                                    <th>desc</th>
                                    <th>createdDate</th>
                                    <th>Score</th>
                                    <th>Actions</th>
                                </tr>
                                </thead>
                                <tbody>

                                {users.map((user, index) => {
                                    return (
                                        <tr className="levels" key={user._id}>
                                            <td className="id">{index + 1}</td>
                                            <td className="levels-name">
                                                {user.fullName}
                                            </td>
                                            <td className="levels-mark-sec d-flex">
                                                {user.description}
                                            </td>
                                            <td className="levels-mark">
                                                {user.createdAt}
                                            </td>
                                            <td className="levels-access">
                                                {user.scoreMin}--{user.scoreMax}
                                            </td>
                                            <td className="levels-actions d-flex justify-content-around">
                                                <button type="button" className="btn"><img src="/images/edit.svg"
                                                                                           onClick={() => editCourseData(user._id)}/>
                                                </button>
                                                <button type="button" className="btn"><img src="/images/delete.svg"
                                                                                           alt="delete"
                                                                                           onClick={() => deleteCourseData(user._id)}/>
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                })}

                                </tbody>

                            </table>
                            <div className="d-flex justify-content-between align-items-center">
                                <button type='button' className='btn btn-outline-info' onClick={lessCount}>show less</button>
                                <button type='button' className='btn btn-outline-info' onClick={moreCount}>show more</button>
                            </div>
                            <div className=" d-flex align-items-center justify-content-around">
                                <p>1 of 1</p>
                                <button type="button" className="btn"> &#8701; </button>
                                <button type="button" className="btn"> &#8702; </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AdminPanel;