import React from 'react';
import UserList from '../containers/UserList';
import UserDetails from '../containers/UserDetails';
import '../../assets/scss/App.scss';

const App=()=>(
    <div className="app">
        <UserList/>
        <UserDetails />
    </div>
);
export default App;