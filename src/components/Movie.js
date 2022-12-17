import React from 'react';
import { MovieStyle } from '../styled-components/MovieStyle.styled';

const Movie = ({ key, title, poster }) => {
    return (
        <MovieStyle background={poster}>
            <p>{title}</p>
        </MovieStyle>
    )
}

export default Movie