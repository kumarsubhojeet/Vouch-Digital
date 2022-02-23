import React from 'react'
import '../Styles/Navbar.css'
import { Button } from 'antd';

const Navbar = () => {
  return (
    <div>
        <div className="Navbar_main">
            <div className="Navbar_wrapper">
                <div className="Navbar_left">
                    <h2>ATools<span style={{color:'orange'}}>.</span></h2>
                </div>

                <div className="Navbar_right">
                <Button className='Nav_btn1'>Default Button</Button>
                <Button className='Nav_btn2'>Default Button</Button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar