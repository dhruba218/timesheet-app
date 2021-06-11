import React from 'react'
import '../assets/CSS/Header.css'

function Header() {
    return (
       
            <div className="navbar">
                
                <div class="middle"> <p className="white-text">Welcome to Dashboard</p></div>
                <a href="/login" class="right">Logout</a>

            </div>
        
    )
}

export default Header
