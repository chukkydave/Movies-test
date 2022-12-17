import { useState } from 'react'
import { SearchInput } from '../styled-components/Search.styled'

const Search = ({ setSearch, search, searchMovie }) => {





    return (
        <SearchInput>
            <label>Search</label><br />
            <input type="text"
                placeholder='Search by Title'
                value={search}
                onChange={(e) => { setSearch(e.target.value); if (e.target.value.length >= 4) { searchMovie(e.target.value) } }} />
        </SearchInput>
    )
}

export default Search