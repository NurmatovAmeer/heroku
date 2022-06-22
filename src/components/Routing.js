import React from 'react';
import NavBar from "./navigationBar/NavBar";
import {BrowserRouter , Switch , Route} from 'react-router-dom'
import Library from "../pages/Library";
import Home from "../pages/Home";
import Users from "../pages/Users";
import Courses from "../pages/Courses";
import Support from "../pages/Support";
import AdminPanel from "../pages/AdminPanel";
import AboutCourse from "../pages/AboutCourse";
import AboutBook from "../pages/AboutBook";
import Login from "../pages/Login";
import Register from "../pages/Register";


const Routing = () => {
    return (
            <BrowserRouter>
                <NavBar/>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/users" exact component={Users}/>
                    <Route path="/library" exact component={Library}/>
                    <Route path="/courses" exact component={Courses}/>
                    <Route path="/support" exact component={Support}/>
                    <Route path="/admin" exact component={AdminPanel}/>
                    <Route path="/course/:id" exact component={AboutCourse}/>
                    <Route path="/book/:id" exact component={AboutBook}/>
                    <Route path="/login" exact component={Login}/>
                    <Route path="/register" exact component={Register}/>
                </Switch>
            </BrowserRouter>
    );
};

export default Routing;