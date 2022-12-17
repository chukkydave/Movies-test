import styled from "styled-components";
import bg from '../utils/bg.png'


export const Navbar = styled.div`
    width: 100%;
	height: 140px;
	background-color: #292929;

    img {
        margin-left: 77px;
        margin-top: 40px;
        margin-bottom 40px;
        border: 1px solid #ffffff;
        padding: 14px 17.3px 13.06px 19px;
    }	
`
export const Slider = styled.div`
    width: 100%;
    height: 550px;
    background: url(${bg});
    overflow:hidden;

    div{
        width: 490px;
        height: 282px;
        margin: 109px 0px 159px 77px;
    }

    h1 {
        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 700;
        font-size: 72px;
        line-height: 94px;
        letter-spacing: -0.05em;
        color: #FFFFFF;
    }
`