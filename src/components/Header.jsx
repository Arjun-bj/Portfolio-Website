// import React from 'react'
import logo from '../assets/images/Screenshot_2024-07-15_093743-removebg-preview.png'

const Header = () => {
    return (
        <header style={{padding: "30px 40px 0 40px", position: "sticky", top: "0", zIndex: "1000"}}>
            <div className='header-contents' data-aos="fade-down" data-aos-duration="800"  data-aos-delay="800">
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                    <h4 style={{ margin: "0" }}>Menu</h4>
                    <a className='ham-menu-wrapper py-4' href='#'>
                        <span className='ham-menu outline-target' style={{ display: "flex", flexDirection: "column", gap: "6px" }}></span>
                    </a>
                </div>
            </div>
        </header>
    )
}

export default Header