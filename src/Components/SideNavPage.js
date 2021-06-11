import React from 'react'
import '../assets/CSS//SideNavPage.css'
import img1 from '../assets/images/img1.jpeg';
import img2 from '../assets/images/img2.jpeg';


function SideNavPage() {
    return (
        
            <div class="sidenav" >
                <a href="/timesheet" target="_self"><img src={img1} height="100px"/></a>
                <a href="/adminactions"> <img src={img2} height="100px"/> </a>
            </div>

        
    )
}

export default SideNavPage
