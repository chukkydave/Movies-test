import styled from "styled-components";
import black from '../utils/imgBlack.png'


export const MovieStyle = styled.div`
    
    margin-right:13px;
    padding: 10px;
    gap: 10px;
    width: 300px;
    height: 300px;
    background: url(${props => props.background ? props.background : black});
    border-radius: 12px;
    text-align:center;

    p{
        color: #ffffff;
        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 31px;
        display:inline-block;
        flex: none;
        order: 0;
        align-self: stretch;
        flex-grow: 1;

    }
       
    
`