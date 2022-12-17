import Navba from "./components/Navbar";
import Search from "./components/Search";
import { Container } from "./styled-components/Container.styled";
import Movies from "./components/Movies";
import { useState } from 'react'
import axios from 'axios';

function App() {
  const [search, setSearch] = useState('');
  const [movys, setMovys] = useState([]);

  const searchMovie = async val => {

    const response = await axios.get('http://www.omdbapi.com/', {
      params: {
        apikey: '56b94088',
        s: val,
      },
    });

    if (response.data.Error) {
      return [];
    }
    setMovys(response.data.Search)

    return response.data.Search;
  };
  return (
    <>
      <Navba />
      <Container>
        <Search setSearch={setSearch} search={search} searchMovie={searchMovie} />
        <Movies movys={movys} />
        <Movies />
      </Container>
    </>
  );
}

export default App;
