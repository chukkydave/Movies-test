import React from 'react'
import Movie from './Movie'
import { MoviesStyle } from '../styled-components/MoviesStyle.styled'

const style = {
    fontFamily: 'DM Sans',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '24px',
    lineHeight: '31px',
    color: '#000000',
    marginTop: '48px',


}
const Movies = ({ movys }) => {

    return (
        <>
            <div style={style}>Category Name</div>
            <MoviesStyle>
                {movys?.map((movy) => <Movie key={movy.imdbID} title={movy.Title} poster={movy.Poster} />)}
                <Movie />
                <Movie />
                <Movie />
            </MoviesStyle>
        </>
    )
}

export default Movies