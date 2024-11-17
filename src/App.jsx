import {useEffect, useState} from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [pokemons, setPokemons] = useState({})

  const getPokemons = (id) => {
    axios.get(`https:pokeapi.co/api/v2/pokemon/${id}`).
    then(response => {
      const pokemon = response.data
      setPokemons((prevPokemon) =>({...prevPokemon, [id]:pokemon}))
    }) 
  }

  const arrayPokemons = () => Array(150).fill().
  map((_, index) => getPokemons(index + 1))

  useEffect(() => {
    arrayPokemons()
  }, [])
  console.log('deu certo', pokemons)

  return (
      <div>
       <h1>Pokedex</h1>
       <table id='customers'>
        <td>
          <th>Pokemons</th>
          {
            Object.values(pokemons).map(item =>
              
              <tr>
                <td>
                {item.name}
                </td>
              </tr>
              ) 
          }
        </td>
        <td>
          <th>Pokemons</th>
          {
            Object.values(pokemons).map(item =>
              
              <tr>
                <td>
                <img src={item.url}></img>
                </td>
              </tr>
              ) 
          }
        </td>
       </table>
      </div>
  )
}
export default App;