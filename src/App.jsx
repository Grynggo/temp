import React from 'react';
import s from './App.module.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import {Route} from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import {UsersContainer} from './components/Users/UsersContainer';

const App = () => {
    return (
        <div className={s.app_Wrapper}>
            < Header/>
            < Navbar
                // friends={props.state.sideBar}
            />
            <div className={s.app_Wrapper_Content}>
                <Route path='/dialogs'
                       render={() => <DialogsContainer/>}/>
                <Route path='/profile'
                       render={() => <Profile/>}/>
                <Route path='/users'
                       render={() => <UsersContainer/>}/>
                {/*<Route path='/news' component={ News }/>*/}
                {/*<Route path='/music' component={ Music }/>*/}
                {/*<Route path='/settings' component={ Settings }/>*/}
            </div>
        </div>
    
    );
};
export default App;