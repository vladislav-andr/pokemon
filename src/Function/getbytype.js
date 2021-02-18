import axios from 'axios'

export default async types => {
  let data = []
  for (const type of types) {
    const temp = await axios
      .get(`https://pokeapi.co/api/v2/type/${type}/`)
      .then(res => res.data.pokemon.map(res => res.pokemon))
    temp.forEach(j => {
      if (!data.find(i => i.name === j.name)) {
        data.push(j)
      }
    })
  }
  return data
}