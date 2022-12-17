import React from 'react'
import { Navbar, Slider } from '../styled-components/Navbar.styled'
import logo from '../utils/MyTestApp.png'

const Navba = () => {
    return (
        <>
            <Navbar>
                <img src={logo} alt="logo" />
            </Navbar>
            <Slider>
                <div>
                    <h1>Watch Something Incredible.</h1>
                </div>
            </Slider>
        </>
    )
}

export default Navba