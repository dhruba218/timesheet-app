import React from 'react'
import {Redirect} from 'react-router-dom'
import Header from './Header.js'

import '../assets/CSS//Profile.css'
import SideNavPage from './SideNavPage'




function Profile({authorized}) {

    if(!authorized) {
        return <Redirect to='/login' />;
    }



    return (
        <div>
            <Header />

            <SideNavPage />
           

            
        </div>
        
    )
}

export default Profile;
