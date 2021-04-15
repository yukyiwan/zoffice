import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import './App.scss';
import Home from './components/Pages/Home';
import Register from './components/Pages/Register';
import Auth from './components/Pages/Auth';
import AuthFace from './components/Pages/AuthFace';
import Floorplan from './components/Floorplan/Floorplan';
import Departments from './components/Departments/Departments';
import Comsoon from './components/Comsoon/Comsoon';
import FormCMS from './components/Form/FormCMS';
import GroupChat from './components/Chat/Chat';
import DM from './components/Chat/DM';


const App = () => {
    return ( 
        <>        
        <BrowserRouter>
        <Switch>
                <Route path= "/Comsoon" component={Comsoon} />
                <Route path= "/DM" component={DM} />
                <Route path= "/GroupChat" component={GroupChat} />
                <Route path= "/CMS" component={FormCMS} />
                <Route path= "/Departments" component={Departments} />  
                <Route path= "/Floorplan" component={Floorplan} />  
                <Route path="/AuthFace" component={AuthFace} />
                <Route path="/Auth" component={Auth} />
                <Route path="/Register" component={Register} />
                <Route path="/" component={Home} />     
            </Switch>
        </BrowserRouter>


        </>
     );
}

export default App;