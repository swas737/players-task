import React, { useEffect, useState } from 'react'
import SearchBar from './components/SearchBar'
import ListPage from './pages/ListPage'
import { PLAYERS_API } from './utils/constant'

const App = () => {
  const [players, setPlayers] = useState([])
const [searchResults, setSearchResults] = useState([])
useEffect(() => {
  fetchPlayers()
}, []) 
 const fetchPlayers = async () =>{
   const data = await fetch(PLAYERS_API);
   const json = await data.json();
   setPlayers(json.playerList)
   setSearchResults(json.playerList)
  }

  return (
  <>
    <SearchBar posts={players} setSearchResults={setSearchResults} />
    <ListPage searchResults={searchResults} />
  </>
  )
} 

export default App