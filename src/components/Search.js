import React from 'react'
import { SearchInput } from '../styled-components/Search.styled'

const Search = () => {
    return (
        <SearchInput>
            <label>Search</label><br />
            <input type="text" />
        </SearchInput>
    )
}

export default Search